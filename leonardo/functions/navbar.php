<?php
function navbar_menus() {

	register_nav_menus( array(
		'primary_left' 	=> 'Primary left',
		'primary_right' 	=> 'Primary right',
		'primary_top' 	=> 'Primary top',
		'mobile' 	=> 'Mobile',
		'footer_1' 	=> 'Footer 1',
		'footer_2' 	=> 'Footer 2',
	) );

}

add_action( 'after_setup_theme', 'navbar_menus' );


add_action( 'init', 'remove_nestedpages_menu' );
function remove_nestedpages_menu() {
	wp_delete_nav_menu('Nested Pages');
	for ($i = 1; $i < 10; $i++) {
		wp_delete_nav_menu('Nested Pages '.$i);
	}
}


// Filtering a Class in Navigation Menu Item
function special_nav_class($classes, $item){
	if(is_single() && $item->title == 'Produkty' && (get_post_type() == "produkt") ){
		$classes[] = 'current-menu-item';
	}
	if(is_tax() && $item->title == 'Produkty' ){
		$classes[] = 'current-menu-item';
	}
	return $classes;
}
add_filter('nav_menu_css_class' , 'special_nav_class' , 10 , 2);






// class Megamenu_walker extends Walker_Nav_Menu {
//   function start_lvl( &$output, $depth = 0, $args = array() ) {
// 		if ( isset( $args->item_spacing ) && 'discard' === $args->item_spacing ) {
// 			$t = '';
// 			$n = '';
// 		} else {
// 			$t = "\t";
// 			$n = "\n";
// 		}
// 		$indent = str_repeat( $t, $depth );
// 		$output .= '<ul class="panel">';
// 	}
//
//
// 	function start_el(&$output, $item, $depth=0, $args=array(), $id = 0) {
// 		$title = $item->title;
// 		$permalink = $item->url;
//     $css_classes = $item->classes;
//     $css_classes = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $css_classes ), $item, $args ) );
// 		$output .= '<li class="'.$css_classes.'">';
//     $output .= '<a href="'.$permalink.'">';
//     switch( $depth ) {
//       case 0:
//         $output .= $title;
//         $output .= '<span class="caret"></span>';
//         break;
//       case 1:
//         $output .= '<h2>'.$item->title.'</h2>';
//         $output .= '<p>'.$item->attr_title.'</p>';
//         break;
//     }
// 		$output .= '</a>';
// 	}
//   function end_el( &$output, $item, $depth = 0, $args = array() ) {
// 		$output .= "</li>";
// 	}
// }
