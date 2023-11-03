<?php
// allow all tags in TinyMCE Advanced
function override_mce_options($initArray) {
  $opts = '*[*]';
  $initArray['valid_elements'] = $opts;
  $initArray['extended_valid_elements'] = $opts;
  return $initArray;
}
add_filter('tiny_mce_before_init', 'override_mce_options');

// dodanie editor.css do TinyMCE
function wpdocs_theme_add_editor_styles() {
  add_editor_style( 'assets/css/editor.css' );
}
add_action( 'admin_init', 'wpdocs_theme_add_editor_styles' );

// wypierdalanie <p> z obrazków : )
function img_unautop($pee) {
  $pee = preg_replace('/<p>\\s*?(<a .*?><img.*?><\\/a>|<img.*?>)?\\s*<\\/p>/s', '$1', $pee);
  return $pee;
}
add_filter( 'acf_the_content', 'img_unautop', 30 );

function filter_ptags_on_images($content){
  return preg_replace('/<p>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content);
}
add_filter('the_content', 'filter_ptags_on_images');
