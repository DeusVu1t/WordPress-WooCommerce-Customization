<?php
  /**
   * Security definitions
   *
   * @author Paweł Farys <pfarys@leonardo.pl>
   * @package Leonardo
   * @version 1.0
   */

  /**
   * Remove unnecessary items from dashboard sidebar
   */
  add_action('admin_menu', function () {
    global $submenu;
    remove_menu_page('tools.php');        // Remove Tools from sidebar

    unset(
      $submenu['themes.php'][5],        // remove Appearance > Themes
      $submenu['themes.php'][6],        // remove Appearance > Customization
      $submenu['themes.php'][20],       // remove Appearance > Background
      $submenu['tools.php'][5],         // remove Tools > Available tools
      $submenu['tools.php'][10],        // remove Tools > Import
      $submenu['tools.php'][15]         // remove Tools > Export
    );
  });

  /**
   * Remove items from admin navbar
   *
   * @param WP_Admin_Bar $wp_admin_bar
   */
   add_action('admin_bar_menu', function (WP_Admin_Bar $wp_admin_bar) {
    $wp_admin_bar->remove_node('new-wppb-rf-cpt');
    $wp_admin_bar->remove_node('new-wppb-epf-cpt');
    $wp_admin_bar->remove_node('new-link');
    $wp_admin_bar->remove_node('customize');
    $wp_admin_bar->remove_node('new-media');
    $wp_admin_bar->remove_node('new-user');
    $wp_admin_bar->remove_menu('wp-logo');
    $wp_admin_bar->remove_menu('background');
    $wp_admin_bar->remove_menu('themes');
    $wp_admin_bar->remove_menu('search');
    $wp_admin_bar->remove_menu('updates');
  }, 999);

  /**
   * Remove theme's 'Editor' from dashboard
   */
  add_action('_admin_menu', function () {
    remove_action('admin_menu', '_add_themes_utility_last', 101);
  }, 1);

  /**
   * Remove WordPress version
   *
   * @return string
   */
  add_filter('the_generator', function () {
    return '';
  });

  /**
   * Remove WordPress version from assets
   *
   * @param string $src
   * @return string
   */
  add_filter('style_loader_src', 'removeWordPressVersionFromAssets', 9999);
  add_filter('script_loader_src', 'removeWordPressVersionFromAssets', 9999);
  function removeWordPressVersionFromAssets(string $src): string
  {
    if (strpos($src, 'ver=')) {
      $src = remove_query_arg('ver', $src);
    }

    return $src;
  }

  /**
   * Completely remove the author URL
   */
  add_action('template_redirect', function () {
    if (is_author()) {
      wp_safe_redirect(home_url());
      exit();
    }
  });

  /**
   * Disable WP REST API JSON endpoints
   *
   * @param null $access
   * @return WP_Error
   */
  add_filter('rest_authentication_errors', function ($access) {
    return new WP_Error(
      'rest_cannot_access',
      'Access restricted by `VRS-Factory WP Firewall`', [
        'status' => rest_authorization_required_code()
      ]
    );
  });

  /**
   * Remove REST API info from head and headers
   */
  remove_action('xmlrpc_rsd_apis', 'rest_output_rsd');
  remove_action('wp_head', 'rest_output_link_wp_head', 10);
  remove_action('template_redirect', 'rest_output_link_header', 11);

  /**
   * Remove RSD link
   */
  remove_action ('wp_head', 'rsd_link');

  /**
   * Remove XML Manifest
   */
  remove_action('wp_head', 'wlwmanifest_link');

  /**
   * Remove shortlink
   */
  remove_action('wp_head', 'wp_shortlink_wp_head');

  /**
   * Remove feed links from <head>
   */
  add_filter('feed_links_show_comments_feed', '__return_false');
  remove_action('wp_head', 'feed_links', 2);

  /**
   * Remove post relational links
   */
  remove_action('wp_head', 'start_post_rel_link');
  remove_action('wp_head', 'index_rel_link');
  remove_action('wp_head', 'adjacent_posts_rel_link');

  /**
   * Unregistering wp-embed scripts
   */
  add_action('wp_footer', function () {
    wp_deregister_script( 'wp-embed' );
  });

  /**
   * Removing emojicons
   */
  add_action('init', function() {
    remove_action('admin_print_styles', 'print_emoji_styles');
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
    remove_filter('the_content_feed', 'wp_staticize_emoji');
    remove_filter('comment_text_rss', 'wp_staticize_emoji');
  });

  /**
   * Validation username on user's account creation process
   */
  if (is_admin()) {
    add_filter('validate_username', function ($valid, $username) {
      return preg_match('/^admin|user|uzytkownik|gosc*/i', $username) === 1
        ? false
        : $valid
      ;
    }, 10, 2);
  }
