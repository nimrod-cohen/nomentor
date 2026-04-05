<?php
/**
 * Nomentor Static HTML Renderer
 *
 * Converts the JSON layout stored in _nomentor_layout post meta
 * into clean, lightweight static HTML.
 */

defined('ABSPATH') || exit;

require_once __DIR__ . '/lucide-icons.php';

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

  // Build visibility CSS (hide elements per viewport)
  global $_nomentor_hidden_elements;
  if (!empty($_nomentor_hidden_elements)) {
    $desktop_hide = $tablet_hide = $mobile_hide = '';
    foreach ($_nomentor_hidden_elements as $id => $vps) {
      $cls = '.nm-el-' . esc_attr($id);
      if (!empty($vps['desktop'])) $desktop_hide .= "    {$cls} { display: none !important; }\n";
      if (!empty($vps['tablet'])) $tablet_hide .= "      {$cls} { display: none !important; }\n";
      if (!empty($vps['mobile'])) $mobile_hide .= "      {$cls} { display: none !important; }\n";
    }
    if ($desktop_hide) $responsive_css .= "    @media (min-width: 1025px) {\n{$desktop_hide}    }\n";
    if ($tablet_hide) $responsive_css .= "    @media (min-width: 769px) and (max-width: 1024px) {\n{$tablet_hide}    }\n";
    if ($mobile_hide) $responsive_css .= "    @media (max-width: 768px) {\n{$mobile_hide}    }\n";
  }
  $_nomentor_hidden_elements = [];

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

  return <<<HTML
<!DOCTYPE html>
<html lang="he" dir="{$direction}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{$title}</title>
  {$font_embed}
  <style>
    :root {
{$color_vars_css}    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: {$font_family}; line-height: 1.6; font-size: {$desktop['base']}px; }
    .nm-container { padding: 1rem; }
    .nm-grid { display: grid; gap: 1rem; width: 100%; }
    .nm-cell { min-height: 1rem; }
    img { max-width: 100%; height: auto; }
    @media (max-width: 1024px) { body { {$tablet_font}font-size: {$tablet['base']}px; } }
    @media (max-width: 768px) {
      body { {$mobile_font}font-size: {$mobile['base']}px; }
      .nm-grid { grid-template-columns: 1fr !important; }
    }
{$responsive_css}  </style>
{$head_scripts}</head>
<body>
{$body}
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

function nomentor_render_row($row) {
  if (empty($row['elements']) || !is_array($row['elements'])) return '';

  $inner = '';
  foreach ($row['elements'] as $element) {
    $inner .= nomentor_render_element($element);
  }

  $id = $row['id'] ?? '';
  $cls = 'nm-container';
  nomentor_collect_visibility($id, $row['props'] ?? []);
  if ($id) $cls .= ' nm-el-' . esc_attr($id);

  $style = nomentor_build_row_style($row['props'] ?? []);
  $attr = $style ? " style=\"{$style}\"" : '';
  $id_attr = $id ? ' id="nm-el-' . esc_attr($id) . '"' : '';
  $scoped = nomentor_extract_scoped_css($id, $row['props']['customCss'] ?? '');
  return $scoped . '<div class="' . $cls . '"' . $id_attr . $attr . '>' . $inner . '</div>' . "\n";
}

function nomentor_collect_visibility($id, $props) {
  if (!$id || empty($props['hideOn'])) return;
  global $_nomentor_hidden_elements;
  $_nomentor_hidden_elements[$id] = $props['hideOn'];
}

