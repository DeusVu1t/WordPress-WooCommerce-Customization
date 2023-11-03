<?php 
wp_redirect( get_permalink(16) );
get_header(); 
?>

    <script>
        var maxProducts = <?php the_field('search_results_limit_products', 'options');?>;
        var maxPosts = <?php the_field('search_results_limit_blog', 'options');?>;
        var maxVideos = <?php the_field('search_results_limit_video', 'options');?>;
    </script>

<?php get_template_part('components/component', 'algolia'); ?>
<?php if (have_posts()): ?>
    <?php $results = []; ?>
    <?php while (have_posts()): the_post() ?>
        <?php $results[get_post_type()][] = get_post(); ?>
    <?php endwhile; ?>
<?php endif; ?>

    <div class="custom-search-page">

        <div class="page-header clear title-only">
            <div class="text typo">
                <h2 class="h1">
                    Wyniki wyszukiwania dla frazy:
                    <span><?php echo get_search_query() ?></span>
                </h2>
                <hr>
                <p>
                    Znalezionych wyników:
                    <span>
      <?php
          $products = 0;
          if (isset($results['produkt']) && !empty($results['produkt'])) {
              $products = count($results['produkt']);
          }

          echo $products + count(getRemotePostsFromBlog()) + count(searchOnVideos())
      ?>
      </span>
                </p>
            </div>
        </div>


        <?php if (isset($results['produkt']) && !empty($results['produkt'])): ?>
            <div class="result-section">
                <div class="title">
                    <div class="section-title left">
                        <div class="content typo">
                            <h2 class="h1">Produkty</h2>
                            <hr>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="products-grid limit-display" data-section="products">
                        <?php foreach ($results['produkt'] as $index => $product): ?>
                            <?php
                            set_query_var('product_id', $product->ID);
                            get_template_part('components/parts/product-box');
                            ?>
                        <?php endforeach; ?>
                    </div>

                    <?php if (count($results['produkt']) > get_field('search_results_limit_products', 'options')): ?>
                        <div class="buttons-section">
                            <div class="content">
                                <a href="#" class="btn btn-primary-alt btn-big show-more">Więcej wyników</a>
                            </div>
                        </div>
                    <?php endif ?>
                </div>
            </div>
        <?php endif ?>


        <?php if (getRemotePostsFromBlog()): ?>
            <div class="result-section">
                <div class="title">
                    <div class="section-title left">
                        <div class="content typo">
                            <h2 class="h1">Baza wiedzy</h2>
                            <hr>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="products-grid limit-display" data-section="posts">
                        <?php foreach (getRemotePostsFromBlog() as $index => $post): ?>
                            <article class="post-excerpt item">
                                <a href="<?php echo $post->link ?>">
                                    <div class="image"
                                         style="background-image: url('<?php echo $post->fimg_url ?>');">
                                    </div>
                                    <div class="label">
                                        <p><?php echo $post->category_name ?></p>
                                        <time datetime="<?php echo $post->date ?>">
                                            <?php echo (new \DateTime($post->date))->format('d-m-Y') ?>
                                        </time>
                                    </div>
                                    <div class="text typo">
                                        <h2 class="h1">
                                            <?php echo $post->title->rendered ?>
                                        </h2>
                                        <p>
                                            <?php echo strip_tags($post->zajawka) ?>
                                        </p>
                                    </div>
                                </a>
                            </article>
                        <?php endforeach ?>
                    </div>

                    <?php if (count(getRemotePostsFromBlog()) > get_field('search_results_limit_blog', 'options')): ?>
                        <div class="buttons-section">
                            <div class="content">
                                <a href="#" class="btn btn-primary-alt btn-big show-more">Więcej wyników</a>
                            </div>
                        </div>
                    <?php endif ?>
                </div>
            </div>
        <?php endif ?>

        <?php if (searchOnVideos()): ?>
            <div class="result-section">
                <div class="title">
                    <div class="section-title left">
                        <div class="content typo">
                            <h2 class="h1">Poradnik wideo</h2>
                            <hr>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="products-grid limit-display" data-section="videos">
                        <?php /** @var WP_Post $video */
                            foreach (searchOnVideos() as $video): ?>
                            <article class="video-thumbnail item">
                                <a href="https://www.moje-auto.pl/poradnik-wideo/#wideo-<?php the_field('youtube_id', $video->ID) ?>">
                                    <div class="image"
                                         style="background-image: url('https://img.youtube.com/vi/<?php the_field('youtube_id', $video->ID) ?>/sddefault.jpg');">
                                        <div class="image-text">
                                            <p>Nowe</p>
                                        </div>
                                    </div>
                                    <h2 class="h1"><?php echo get_the_title($video->ID) ?></h2>
                                </a>
                            </article>
                        <?php endforeach; ?>
                    </div>

                    <?php if (count(searchOnVideos()) > get_field('search_results_limit_video', 'options')): ?>
                        <div class="buttons-section">
                            <div class="content">
                                <a href="#" class="btn btn-primary-alt btn-big show-more">Więcej wyników</a>
                            </div>
                        </div>
                    <?php endif ?>
                </div>
            </div>
        <?php endif ?>

    </div>

    <div class="empty-spacer"></div>

<?php get_footer();
