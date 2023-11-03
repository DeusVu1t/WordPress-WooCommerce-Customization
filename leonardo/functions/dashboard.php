<?php
/**
 * Add a widget to the dashboard.
 *
 * This function is hooked into the 'wp_dashboard_setup' action below.
 */
function example_add_dashboard_widgets() {

	wp_add_dashboard_widget(
    'leo_widget',         // Widget slug.
    'Grupa Leonardo',         // Title.
    'leo_dashboard_widget_function' // Display function.
  );
}
add_action( 'wp_dashboard_setup', 'example_add_dashboard_widgets' );

/**
 * Create the function to output the contents of our Dashboard Widget.
 */
function leo_dashboard_widget_function() {
	// Display whatever it is you want to show.
	?>
    <p>nice things by <a href="http://leonardo.pl/" target="_blank">Grupa Leonardo</a></p>
  <?php
}


// ukrywanie niepotrzebnych elementów z listy bocznej
function custom_menu_page_removing() {
	// remove_menu_page( 'index.php' );                  //Dashboard
  // remove_menu_page( 'jetpack' );                    //Jetpack*
  remove_menu_page( 'edit.php' );                   //Posts
  // remove_menu_page( 'upload.php' );                 //Media
  // remove_menu_page( 'edit.php?post_type=page' );    //Pages
//  remove_menu_page( 'edit-comments.php' );          //Comments
  // remove_menu_page( 'themes.php' );                 //Appearance
  // remove_menu_page( 'plugins.php' );                //Plugins
  // remove_menu_page( 'users.php' );                  //Users
  // remove_menu_page( 'tools.php' );                  //Tools
  // remove_menu_page( 'options-general.php' );        //Settings

	global $submenu;
	// unset($submenu['themes.php'][5]); // usuwanie Wygląd->Motywy
	unset($submenu['themes.php'][6]); // usuwanie Wygląd->Personalizacja
  unset($submenu['themes.php'][20]); // usuwanie Wygląd->Tło
  unset($submenu['tools.php'][5]); // usuwanie Narzędzia->Dostępne narzędzia
  unset($submenu['tools.php'][10]); // usuwanie Narzędzia->Import
  unset($submenu['tools.php'][15]); // usuwanie Narzędzia->Eksport
	// var_dump($submenu);
}
add_action( 'admin_menu', 'custom_menu_page_removing' );


// usuwanie Wygląd->Edytor
function remove_editor_menu() {
  remove_action('admin_menu', '_add_themes_utility_last', 101);
}
add_action('_admin_menu', 'remove_editor_menu', 1);




// usuwanie niepotrezbnych widgetów z dashboard'u
function remove_dashboard_widgets() {
	global $wp_meta_boxes;

	unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']);
	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']);
	unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_activity']);
	// unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']);
	// unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']);
	// unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);
	// unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_drafts']);
	// unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']);
	// unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);

}
add_action('wp_dashboard_setup', 'remove_dashboard_widgets' );
