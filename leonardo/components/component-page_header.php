<div class="page-header">
  <div class="content typo">
    <?php if ( get_sub_field('icon') !== "none" ): ?>
      <div class="icon">
        <div class="ico ico-<?php the_sub_field('icon');?>"></div>
      </div>
    <?php endif; ?>
    <?php the_sub_field('text');?>
  </div>
</div>
