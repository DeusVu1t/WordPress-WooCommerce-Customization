<?php

// product box in loop

// remove ranting
remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5);
// remove add to cart
remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart', 10);




remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_sharing', 50);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10);


remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_title', 5);
// remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_price', 10);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40);


remove_action('woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10);
remove_action('woocommerce_after_single_product_summary', 'woocommerce_upsell_display', 15);



// helper for get product image url in loop
function my_get_the_product_thumbnail_url( $size = 'large' ) {
  global $post;
  $image_size = apply_filters( 'single_product_archive_thumbnail_size', $size );
  return get_the_post_thumbnail_url( $post->ID, $image_size );
}

// remove woocommerce css
add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );



/**
 * Breadcrumbs change to UL
 */
add_filter( 'woocommerce_breadcrumb_defaults', 'jk_woocommerce_breadcrumbs' );
function jk_woocommerce_breadcrumbs() {
  return array(
    'delimiter'   => '',
    'wrap_before' => '<div class="breadcrumbs"><div class="content"><ul>',
    'wrap_after'  => '</ul></div></div>',
    'before'      => '<li>',
    'after'       => '</li>',
    'home'        => _x( 'Home', 'breadcrumb', 'woocommerce' ),
  );
}



// add_filter( 'woocommerce_product_get_price', 'pr_reseller_price', 10, 2 );
// add_filter( 'woocommerce_product_variation_get_price', 'pr_reseller_price', 10, 2 );
// add_filter( 'woocommerce_product_get_regular_price', 'pr_reseller_price', 10, 2 );
// add_filter( 'woocommerce_product_get_sale_price', 'pr_reseller_price', 10, 2 );
// function pr_reseller_price($price){
//   return str_replace(".", ",", $price);
// }


function getCartCount() {
  return WC()->cart->get_cart_contents_count();
}

// Change number of related products output
add_filter( 'woocommerce_output_related_products_args', 'related_products_limit_args', 20 );
function related_products_limit_args( $args ) {
	$args['posts_per_page'] = 3; // 4 related products
	return $args;
}



/**
 * Changes the redirect URL for the Return To Shop button in the cart.
 *
 * @return string
 */
function wc_empty_cart_redirect_url() {
	return 'http://yourdomain.com/your-page/';
}
add_filter( 'woocommerce_return_to_shop_redirect', 'wc_empty_cart_redirect_url' );



// Remove CSS and/or JS for Select2 used by WooCommerce, see https://gist.github.com/Willem-Siebe/c6d798ccba249d5bf080.
add_action( 'wp_enqueue_scripts', 'wsis_dequeue_stylesandscripts_select2', 100 );

function wsis_dequeue_stylesandscripts_select2() {
  if ( class_exists( 'woocommerce' ) ) {
    wp_dequeue_style( 'select2' );
    wp_deregister_style( 'select2' );

    wp_dequeue_script( 'select2');
    wp_deregister_script('select2');

  }
}


function get_product_attributes() {
  global $product;
  $result = [];
  foreach ( $product->attributes as $variable ) {
    $key = 'attribute_' . sanitize_title($variable->get_data()['name']);
    $result[ $key ] = [
      'name' => $variable->get_data()['name'],
      'values' => $variable->get_data()['options'],
    ];
  }
  return $result;
}



//Adding Alphabetical sorting option to shop and product settings pages
function sip_alphabetical_shop_ordering( $sort_args ) {
  if ( !isset($_GET['orderby']) || $_GET['orderby'] === 'menu_order' ) {
    $sort_args['orderby'] = 'title';
    $sort_args['order'] = 'asc';
    $sort_args['meta_key'] = '';
  }
  return $sort_args;
}
add_filter( 'woocommerce_get_catalog_ordering_args', 'sip_alphabetical_shop_ordering' );




/**
 * Change number of products that are displayed per page (shop page)
 */
add_filter( 'loop_shop_per_page', 'new_loop_shop_per_page', 20 );

function new_loop_shop_per_page( $cols ) {
  $cols = 18;
  return $cols;
}
