<?php
/**
 * Nomentor Designer - Editor page renderer
 *
 * Renders a full-screen editor page without WP admin chrome.
 * Called from the admin_init hook when page=nomentor-designer.
 */

defined('ABSPATH') || exit;

function nomentor_render_editor() {
  if (!current_user_can('edit_pages')) wp_die('Access denied');

  $post_id = intval($_GET['post_id'] ?? 0);
  $post = get_post($post_id);

  if (!$post || $post->post_type !== 'nomentor_page') {
    wp_die('Invalid page');
  }

  $back_url = admin_url('edit.php?post_type=nomentor_page');
  $view_url = ($post->post_status === 'publish' && $post->post_name)
    ? home_url('/static/' . $post->post_name . '/')
    : '';
  $title = esc_html($post->post_title);

  $css_url = NOMENTOR_URL . 'editor/editor.css?v=' . nomentor_version();
  $js_url = NOMENTOR_URL . 'editor/editor.js?v=' . nomentor_version();

  $nonce = wp_create_nonce('nomentor_editor');
  $global_settings = get_option('nomentor_global_settings', '{}');

  include __DIR__ . '/editor.html.php';
  exit;
}
