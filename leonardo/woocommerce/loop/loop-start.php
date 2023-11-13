<?php
/**
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @package 	WooCommerce/Templates
 * @version     3.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$category = get_queried_object();?>


<?php if ( is_product_category() ): ?>
	<div class="page-header category-header">
	  <div class="content">
			<?php if ( $category->parent === 0 ):?>
				<h1 class="h2"><?=$category->name;?></h1>
			<?php else: ?>
				<?php
				$parent_category = get_categories(
					array(
						'taxonomy' => 'product_cat',
						'hide_empty' => false,
						'include' => $category->parent
					)
				)[0];?>
				<h1 class="h1"><?=$parent_category->name;?></h1>
				<h2 class="h2"><?=$category->name;?></h2>
			<?php endif; ?>
	  </div>
	</div>
<?php endif; ?>

<div class="products-section">
  <div class="content">
