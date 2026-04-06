<?php
/**
 * Nomentor Static HTML Renderer
 *
 * Converts the JSON layout stored in _nomentor_layout post meta
 * into clean, lightweight static HTML.
 */

defined('ABSPATH') || exit;

require_once __DIR__ . '/lucide-icons.php';
require_once __DIR__ . '/image-optimizer.php';

/**
 * Resolve a color value: $name → var(--nm-name), hex → hex
 */
function nomentor_resolve_color($value) {
  if (!$value || !is_string($value) || $value[0] !== '$') return $value;
  $name = substr($value, 1);
  return 'var(--nm-' . preg_replace('/\s+/', '-', $name) . ')';
}

function nomentor_generate_static_html($post) {
  $title = esc_html($post->post_title);
  $layout_json = get_post_meta($post->ID, '_nomentor_layout', true);
  $rows = $layout_json ? json_decode($layout_json, true) : [];

  if (!is_array($rows)) $rows = [];

  // Load typography settings (page overrides global)
  $global_raw = get_option('nomentor_global_settings', '{}');
  $global = json_decode($global_raw, true) ?: [];
  $page_raw = get_post_meta($post->ID, '_nomentor_page_settings', true);
  $page = $page_raw ? json_decode($page_raw, true) : [];

  $desktop = nomentor_merge_settings($global, $page, 'desktop');
  $tablet = nomentor_merge_settings($global, $page, 'tablet');
  $mobile = nomentor_merge_settings($global, $page, 'mobile');

  // Build CSS color variables from palette (page colors override global by name)
  $global_colors = $global['colors'] ?? [];
  $page_colors = $page['colors'] ?? [];
  $merged_colors = $global_colors;
  foreach ($page_colors as $pc) {
    $found = false;
    foreach ($merged_colors as $i => $gc) {
      if ($gc['name'] === $pc['name']) { $merged_colors[$i] = $pc; $found = true; break; }
    }
    if (!$found) $merged_colors[] = $pc;
  }
  $color_vars_css = '';
  foreach ($merged_colors as $c) {
    $var_name = preg_replace('/\s+/', '-', $c['name']);
    $color_vars_css .= '      --nm-' . esc_attr($var_name) . ': ' . esc_attr($c['value']) . ";\n";
  }

  $raw_font = $desktop['fontFamily'] ?: '';
  $font_family = esc_attr($raw_font ?: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif");

  // Collect all Google Font families used (desktop, tablet, mobile)
  $google_fonts = [];
  foreach ([$desktop, $tablet, $mobile] as $vp) {
    $f = $vp['fontFamily'] ?? '';
    if ($f && !str_contains($f, ',')) $google_fonts[$f] = true;
  }
  $font_embed = '';
  if (!empty($google_fonts)) {
    $families = array_map(function($f) { return urlencode($f) . ':wght@300;400;500;600;700'; }, array_keys($google_fonts));
    $font_embed = '<link rel="preconnect" href="https://fonts.googleapis.com">' . "\n"
      . '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' . "\n"
      . '  <link href="https://fonts.googleapis.com/css2?family=' . implode('&family=', $families) . '&display=swap" rel="stylesheet">';
  }

  // Tablet/mobile font families (for media queries)
  $tablet_font = $tablet['fontFamily'] ? 'font-family: ' . esc_attr($tablet['fontFamily']) . '; ' : '';
  $mobile_font = $mobile['fontFamily'] ? 'font-family: ' . esc_attr($mobile['fontFamily']) . '; ' : '';

  // Make effective sizes available to nomentor_build_style
  $default_sizes = ['xs' => 0.75, 'sm' => 0.875, 'base' => 1, 'lg' => 1.125, 'xl' => 1.25, '2xl' => 1.5, '3xl' => 1.875, '4xl' => 2.25];
  global $_nomentor_effective_sizes, $_nomentor_effective_heading_sizes;
  $_nomentor_effective_sizes = array_merge($default_sizes, $desktop['sizes'] ?? []);
  $default_heading_sizes = ['h1' => 2.5, 'h2' => 2, 'h3' => 1.75, 'h4' => 1.5, 'h5' => 1.25, 'h6' => 1];
  $_nomentor_effective_heading_sizes = array_merge($default_heading_sizes, $desktop['headingSizes'] ?? []);

  // Init visibility collector
  global $_nomentor_hidden_elements;
  $_nomentor_hidden_elements = [];

  // Init responsive props collector
  global $_nomentor_responsive_props;
  $_nomentor_responsive_props = [];

  // Init per-element CSS collector
  global $_nomentor_element_css;
  $_nomentor_element_css = [];

  // Set current slug for image optimizer
  global $_nomentor_current_slug;
  $_nomentor_current_slug = $post->post_name;

  $body = '';
  foreach ($rows as $row) {
    $body .= nomentor_render_row($row);
  }

  if (empty($body)) {
    $body = '<p>' . $title . '</p>';
  }

  // Build responsive image CSS
  global $_nomentor_responsive_images;
  $responsive_css = '';
  if (!empty($_nomentor_responsive_images)) {
    $tablet_rules = '';
    $mobile_rules = '';
    foreach ($_nomentor_responsive_images as $id => $vps) {
      $cls = '.nm-img-' . esc_attr($id);
      if (!empty($vps['tablet'])) {
        $parts = [];
        if (!empty($vps['tablet']['width'])) $parts[] = 'width: ' . esc_attr($vps['tablet']['width']);
        if (!empty($vps['tablet']['height'])) $parts[] = 'height: ' . esc_attr($vps['tablet']['height']);
        if ($parts) $tablet_rules .= '      ' . $cls . ' { ' . implode('; ', $parts) . " }\n";
      }
      if (!empty($vps['mobile'])) {
        $parts = [];
        if (!empty($vps['mobile']['width'])) $parts[] = 'width: ' . esc_attr($vps['mobile']['width']);
        if (!empty($vps['mobile']['height'])) $parts[] = 'height: ' . esc_attr($vps['mobile']['height']);
        if ($parts) $mobile_rules .= '      ' . $cls . ' { ' . implode('; ', $parts) . " }\n";
      }
    }
    if ($tablet_rules) $responsive_css .= "    @media (max-width: 1024px) {\n{$tablet_rules}    }\n";
    if ($mobile_rules) $responsive_css .= "    @media (max-width: 768px) {\n{$mobile_rules}    }\n";
  }
  $_nomentor_responsive_images = [];

  // Build responsive props CSS (spacing, border, display overrides per viewport)
  // Desktop values go in plain CSS (no media query) since they were removed from inline styles.
  // Tablet/mobile go in media queries. All compete at the same specificity.
  global $_nomentor_responsive_props;
  if (!empty($_nomentor_responsive_props)) {
    $desktop_props = '';
    $tablet_props = '';
    $mobile_props = '';
    foreach ($_nomentor_responsive_props as $id => $vps) {
      $sel = '#nm-el-' . esc_attr($id) . ', .nm-el-' . esc_attr($id);
      if (!empty($vps['desktop'])) {
        $desktop_props .= "    {$sel} { " . implode('; ', $vps['desktop']) . " }\n";
      }
      if (!empty($vps['tablet'])) {
        $tablet_props .= "      {$sel} { " . implode('; ', $vps['tablet']) . " }\n";
      }
      if (!empty($vps['mobile'])) {
        $mobile_props .= "      {$sel} { " . implode('; ', $vps['mobile']) . " }\n";
      }
    }
    if ($desktop_props) $responsive_css .= $desktop_props;
    if ($tablet_props) $responsive_css .= "    @media (max-width: 1024px) {\n{$tablet_props}    }\n";
    if ($mobile_props) $responsive_css .= "    @media (max-width: 768px) {\n{$mobile_props}    }\n";
  }
  $_nomentor_responsive_props = [];

  // Build visibility CSS (hide elements per viewport)
  // Emitted AFTER responsive props so display:none overrides display:flex by source order.
  global $_nomentor_hidden_elements;
  if (!empty($_nomentor_hidden_elements)) {
    $desktop_hide = $tablet_hide = $mobile_hide = '';
    foreach ($_nomentor_hidden_elements as $id => $vps) {
      $cls = '.nm-el-' . esc_attr($id);
      if (!empty($vps['desktop'])) $desktop_hide .= "    {$cls} { display: none; }\n";
      if (!empty($vps['tablet'])) $tablet_hide .= "      {$cls} { display: none; }\n";
      if (!empty($vps['mobile'])) $mobile_hide .= "      {$cls} { display: none; }\n";
    }
    if ($desktop_hide) $responsive_css .= "    @media (min-width: 1025px) {\n{$desktop_hide}    }\n";
    if ($tablet_hide) $responsive_css .= "    @media (min-width: 769px) and (max-width: 1024px) {\n{$tablet_hide}    }\n";
    if ($mobile_hide) $responsive_css .= "    @media (max-width: 768px) {\n{$mobile_hide}    }\n";
  }
  $_nomentor_hidden_elements = [];

  // Emit per-element CSS rules
  global $_nomentor_element_css;
  if (!empty($_nomentor_element_css)) {
    $responsive_css .= implode("\n", $_nomentor_element_css) . "\n";
  }
  $_nomentor_element_css = [];

  // Page scripts
  $head_scripts = '';
  $page_scripts = '';
  $scripts_data = $page['scripts'] ?? '';
  if (is_array($scripts_data)) {
    foreach ($scripts_data as $s) {
      $src = trim($s['url'] ?? '');
      if (!$src) continue;
      $tag = '<script src="' . esc_url($src) . '"></script>' . "\n";
      if (($s['position'] ?? 'body') === 'head') $head_scripts .= '  ' . $tag;
      else $page_scripts .= $tag;
    }
  } elseif (is_string($scripts_data) && $scripts_data) {
    // Legacy string format
    foreach (array_filter(explode("\n", $scripts_data)) as $src) {
      $src = trim($src);
      if ($src) $page_scripts .= '<script src="' . esc_url($src) . '"></script>' . "\n";
    }
  }

  // Page direction
  $direction = 'rtl';
  if (!empty($page['direction'])) $direction = esc_attr($page['direction']);
  elseif (!empty($global['direction'])) $direction = esc_attr($global['direction']);

  // Meta tags
  $meta_tags = '';
  if (!empty($page['meta']) && is_array($page['meta'])) {
    foreach ($page['meta'] as $m) {
      $name = trim($m['name'] ?? '');
      $content = esc_attr($m['content'] ?? '');
      if (!$name) continue;
      // Use property attr for og: and twitter: prefixes, name attr otherwise
      $attr = (str_starts_with($name, 'og:') || str_starts_with($name, 'twitter:')) ? 'property' : 'name';
      $meta_tags .= '  <meta ' . $attr . '="' . esc_attr($name) . '" content="' . $content . '">' . "\n";
    }
  }

  return <<<HTML
<!DOCTYPE html>
<html lang="he" dir="{$direction}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{$title}</title>
{$meta_tags}
  {$font_embed}
  <style>
    :root {
{$color_vars_css}    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: {$font_family}; line-height: 1.6; font-size: {$desktop['base']}px; }
    .nm-grid { display: grid; gap: 1rem; width: 100%; }
    .nm-cell { display:flex; flex-direction:column; min-height:1rem; }
    img { max-width: 100%; height: auto; }
    .nm-btn { display:inline-flex; align-items:center; justify-content:center; gap:0.4em; padding:0.6em 1.5em; border:none; text-decoration:none; font-family:inherit; line-height:1.4; text-align:center; cursor:pointer; }
    .nm-timer-wrap { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
    .nm-timer-box { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:16px 20px; min-width:60px; }
    .nm-tn { font-size:2em; font-weight:800; line-height:1.1; }
    .nm-timer-label { font-size:0.8em; font-weight:500; margin-top:4px; opacity:0.8; }
    .nm-form { display:flex; flex-direction:column; gap:12px; }
    .nm-form-message { display:none; text-align:center; padding:12px; font-weight:600; }
    .nm-field { display:flex; flex-direction:column; gap:4px; }
    .nm-field-label { font-size:0.9em; font-weight:600; }
    .nm-field-input { padding:8px 12px; border:1px solid #ddd; border-radius:4px; font-size:0.9em; font-family:inherit; width:100%; box-sizing:border-box; }
    .nm-field-option { display:flex; align-items:center; gap:6px; font-size:0.9em; cursor:pointer; }
    .nm-required { color:#e74c3c; }
    .nm-list { display:flex; flex-direction:column; padding-inline-start:0; margin:0; }
    .nm-list-item { display:flex; align-items:center; gap:8px; }
    .nm-list-icon { display:flex; align-items:center; flex-shrink:0; }
    .nm-separator hr { border:none; display:block; padding:0; }
    textarea.nm-field-input { resize:vertical; }
    @media (max-width: 1024px) { body { {$tablet_font}font-size: {$tablet['base']}px; } }
    @media (max-width: 768px) {
      body { {$mobile_font}font-size: {$mobile['base']}px; }

    }
{$responsive_css}  </style>
{$head_scripts}</head>
<body>
<main>
{$body}
</main>
{$page_scripts}
</body>
</html>
HTML;
}

function nomentor_merge_settings($global, $page, $viewport) {
  $default_sizes = ['xs' => 0.75, 'sm' => 0.875, 'base' => 1, 'lg' => 1.125, 'xl' => 1.25, '2xl' => 1.5, '3xl' => 1.875, '4xl' => 2.25];

  // Chain: desktop → tablet → mobile (each inherits from previous)
  $vp_chain = $viewport === 'desktop' ? ['desktop']
    : ($viewport === 'tablet' ? ['desktop', 'tablet'] : ['desktop', 'tablet', 'mobile']);

  // Resolve a field: walk page chain (most specific first), then global chain
  $resolve = function($key, $fallback) use ($global, $page, $vp_chain) {
    for ($i = count($vp_chain) - 1; $i >= 0; $i--) {
      if (isset($page[$vp_chain[$i]][$key])) return $page[$vp_chain[$i]][$key];
    }
    for ($i = count($vp_chain) - 1; $i >= 0; $i--) {
      if (isset($global[$vp_chain[$i]][$key])) return $global[$vp_chain[$i]][$key];
    }
    return $fallback;
  };

  $sizes = $default_sizes;
  foreach ($vp_chain as $vp) {
    $sizes = array_merge($sizes, $global[$vp]['sizes'] ?? []);
  }
  foreach ($vp_chain as $vp) {
    $sizes = array_merge($sizes, $page[$vp]['sizes'] ?? []);
  }

  return [
    'base' => $resolve('base', 16),
    'fontFamily' => $resolve('fontFamily', ''),
    'sizes' => $sizes,
  ];
}

/** Add a CSS rule to the per-element collector */
function nomentor_add_css($selector, $rules) {
  if (!$rules) return;
  global $_nomentor_element_css;
  $css = is_array($rules) ? implode('; ', $rules) : $rules;
  $_nomentor_element_css[] = "    {$selector} { {$css} }";
}

function nomentor_render_row($row) {
  if (empty($row['elements']) || !is_array($row['elements'])) return '';

  $inner = '';
  foreach ($row['elements'] as $element) {
    $inner .= nomentor_render_element($element);
  }

  $id = $row['id'] ?? '';
  $cls = 'nm-container';
  nomentor_collect_visibility($id, $row['props'] ?? []);
  nomentor_collect_responsive_props($id, $row['props'] ?? []);
  if ($id) $cls .= ' nm-el-' . esc_attr($id);

  $style = nomentor_build_row_style($row['props'] ?? [], $id);
  if ($style && $id) {
    nomentor_add_css('.nm-el-' . esc_attr($id), $style);
  }
  $attr = ($style && !$id) ? " style=\"{$style}\"" : '';
  $id_attr = $id ? ' id="nm-el-' . esc_attr($id) . '"' : '';
  $scoped = nomentor_extract_scoped_css($id, $row['props']['customCss'] ?? '');
  return $scoped . '<div class="' . $cls . '"' . $id_attr . $attr . '>' . $inner . '</div>' . "\n";
}

function nomentor_collect_visibility($id, $props) {
  if (!$id || empty($props['hideOn'])) return;
  global $_nomentor_hidden_elements;
  $_nomentor_hidden_elements[$id] = $props['hideOn'];
}

/**
 * Resolve a single responsive CSS rule for a given viewport prefix and property.
 * Returns CSS string (e.g. "padding: 10px 20px 10px 20px") or null.
 */
function nomentor_resolve_responsive_rule($props, $vp_prefix, $prop, $css_prop) {
  switch ($prop) {
    case 'padding':
    case 'margin':
      $val = nomentor_resolve_spacing($props, $vp_prefix . $prop);
      return $val ? $css_prop . ': ' . $val : null;

    case 'rowGap':
    case 'colGap':
      $v = $props[$vp_prefix . $prop] ?? null;
      return ($v !== null && $v !== '') ? $css_prop . ': ' . intval($v) . 'px' : null;

    case 'border':
      $b = $props[$vp_prefix . 'border'] ?? null;
      if (!$b || !is_array($b) || empty($b['width']) || ($b['style'] ?? 'none') === 'none') return null;
      return $css_prop . ': ' . intval($b['width']) . 'px ' . esc_attr($b['style']) . ' ' . esc_attr(nomentor_resolve_color($b['color'] ?? '#000'));

    case 'borderRadius':
      $br = $props[$vp_prefix . 'borderRadius'] ?? null;
      if (!$br || !is_array($br)) return null;
      $rv = ($br['topLeft'] ?? 0) . 'px ' . ($br['topRight'] ?? 0) . 'px ' . ($br['bottomRight'] ?? 0) . 'px ' . ($br['bottomLeft'] ?? 0) . 'px';
      return $rv !== '0px 0px 0px 0px' ? $css_prop . ': ' . $rv : null;
  }
  return null;
}

function nomentor_collect_responsive_props($id, $props) {
  if (!$id) return;
  global $_nomentor_responsive_props;

  $viewports = ['desktop' => [], 'tablet' => [], 'mobile' => []];
  $has_any = false;

  // Property mappings: [prop key, css property name]
  $checks = [
    ['padding', 'padding'],
    ['margin', 'margin'],
    ['rowGap', 'row-gap'],
    ['colGap', 'column-gap'],
    ['border', 'border'],
    ['borderRadius', 'border-radius'],
  ];

  foreach ($checks as [$prop, $css_prop]) {
    $tablet_val = nomentor_resolve_responsive_rule($props, 'tablet_', $prop, $css_prop);
    $mobile_val = nomentor_resolve_responsive_rule($props, 'mobile_', $prop, $css_prop);
    if (!$tablet_val && !$mobile_val) continue;

    $has_any = true;
    $desktop_val = nomentor_resolve_responsive_rule($props, '', $prop, $css_prop);
    if ($desktop_val) $viewports['desktop'][] = $desktop_val;
    if ($tablet_val) $viewports['tablet'][] = $tablet_val;
    if ($mobile_val) $viewports['mobile'][] = $mobile_val;
  }

  if ($has_any) {
    $_nomentor_responsive_props[$id] = $viewports;
  }
}

/** Check which CSS properties are handled by responsive CSS for this element */
function nomentor_get_responsive_css_props($id) {
  global $_nomentor_responsive_props;
  if (!$id || empty($_nomentor_responsive_props[$id])) return [];
  $props = [];
  foreach ($_nomentor_responsive_props[$id] as $vp => $rules) {
    foreach ($rules as $rule) {
      $prop = explode(':', $rule)[0];
      $props[trim($prop)] = true;
    }
  }
  return $props;
}

/**
 * Apply common style properties shared across row, cell, and element style builders.
 * Handles: responsive skip check, direction, border, padding, margin, customCss.
 */
function nomentor_apply_common_style(&$parts, $props, $id = '') {
  $skip = nomentor_get_responsive_css_props($id);
  if (!empty($props['direction'])) $parts[] = 'direction: ' . esc_attr($props['direction']);
  if (empty($skip['border']) && empty($skip['border-radius'])) nomentor_apply_border($parts, $props);
  $pad = nomentor_resolve_spacing($props, 'padding');
  $mar = nomentor_resolve_spacing($props, 'margin');
  if (empty($skip['padding']) && $pad) $parts[] = 'padding: ' . $pad;
  if (empty($skip['margin']) && $mar) $parts[] = 'margin: ' . $mar;
  $_ic = nomentor_inline_css($props['customCss'] ?? ''); if ($_ic) $parts[] = $_ic;
}

function nomentor_build_row_style($props, $id = '') {
  $skip = nomentor_get_responsive_css_props($id);
  // If row has hideOn, move display to CSS so visibility rules can override it
  $has_hide = !empty($props['hideOn']);
  if ($has_hide) {
    global $_nomentor_responsive_props;
    if (!isset($_nomentor_responsive_props[$id])) $_nomentor_responsive_props[$id] = ['desktop' => [], 'tablet' => [], 'mobile' => []];
    $_nomentor_responsive_props[$id]['desktop'][] = 'display: flex';
    $_nomentor_responsive_props[$id]['desktop'][] = 'flex-direction: column';
  }
  $parts = $has_hide ? [] : ['display: flex', 'flex-direction: column'];
  if (!empty($props['maxWidth'])) {
    $parts[] = 'width: ' . esc_attr($props['maxWidth']);
    $parts[] = 'max-width: 100%';
    $parts[] = 'margin-left: auto';
    $parts[] = 'margin-right: auto';
  }
  if (!empty($props['bgColor'])) $parts[] = 'background-color: ' . esc_attr(nomentor_resolve_color($props['bgColor']));
  if (!empty($props['align'])) {
    $align_css = nomentor_align_to_css($props['align']);
    if ($align_css) $parts = array_merge($parts, $align_css);
  }
  if (empty($skip['row-gap']) && !empty($props['rowGap'])) $parts[] = 'row-gap: ' . intval($props['rowGap']) . 'px';
  if (empty($skip['column-gap']) && !empty($props['colGap'])) $parts[] = 'column-gap: ' . intval($props['colGap']) . 'px';

  // Apply common: direction, border, padding, margin, customCss
  // But margin is special when maxWidth is set — skip it
  if (!empty($props['maxWidth'])) {
    // direction
    if (!empty($props['direction'])) $parts[] = 'direction: ' . esc_attr($props['direction']);
    // border (with skip check)
    if (empty($skip['border']) && empty($skip['border-radius'])) nomentor_apply_border($parts, $props);
    // padding (with skip check)
    $pad = nomentor_resolve_spacing($props, 'padding');
    if (empty($skip['padding']) && $pad) $parts[] = 'padding: ' . $pad;
    // margin skipped when maxWidth is set (auto margins already applied)
    $_ic = nomentor_inline_css($props['customCss'] ?? ''); if ($_ic) $parts[] = $_ic;
  } else {
    nomentor_apply_common_style($parts, $props, $id);
  }

  return implode('; ', $parts);
}

function nomentor_align_to_css($align) {
  // flex-direction: column → justify = vertical, align = horizontal
  $map = [
    'top-left'      => ['justify-content: flex-start', 'align-items: flex-start'],
    'top-center'    => ['justify-content: flex-start', 'align-items: center'],
    'top-right'     => ['justify-content: flex-start', 'align-items: flex-end'],
    'middle-left'   => ['justify-content: center', 'align-items: flex-start'],
    'middle-center' => ['justify-content: center', 'align-items: center'],
    'middle-right'  => ['justify-content: center', 'align-items: flex-end'],
    'bottom-left'   => ['justify-content: flex-end', 'align-items: flex-start'],
    'bottom-center' => ['justify-content: flex-end', 'align-items: center'],
    'bottom-right'  => ['justify-content: flex-end', 'align-items: flex-end'],
  ];
  return $map[$align] ?? null;
}

function nomentor_render_element($element) {
  $type = $element['type'] ?? '';
  $props = $element['props'] ?? [];
  $id = $element['id'] ?? '';

  // Collect visibility rules and responsive overrides
  nomentor_collect_visibility($id, $props);
  nomentor_collect_responsive_props($id, $props);

  switch ($type) {
    case 'heading': $result = nomentor_render_heading($element); break;
    case 'text': $result = nomentor_render_text($element); break;
    case 'image': $result = nomentor_render_image($element); break;
    case 'grid': $result = nomentor_render_grid($element); break;
    case 'button': $result = nomentor_render_button($element); break;
    case 'list': $result = nomentor_render_list($element); break;
    case 'timer': $result = nomentor_render_timer($element); break;
    case 'form': $result = nomentor_render_form($element); break;
    case 'separator': $result = nomentor_render_separator($element); break;
    default: return '';
  }

  // Add scoped style block if customCss has nested selectors
  $scoped_css = nomentor_extract_scoped_css($id, $props['customCss'] ?? '');

  // Wrap with ID for scoped CSS, visibility, or responsive props
  global $_nomentor_responsive_props;
  $has_responsive = $id && isset($_nomentor_responsive_props[$id]);
  $needs_wrap = $scoped_css || !empty($props['hideOn']) || $has_responsive;
  if ($id && $needs_wrap) {
    $cls = 'nm-el-' . esc_attr($id);
    $result = $scoped_css . '<div id="nm-el-' . esc_attr($id) . '" class="' . $cls . '">' . $result . '</div>';
  } elseif ($scoped_css) {
    $result = $scoped_css . $result;
  }
  return $result;
}

function nomentor_render_heading($element) {
  $props = $element['props'] ?? [];
  $id = $element['id'] ?? '';
  $level = $props['level'] ?? 'h2';
  $text = esc_html($props['text'] ?? '');
  $allowed = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  if (!in_array($level, $allowed)) $level = 'h2';
  $style = nomentor_build_style($props, $id);
  // Apply heading size from settings
  global $_nomentor_effective_heading_sizes;
  if (!empty($_nomentor_effective_heading_sizes[$level])) {
    $style = 'font-size: ' . $_nomentor_effective_heading_sizes[$level] . 'em' . ($style ? '; ' . $style : '');
  }
  $id_attr = '';
  if ($id) {
    $safe_id = esc_attr($id);
    $id_attr = " id=\"nm-{$safe_id}\"";
    if ($style) nomentor_add_css("#nm-{$safe_id}", $style);
    return "<{$level}{$id_attr}>{$text}</{$level}>\n";
  }
  $attr = $style ? " style=\"{$style}\"" : '';
  return "<{$level}{$attr}>{$text}</{$level}>\n";
}

/**
 * If customCss contains nested selectors (has '{'), extract it as a scoped <style> block.
 * Returns HTML string or empty.
 */
function nomentor_extract_scoped_css($id, $css) {
  if (!$id || !$css || strpos($css, '{') === false) return '';
  $safe_id = esc_attr($id);
  // Scope all selectors under this element's ID
  // The user writes: input[type="text"] { background:#efefef; }
  // We output: #nm-el-ID input[type="text"] { background:#efefef; }
  $scoped = preg_replace_callback('/([^{}]+)\{/', function($m) use ($safe_id) {
    $selector = trim($m[1]);
    if (!$selector) return $m[0];
    // Don't double-scope if already has the ID
    if (strpos($selector, '#nm-el-' . $safe_id) !== false) return $m[0];
    return '#nm-el-' . $safe_id . ' ' . $selector . ' {';
  }, $css);
  return "<style>{$scoped}</style>\n";
}

/**
 * Check if customCss is simple inline (no nested selectors) or nested.
 * Returns only the inline-safe portion for use in style attributes.
 */
function nomentor_inline_css($css) {
  if (!$css || strpos($css, '{') !== false) return '';
  return esc_attr($css);
}

function nomentor_resolve_border($props) {
  $b = $props['border'] ?? null;
  if (!$b || !is_array($b) || empty($b['width']) || ($b['style'] ?? 'none') === 'none') return '';
  return intval($b['width']) . 'px ' . esc_attr($b['style']) . ' ' . esc_attr(nomentor_resolve_color($b['color'] ?? '#000'));
}

function nomentor_resolve_border_radius($props) {
  $r = $props['borderRadius'] ?? null;
  if (!$r || !is_array($r)) return '';
  $tl = intval($r['topLeft'] ?? 0);
  $tr = intval($r['topRight'] ?? 0);
  $br = intval($r['bottomRight'] ?? 0);
  $bl = intval($r['bottomLeft'] ?? 0);
  if (!$tl && !$tr && !$br && !$bl) return '';
  return "{$tl}px {$tr}px {$br}px {$bl}px";
}

function nomentor_apply_border(&$parts, $props) {
  $border = nomentor_resolve_border($props);
  $radius = nomentor_resolve_border_radius($props);
  if ($border) $parts[] = 'border: ' . $border;
  if ($radius) $parts[] = 'border-radius: ' . $radius;
  $shadow = nomentor_shadow_to_css($props['boxShadow'] ?? null);
  if ($shadow) $parts[] = 'box-shadow: ' . $shadow;
}

function nomentor_shadow_to_css($s) {
  if (!$s || !is_array($s)) return '';
  $x = intval($s['x'] ?? 0);
  $y = intval($s['y'] ?? 0);
  $blur = intval($s['blur'] ?? 0);
  $spread = intval($s['spread'] ?? 0);
  if (!$x && !$y && !$blur && !$spread) return '';
  $color = esc_attr(nomentor_resolve_color($s['color'] ?? 'rgba(0,0,0,0.1)'));
  $inset = !empty($s['inset']) ? 'inset ' : '';
  return "{$inset}{$x}px {$y}px {$blur}px {$spread}px {$color}";
}

function nomentor_resolve_spacing($props, $prop) {
  $val = $props[$prop] ?? null;
  if ($val === null || $val === '') return '';
  if (is_string($val)) return esc_attr($val);
  if (is_array($val)) {
    $t = intval($val['top'] ?? 0);
    $r = intval($val['right'] ?? 0);
    $b = intval($val['bottom'] ?? 0);
    $l = intval($val['left'] ?? 0);
    return "{$t}px {$r}px {$b}px {$l}px";
  }
  return '';
}

function nomentor_build_style($props, $id = '') {
  static $default_sizes = [
    'xs' => 0.75, 'sm' => 0.875, 'base' => 1, 'lg' => 1.125,
    'xl' => 1.25, '2xl' => 1.5, '3xl' => 1.875, '4xl' => 2.25,
  ];
  $parts = [];
  if (!empty($props['color'])) $parts[] = 'color: ' . esc_attr(nomentor_resolve_color($props['color']));
  if (!empty($props['fontSize']) && isset($default_sizes[$props['fontSize']])) {
    global $_nomentor_effective_sizes;
    $em = $_nomentor_effective_sizes[$props['fontSize']] ?? $default_sizes[$props['fontSize']];
    $parts[] = 'font-size: ' . $em . 'em';
  }
  if (!empty($props['textAlign'])) $parts[] = 'text-align: ' . esc_attr($props['textAlign']);
  nomentor_apply_common_style($parts, $props, $id);
  return implode('; ', $parts);
}

function nomentor_render_text($element) {
  $props = $element['props'] ?? [];
  $id = $element['id'] ?? '';
  $text = wp_kses_post($props['text'] ?? '');
  $style = nomentor_build_style($props, $id);
  if ($id) {
    $safe_id = esc_attr($id);
    if ($style) nomentor_add_css("#nm-{$safe_id}", $style);
    return "<div id=\"nm-{$safe_id}\">{$text}</div>\n";
  }
  $attr = $style ? " style=\"{$style}\"" : '';
  return "<div{$attr}>{$text}</div>\n";
}

function nomentor_render_image($element) {
  $props = $element['props'] ?? [];
  $id = $element['id'] ?? '';
  $src = esc_url($props['src'] ?? '');
  $alt = esc_attr($props['alt'] ?? '');
  if (empty($src)) return '';

  // Desktop dimensions → CSS
  $style_parts = [];
  if (!empty($props['width'])) $style_parts[] = 'width: ' . esc_attr($props['width']);
  if (!empty($props['height'])) $style_parts[] = 'height: ' . esc_attr($props['height']);
  if ($id && $style_parts) {
    nomentor_add_css('.nm-img-' . esc_attr($id), $style_parts);
  }
  $style = (!$id && $style_parts) ? ' style="' . implode('; ', $style_parts) . '"' : '';

  $class = $id ? ' class="nm-img-' . esc_attr($id) . '"' : '';

  // Collect responsive overrides
  if ($id) {
    global $_nomentor_responsive_images;
    if (!isset($_nomentor_responsive_images)) $_nomentor_responsive_images = [];

    $tablet_w = $props['tabletWidth'] ?? '';
    $tablet_h = $props['tabletHeight'] ?? '';
    $mobile_w = $props['mobileWidth'] ?? '';
    $mobile_h = $props['mobileHeight'] ?? '';

    if ($tablet_w || $tablet_h || $mobile_w || $mobile_h) {
      $_nomentor_responsive_images[$id] = [
        'tablet' => array_filter(['width' => $tablet_w, 'height' => $tablet_h]),
        'mobile' => array_filter(['width' => $mobile_w, 'height' => $mobile_h]),
      ];
    }
  }

  // Try WebP conversion
  global $_nomentor_current_slug;
  $webp = $_nomentor_current_slug ? nomentor_maybe_convert_to_webp($props['src'] ?? '', $_nomentor_current_slug) : null;

  if ($webp) {
    return "<picture>\n  <source srcset=\"{$webp}\" type=\"image/webp\">\n  <img src=\"{$src}\" alt=\"{$alt}\"{$class}{$style} loading=\"lazy\">\n</picture>\n";
  }
  return "<img src=\"{$src}\" alt=\"{$alt}\"{$class}{$style} loading=\"lazy\">\n";
}

function nomentor_render_grid($element) {
  $cols = intval($element['props']['columns'] ?? 2);
  $children = $element['children'] ?? [];

  $cells = '';
  foreach ($children as $cell) {
    $cellContent = '';
    if (!empty($cell['elements']) && is_array($cell['elements'])) {
      foreach ($cell['elements'] as $el) {
        $cellContent .= nomentor_render_element($el);
      }
    }
    $cell_id = $cell['id'] ?? '';
    nomentor_collect_visibility($cell_id, $cell['props'] ?? []);
    $cell_cls = 'nm-cell';
    if ($cell_id) $cell_cls .= ' nm-cell-' . esc_attr($cell_id);
    if ($cell_id && !empty($cell['props']['hideOn'])) $cell_cls .= ' nm-el-' . esc_attr($cell_id);
    $cell_style = nomentor_build_cell_style($cell['props'] ?? []);
    if ($cell_style && $cell_id) {
      nomentor_add_css('.nm-cell-' . esc_attr($cell_id), $cell_style);
    }
    $cell_attr = ($cell_style && !$cell_id) ? " style=\"{$cell_style}\"" : '';
    $cells .= '<div class="' . $cell_cls . '"' . $cell_attr . '>' . $cellContent . '</div>' . "\n";
  }

  $grid_id = esc_attr($element['id'] ?? '');
  $gprops = $element['props'] ?? [];
  $grid_parts = [];
  if (!empty($gprops['maxWidth'])) { $grid_parts[] = 'width: ' . esc_attr($gprops['maxWidth']); $grid_parts[] = 'max-width: 100%'; $grid_parts[] = 'margin-left: auto'; $grid_parts[] = 'margin-right: auto'; }
  if (!empty($gprops['rowGap'])) $grid_parts[] = 'row-gap: ' . intval($gprops['rowGap']) . 'px';
  if (!empty($gprops['colGap'])) $grid_parts[] = 'column-gap: ' . intval($gprops['colGap']) . 'px';
  if ($grid_parts) nomentor_add_css('#nm-el-' . $grid_id, $grid_parts);
  // Put grid-template-columns in CSS so mobile 1fr override works without !important
  global $_nomentor_responsive_props;
  if (!isset($_nomentor_responsive_props[$grid_id])) $_nomentor_responsive_props[$grid_id] = ['desktop' => [], 'tablet' => [], 'mobile' => []];
  $_nomentor_responsive_props[$grid_id]['desktop'][] = 'grid-template-columns: repeat(' . $cols . ', 1fr)';
  $_nomentor_responsive_props[$grid_id]['mobile'][] = 'grid-template-columns: 1fr';
  return '<div class="nm-grid nm-el-' . $grid_id . '" id="nm-el-' . $grid_id . '">' . "\n" . $cells . '</div>' . "\n";
}

function nomentor_build_cell_style($props) {
  $parts = [];
  if (!empty($props['align'])) {
    $align_css = nomentor_align_to_css($props['align']);
    if ($align_css) $parts = array_merge($parts, $align_css);
  }
  if (!empty($props['rowGap'])) $parts[] = 'row-gap: ' . intval($props['rowGap']) . 'px';
  if (!empty($props['colGap'])) $parts[] = 'column-gap: ' . intval($props['colGap']) . 'px';
  nomentor_apply_common_style($parts, $props);
  return implode('; ', $parts);
}

function nomentor_render_button($element) {
  $props = $element['props'] ?? [];
  $id = $element['id'] ?? '';
  $text = esc_html($props['text'] ?? 'Button');
  $url = esc_url($props['url'] ?? '#');
  $new_tab = !empty($props['newTab']) ? ' target="_blank" rel="noopener noreferrer"' : '';

  static $default_sizes = [
    'xs' => 0.75, 'sm' => 0.875, 'base' => 1, 'lg' => 1.125,
    'xl' => 1.25, '2xl' => 1.5, '3xl' => 1.875, '4xl' => 2.25,
  ];

  $has_icon = !empty($props['icon']);
  $btn_id = 'nm-btn-' . esc_attr($id);
  $parts = [
    'background-color: ' . esc_attr(nomentor_resolve_color($props['bgColor'] ?? '#4a90d9')),
    'color: ' . esc_attr(nomentor_resolve_color($props['color'] ?? '#ffffff')),
    'border-radius: ' . intval($props['borderRadius'] ?? 6) . 'px',
  ];
  if (!empty($props['fullWidth'])) $parts[] = 'display: flex';

  if (!empty($props['fullWidth'])) $parts[] = 'width: 100%';
  else $parts[] = 'width: fit-content';

  if (!empty($props['fontSize']) && isset($default_sizes[$props['fontSize']])) {
    global $_nomentor_effective_sizes;
    $em = $_nomentor_effective_sizes[$props['fontSize']] ?? $default_sizes[$props['fontSize']];
    $parts[] = 'font-size: ' . $em . 'em';
  }

  if (!empty($props['textAlign'])) $parts[] = 'text-align: ' . esc_attr($props['textAlign']);
  if (!empty($props['direction'])) $parts[] = 'direction: ' . esc_attr($props['direction']);
  nomentor_apply_border($parts, $props);

  $pad = nomentor_resolve_spacing($props, 'padding');
  $mar = nomentor_resolve_spacing($props, 'margin');
  if ($pad) $parts[] = 'padding: ' . $pad;
  if ($mar) $parts[] = 'margin: ' . $mar;

  $_ic = nomentor_inline_css($props['customCss'] ?? ''); if ($_ic) $parts[] = $_ic;

  nomentor_add_css('#' . $btn_id, $parts);

  // Build inner content with optional icon
  $icon_svg = '';
  if ($has_icon) {
    $icon_svg = nomentor_get_icon_svg($props['icon'], '1em');
  }
  $pos = $props['iconPosition'] ?? 'before';
  $inner = '';
  if ($has_icon && $pos === 'before') $inner .= $icon_svg;
  if ($text) $inner .= "<span class=\"nm-btn-text\">{$text}</span>";
  if ($has_icon && $pos === 'after') $inner .= $icon_svg;
  if (!$text && !$has_icon) $inner = '<span class="nm-btn-text">Button</span>';
  $inner .= '<span class="nm-btn-spinner" style="display:none">⏳</span>';

  $action = $props['action'] ?? 'link';

  if ($action === 'submitForm') {
    $form_target = esc_attr($props['formTarget'] ?? '');
    $callback = $props['callbackFn'] ?? '';
    $callback_js = $callback ? esc_attr($callback) : 'null';
    $after = esc_attr($props['afterSubmit'] ?? 'message');
    $success_msg = esc_attr($props['successMessage'] ?? 'Thank you!');
    $redirect_url = esc_url($props['redirectUrl'] ?? '');

    return "<button id=\"{$btn_id}\" type=\"button\" class=\"nm-btn\">{$inner}</button>\n"
      . "<script>\n(function(){\n"
      . "var btn=document.getElementById('{$btn_id}');if(!btn)return;\n"
      . "var cb={$callback_js}||null;\n"
      . "var after='{$after}',successMsg='{$success_msg}',redirectUrl='{$redirect_url}';\n"
      . "\nbtn.addEventListener('click',async function(){\n"
      . "  var form='{$form_target}'?document.getElementById('nm-form-{$form_target}'):btn.closest('form');\n"
      . "  if(!form||!form._nmValidate)return;\n"
      . "  var data=await form._nmValidate();\n"
      . "  if(!data)return;\n"
      . "  var msgEl=form.querySelector('.nm-form-message');\n"
      . "  var txt=btn.querySelector('.nm-btn-text'),spin=btn.querySelector('.nm-btn-spinner');\n"
      . "  btn.disabled=true;if(txt)txt.style.opacity='0.3';if(spin)spin.style.display='inline';\n"
      . "  var done=function(msg){\n"
      . "    btn.disabled=false;if(txt)txt.style.opacity='1';if(spin)spin.style.display='none';\n"
      . "    if(after==='redirect'&&redirectUrl){window.location.href=redirectUrl;return;}\n"
      . "    if(msgEl){msgEl.textContent=msg||successMsg;msgEl.style.display='block';msgEl.style.color='#2ecc71';}\n"
      . "  };\n"
      . "  var fail=function(msg){\n"
      . "    btn.disabled=false;if(txt)txt.style.opacity='1';if(spin)spin.style.display='none';\n"
      . "    if(msgEl){msgEl.textContent=msg||'Error';msgEl.style.display='block';msgEl.style.color='#e74c3c';}\n"
      . "  };\n"
      . "  if(cb&&typeof cb==='function'){try{var r=await cb(data,form);done(r);}catch(e){fail(e.message||'Error');}}\n"
      . "  else{done();}\n"
      . "});\n"
      . "})();\n</script>\n";
  }

  if ($action === 'redirect') {
    $redirect_url = esc_url($props['redirectUrl'] ?? '#');
    return "<a id=\"{$btn_id}\" href=\"{$redirect_url}\" class=\"nm-btn\">{$inner}</a>\n";
  }

  if ($action === 'showMessage') {
    $msg = esc_attr($props['successMessage'] ?? 'Thank you!');
    return "<button id=\"{$btn_id}\" type=\"button\" class=\"nm-btn\" onclick=\"this.outerHTML='<div style=\\'text-align:center;padding:12px;font-weight:600;color:#2ecc71\\'>{$msg}</div>'\">{$inner}</button>\n";
  }

  // Default: link
  return "<a id=\"{$btn_id}\" href=\"{$url}\"{$new_tab} class=\"nm-btn\">{$inner}</a>\n";
}

function nomentor_render_timer($element) {
  $props = $element['props'] ?? [];
  $id = $element['id'] ?? '';
  $target = $props['targetDate'] ?? '';
  if (!$target) return '';

  $tz = esc_attr($props['timezone'] ?? 'UTC');
  $bg = esc_attr(nomentor_resolve_color($props['bgColor'] ?? '#eef2f7'));
  $color = esc_attr(nomentor_resolve_color($props['color'] ?? '#1a2744'));
  $radius = intval($props['borderRadius'] ?? 12);
  $labels = [
    esc_html($props['labelDays'] ?? 'Days'),
    esc_html($props['labelHours'] ?? 'Hours'),
    esc_html($props['labelMinutes'] ?? 'Minutes'),
    esc_html($props['labelSeconds'] ?? 'Seconds'),
  ];
  $expired = esc_html($props['expiredText'] ?? 'Time is up!');
  $safe_id = esc_attr($id);

  $bw = intval($props['boxWidth'] ?? 20);
  $box_rules = [
    "width: calc({$bw}% - 9px)",
    'max-width: calc(25% - 9px)',
    "border-radius: {$radius}px",
    "background-color: {$bg}",
    "color: {$color}",
  ];
  nomentor_add_css("#nm-timer-{$safe_id} .nm-timer-box", $box_rules);

  // Build outer wrapper style with all shared properties
  $outer_parts = [];
  if (!empty($props['direction'])) $outer_parts[] = 'direction: ' . esc_attr($props['direction']);
  nomentor_apply_border($outer_parts, $props);
  $pad = nomentor_resolve_spacing($props, 'padding');
  $mar = nomentor_resolve_spacing($props, 'margin');
  if ($pad) $outer_parts[] = 'padding: ' . $pad;
  if ($mar) $outer_parts[] = 'margin: ' . $mar;
  $_ic = nomentor_inline_css($props['customCss'] ?? ''); if ($_ic) $outer_parts[] = $_ic;
  if ($outer_parts) nomentor_add_css("#nm-timer-{$safe_id}", $outer_parts);

  return <<<HTML
<div id="nm-timer-{$safe_id}" class="nm-timer-wrap">
  <div class="nm-timer-box"><span class="nm-tn" data-u="d">00</span><span class="nm-timer-label">{$labels[0]}</span></div>
  <div class="nm-timer-box"><span class="nm-tn" data-u="h">00</span><span class="nm-timer-label">{$labels[1]}</span></div>
  <div class="nm-timer-box"><span class="nm-tn" data-u="m">00</span><span class="nm-timer-label">{$labels[2]}</span></div>
  <div class="nm-timer-box"><span class="nm-tn" data-u="s">00</span><span class="nm-timer-label">{$labels[3]}</span></div>
</div>
<script>
(function(){
  var el=document.getElementById('nm-timer-{$safe_id}');if(!el)return;
  var t=new Date('{$target}').getTime();
  function u(){
    var n=Date.now(),d=t-n;
    if(d<=0){el.innerHTML='<div style="text-align:center;font-size:1.5em;font-weight:700;padding:20px;color:{$color}">{$expired}</div>';return;}
    var ns=el.querySelectorAll('.nm-tn');
    ns[0].textContent=String(Math.floor(d/864e5)).padStart(2,'0');
    ns[1].textContent=String(Math.floor(d/36e5%24)).padStart(2,'0');
    ns[2].textContent=String(Math.floor(d/6e4%60)).padStart(2,'0');
    ns[3].textContent=String(Math.floor(d/1e3%60)).padStart(2,'0');
  }
  u();setInterval(u,1000);
})();
</script>

HTML;
}

/**
 * Get validation messages from global/page settings.
 * Returns associative array with keys: required, email, phone, number.
 */
function nomentor_get_validation_messages() {
  $global_raw = get_option('nomentor_global_settings', '{}');
  $gs = json_decode($global_raw, true) ?: [];
  $page_settings_raw = get_post_meta(get_the_ID() ?: 0, '_nomentor_page_settings', true);
  $ps = $page_settings_raw ? json_decode($page_settings_raw, true) : [];
  return [
    'required' => esc_attr($ps['validationMsg_required'] ?? $gs['validationMsg_required'] ?? 'This field is required'),
    'email' => esc_attr($ps['validationMsg_email'] ?? $gs['validationMsg_email'] ?? 'Invalid email address'),
    'phone' => esc_attr($ps['validationMsg_phone'] ?? $gs['validationMsg_phone'] ?? 'Invalid phone number'),
    'number' => esc_attr($ps['validationMsg_number'] ?? $gs['validationMsg_number'] ?? 'Must be a number'),
  ];
}

function nomentor_render_form($element) {
  $props = $element['props'] ?? [];
  $id = $element['id'] ?? '';
  $fields = $props['fields'] ?? [];
  $safe_id = esc_attr($id);

  $form_parts = [];
  if (!empty($props['direction'])) $form_parts[] = 'direction: ' . esc_attr($props['direction']);
  nomentor_apply_border($form_parts, $props);
  $pad = nomentor_resolve_spacing($props, 'padding');
  $mar = nomentor_resolve_spacing($props, 'margin');
  if ($pad) $form_parts[] = 'padding: ' . $pad;
  if ($mar) $form_parts[] = 'margin: ' . $mar;
  $_ic = nomentor_inline_css($props['customCss'] ?? ''); if ($_ic) $form_parts[] = $_ic;
  if ($form_parts) nomentor_add_css("#nm-form-{$safe_id}", $form_parts);

  $fields_html = '';
  foreach ($fields as $f) {
    $fields_html .= nomentor_render_form_field($f);
  }

  // Render before/after slot elements
  $before_html = '';
  $after_html = '';
  if (!empty($element['children'])) {
    foreach ($element['children'] as $child) {
      $slot = $child['slot'] ?? '';
      if (!empty($child['elements']) && is_array($child['elements'])) {
        foreach ($child['elements'] as $el) {
          if ($slot === 'before') $before_html .= nomentor_render_element($el);
          else $after_html .= nomentor_render_element($el);
        }
      }
    }
  }

  $validations = [];
  foreach ($fields as $f) {
    $v = ['name' => $f['name'] ?? '', 'required' => !empty($f['required']), 'validation' => $f['validation'] ?? 'none', 'type' => $f['type'] ?? 'text', 'label' => $f['label'] ?? ''];
    if (!empty($f['customValidator'])) $v['customValidator'] = $f['customValidator'];
    $validations[] = $v;
  }
  $validations_attr = esc_attr(json_encode($validations, JSON_UNESCAPED_UNICODE));

  // Validation messages from global/page settings
  $msgs = nomentor_get_validation_messages();
  $msg_required = $msgs['required'];
  $msg_email = $msgs['email'];
  $msg_phone = $msgs['phone'];
  $msg_number = $msgs['number'];

  $validate_script = <<<SCRIPT
<script>
(function(){
var form=document.getElementById('nm-form-{$safe_id}');if(!form)return;
var msgs={required:'{$msg_required}',email:'{$msg_email}',phone:'{$msg_phone}',number:'{$msg_number}'};
var errStyle='border:2px solid #e74c3c;background:rgba(231,76,60,0.05)';
var errTxtStyle='color:#e74c3c;font-size:0.8em;margin-top:4px;padding:4px 8px;background:rgba(231,76,60,0.08);border-radius:4px';
function cErr(el){
  if(!el)return;
  var p=el.parentNode;if(p){var e=p.querySelector('.nm-field-error');if(e)e.remove();}
  el.style.border='';el.style.background='';el.removeAttribute('data-nm-err');
}
function sErr(el,msg){
  cErr(el);
  if(el){el.style.cssText+=';'+errStyle;el.setAttribute('data-nm-err','1');}
  var d=document.createElement('div');d.className='nm-field-error';d.style.cssText=errTxtStyle;
  d.textContent=msg;
  if(el&&el.parentNode)el.parentNode.appendChild(d);
}
async function vField(r){
  var el=form.querySelector('[name="'+r.name+'"]');var val='';
  if(r.type==='radio'){var c=form.querySelector('[name="'+r.name+'"]:checked');val=c?c.value:'';}
  else if(r.type==='checkbox'){val=el&&el.checked?'yes':'';}
  else{val=el?el.value.trim():'';}
  cErr(el);
  if(r.required&&!val){sErr(el,msgs.required);return null;}
  var vt=r.validation&&r.validation!=='none'?r.validation:r.type;
  if(val&&vt==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)){sErr(el,msgs.email);return null;}
  if(val&&vt==='phone'&&!/^[\d\s\-+().]{7,}$/.test(val)){sErr(el,msgs.phone);return null;}
  if(val&&vt==='number'&&isNaN(val)){sErr(el,msgs.number);return null;}
  if(r.customValidator){
    try{var cv=eval(r.customValidator);if(typeof cv==='function'){var err=await cv(val,r.name);if(err){sErr(el,err);return null;}}}
    catch(e){sErr(el,e.message||'Validation error');return null;}
  }
  return val;
}
var rules=JSON.parse(form.dataset.nmRules||'[]');
form._nmValidate=async function(){
  var msgEl=form.querySelector('.nm-form-message');if(msgEl)msgEl.style.display='none';
  var valid=true,data={};
  for(var i=0;i<rules.length;i++){
    var v=await vField(rules[i]);
    if(v===null)valid=false; else data[rules[i].name]=v;
  }
  return valid?data:null;
};
for(var i=0;i<rules.length;i++){(function(r){
  var els=r.type==='radio'?form.querySelectorAll('[name="'+r.name+'"]'):[form.querySelector('[name="'+r.name+'"]')];
  var evt=r.type==='radio'||r.type==='checkbox'||r.type==='select'?'change':'blur';
  els.forEach(function(el){if(el)el.addEventListener(evt,function(){vField(r);});});
})(rules[i]);}
form.addEventListener('submit',async function(e){e.preventDefault();await form._nmValidate();});
})();
</script>
SCRIPT;

  return <<<HTML
<form id="nm-form-{$safe_id}" class="nm-form" data-nm-rules="{$validations_attr}" onsubmit="return false" novalidate>
{$before_html}
{$fields_html}
{$validate_script}
{$after_html}
  <div class="nm-form-message"></div>
</form>

HTML;
}

function nomentor_render_separator($element) {
  $props = $element['props'] ?? [];
  $id = $element['id'] ?? '';
  $safe_id = esc_attr($id);

  $color = esc_attr(nomentor_resolve_color($props['lineColor'] ?? '#ddd'));
  $thickness = intval($props['lineThickness'] ?? 1);
  $line_width = esc_attr($props['lineWidth'] ?? '');
  $style = $props['lineStyle'] ?? 'solid';
  $align = $props['lineAlign'] ?? 'center';
  $w = $line_width ?: '100%';
  $align_margin = ['left' => '0 auto 0 0', 'center' => '0 auto', 'right' => '0 0 0 auto'];
  $margin = $align_margin[$align] ?? '0 auto';

  $wrap_parts = ['width: 100%'];
  nomentor_apply_common_style($wrap_parts, $props, $id);

  $hr_parts = ["width: {$w}", "margin: {$margin}"];
  if ($style === 'wave') {
    $h = max($thickness * 2, 6);
    $svg = urlencode("<svg xmlns='http://www.w3.org/2000/svg' width='20' height='6' viewBox='0 0 20 6'><path d='M0 3 Q5 0 10 3 Q15 6 20 3' stroke='{$color}' stroke-width='{$thickness}' fill='none'/></svg>");
    $hr_parts[] = "height: {$h}px";
    $hr_parts[] = "background-image: url(\"data:image/svg+xml,{$svg}\")";
    $hr_parts[] = 'background-repeat: repeat-x';
    $hr_parts[] = 'background-size: 20px 100%';
  } elseif ($style === 'solid') {
    $hr_parts[] = "height: {$thickness}px";
    $hr_parts[] = "background-color: {$color}";
  } else {
    $hr_parts[] = 'height: 0';
    $hr_parts[] = "border-top: {$thickness}px {$style} {$color}";
  }

  if ($id) {
    nomentor_add_css("#nm-{$safe_id}", $wrap_parts);
    nomentor_add_css("#nm-{$safe_id} hr", $hr_parts);
    return "<div id=\"nm-{$safe_id}\" class=\"nm-separator\"><hr></div>\n";
  }

  $wrap_style = implode('; ', $wrap_parts);
  $hr_style = implode('; ', $hr_parts);
  return "<div class=\"nm-separator\" style=\"{$wrap_style}\"><hr style=\"{$hr_style}\"></div>\n";
}

function nomentor_render_form_field($f) {
  $type = $f['type'] ?? 'text';
  $label = esc_html($f['label'] ?? '');
  $name = esc_attr($f['name'] ?? '');
  $placeholder = esc_attr($f['placeholder'] ?? '');
  $required = !empty($f['required']);
  $req_star = $required ? ' <span class="nm-required">*</span>' : '';

  $html = '<div class="nm-field">';
  if ($label && $type !== 'checkbox') $html .= "<label class=\"nm-field-label\">{$label}{$req_star}</label>";

  switch ($type) {
    case 'text': case 'email': case 'phone': case 'number':
      $input_type = $type === 'phone' ? 'tel' : ($type === 'email' ? 'email' : ($type === 'number' ? 'number' : 'text'));
      $html .= "<input type=\"{$input_type}\" name=\"{$name}\" placeholder=\"{$placeholder}\" class=\"nm-field-input\"" . ($required ? ' required' : '') . ">";
      break;
    case 'textarea':
      $html .= "<textarea name=\"{$name}\" placeholder=\"{$placeholder}\" class=\"nm-field-input\" rows=\"3\"" . ($required ? ' required' : '') . "></textarea>";
      break;
    case 'select':
      $html .= "<select name=\"{$name}\" class=\"nm-field-input\"" . ($required ? ' required' : '') . ">";
      $html .= "<option value=\"\">{$placeholder}</option>";
      foreach (($f['options'] ?? []) as $opt) {
        $opt_label = is_array($opt) ? ($opt['label'] ?? '') : $opt;
        $opt_value = is_array($opt) ? ($opt['value'] ?? $opt_label) : $opt;
        $html .= '<option value="' . esc_attr($opt_value) . '">' . esc_html($opt_label) . '</option>';
      }
      $html .= '</select>';
      break;
    case 'radio':
      foreach (($f['options'] ?? []) as $opt) {
        $opt_label = is_array($opt) ? ($opt['label'] ?? '') : $opt;
        $opt_value = is_array($opt) ? ($opt['value'] ?? $opt_label) : $opt;
        $html .= '<label class="nm-field-option"><input type="radio" name="' . $name . '" value="' . esc_attr($opt_value) . '">' . esc_html($opt_label) . '</label>';
      }
      break;
    case 'checkbox':
      $html .= '<label class="nm-field-option"><input type="checkbox" name="' . $name . '">' . $label . $req_star . '</label>';
      break;
  }

  $html .= '</div>';
  return $html;
}

function nomentor_render_list($element) {
  $props = $element['props'] ?? [];
  $id = $element['id'] ?? '';
  $safe_id = esc_attr($id);
  $list_type = ($props['listType'] ?? 'ul') === 'ol' ? 'ol' : 'ul';
  $items = $props['items'] ?? [];
  $default_icon = $props['icon'] ?? '';
  $icon_color = nomentor_resolve_color($props['iconColor'] ?? '');
  $item_bg = nomentor_resolve_color($props['itemBgColor'] ?? '');
  $item_padding = esc_attr($props['itemPadding'] ?? '8px 12px');
  $item_radius = intval($props['itemRadius'] ?? 0);
  $item_gap = intval($props['itemGap'] ?? 4);

  static $default_sizes = [
    'xs' => 0.75, 'sm' => 0.875, 'base' => 1, 'lg' => 1.125,
    'xl' => 1.25, '2xl' => 1.5, '3xl' => 1.875, '4xl' => 2.25,
  ];

  // List container CSS
  $list_rules = ["gap: {$item_gap}px"];
  if ($default_icon) $list_rules[] = 'list-style: none';
  if (!empty($props['fontSize']) && isset($default_sizes[$props['fontSize']])) {
    global $_nomentor_effective_sizes;
    $em = $_nomentor_effective_sizes[$props['fontSize']] ?? $default_sizes[$props['fontSize']];
    $list_rules[] = "font-size: {$em}em";
  }
  if (!empty($props['fontWeight'])) $list_rules[] = 'font-weight: ' . esc_attr($props['fontWeight']);
  if (!empty($props['color'])) $list_rules[] = 'color: ' . esc_attr(nomentor_resolve_color($props['color']));
  if (!empty($props['direction'])) $list_rules[] = 'direction: ' . esc_attr($props['direction']);
  nomentor_apply_border($list_rules, $props);
  $pad = nomentor_resolve_spacing($props, 'padding');
  $mar = nomentor_resolve_spacing($props, 'margin');
  if ($pad) $list_rules[] = 'padding: ' . $pad;
  if ($mar) $list_rules[] = 'margin: ' . $mar;
  $_ic = nomentor_inline_css($props['customCss'] ?? ''); if ($_ic) $list_rules[] = $_ic;
  nomentor_add_css("#nm-{$safe_id}", $list_rules);

  // Shared item CSS (padding, radius, bg, shadow)
  $item_rules = ["padding: {$item_padding}"];
  if ($item_radius) $item_rules[] = "border-radius: {$item_radius}px";
  if ($item_bg) $item_rules[] = 'background-color: ' . esc_attr($item_bg);
  $item_shadow = nomentor_shadow_to_css($props['itemShadow'] ?? null);
  if ($item_shadow) $item_rules[] = 'box-shadow: ' . $item_shadow;
  nomentor_add_css("#nm-{$safe_id} .nm-list-item", $item_rules);

  // Icon color
  if ($icon_color) {
    nomentor_add_css("#nm-{$safe_id} .nm-list-icon", ['color: ' . esc_attr($icon_color)]);
  }

  $html = "<{$list_type} class=\"nm-list\" id=\"nm-{$safe_id}\">\n";
  $icon_weight = floatval($props['iconWeight'] ?? 2);
  foreach ($items as $idx => $item) {
    $text = esc_html($item['text'] ?? '');
    $li_icon = $item['icon'] ?? $default_icon;

    // Per-item overrides go to CSS too
    $li_bg = !empty($item['bgColor']) ? nomentor_resolve_color($item['bgColor']) : '';
    $li_icon_color = !empty($item['iconColor']) ? nomentor_resolve_color($item['iconColor']) : '';
    if ($li_bg || $li_icon_color) {
      $override = [];
      if ($li_bg) $override[] = 'background-color: ' . esc_attr($li_bg);
      if ($li_icon_color) $override[] = 'color: ' . esc_attr($li_icon_color);
      $sel = $li_icon_color ? "#nm-{$safe_id} .nm-list-item:nth-child(" . ($idx + 1) . ") .nm-list-icon" : "#nm-{$safe_id} .nm-list-item:nth-child(" . ($idx + 1) . ")";
      if ($li_bg) nomentor_add_css("#nm-{$safe_id} .nm-list-item:nth-child(" . ($idx + 1) . ")", ['background-color: ' . esc_attr($li_bg)]);
      if ($li_icon_color) nomentor_add_css("#nm-{$safe_id} .nm-list-item:nth-child(" . ($idx + 1) . ") .nm-list-icon", ['color: ' . esc_attr($li_icon_color)]);
    }

    $icon_html = '';
    if ($li_icon) {
      $icon_html = '<span class="nm-list-icon">' . nomentor_get_icon_svg($li_icon, '1em', $icon_weight) . '</span>';
    }

    $html .= "  <li class=\"nm-list-item\">{$icon_html}<span>{$text}</span></li>\n";
  }
  $html .= "</{$list_type}>\n";
  return $html;
}

// nomentor_get_icon_svg() is now in includes/lucide-icons.php (auto-generated)
