<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= $title ?></title>
  <link rel="stylesheet" href="<?= esc_url($css_url) ?>">
</head>
<body>
  <div id="nomentor-root"></div>

  <script>
    window.nomentor = {
      postId: <?= intval($post_id) ?>,
      title: <?= json_encode($post->post_title) ?>,
      backUrl: <?= json_encode($back_url) ?>,
      viewUrl: <?= json_encode($view_url) ?>,
      ajaxUrl: <?= json_encode(admin_url('admin-ajax.php')) ?>,
      nonce: <?= json_encode($nonce) ?>,
      globalSettings: <?= $global_settings ?>,
      version: <?= json_encode(nomentor_version()) ?>
    };
  </script>
  <script src="<?= esc_url($js_url) ?>"></script>
</body>
</html>
