<?php
/**
 * Nomentor - Lightweight Page Builder
 *
 * @wordpress-plugin
 * Plugin Name:       Nomentor
 * Plugin URI:        https://github.com/nimrod-cohen/nomentor
 * Description:       A lightweight WYSIWYG page builder that generates clean, static HTML. No bloat, no overhead.
 * Version:           0.1.1
 * Author:            nimrod-cohen
 * Author URI:        https://github.com/nimrod-cohen
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       nomentor
 * Requires WP:       6.0
 * Requires PHP:      8.0
 */

defined('ABSPATH') || exit;

define('NOMENTOR_VERSION', '0.1.1');
define('NOMENTOR_DIR', plugin_dir_path(__FILE__));
define('NOMENTOR_URL', plugin_dir_url(__FILE__));

// GitHub auto-updater
require_once NOMENTOR_DIR . 'includes/github-updater.php';
new \Nomentor\GitHubPluginUpdater(__FILE__);

// Register custom post type
add_action('init', function () {
  register_post_type('nomentor_page', [
    'labels' => [
      'name' => 'Nomentor',
      'singular_name' => 'Page',
      'add_new' => 'Add New Page',
      'add_new_item' => 'Add New Page',
      'edit_item' => 'Edit Page',
      'new_item' => 'New Page',
      'view_item' => 'View Page',
      'search_items' => 'Search Pages',
      'not_found' => 'No pages found',
      'not_found_in_trash' => 'No pages found in trash',
      'all_items' => 'All Pages',
    ],
    'public' => false,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 30,
    'menu_icon' => 'dashicons-layout',
    'supports' => ['title', 'author'],
    'capability_type' => 'page',
  ]);
});

// Add custom columns
add_filter('manage_nomentor_page_posts_columns', function ($columns) {
  $new = [];
  foreach ($columns as $key => $label) {
    $new[$key] = $label;
    if ($key === 'title') {
      $new['nomentor_path'] = 'Path';
    }
  }
  return $new;
});

add_action('manage_nomentor_page_posts_custom_column', function ($column, $post_id) {
  if ($column === 'nomentor_path') {
    $slug = get_post_field('post_name', $post_id);
    if ($slug) {
      echo '<code>/static/' . esc_html($slug) . '/</code>';
    } else {
      echo '<span style="color:#999">—</span>';
    }
  }
}, 10, 2);

// Add "Design" and "View" row actions
function nomentor_add_row_actions($actions, $post) {
  if ($post->post_type !== 'nomentor_page') return $actions;

  $design_url = admin_url('admin.php?page=nomentor-designer&post_id=' . $post->ID);
  $actions['design'] = '<a href="' . esc_url($design_url) . '">Design</a>';

  if ($post->post_status === 'publish' && $post->post_name) {
    $view_url = home_url('/static/' . $post->post_name . '/');
    $actions['view'] = '<a href="' . esc_url($view_url) . '" target="_blank">View</a>';
  }

  return $actions;
}
add_filter('post_row_actions', 'nomentor_add_row_actions', 10, 2);
add_filter('page_row_actions', 'nomentor_add_row_actions', 10, 2);

// Add "Design" button on the edit screen
add_action('edit_form_after_title', function ($post) {
  if ($post->post_type !== 'nomentor_page') return;
  $url = admin_url('admin.php?page=nomentor-designer&post_id=' . $post->ID);
  echo '<div style="margin:12px 0"><a href="' . esc_url($url) . '" class="button button-primary button-large">Open Designer</a></div>';
});

// AJAX: save page layout
add_action('wp_ajax_nomentor_save', function () {
  check_ajax_referer('nomentor_editor', 'nonce');

  $post_id = intval($_POST['post_id'] ?? 0);
  $post = get_post($post_id);

  if (!$post || $post->post_type !== 'nomentor_page' || !current_user_can('edit_post', $post_id)) {
    wp_send_json_error('Unauthorized');
  }

  $data = wp_unslash($_POST['data'] ?? '[]');
  update_post_meta($post_id, '_nomentor_layout', $data);

  wp_send_json_success();
});

// AJAX: load page layout
add_action('wp_ajax_nomentor_load', function () {
  $post_id = intval($_GET['post_id'] ?? 0);
  $post = get_post($post_id);

  if (!$post || $post->post_type !== 'nomentor_page' || !current_user_can('edit_post', $post_id)) {
    wp_send_json_error('Unauthorized');
  }

  $data = get_post_meta($post_id, '_nomentor_layout', true);
  wp_send_json_success(['layout' => $data ?: '[]']);
});

// Register hidden admin page so WP allows the URL
add_action('admin_menu', function () {
  add_submenu_page(null, 'Nomentor Designer', '', 'edit_pages', 'nomentor-designer', '__return_null');
});

// Static folder management on publish/unpublish
add_action('transition_post_status', function ($new_status, $old_status, $post) {
  if ($post->post_type !== 'nomentor_page') return;

  $slug = $post->post_name;
  if (empty($slug)) return;

  $static_dir = ABSPATH . 'static/' . $slug;

  if ($new_status === 'publish') {
    // Create the static folder with a placeholder
    if (!is_dir($static_dir)) {
      wp_mkdir_p($static_dir);
    }
    // Generate the static HTML (placeholder for now — the designer will populate this)
    $html = nomentor_generate_static_html($post);
    file_put_contents($static_dir . '/index.html', $html);
  } else {
    // Remove the static folder when unpublished
    if (is_dir($static_dir)) {
      $files = glob($static_dir . '/*');
      foreach ($files as $file) {
        if (is_file($file)) unlink($file);
      }
      @rmdir($static_dir);
    }
  }
}, 10, 3);

// Also regenerate on save (covers edge cases like direct DB inserts, REST API, etc.)
add_action('save_post_nomentor_page', function ($post_id, $post) {
  if ($post->post_status === 'publish' && $post->post_name) {
    $static_dir = ABSPATH . 'static/' . $post->post_name;
    if (!is_dir($static_dir)) wp_mkdir_p($static_dir);
    file_put_contents($static_dir . '/index.html', nomentor_generate_static_html($post));
  }
}, 10, 2);

// Also clean up when trashed
add_action('wp_trash_post', function ($post_id) {
  $post = get_post($post_id);
  if (!$post || $post->post_type !== 'nomentor_page') return;

  $slug = $post->post_name;
  if (empty($slug)) return;

  $static_dir = ABSPATH . 'static/' . $slug;
  if (is_dir($static_dir)) {
    $files = glob($static_dir . '/*');
    foreach ($files as $file) {
      if (is_file($file)) unlink($file);
    }
    @rmdir($static_dir);
  }
});

// Generate static HTML from a nomentor page
function nomentor_generate_static_html($post) {
  // For now, return a placeholder. The designer will store the actual layout
  // in post meta and this function will render it to clean HTML.
  $title = esc_html($post->post_title);
  return <<<HTML
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{$title}</title>
</head>
<body>
  <h1>{$title}</h1>
  <p>This page was generated by Nomentor.</p>
</body>
</html>
HTML;
}

// Intercept early to render designer without WP admin chrome
require_once NOMENTOR_DIR . 'editor/editor.php';

add_action('admin_init', function () {
  if (!isset($_GET['page']) || $_GET['page'] !== 'nomentor-designer') return;
  nomentor_render_editor();
});
