<section class="shops-section">
  <div class="content">
    <div class="section-title typo large">
      <h1><?php the_sub_field('title');?></h1>
    </div>
    <div class="shops typo">
      <?php while( have_rows('boxes') ): the_row(); ?>
        <?php
          $css_class = "";
          if ( !get_sub_field('phone') && !have_rows('op_hours') ) {
            $css_class = "one-group";
          }
        ?>
        <article class="item <?=$css_class;?>">
          <div class="group">
            <div class="ico ico-envelope-alt"></div>
            <?php the_sub_field('address');?>
          </div>
          <?php if ( get_sub_field('phone') ): ?>
            <div class="group">
              <div class="ico ico-phone-alt"></div>
              <?php the_sub_field('phone');?>
            </div>
          <?php endif; ?>
          <?php if ( have_rows('op_hours') ): ?>
            <div class="group">
              <div class="ico ico-clock-alt"></div>
              <div class="op-hours">
                <?php while ( have_rows('op_hours') ): the_row(); ?>
                  <div class="days">
                    <p><?php the_sub_field('days');?></p>
                  </div>
                  <div class="hours">
                    <p><?php the_sub_field('hours');?></p>
                  </div>
                <?php endwhile; ?>
              </div>
            </div>
          <?php endif; ?>
        </article>
      <?php endwhile; ?>
    </div>
  </div>
</section>
