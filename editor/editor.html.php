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
      </div>
    </aside>

    <main class="nomentor-canvas" id="nomentor-canvas">
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
