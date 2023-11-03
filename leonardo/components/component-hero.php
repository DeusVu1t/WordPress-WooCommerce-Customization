<div class="hero">
  <div class="swiper-container">
    <div class="swiper-wrapper">

      <?php while( have_rows('slides') ): the_row(); ?>

        <article class="swiper-slide">
          <div class="bg">
            <div class="mobile" style="background-image: url('<?=get_sub_field('background_mobile')['url'];?>"></div>
            <div class="desktop" style="background-image: url('<?=get_sub_field('background')['url'];?>"></div>
          </div>
          <div class="text typo">
            <?php the_sub_field('text');?>
          </div>
        </article>

      <?php endwhile; ?>

    </div>
    <div class="swiper-pagination"></div>
  </div>
</div>
