<?php
/**
 * Nomentor - Lightweight Page Builder
 *
 * @wordpress-plugin
 * Plugin Name:       Nomentor
 * Plugin URI:        https://github.com/nimrod-cohen/nomentor
 * Description:       A lightweight WYSIWYG page builder that generates clean, modern, static HTML. No bloat, no overhead.
 * Version:           0.6.15
 * Author:            nimrod-cohen
 * Author URI:        https://github.com/nimrod-cohen
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       nomentor
 * Requires WP:       6.0
 * Requires PHP:      8.0
 */

defined('ABSPATH') || exit;

define('NOMENTOR_DIR', plugin_dir_path(__FILE__));
define('NOMENTOR_URL', plugin_dir_url(__FILE__));

function nomentor_version() {
  static $ver;
  if (!$ver) {
    if (!function_exists('get_plugin_data')) require_once ABSPATH . 'wp-admin/includes/plugin.php';
    $data = get_plugin_data(__FILE__, false, false);
    $ver = $data['Version'];
  }
  return $ver;
}

// --- Shared helpers ---

function nomentor_rmdir_recursive(string $dir): void {
  if (!is_dir($dir)) return;
  $items = glob($dir . '/{,.}[!.,!..]*', GLOB_BRACE);
  foreach ($items as $item) {
    is_dir($item) ? nomentor_rmdir_recursive($item) : unlink($item);
  }
  @rmdir($dir);
}

function nomentor_verify_ajax($nonce_action, $capability = 'edit_pages') {
  check_ajax_referer($nonce_action, 'nonce');
  if (!current_user_can($capability)) wp_send_json_error('Unauthorized');
}

function nomentor_verify_ajax_post($nonce_action, $capability = 'edit_post') {
  check_ajax_referer($nonce_action, 'nonce');
  $post_id = intval($_POST['post_id'] ?? $_REQUEST['post_id'] ?? 0);
  $post = get_post($post_id);
  if (!$post || $post->post_type !== 'nomentor_page' || !current_user_can($capability, $post_id)) {
    wp_send_json_error('Unauthorized');
  }
  return $post;
}

function nomentor_save_page_data($post_id, $layout, $page_settings = null) {
  update_post_meta($post_id, '_nomentor_layout', wp_slash(json_encode($layout, JSON_UNESCAPED_UNICODE)));
  if ($page_settings) {
    update_post_meta($post_id, '_nomentor_page_settings', wp_slash(json_encode($page_settings, JSON_UNESCAPED_UNICODE)));
  }
}

function nomentor_apply_global_settings($data) {
  $apply_global = ($_POST['apply_global'] ?? '0') === '1';
  if ($apply_global && !empty($data['globalSettings'])) {
    update_option('nomentor_global_settings', json_encode($data['globalSettings'], JSON_UNESCAPED_UNICODE));
  }
}

function nomentor_export_page($post) {
  $layout = get_post_meta($post->ID, '_nomentor_layout', true) ?: '[]';
  $ps = get_post_meta($post->ID, '_nomentor_page_settings', true);
  return [
    'title' => $post->post_title,
    'layout' => json_decode($layout, true) ?: [],
    'pageSettings' => $ps ? json_decode($ps, true) : null,
  ];
}

// GitHub auto-updater
require_once NOMENTOR_DIR . 'includes/github-updater.php';
new \Nomentor\GitHubPluginUpdater(__FILE__);

// Static HTML renderer
require_once NOMENTOR_DIR . 'includes/renderer.php';

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

// List screen: Import/Export buttons + JS (enqueued as external file)
add_action('admin_enqueue_scripts', function ($hook) {
  if ($hook !== 'edit.php') return;
  $screen = get_current_screen();
  if (!$screen || $screen->post_type !== 'nomentor_page') return;
  wp_enqueue_script('nomentor-admin-list', NOMENTOR_URL . 'editor/admin-list.js', [], nomentor_version(), true);
  wp_localize_script('nomentor-admin-list', 'nmentorList', [
    'version' => nomentor_version(),
    'importNonce' => wp_create_nonce('nomentor_import'),
    'exportNonce' => wp_create_nonce('nomentor_export'),
    'ajaxUrl' => admin_url('admin-ajax.php'),
  ]);
});

