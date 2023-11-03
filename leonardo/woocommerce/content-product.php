<?php
/**
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

// Ensure visibility.
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}

$featured_product = false;
$sale_product = false;
$css_class = "";
if ( $product->featured === "yes" ) {
	$featured_product = true;
	$css_class .= "featured-product";
}
if ( wc_get_product()->is_on_sale() ) {
	$sale_product = true;
	$css_class .= "sale-product";
}
?>

<article class="item product-box <?=$css_class;?>">
	<?php $link = apply_filters( 'woocommerce_loop_product_link', get_the_permalink(), $product ); ?>
	<a href="<?=$link?>">
		<?php if ( $featured_product || $sale_product ): ?>
			<?php if ( $sale_product ): ?>
				<div class="badge sale">
					<div class="text">
						<p>Promocja</p>
					</div>
				</div>
			<?php else: ?>
				<div class="badge new">
					<div class="text">
						<p>Nowość</p>
					</div>
				</div>
			<?php endif; ?>
		<?php endif; ?>
		<?php if ( my_get_the_product_thumbnail_url() ):?>
			<img src="<?=my_get_the_product_thumbnail_url();?>" alt="">
		<?php else: ?>
			<img src="<?php bloginfo('template_directory');?>/assets/img/no-photo.jpg" alt="Brak zdjęcia">
		<?php endif; ?>
		<h1><?php the_title();?></h1>
		<div class="price-box">
			<?php if ( $product->is_type('variable') ): ?>

				<?php // For products with variations ?>

				<span>od</span>

				<?php if ( wc_get_product()->is_on_sale() ): ?>

					<div class="price sale">
						<?=format_product_price(wc_get_product()->get_price());?>
						<?=get_woocommerce_currency_symbol();?>
					</div>

				<?php else: ?>
					<?php if ( wc_get_product()->get_price() !== "" ): ?>
						<div class="price">
							<?=format_product_price(wc_get_product()->get_price());?>
							<?=get_woocommerce_currency_symbol();?>
						</div>
					<?php else: ?>
						<div class="price no-price">
							<p>Zobacz i zamów</p>
						</div>
					<?php endif; ?>
				<?php endif; ?>



			<?php else: ?>

				<?php // For single products ?>


				<?php if ( wc_get_product()->is_on_sale() ): ?>
					<div class="price sale">
						<del>
							<?=format_product_price(wc_get_product()->get_regular_price());?>
							<?=get_woocommerce_currency_symbol();?>
						</del>
						<ins>
							<?=format_product_price(wc_get_product()->get_sale_price());?>
							<?=get_woocommerce_currency_symbol();?>
						</ins>
					</div>
				<?php else: ?>
					<?php if ( wc_get_product()->get_price() !== "" ): ?>
						<div class="price">
							<?=format_product_price(wc_get_product()->get_price());?>
							<?=get_woocommerce_currency_symbol();?>
						</div>
					<?php else: ?>
						<div class="price no-price">
							<p>Zobacz i zamów</p>
						</div>
					<?php endif; ?>
				<?php endif; ?>


			<?php endif; ?>

		</div>
	</a>
</article>
