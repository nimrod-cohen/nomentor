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