// AJAX: export page(s)
add_action('wp_ajax_nomentor_export', function () {
  nomentor_verify_ajax('nomentor_export');

  $target = $_POST['target'] ?? '';
  $include_global = ($_POST['include_global'] ?? '0') === '1';

  $global_raw = get_option('nomentor_global_settings', '{}');
  $global = json_decode($global_raw, true) ?: [];

  if ($target === 'all') {
    $posts = get_posts(['post_type' => 'nomentor_page', 'numberposts' => -1, 'post_status' => 'any']);
    $pages = [];
    foreach ($posts as $p) $pages[] = nomentor_export_page($p);
    $export = [
      'nomentor' => true,
      'version' => nomentor_version(),
      'exportedAt' => gmdate('c'),
      'pages' => $pages,
    ];
    if ($include_global) $export['globalSettings'] = $global;
    wp_send_json_success(['export' => $export, 'filename' => 'nomentor-all-pages.json']);
  } else {
    $post_id = intval($target);
    $post = get_post($post_id);
    if (!$post || $post->post_type !== 'nomentor_page') wp_send_json_error('Page not found');
    $page_data = nomentor_export_page($post);
    $export = [
      'nomentor' => true,
      'version' => nomentor_version(),
      'exportedAt' => gmdate('c'),
      'layout' => $page_data['layout'],
      'pageSettings' => $page_data['pageSettings'],
    ];
    if ($include_global) $export['globalSettings'] = $global;
    $slug = sanitize_title($post->post_title) ?: 'page';
    wp_send_json_success(['export' => $export, 'filename' => "nomentor-{$slug}.json"]);
  }
});

