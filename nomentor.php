<?php
/**
 * Nomentor - Lightweight Page Builder
 *
 * @wordpress-plugin
 * Plugin Name:       Nomentor
 * Plugin URI:        https://github.com/nimrod-cohen/nomentor
 * Description:       A lightweight WYSIWYG page builder that generates clean, static HTML. No bloat, no overhead.
 * Version:           0.1.0
 * Author:            nimrod-cohen
 * Author URI:        https://github.com/nimrod-cohen
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       nomentor
 * Requires WP:       6.0
 * Requires PHP:      8.0
 */

defined('ABSPATH') || exit;

define('NOMENTOR_VERSION', '0.1.0');
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

// Add "Design" row action to the list (nomentor_page is hierarchical=false, so use post_row_actions)
add_filter('post_row_actions', function ($actions, $post) {
  if ($post->post_type === 'nomentor_page') {
    $url = admin_url('admin.php?page=nomentor-designer&post_id=' . $post->ID);
    $actions['design'] = '<a href="' . esc_url($url) . '">Design</a>';
  }
  return $actions;
}, 10, 2);

// Also hook page_row_actions in case WP uses that
add_filter('page_row_actions', function ($actions, $post) {
  if ($post->post_type === 'nomentor_page') {
    $url = admin_url('admin.php?page=nomentor-designer&post_id=' . $post->ID);
    $actions['design'] = '<a href="' . esc_url($url) . '">Design</a>';
  }
  return $actions;
}, 10, 2);

// Add "Design" button on the edit screen
add_action('edit_form_after_title', function ($post) {
  if ($post->post_type !== 'nomentor_page') return;
  $url = admin_url('admin.php?page=nomentor-designer&post_id=' . $post->ID);
  echo '<div style="margin:12px 0"><a href="' . esc_url($url) . '" class="button button-primary button-large">Open Designer</a></div>';
});

// Register hidden admin page so WP allows the URL
add_action('admin_menu', function () {
  add_submenu_page(null, 'Nomentor Designer', '', 'edit_pages', 'nomentor-designer', '__return_null');
});

// Intercept early to render designer without WP admin chrome
add_action('admin_init', function () {
  if (!isset($_GET['page']) || $_GET['page'] !== 'nomentor-designer') return;
  if (!current_user_can('edit_pages')) wp_die('Access denied');

  $post_id = intval($_GET['post_id'] ?? 0);
  $post = get_post($post_id);

  if (!$post || $post->post_type !== 'nomentor_page') {
    wp_die('Invalid page');
  }

  $back_url = admin_url('edit.php?post_type=nomentor_page');
  $title = esc_html($post->post_title);

  ?><!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nomentor — <?= $title ?></title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f0f0f0; }

    .nomentor-toolbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      height: 48px; background: #1e1e1e; color: #fff;
      display: flex; align-items: center; padding: 0 16px; gap: 16px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.3);
    }
    .nomentor-toolbar a {
      color: #ccc; text-decoration: none; font-size: 13px;
      display: flex; align-items: center; gap: 6px;
      padding: 6px 12px; border-radius: 4px; transition: background 0.15s;
    }
    .nomentor-toolbar a:hover { background: rgba(255,255,255,0.1); color: #fff; }
    .nomentor-toolbar .page-title { font-size: 14px; font-weight: 600; }
    .nomentor-toolbar .spacer { flex: 1; }

    .nomentor-canvas {
      margin-top: 48px; min-height: calc(100vh - 48px);
      display: flex; align-items: center; justify-content: center;
      color: #888; font-size: 18px;
    }
  </style>
</head>
<body>
  <div class="nomentor-toolbar">
    <a href="<?= esc_url($back_url) ?>">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
      Back
    </a>
    <span class="page-title"><?= $title ?></span>
    <span class="spacer"></span>
  </div>
  <div class="nomentor-canvas">
    Nomentor Designer
  </div>
</body>
</html><?php
  exit;
});
