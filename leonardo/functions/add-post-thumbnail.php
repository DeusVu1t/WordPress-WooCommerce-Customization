<?php
function set_featured_image() {
  global $post;
  if ( isset($post->ID) && !has_post_thumbnail($post->ID) ) {
    if ( get_field('product-gallery', $post->ID) ) {

      if (have_rows('product-gallery', $post->ID)) {
        $index = 0;
        while (have_rows('product-gallery', $post->ID)) {
          the_row();
          if ( $index === 0 ) {
            set_post_thumbnail($post->ID, get_sub_field('gallery--image', $post->ID)['ID']);
          }
          $index++;
        }
      }

    }
  }
}


add_action('the_post', 'set_featured_image');
add_action('save_post', 'set_featured_image');
add_action('draft_to_publish', 'set_featured_image');
add_action('new_to_publish', 'set_featured_image');
add_action('pending_to_publish', 'set_featured_image');
add_action('future_to_publish', 'set_featured_image');
