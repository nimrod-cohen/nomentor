<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nomentor — <?= $title ?></title>
  <link rel="stylesheet" href="<?= esc_url($css_url) ?>">
</head>
<body>

  <div class="nomentor-toolbar">
    <a href="<?= esc_url($back_url) ?>">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
      Back
    </a>
    <span class="separator"></span>
    <span class="page-title"><?= $title ?></span>
    <span class="spacer"></span>
    <a href="<?= esc_url($view_url) ?>" target="_blank" class="<?= $view_url ? '' : 'disabled' ?>" title="View page">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
    </a>
  </div>

  <div class="nomentor-editor">
    <aside class="nomentor-sidebar-left" id="nomentor-sidebar-left">
      <div class="sidebar-header">Toolbox</div>
      <div class="sidebar-content" id="nomentor-toolbox">
        <div class="toolbox-grid">
          <div class="toolbox-item" draggable="true" data-component="grid">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/></svg>
            <span>Grid</span>
          </div>
          <div class="toolbox-item" draggable="true" data-component="heading">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h12"/><path d="M6 20V4"/><path d="M18 20V4"/></svg>
            <span>Heading</span>
          </div>
          <div class="toolbox-item" draggable="true" data-component="text">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M15.1 18H3"/></svg>
            <span>Text</span>
          </div>
          <div class="toolbox-item" draggable="true" data-component="image">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            <span>Image</span>
          </div>
        </div>
      </div>
    </aside>

    <main class="nomentor-canvas" id="nomentor-canvas">
      <div class="canvas-page" id="nomentor-page">
        <div class="canvas-empty">Drag components here to start building</div>
      </div>
    </main>

    <aside class="nomentor-sidebar-right" id="nomentor-sidebar-right">
      <div class="sidebar-header">Navigator</div>
      <div class="sidebar-content" id="nomentor-navigator">
      </div>
    </aside>
  </div>

  <script>
    var nomentor = {
      postId: <?= intval($post_id) ?>,
      ajaxUrl: '<?= esc_url(admin_url('admin-ajax.php')) ?>',
      nonce: '<?= esc_attr($nonce) ?>'
    };
  </script>
  <script src="<?= esc_url($js_url) ?>"></script>
</body>
</html>
