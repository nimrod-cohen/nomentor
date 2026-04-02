<?php
/**
 * Nomentor Static HTML Renderer
 *
 * Converts the JSON layout stored in _nomentor_layout post meta
 * into clean, lightweight static HTML.
 */

defined('ABSPATH') || exit;

function nomentor_generate_static_html($post) {
  $title = esc_html($post->post_title);
  $layout_json = get_post_meta($post->ID, '_nomentor_layout', true);
  $rows = $layout_json ? json_decode($layout_json, true) : [];

  if (!is_array($rows)) $rows = [];

  $body = '';
  foreach ($rows as $row) {
    $body .= nomentor_render_row($row);
  }

  if (empty($body)) {
    $body = '<p>' . $title . '</p>';
  }

  return <<<HTML
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{$title}</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; }
    .nm-container { padding: 1rem; }
    .nm-grid { display: grid; gap: 1rem; }
    .nm-cell { min-height: 1rem; }
    img { max-width: 100%; height: auto; }
  </style>
</head>
<body>
{$body}
</body>
</html>
HTML;
}

function nomentor_render_row($row) {
  if (empty($row['elements']) || !is_array($row['elements'])) return '';

  $inner = '';
  foreach ($row['elements'] as $element) {
    $inner .= nomentor_render_element($element);
  }

  return '<div class="nm-container">' . $inner . '</div>' . "\n";
}

function nomentor_render_element($element) {
  $type = $element['type'] ?? '';
  $props = $element['props'] ?? [];

  switch ($type) {
    case 'heading':
      return nomentor_render_heading($props);
    case 'text':
      return nomentor_render_text($props);
    case 'image':
      return nomentor_render_image($props);
    case 'grid':
      return nomentor_render_grid($element);
    default:
      return '';
  }
}

function nomentor_render_heading($props) {
  $level = $props['level'] ?? 'h2';
  $text = esc_html($props['text'] ?? '');
  $allowed = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  if (!in_array($level, $allowed)) $level = 'h2';
  return "<{$level}>{$text}</{$level}>\n";
}

function nomentor_render_text($props) {
  $text = esc_html($props['text'] ?? '');
  return "<p>{$text}</p>\n";
}

function nomentor_render_image($props) {
  $src = esc_url($props['src'] ?? '');
  $alt = esc_attr($props['alt'] ?? '');
  if (empty($src)) return '';
  return "<img src=\"{$src}\" alt=\"{$alt}\" loading=\"lazy\">\n";
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
    $cells .= '<div class="nm-cell">' . $cellContent . '</div>' . "\n";
  }

  return '<div class="nm-grid" style="grid-template-columns: repeat(' . $cols . ', 1fr)">' . "\n" . $cells . '</div>' . "\n";
}
