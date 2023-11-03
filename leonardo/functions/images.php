<?php
// upscale images
function image_crop_dimensions($default, $orig_w, $orig_h, $new_w, $new_h, $crop){
  if ( !$crop ) return null;
  $aspect_ratio = $orig_w / $orig_h;
  $size_ratio = max($new_w / $orig_w, $new_h / $orig_h);
  $crop_w = round($new_w / $size_ratio);
  $crop_h = round($new_h / $size_ratio);
  $s_x = floor( ($orig_w - $crop_w) / 2 );
  $s_y = floor( ($orig_h - $crop_h) / 2 );
  return array( 0, 0, (int) $s_x, (int) $s_y, (int) $new_w, (int) $new_h, (int) $crop_w, (int) $crop_h );
}
add_filter('image_resize_dimensions', 'image_crop_dimensions', 10, 6);


// remove image sizes
function remove_default_image_sizes( $sizes ) {

  unset( $sizes[ 'medium' ]);          // Remove Thumbnail (150 x 150 hard cropped)
  unset( $sizes[ 'medium' ]);          // Remove Medium resolution (300 x 300 max height 300px)
  unset( $sizes[ 'medium_large' ]);    // Remove Medium Large (added in WP 4.4) resolution (768 x 0 infinite height)
  unset( $sizes[ 'large' ]);           // Remove Large resolution (1024 x 1024 max height 1024px)
  // unset( $sizes[ 'thumbnail' ]);           // Remove thumbnail

  return $sizes;
}
add_filter( 'intermediate_image_sizes_advanced', 'remove_default_image_sizes' );


// new image sizes

add_action( 'after_setup_theme', 'new_image_sizes' );
function new_image_sizes() {
  // add_image_size( 'product-large-square', 650, 650, false );
  // add_image_size( 'product-thumbnail', 275, 366, false );
  // add_image_size( 'category-square', 400, 400, true );
  // add_image_size( 'page-header', 880, 410, true );
}



function renderPicture( ?int $id = 0, ?array $params = null ) {

  $image = wp_get_attachment_metadata($id, true);
  if ($image === '') {
    return;
  }

  $uploadsDir = wp_upload_dir()['baseurl'].'/';
  $jpg_path = null;
  $png_path = null;
  $webp_path = null;
  $default_patch = $uploadsDir.$image['file'];

  $path = pathinfo($image['file']);
  $webp_path = $uploadsDir.$path['dirname']."/".$path['filename'].".webp";
  $webp_path = sprintf(
    '%s/%s/%s.webp',
    wp_upload_dir()['baseurl'],
    $path['dirname'],
    $path['filename']
  );
  // echo '<pre>';
  // var_dump( $image );
  // echo '</pre>';

  switch( $path['extension'] ) {
    case 'jpg':
      $jpg_path = $default_patch;
      break;
    case 'png':
      $png_path = $default_patch;
      break;
  }

  if ( !file_exists( wp_upload_dir()['basedir']."/".$path['dirname']."/".$path['filename'].".webp" ) ) {
    $webp_path = null;
  }


  $picture_attributes = "";
  if (isset($params['css_class'])) {
    $picture_attributes .= sprintf(' class="%s"', $params['css_class']);
  }
  printf('<picture%s>', $picture_attributes);
  if ( $webp_path ) {
    printf('<source srcset="%s" type="image/webp">', $webp_path);
  }
  if ( $jpg_path ) {
    printf('<source srcset="%s" type="image/jpeg">', $jpg_path);
  }
  if ( $png_path ) {
    printf('<source srcset="%s" type="image/png">', $png_path);
  }

  $img_attributes = "";
  if (isset($params['width'])) {
    $img_attributes .= sprintf(' width="%s"', $params['width']);
  }
  if (isset($params['height'])) {
    $img_attributes .= sprintf(' height="%s"', $params['height']);
  }

  printf('<img src="%s" alt="%s" %s>', $default_patch, 'alt', $img_attributes);
  echo '</picture>';
}
