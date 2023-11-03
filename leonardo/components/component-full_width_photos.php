<div class="full-width-photos">

  <?php while ( have_rows('photos') ): the_row(); ?>
    <div class="item">
      <?php $image = get_sub_field('photo');?>
      <img src="<?=$image['url'];?>" alt="<?=$image['alt'];?>">
    </div>
  <?php endwhile; ?>

</div>
