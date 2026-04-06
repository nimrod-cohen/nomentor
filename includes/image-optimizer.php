<?php
defined('ABSPATH') || exit;

/**
 * Convert a local image to WebP format for static page serving.
 *
 * @param string $src_url  Original image URL (e.g. /wp-content/uploads/2026/04/photo.jpg)
 * @param string $slug     Page slug (for output directory)
 * @return string|null     Relative path to WebP file (e.g. images/abc123.webp) or null if skipped
 */
function nomentor_maybe_convert_to_webp(string $src_url, string $slug): ?string {
  if (!$src_url) return null;

  // Skip external URLs
  $site_host = parse_url(home_url(), PHP_URL_HOST);
  $img_host = parse_url($src_url, PHP_URL_HOST);
  if ($img_host && $img_host !== $site_host) return null;

  // Skip non-raster formats
  $ext = strtolower(pathinfo(parse_url($src_url, PHP_URL_PATH) ?? '', PATHINFO_EXTENSION));
  if (!in_array($ext, ['jpg', 'jpeg', 'png'])) return null;

  // Convert URL to local filesystem path
  $site_url = untrailingslashit(site_url());
  $path = $src_url;
  if (str_starts_with($path, $site_url)) {
    $path = substr($path, strlen($site_url));
  }
  $path = ltrim($path, '/');
  $source_path = ABSPATH . $path;

  if (!file_exists($source_path)) return null;

  // Destination
  $hash = md5($src_url);
  $dest_dir = ABSPATH . 'static/' . $slug . '/images';
  $dest_path = $dest_dir . '/' . $hash . '.webp';
  $relative = 'images/' . $hash . '.webp';

  // Freshness check — skip if WebP is newer than source
  if (file_exists($dest_path) && filemtime($dest_path) >= filemtime($source_path)) {
    return $relative;
  }

  wp_mkdir_p($dest_dir);

  // Convert with Imagick (preferred) or GD fallback
  if (extension_loaded('imagick')) {
    try {
      $im = new Imagick($source_path);
      $im->setImageFormat('webp');
      $im->setImageCompressionQuality(82);
      // Strip metadata to reduce size
      $im->stripImage();
      $im->writeImage($dest_path);
      $im->destroy();
      return $relative;
    } catch (Exception $e) {
      // Fall through to GD
    }
  }

  if (function_exists('imagewebp')) {
    $img = match ($ext) {
      'jpg', 'jpeg' => @imagecreatefromjpeg($source_path),
      'png' => @imagecreatefrompng($source_path),
      default => false,
    };
    if ($img) {
      imagewebp($img, $dest_path, 82);
      imagedestroy($img);
      return $relative;
    }
  }

  return null;
}
