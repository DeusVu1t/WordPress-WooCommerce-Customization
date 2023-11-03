<?php

// modyfikacja #adminbar
function modify_admin_bar( $wp_admin_bar ){
	// global $wp_admin_bar;
  $wp_admin_bar->remove_node( 'new-post' );
  $wp_admin_bar->remove_node( 'new-wppb-rf-cpt' );
  $wp_admin_bar->remove_node( 'new-wppb-epf-cpt' );
  $wp_admin_bar->remove_node( 'new-link' );
  $wp_admin_bar->remove_node( 'new-media' );
  $wp_admin_bar->remove_node( 'new-user' );
  $wp_admin_bar->remove_menu( 'comments' );
  $wp_admin_bar->remove_menu( 'wp-logo' );
  $wp_admin_bar->remove_menu( 'background' );
  $wp_admin_bar->remove_menu( 'themes' );
  $wp_admin_bar->remove_menu( 'search' );
  // do something with $wp_admin_bar;
	// dodanie własnego linku
	$args = array(
		'id'    => 'test',
		'parent'=> 'site-name',
		'title' => 'Grupa Leonardo',
		'href'  => 'http://leonardo.pl/',
		'meta'  => array( 'class' => 'my-toolbar-page' )
	);
	$wp_admin_bar->add_node( $args );
}
add_action( 'admin_bar_menu', 'modify_admin_bar', 999 );
