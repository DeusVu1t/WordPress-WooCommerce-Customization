<?php
function create_custom_taxonomies() {
	// create a new taxonomy
	register_taxonomy(
		'page_type',
		'page',
		array(
			'label' => 'Typ strony',
			'rewrite' => array( 'slug' => 'typ' ),
			'hierarchical' => true,
		)
	);
}
add_action( 'init', 'create_custom_taxonomies' );

function add_taxonomies_to_pages() {
	register_taxonomy_for_object_type( 'page_type', 'page' );
}
add_action( 'init', 'add_taxonomies_to_pages' );
