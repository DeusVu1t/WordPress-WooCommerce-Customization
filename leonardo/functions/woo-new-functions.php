<?php



function create_taste_options()
{
  register_post_type(
    'ask_option',
        array(
      'labels' => array(
        'name'                  => _x('Opcje smakowe oraz toppery', 'Post type general name', 'recipe'),
        'singular_name'         => _x('Opcja smakowa oraz topper', 'Post type singular name', 'recipe'),
        'menu_name'             => _x('Opcje smakowe oraz toppery', 'Admin Menu text', 'recipe'),
        'name_admin_bar'        => _x('Opcja smakowa oraz topper', 'Add New on Toolbar', 'recipe'),
        'add_new'               => __('Dodaj nową', 'recipe'),
        'add_new_item'          => __('Dodaj nową opcję smakową', 'recipe'),
        'new_item'              => __('Nowa opcja smakowa oraz topper', 'recipe'),
        'edit_item'             => __('Edytuj opcję', 'recipe'),
        'view_item'             => __('Pokaż opcję', 'recipe'),
        'all_items'             => __('Wszystkie opcje smakowe oraz toppery', 'recipe'),
        'search_items'          => __('Wyszukaj opcję', 'recipe'),
        'parent_item_colon'     => __('Nadrzędne opcje :', 'recipe'),
      ),
      'supports' => array('title'),
      'show_ui' => true, 
      'exclude_from_search' => true,  
      'public' => false,
      'has_archive' => false,
      'rewrite' => array('slug' => 'opcje-smakowe'),
      'taxonomies' => array('category'),
    )
  );
}


add_action('init', 'create_taste_options');

