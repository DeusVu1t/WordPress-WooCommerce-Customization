<section class="text-category">
  <div class="section-title typo large">
    <?php the_sub_field('text');?>
  </div>

  <?php
  $category_wrapper_css_class = "alt";
  include_once 'component-category_select.php';?>
  <!-- <div class="category-select alt">
    <div class="content">


      <a href="#" class="item">
        <img src="assets/img/_tmp/category-1.jpg" alt="">
        <p>Torty</p>
      </a>

      <a href="#" class="item">
        <img src="assets/img/_tmp/category-2.jpg" alt="">
        <p>Ciasta</p>
      </a>

      <a href="#" class="item">
        <img src="assets/img/_tmp/category-3.jpg" alt="">
        <p>Inne słodkości</p>
      </a>

    </div>
  </div> -->
</section>
