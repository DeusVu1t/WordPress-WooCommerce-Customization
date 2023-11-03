<section class="contact-section">
  <div class="content">
    <div class="section-title typo">
      <?php the_field('contact_title', 'options') ?>
    </div>
    <div class="cols">
      <?php while( have_rows('contact_cols', 'options') ): the_row(); ?>
        <div class="item typo">
          <?php the_sub_field('text');?>
        </div>
      <?php endwhile; ?>
    </div>
  </div>
</section>
