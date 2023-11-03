<?php
function leonardo_redirect(){
  // jezeli jest strona usługi przekieruj na pierwszą usługę
  // if ( is_page(14) ) {
  //   $args = array(
  //   	'post_parent' => 14,
  //   	'post_type'   => 'any',
  //   	'numberposts' => -1,
  //   	'post_status' => 'publish',
  //     'orderby' => 'menu_order'
  //   );
  //   $children = get_children( $args );
  //   $redirect_id = array_pop($children);
  //   $redirect_id = $redirect_id->ID;
  //   // pobieranie listy podstron i pobranie ID dla pierwszej podstrony wg kolejności w menu
  //   wp_redirect( get_the_permalink($redirect_id) );
  // }
}
add_action( 'template_redirect', 'leonardo_redirect' );

// przekierowanie do strony głównej podczas próby wyświetlenia określonych typów postów
function cpt_redirect_post() {
  // $queried_post_type = get_query_var('post_type');
  // if ( is_single() && 'employee' ==  $queried_post_type ) {
  //   wp_redirect( home_url(), 301 );
  //   exit;
  // }
}
add_action( 'template_redirect', 'cpt_redirect_post' );