// AJAX: import page (new or existing)
add_action('wp_ajax_nomentor_import', function () {
  nomentor_verify_ajax('nomentor_import');

  $raw = wp_unslash($_POST['data'] ?? '');
  $data = json_decode($raw, true);
  if (!$data) wp_send_json_error('Invalid import data');

  // Handle multi-page import
  if (!empty($data['pages']) && is_array($data['pages'])) {
    nomentor_apply_global_settings($data);
    $count = 0;
    foreach ($data['pages'] as $page) {
      if (empty($page['layout'])) continue;
      $pid = wp_insert_post([
        'post_type' => 'nomentor_page',
        'post_title' => $page['title'] ?? 'Imported Page',
        'post_status' => 'draft',
      ]);
      if (is_wp_error($pid)) continue;
      nomentor_save_page_data($pid, $page['layout'], $page['pageSettings'] ?? null);
      $count++;
    }
    wp_send_json_success(['redirect' => admin_url('edit.php?post_type=nomentor_page'), 'count' => $count]);
  }

  // Single page import
  if (empty($data['layout'])) wp_send_json_error('Invalid import data');

  $target_id = intval($_POST['post_id'] ?? 0);
  if ($target_id) {
    $post = get_post($target_id);
    if (!$post || $post->post_type !== 'nomentor_page') wp_send_json_error('Page not found');
    $post_id = $target_id;
  } else {
    $post_id = wp_insert_post([
      'post_type' => 'nomentor_page',
      'post_title' => 'Imported Page',
      'post_status' => 'draft',
    ]);
    if (is_wp_error($post_id)) wp_send_json_error('Could not create page');
  }

  nomentor_save_page_data($post_id, $data['layout'], $data['pageSettings'] ?? null);
  nomentor_apply_global_settings($data);

  wp_send_json_success([
    'post_id' => $post_id,
    'design_url' => admin_url('admin.php?page=nomentor-designer&post_id=' . $post_id),
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

  $actions['nm_export'] = '<a href="#" class="nomentor-export-link" data-post-id="' . $post->ID . '">Export</a>';
  $actions['nm_import'] = '<a href="#" class="nomentor-import-link" data-post-id="' . $post->ID . '">Import</a>';

  return $actions;
}
add_filter('post_row_actions', 'nomentor_add_row_actions', 10, 2);
add_filter('page_row_actions', 'nomentor_add_row_actions', 10, 2);

// Add "Design" button and slug editor on the edit screen
add_action('edit_form_after_title', function ($post) {
  if ($post->post_type !== 'nomentor_page') return;
  $url = admin_url('admin.php?page=nomentor-designer&post_id=' . $post->ID);
  $slug = $post->post_name ?: '';
  echo '<div style="margin:12px 0"><a href="' . esc_url($url) . '" class="button button-primary button-large">Open Designer</a></div>';
  echo '<div style="margin:12px 0">';
  echo '<label for="nomentor_slug"><strong>Slug:</strong></label> ';
  echo '<code>/static/</code>';
  echo '<input type="text" id="nomentor_slug" name="post_name" value="' . esc_attr($slug) . '" style="width:300px" />';
  echo '<code>/</code>';
  echo '</div>';
});

// Quick edit: add slug field
add_action('quick_edit_custom_box', function ($column, $post_type) {
  if ($post_type !== 'nomentor_page' || $column !== 'nomentor_path') return;
  ?>
  <fieldset class="inline-edit-col-right">
    <div class="inline-edit-col">
      <label><span class="title">Slug</span><input type="text" name="post_name" value="" /></label>
    </div>
  </fieldset>
  <?php
}, 10, 2);

// Populate quick edit slug field via JS
add_action('admin_footer-edit.php', function () {
  $screen = get_current_screen();
  if (!$screen || $screen->post_type !== 'nomentor_page') return;
  ?>
  <script>
  (function() {
    var origEdit = inlineEditPost.edit;
    inlineEditPost.edit = function(id) {
      origEdit.apply(this, arguments);
      var postId = typeof id === 'object' ? parseInt(this.getId(id)) : id;
      var row = document.getElementById('post-' + postId);
      if (!row) return;
      var pathCell = row.querySelector('.column-nomentor_path code');
      if (!pathCell) return;
      var slug = pathCell.textContent.replace(/^\/static\//, '').replace(/\/$/, '');
      var editRow = document.getElementById('edit-' + postId);
      if (editRow) {
        var input = editRow.querySelector('input[name="post_name"]');
        if (input) input.value = slug;
      }
    };
  })();
  </script>
  <?php
});

// AJAX: save page layout
add_action('wp_ajax_nomentor_save', function () {
  $post = nomentor_verify_ajax_post('nomentor_editor');

  $post_id = $post->ID;

  // Layout and history are base64-encoded from JS to avoid WP slash corruption
  // JS encodes: btoa(unescape(encodeURIComponent(json))) — PHP reverses with base64_decode (already UTF-8)
  $dataB64 = $_POST['data'] ?? '';
  $data = $dataB64 ? base64_decode($dataB64) : '[]';
  $historyB64 = $_POST['page_history'] ?? '';
  // wp_slash to counteract WP's auto-unslash in update_post_meta
  update_post_meta($post_id, '_nomentor_layout', wp_slash($data));
  update_post_meta($post_id, '_nomentor_history', $historyB64);

  // Regenerate static HTML if published
  if ($post->post_status === 'publish' && $post->post_name) {
    $static_dir = ABSPATH . 'static/' . $post->post_name;
    if (!is_dir($static_dir)) wp_mkdir_p($static_dir);
    file_put_contents($static_dir . '/index.html', nomentor_generate_static_html($post));
  }

  wp_send_json_success();
});

// AJAX: browse media library images
add_action('wp_ajax_nomentor_media', function () {
  nomentor_verify_ajax('nomentor_editor', 'upload_files');

  $page = max(1, intval($_GET['page'] ?? 1));
  $search = sanitize_text_field($_GET['search'] ?? '');
  $per_page = 40;

  $args = [
    'post_type' => 'attachment',
    'post_mime_type' => 'image',
    'post_status' => 'inherit',
    'posts_per_page' => $per_page,
    'paged' => $page,
    'orderby' => 'date',
    'order' => 'DESC',
  ];
  if ($search) $args['s'] = $search;

  $query = new WP_Query($args);
  $items = [];
  foreach ($query->posts as $att) {
    $thumb = wp_get_attachment_image_src($att->ID, 'thumbnail');
    $full = wp_get_attachment_image_src($att->ID, 'full');
    $items[] = [
      'id' => $att->ID,
      'url' => $full ? $full[0] : '',
      'thumb' => $thumb ? $thumb[0] : '',
      'alt' => get_post_meta($att->ID, '_wp_attachment_image_alt', true),
      'title' => $att->post_title,
    ];
  }

  wp_send_json_success([
    'items' => $items,
    'hasMore' => $page < $query->max_num_pages,
  ]);
});

// AJAX: list available fonts
add_action('wp_ajax_nomentor_fonts', function () {
  check_ajax_referer('nomentor_editor', 'nonce');

  $fonts = [
    // System stacks
    ['name' => 'System Default', 'family' => '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', 'type' => 'system'],
    ['name' => 'Serif', 'family' => 'Georgia, "Times New Roman", Times, serif', 'type' => 'system'],
    ['name' => 'Monospace', 'family' => '"SF Mono", Monaco, Consolas, "Courier New", monospace', 'type' => 'system'],
    // Google Fonts
    ['name' => 'Inter', 'family' => 'Inter', 'type' => 'google'],
    ['name' => 'Roboto', 'family' => 'Roboto', 'type' => 'google'],
    ['name' => 'Open Sans', 'family' => 'Open Sans', 'type' => 'google'],
    ['name' => 'Lato', 'family' => 'Lato', 'type' => 'google'],
    ['name' => 'Montserrat', 'family' => 'Montserrat', 'type' => 'google'],
    ['name' => 'Poppins', 'family' => 'Poppins', 'type' => 'google'],
    ['name' => 'Raleway', 'family' => 'Raleway', 'type' => 'google'],
    ['name' => 'Nunito', 'family' => 'Nunito', 'type' => 'google'],
    ['name' => 'Nunito Sans', 'family' => 'Nunito Sans', 'type' => 'google'],
    ['name' => 'Source Sans 3', 'family' => 'Source Sans 3', 'type' => 'google'],
    ['name' => 'Work Sans', 'family' => 'Work Sans', 'type' => 'google'],
    ['name' => 'DM Sans', 'family' => 'DM Sans', 'type' => 'google'],
    ['name' => 'Rubik', 'family' => 'Rubik', 'type' => 'google'],
    ['name' => 'Heebo', 'family' => 'Heebo', 'type' => 'google'],
    ['name' => 'Assistant', 'family' => 'Assistant', 'type' => 'google'],
    ['name' => 'Noto Sans', 'family' => 'Noto Sans', 'type' => 'google'],
    ['name' => 'Noto Sans Hebrew', 'family' => 'Noto Sans Hebrew', 'type' => 'google'],
    ['name' => 'Noto Serif', 'family' => 'Noto Serif', 'type' => 'google'],
    ['name' => 'Noto Serif Hebrew', 'family' => 'Noto Serif Hebrew', 'type' => 'google'],
    ['name' => 'Playfair Display', 'family' => 'Playfair Display', 'type' => 'google'],
    ['name' => 'Merriweather', 'family' => 'Merriweather', 'type' => 'google'],
    ['name' => 'Lora', 'family' => 'Lora', 'type' => 'google'],
    ['name' => 'PT Sans', 'family' => 'PT Sans', 'type' => 'google'],
    ['name' => 'PT Serif', 'family' => 'PT Serif', 'type' => 'google'],
    ['name' => 'Oswald', 'family' => 'Oswald', 'type' => 'google'],
    ['name' => 'Barlow', 'family' => 'Barlow', 'type' => 'google'],
    ['name' => 'Mulish', 'family' => 'Mulish', 'type' => 'google'],
    ['name' => 'Quicksand', 'family' => 'Quicksand', 'type' => 'google'],
    ['name' => 'Cabin', 'family' => 'Cabin', 'type' => 'google'],
    ['name' => 'Fira Sans', 'family' => 'Fira Sans', 'type' => 'google'],
    ['name' => 'Josefin Sans', 'family' => 'Josefin Sans', 'type' => 'google'],
    ['name' => 'Libre Baskerville', 'family' => 'Libre Baskerville', 'type' => 'google'],
    ['name' => 'Karla', 'family' => 'Karla', 'type' => 'google'],
    ['name' => 'Manrope', 'family' => 'Manrope', 'type' => 'google'],
    ['name' => 'Space Grotesk', 'family' => 'Space Grotesk', 'type' => 'google'],
    ['name' => 'Plus Jakarta Sans', 'family' => 'Plus Jakarta Sans', 'type' => 'google'],
    ['name' => 'Outfit', 'family' => 'Outfit', 'type' => 'google'],
    ['name' => 'Lexend', 'family' => 'Lexend', 'type' => 'google'],
    ['name' => 'Bitter', 'family' => 'Bitter', 'type' => 'google'],
    ['name' => 'Frank Ruhl Libre', 'family' => 'Frank Ruhl Libre', 'type' => 'google'],
    ['name' => 'Secular One', 'family' => 'Secular One', 'type' => 'google'],
    ['name' => 'Alef', 'family' => 'Alef', 'type' => 'google'],
    ['name' => 'Varela Round', 'family' => 'Varela Round', 'type' => 'google'],
    ['name' => 'Suez One', 'family' => 'Suez One', 'type' => 'google'],
  ];

  $search = strtolower(sanitize_text_field($_GET['search'] ?? ''));
  if ($search) {
    $fonts = array_values(array_filter($fonts, function($f) use ($search) {
      return strpos(strtolower($f['name']), $search) !== false;
    }));
  }

  wp_send_json_success($fonts);
});

// AJAX: upload image to media library
add_action('wp_ajax_nomentor_upload', function () {
  nomentor_verify_ajax('nomentor_editor', 'upload_files');

  if (empty($_FILES['file'])) wp_send_json_error('No file');

  require_once ABSPATH . 'wp-admin/includes/image.php';
  require_once ABSPATH . 'wp-admin/includes/file.php';
  require_once ABSPATH . 'wp-admin/includes/media.php';

  $attachment_id = media_handle_upload('file', 0);
  if (is_wp_error($attachment_id)) {
    wp_send_json_error($attachment_id->get_error_message());
  }

  wp_send_json_success([
    'id' => $attachment_id,
    'url' => wp_get_attachment_url($attachment_id),
    'alt' => get_post_meta($attachment_id, '_wp_attachment_image_alt', true),
  ]);
});

// AJAX: rename page
add_action('wp_ajax_nomentor_rename', function () {
  $post = nomentor_verify_ajax_post('nomentor_editor');
  $title = sanitize_text_field($_POST['title'] ?? '');
  if (empty($title)) wp_send_json_error('Empty title');
  wp_update_post(['ID' => $post->ID, 'post_title' => $title]);
  wp_send_json_success();
});

// AJAX: load page layout
add_action('wp_ajax_nomentor_load', function () {
  $post_id = intval($_REQUEST['post_id'] ?? 0);
  $post = get_post($post_id);

  if (!$post || $post->post_type !== 'nomentor_page' || !current_user_can('edit_post', $post_id)) {
    wp_send_json_error('Unauthorized');
  }

  $data = get_post_meta($post_id, '_nomentor_layout', true) ?: '[]';
  $historyData = get_post_meta($post_id, '_nomentor_history', true);
  $pageSettings = get_post_meta($post_id, '_nomentor_page_settings', true);
  // Base64-encode layout to avoid JSON-in-JSON corruption
  wp_send_json_success([
    'layoutB64' => base64_encode($data),
    'history' => $historyData ?: '',
    'pageSettings' => $pageSettings ? json_decode($pageSettings, true) : null,
  ]);
});

// AJAX: save global settings
add_action('wp_ajax_nomentor_save_global_settings', function () {
  nomentor_verify_ajax('nomentor_editor');
  $settings = wp_unslash($_POST['settings'] ?? '{}');
  update_option('nomentor_global_settings', $settings);
  wp_send_json_success();
});

// AJAX: save page settings
add_action('wp_ajax_nomentor_save_page_settings', function () {
  $post = nomentor_verify_ajax_post('nomentor_editor');
  $settings = wp_unslash($_POST['settings'] ?? '{}');
  update_post_meta($post->ID, '_nomentor_page_settings', $settings);

  // Regenerate static HTML so changes (scripts, meta, colors, etc.) take effect immediately.
  if ($post->post_status === 'publish' && $post->post_name) {
    $static_dir = ABSPATH . 'static/' . $post->post_name;
    if (!is_dir($static_dir)) wp_mkdir_p($static_dir);
    file_put_contents($static_dir . '/index.html', nomentor_generate_static_html($post));
  }

  wp_send_json_success();
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
    nomentor_rmdir_recursive($static_dir);
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
  nomentor_rmdir_recursive($static_dir);
});

// nomentor_generate_static_html() is in includes/renderer.php

// Intercept early to render designer without WP admin chrome
require_once NOMENTOR_DIR . 'editor/editor.php';

add_action('admin_init', function () {
  if (!isset($_GET['page']) || $_GET['page'] !== 'nomentor-designer') return;
  nomentor_render_editor();
});