function nomentor_build_row_style($props) {
  $parts = ['display: flex', 'flex-direction: column'];
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
  if (!empty($props['direction'])) $parts[] = 'direction: ' . esc_attr($props['direction']);
  if (!empty($props['rowGap'])) $parts[] = 'row-gap: ' . intval($props['rowGap']) . 'px';
  if (!empty($props['colGap'])) $parts[] = 'column-gap: ' . intval($props['colGap']) . 'px';
  nomentor_apply_border($parts, $props);
  $pad = nomentor_resolve_spacing($props, 'padding');
  $mar = nomentor_resolve_spacing($props, 'margin');
  if ($pad) $parts[] = 'padding: ' . $pad;
  if ($mar && empty($props['maxWidth'])) $parts[] = 'margin: ' . $mar;
  $_ic = nomentor_inline_css($props['customCss'] ?? ''); if ($_ic) $parts[] = $_ic;
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

  // Collect visibility rules
  nomentor_collect_visibility($id, $props);

  switch ($type) {
    case 'heading': $result = nomentor_render_heading($props); break;
    case 'text': $result = nomentor_render_text($props); break;
    case 'image': $result = nomentor_render_image($props, $id); break;
    case 'grid': $result = nomentor_render_grid($element); break;
    case 'button': $result = nomentor_render_button($props, $id); break;
    case 'list': $result = nomentor_render_list($props); break;
    case 'timer': $result = nomentor_render_timer($props, $id); break;
    case 'form': $result = nomentor_render_form($element); break;
    default: return '';
  }

  // Add scoped style block if customCss has nested selectors
  $scoped_css = nomentor_extract_scoped_css($id, $props['customCss'] ?? '');

  // Wrap with ID for scoped CSS and/or visibility class
  $needs_wrap = $scoped_css || !empty($props['hideOn']);
  if ($id && $needs_wrap) {
    $cls = 'nm-el-' . esc_attr($id);
    $result = $scoped_css . '<div id="nm-el-' . esc_attr($id) . '" class="' . $cls . '">' . $result . '</div>';
  } elseif ($scoped_css) {
    $result = $scoped_css . $result;
  }
  return $result;
}

