<?php

/**
 * Template Name: Praca zbiorcza
 * Template Post Type:page
 */
get_header(); ?>


<div class="custom-posts">
    <?php
    $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
    $args = array(
        'post_type' => 'praca_',
        'posts_per_page' => 12,
        'paged' => $paged,
    );

    $custom_query = new WP_Query($args);

    if ($custom_query->have_posts()) :
        while ($custom_query->have_posts()) : $custom_query->the_post();
            ?>
    <div class="custom-post">
        <h2><?php the_title(); ?></h2>
        <div class="entry-content">
            <?php the_content(); ?>
        </div>
        <div class="read-more">
            <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">Zobacz</a>
        </div>
    </div>
    <?php
        endwhile;

        // Пагинация
        echo '<div class="pagination">';
        echo paginate_links(array(
            'total' => $custom_query->max_num_pages,
        ));
        echo '</div>';

        wp_reset_postdata();
    else :
        echo 'No posts found';
    endif;
    ?>

</div>





<?php get_footer();