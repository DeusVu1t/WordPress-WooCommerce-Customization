<?php
/**
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @package 	WooCommerce/Templates
 * @version     3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( $related_products ) : ?>

<div class="section-title typo large red extra-asset">
  <h1><strong>Polecamy</strong> również</h1>
</div>

	<?php woocommerce_product_loop_start(); ?>

		<?php foreach ( $related_products as $related_product ) : ?>

			<?php
			 	$post_object = get_post( $related_product->get_id() );

				setup_postdata( $GLOBALS['post'] =& $post_object );

				wc_get_template_part( 'content', 'product' ); ?>

		<?php endforeach; ?>

	<?php woocommerce_product_loop_end(); ?>

<?php endif;

wp_reset_postdata();
