<?php
function create_posttype()
{
    register_post_type(
        'praca_',
        array(
            'labels' => array(
                'name' => __('praca_'),
                'singular_name' => __('praca_'),
            ),
            'public' => true,
            'has_archive' => false,
            'rewrite' => array('slug' => 'praca_'),
        )
    );
}
add_action('init', 'create_posttype');

function cw_post_type_praca_()
{
    $supports = array(
        'title',
        'editor',
        'author',
        'thumbnail',
        'excerpt',
        'custom-fields',
        'revisions',
        'revisions',
        'post-formats',
        'template',
    );

    $labels = array(
        'name' => _x('Praca', 'plural'),
        'singular_name' => _x('Praca', 'singular'),
        'menu_name' => _x('Praca', 'admin menu'),
        'name_admin_bar' => _x('praca', 'admin bar'),
        'add_new' => _x('Dodaj', 'add'),
        'add_new_item' => __('Dodaj nowy'),
        'new_item' => __('Nowy wpis'),
        'edit_item' => __('Edytuj wpis'),
        'view_item' => __('Zobacz wpis'),
        'all_items' => __('Wszystkie wpisy'),
        'search_items' => __('Szukaj'),
        'not_found' => __('No posts found.'),
    );
    $args = array(
        'supports' => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields', 'revisions', 'revisions', 'post-formats', 'template',),
        'labels' => $labels,
        'public' => true,
        'query_var' => true,
        'has_archive' => false,
        'hierarchical' => false,
        'rewrite' => array('slug' => 'praca'),
    );
    register_post_type('praca_', $args);
}
add_action('init', 'cw_post_type_praca_', 99);