function nomentor_render_heading($props) {
  $level = $props['level'] ?? 'h2';
  $text = esc_html($props['text'] ?? '');
  $allowed = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  if (!in_array($level, $allowed)) $level = 'h2';
  $style = nomentor_build_style($props);
  // Apply heading size from settings
  global $_nomentor_effective_heading_sizes;
  if (!empty($_nomentor_effective_heading_sizes[$level])) {
    $style = 'font-size: ' . $_nomentor_effective_heading_sizes[$level] . 'em' . ($style ? '; ' . $style : '');
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
  if (!$val) return '';
  if (is_string($val)) return esc_attr($val);
  if (is_array($val)) {
    $t = intval($val['top'] ?? 0);
    $r = intval($val['right'] ?? 0);
    $b = intval($val['bottom'] ?? 0);
    $l = intval($val['left'] ?? 0);
    if (!$t && !$r && !$b && !$l) return '';
    return "{$t}px {$r}px {$b}px {$l}px";
  }
  return '';
}

function nomentor_build_style($props) {
  static $default_sizes = [
    'xs' => 0.75, 'sm' => 0.875, 'base' => 1, 'lg' => 1.125,
    'xl' => 1.25, '2xl' => 1.5, '3xl' => 1.875, '4xl' => 2.25,
  ];
  $parts = [];
  if (!empty($props['color'])) $parts[] = 'color: ' . esc_attr(nomentor_resolve_color($props['color']));
  if (!empty($props['fontSize']) && isset($default_sizes[$props['fontSize']])) {
    // Use em from settings if available, otherwise default ratio
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
  return implode('; ', $parts);
}

function nomentor_render_text($props) {
  $text = wp_kses_post($props['text'] ?? '');
  $style = nomentor_build_style($props);
  $attr = $style ? " style=\"{$style}\"" : '';
  return "<div{$attr}>{$text}</div>\n";
}

function nomentor_render_image($props, $id = '') {
  $src = esc_url($props['src'] ?? '');
  $alt = esc_attr($props['alt'] ?? '');
  if (empty($src)) return '';

  // Desktop dimensions
  $style_parts = [];
  if (!empty($props['width'])) $style_parts[] = 'width: ' . esc_attr($props['width']);
  if (!empty($props['height'])) $style_parts[] = 'height: ' . esc_attr($props['height']);
  $style = $style_parts ? ' style="' . implode('; ', $style_parts) . '"' : '';

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
    if ($cell_id && !empty($cell['props']['hideOn'])) $cell_cls .= ' nm-el-' . esc_attr($cell_id);
    $cell_style = nomentor_build_cell_style($cell['props'] ?? []);
    $cell_attr = $cell_style ? " style=\"{$cell_style}\"" : '';
    $cells .= '<div class="' . $cell_cls . '"' . $cell_attr . '>' . $cellContent . '</div>' . "\n";
  }

  $grid_style = 'grid-template-columns: repeat(' . $cols . ', 1fr)';
  $gprops = $element['props'] ?? [];
  if (!empty($gprops['maxWidth'])) $grid_style .= '; width: ' . esc_attr($gprops['maxWidth']) . '; max-width: 100%; margin-left: auto; margin-right: auto';
  if (!empty($gprops['rowGap'])) $grid_style .= '; row-gap: ' . intval($gprops['rowGap']) . 'px';
  if (!empty($gprops['colGap'])) $grid_style .= '; column-gap: ' . intval($gprops['colGap']) . 'px';
  return '<div class="nm-grid" style="' . $grid_style . '">' . "\n" . $cells . '</div>' . "\n";
}

function nomentor_build_cell_style($props) {
  $parts = ['display: flex', 'flex-direction: column'];
  if (!empty($props['align'])) {
    $align_css = nomentor_align_to_css($props['align']);
    if ($align_css) $parts = array_merge($parts, $align_css);
  }
  if (!empty($props['direction'])) $parts[] = 'direction: ' . esc_attr($props['direction']);
  if (!empty($props['rowGap'])) $parts[] = 'row-gap: ' . intval($props['rowGap']) . 'px';
  if (!empty($props['colGap'])) $parts[] = 'column-gap: ' . intval($props['colGap']) . 'px';
  nomentor_apply_border($parts, $props);
  $pad = nomentor_resolve_spacing($props, 'padding');
  $mar = nomentor_resolve_spacing($props, 'margin');
  if ($pad) $parts[] = 'padding: ' . $pad;
  if ($mar) $parts[] = 'margin: ' . $mar;
  $_ic = nomentor_inline_css($props['customCss'] ?? ''); if ($_ic) $parts[] = $_ic;
  return implode('; ', $parts);
}

function nomentor_render_button($props, $id = '') {
  $text = esc_html($props['text'] ?? 'Button');
  $url = esc_url($props['url'] ?? '#');
  $new_tab = !empty($props['newTab']) ? ' target="_blank" rel="noopener noreferrer"' : '';

  static $default_sizes = [
    'xs' => 0.75, 'sm' => 0.875, 'base' => 1, 'lg' => 1.125,
    'xl' => 1.25, '2xl' => 1.5, '3xl' => 1.875, '4xl' => 2.25,
  ];

  $has_icon = !empty($props['icon']);
  $parts = [
    'display: ' . (empty($props['fullWidth']) ? 'inline-flex' : 'flex'),
    'align-items: center',
    'justify-content: center',
    'gap: 0.4em',
    'padding: 0.6em 1.5em',
    'background-color: ' . esc_attr(nomentor_resolve_color($props['bgColor'] ?? '#4a90d9')),
    'color: ' . esc_attr(nomentor_resolve_color($props['color'] ?? '#ffffff')),
    'border-radius: ' . intval($props['borderRadius'] ?? 6) . 'px',
    'border: none',
    'text-decoration: none',
    'font-family: inherit',
    'line-height: 1.4',
    'text-align: center',
  ];

  if (!empty($props['fullWidth'])) $parts[] = 'width: 100%';

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

  $style = implode('; ', $parts);

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
  $btn_id = 'nm-btn-' . esc_attr($id);

  if ($action === 'submitForm') {
    $form_target = esc_attr($props['formTarget'] ?? '');
    $callback = $props['callbackFn'] ?? '';
    $callback_js = $callback ? esc_attr($callback) : 'null';
    $after = esc_attr($props['afterSubmit'] ?? 'message');
    $success_msg = esc_attr($props['successMessage'] ?? 'Thank you!');
    $redirect_url = esc_url($props['redirectUrl'] ?? '');

    return "<button id=\"{$btn_id}\" type=\"button\" style=\"{$style}\">{$inner}</button>\n"
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
    return "<a href=\"{$redirect_url}\" style=\"{$style}\">{$inner}</a>\n";
  }

  if ($action === 'showMessage') {
    $msg = esc_attr($props['successMessage'] ?? 'Thank you!');
    return "<button id=\"{$btn_id}\" type=\"button\" style=\"{$style}\" onclick=\"this.outerHTML='<div style=\\'text-align:center;padding:12px;font-weight:600;color:#2ecc71\\'>{$msg}</div>'\">{$inner}</button>\n";
  }

  // Default: link
  return "<a href=\"{$url}\"{$new_tab} style=\"{$style}\">{$inner}</a>\n";
}

function nomentor_render_timer($props, $id) {
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
  $box_style = "display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 20px;width:calc({$bw}% - 9px);max-width:calc(25% - 9px);min-width:60px;border-radius:{$radius}px;background-color:{$bg};color:{$color}";

  // Build outer wrapper style with all shared properties
  $outer_parts = ['display:flex', 'gap:12px', 'justify-content:center', 'flex-wrap:wrap'];
  if (!empty($props['direction'])) $outer_parts[] = 'direction: ' . esc_attr($props['direction']);
  nomentor_apply_border($outer_parts, $props);
  $pad = nomentor_resolve_spacing($props, 'padding');
  $mar = nomentor_resolve_spacing($props, 'margin');
  if ($pad) $outer_parts[] = 'padding: ' . $pad;
  if ($mar) $outer_parts[] = 'margin: ' . $mar;
  $_ic = nomentor_inline_css($props['customCss'] ?? ''); if ($_ic) $outer_parts[] = $_ic;
  $outer_style = implode('; ', $outer_parts);

  return <<<HTML
<div id="nm-timer-{$safe_id}" style="{$outer_style}">
  <div style="{$box_style}"><span class="nm-tn" style="font-size:2em;font-weight:800;line-height:1.1" data-u="d">00</span><span style="font-size:0.8em;font-weight:500;margin-top:4px;opacity:0.8">{$labels[0]}</span></div>
  <div style="{$box_style}"><span class="nm-tn" style="font-size:2em;font-weight:800;line-height:1.1" data-u="h">00</span><span style="font-size:0.8em;font-weight:500;margin-top:4px;opacity:0.8">{$labels[1]}</span></div>
  <div style="{$box_style}"><span class="nm-tn" style="font-size:2em;font-weight:800;line-height:1.1" data-u="m">00</span><span style="font-size:0.8em;font-weight:500;margin-top:4px;opacity:0.8">{$labels[2]}</span></div>
  <div style="{$box_style}"><span class="nm-tn" style="font-size:2em;font-weight:800;line-height:1.1" data-u="s">00</span><span style="font-size:0.8em;font-weight:500;margin-top:4px;opacity:0.8">{$labels[3]}</span></div>
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

function nomentor_render_form($element) {
  $props = $element['props'] ?? [];
  $id = $element['id'] ?? '';
  $fields = $props['fields'] ?? [];
  $safe_id = esc_attr($id);

  $form_parts = ['display:flex', 'flex-direction:column', 'gap:12px'];
  if (!empty($props['direction'])) $form_parts[] = 'direction:' . esc_attr($props['direction']);
  nomentor_apply_border($form_parts, $props);
  $pad = nomentor_resolve_spacing($props, 'padding');
  $mar = nomentor_resolve_spacing($props, 'margin');
  if ($pad) $form_parts[] = 'padding:' . $pad;
  if ($mar) $form_parts[] = 'margin:' . $mar;
  $_ic = nomentor_inline_css($props['customCss'] ?? ''); if ($_ic) $form_parts[] = $_ic;
  $form_style = implode(';', $form_parts);

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
  $global_raw = get_option('nomentor_global_settings', '{}');
  $gs = json_decode($global_raw, true) ?: [];
  $page_settings_raw = get_post_meta(get_the_ID() ?: 0, '_nomentor_page_settings', true);
  $ps = $page_settings_raw ? json_decode($page_settings_raw, true) : [];
  $msg_required = esc_attr($ps['validationMsg_required'] ?? $gs['validationMsg_required'] ?? 'This field is required');
  $msg_email = esc_attr($ps['validationMsg_email'] ?? $gs['validationMsg_email'] ?? 'Invalid email address');
  $msg_phone = esc_attr($ps['validationMsg_phone'] ?? $gs['validationMsg_phone'] ?? 'Invalid phone number');
  $msg_number = esc_attr($ps['validationMsg_number'] ?? $gs['validationMsg_number'] ?? 'Must be a number');

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
<form id="nm-form-{$safe_id}" style="{$form_style}" data-nm-rules="{$validations_attr}" onsubmit="return false" novalidate>
{$before_html}
{$fields_html}
{$validate_script}
{$after_html}
  <div class="nm-form-message" style="display:none;text-align:center;padding:12px;font-weight:600"></div>
</form>

HTML;
}

function nomentor_render_form_field($f) {
  $type = $f['type'] ?? 'text';
  $label = esc_html($f['label'] ?? '');
  $name = esc_attr($f['name'] ?? '');
  $placeholder = esc_attr($f['placeholder'] ?? '');
  $required = !empty($f['required']);
  $req_star = $required ? ' <span style="color:#e74c3c">*</span>' : '';
  $input_style = 'padding:8px 12px;border:1px solid #ddd;border-radius:4px;font-size:0.9em;font-family:inherit;width:100%;box-sizing:border-box';

  $html = '<div style="display:flex;flex-direction:column;gap:4px">';
  if ($label && $type !== 'checkbox') $html .= "<label style=\"font-size:0.9em;font-weight:600\">{$label}{$req_star}</label>";

  switch ($type) {
    case 'text': case 'email': case 'phone': case 'number':
      $input_type = $type === 'phone' ? 'tel' : ($type === 'email' ? 'email' : ($type === 'number' ? 'number' : 'text'));
      $html .= "<input type=\"{$input_type}\" name=\"{$name}\" placeholder=\"{$placeholder}\" style=\"{$input_style}\"" . ($required ? ' required' : '') . ">";
      break;
    case 'textarea':
      $html .= "<textarea name=\"{$name}\" placeholder=\"{$placeholder}\" style=\"{$input_style};resize:vertical\" rows=\"3\"" . ($required ? ' required' : '') . "></textarea>";
      break;
    case 'select':
      $html .= "<select name=\"{$name}\" style=\"{$input_style}\"" . ($required ? ' required' : '') . ">";
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
        $html .= '<label style="display:flex;align-items:center;gap:6px;font-size:0.9em;cursor:pointer"><input type="radio" name="' . $name . '" value="' . esc_attr($opt_value) . '">' . esc_html($opt_label) . '</label>';
      }
      break;
    case 'checkbox':
      $html .= '<label style="display:flex;align-items:center;gap:6px;font-size:0.9em;cursor:pointer"><input type="checkbox" name="' . $name . '">' . $label . $req_star . '</label>';
      break;
  }

  $html .= '</div>';
  return $html;
}

function nomentor_render_list($props) {
  $list_type = ($props['listType'] ?? 'ul') === 'ol' ? 'ol' : 'ul';
  $items = $props['items'] ?? [];
  $default_icon = $props['icon'] ?? '';
  $icon_color = esc_attr(nomentor_resolve_color($props['iconColor'] ?? ''));
  $item_bg = esc_attr(nomentor_resolve_color($props['itemBgColor'] ?? ''));
  $item_padding = esc_attr($props['itemPadding'] ?? '8px 12px');
  $item_radius = intval($props['itemRadius'] ?? 0);
  $item_gap = intval($props['itemGap'] ?? 4);

  static $default_sizes = [
    'xs' => 0.75, 'sm' => 0.875, 'base' => 1, 'lg' => 1.125,
    'xl' => 1.25, '2xl' => 1.5, '3xl' => 1.875, '4xl' => 2.25,
  ];

  $wrap_parts = ['display:flex', 'flex-direction:column', 'gap:' . $item_gap . 'px', 'padding-inline-start:0', 'margin:0'];
  if ($default_icon) $wrap_parts[] = 'list-style:none';
  if (!empty($props['fontSize']) && isset($default_sizes[$props['fontSize']])) {
    global $_nomentor_effective_sizes;
    $em = $_nomentor_effective_sizes[$props['fontSize']] ?? $default_sizes[$props['fontSize']];
    $wrap_parts[] = 'font-size:' . $em . 'em';
  }
  if (!empty($props['fontWeight'])) $wrap_parts[] = 'font-weight:' . esc_attr($props['fontWeight']);
  if (!empty($props['color'])) $wrap_parts[] = 'color:' . esc_attr(nomentor_resolve_color($props['color']));
  if (!empty($props['direction'])) $wrap_parts[] = 'direction:' . esc_attr($props['direction']);
  nomentor_apply_border($wrap_parts, $props);
  $pad = nomentor_resolve_spacing($props, 'padding');
  $mar = nomentor_resolve_spacing($props, 'margin');
  if ($pad) $wrap_parts[] = 'padding:' . $pad;
  if ($mar) $wrap_parts[] = 'margin:' . $mar;
  $_ic = nomentor_inline_css($props['customCss'] ?? ''); if ($_ic) $wrap_parts[] = $_ic;
  $wrap_style = implode(';', $wrap_parts);

  $html = "<{$list_type} style=\"{$wrap_style}\">\n";
  foreach ($items as $item) {
    $text = esc_html($item['text'] ?? '');
    $li_icon = $item['icon'] ?? $default_icon;
    $li_bg = !empty($item['bgColor']) ? nomentor_resolve_color($item['bgColor']) : $item_bg;

    $li_parts = ['display:flex', 'align-items:center', 'gap:8px', 'padding:' . $item_padding];
    if ($item_radius) $li_parts[] = 'border-radius:' . $item_radius . 'px';
    if ($li_bg) $li_parts[] = 'background-color:' . esc_attr($li_bg);
    $item_shadow = nomentor_shadow_to_css($props['itemShadow'] ?? null);
    if ($item_shadow) $li_parts[] = 'box-shadow:' . $item_shadow;
    $li_style = implode(';', $li_parts);

    $icon_html = '';
    if ($li_icon) {
      $ic = esc_attr(nomentor_resolve_color($item['iconColor'] ?? '') ?: $icon_color ?: 'currentColor');
      $icon_weight = floatval($props['iconWeight'] ?? 2);
      $icon_html = '<span style="display:flex;align-items:center;flex-shrink:0;color:' . $ic . '">' . nomentor_get_icon_svg($li_icon, '1em', $icon_weight) . '</span>';
    }

    $html .= "  <li style=\"{$li_style}\">{$icon_html}<span>{$text}</span></li>\n";
  }
  $html .= "</{$list_type}>\n";
  return $html;
}

// nomentor_get_icon_svg() is now in includes/lucide-icons.php (auto-generated)
