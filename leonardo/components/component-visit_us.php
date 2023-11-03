<section class="visit-us" style="background-image: url('<?=get_sub_field('background')['url'];?>');">
  <div class="content">
    <div class="section-title typo large">
      <?php the_sub_field('title');?>
    </div>
    <div class="text typo">
      <?php the_sub_field('text');?>
    </div>
    <div class="links">
      <?php while( have_rows('links') ): the_row(); ?>
        <a href="<?php the_sub_field('url');?>" class="item"><?php the_sub_field('label');?></a>
      <?php endwhile; ?>
    </div>
  </div>
</section>
