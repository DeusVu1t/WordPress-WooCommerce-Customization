<div class="category-select <?=$category_wrapper_css_class;?>">
  <?php
  $categories = get_categories(array(
    'taxonomy' => 'product_cat',
    'hide_empty' => false,
    'exclude' => array(4349, 15005) // bez kategorii
  ));
  ?>
  <div class="content">
    <?php foreach ( $categories as $category ): ?>
      <?php if ( $category->category_parent === 0 ): ?>
        <a href="<?=get_term_link($category->term_id, 'product_cat');?>" class="item">
          <?php $image = get_field('image', $category);?>
          <img src="<?=$image['url'];?>" alt="<?=$image['alt'];?>">
          <p><?=$category->name;?></p>
        </a>
      <?php endif; ?>
    <?php endforeach; ?>
  </div>
</div>
