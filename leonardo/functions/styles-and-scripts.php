<?php
/**
 * Enqueue scripts and styles.
 */
function leonardo_scripts() {
	wp_enqueue_style( 'leonardo-css', get_template_directory_uri().'/assets/css/main.css' );
    wp_enqueue_script( 'leonardo-js', get_template_directory_uri().'/assets/js/main.js' );
	wp_enqueue_style( 'leonardo-css-new', get_template_directory_uri().'/assets/css/update-product.css' );
//    wp_enqueue_script( 'leonardo-download-all', get_template_directory_uri().'/assets/js/downloadAll.js', ['leonardo-js'] );

	// add js var with assets path
	wp_localize_script('leonardo-js', 'wp', array(
		'url' => get_bloginfo('url'),
		'assets' => get_bloginfo('template_directory').'/assets',
		'nonce' => wp_create_nonce()
	));

	if (!is_admin()) {
		wp_deregister_style( 'dashicons' ); // remove default wp admin bar css
	}
}
add_action( 'wp_enqueue_scripts', 'leonardo_scripts' );



// dodawanie async defer do javascript
function add_async_attribute($tag, $handle) {
  if (!in_array($handle, ['leonardo-js'], true)) {
      return $tag;
  }

  return str_replace(' src', ' defer src', $tag);
}
add_filter('script_loader_tag', 'add_async_attribute', 10, 2);



// Remove Query Strings From Static Resources
function _remove_script_version($src){
  return substr($src , 0, strpos($src , "?"));
}
if ( !is_admin() ) {
  add_filter( 'script_loader_src', '_remove_script_version', 15, 1 );
  add_filter( 'style_loader_src', '_remove_script_version', 15, 1 );
}
