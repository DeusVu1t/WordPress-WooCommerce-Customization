<?php
/**
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

$formatted_destination    = isset( $formatted_destination ) ? $formatted_destination : WC()->countries->get_formatted_address( $package['destination'], ', ' );
$has_calculated_shipping  = ! empty( $has_calculated_shipping );
$show_shipping_calculator = ! empty( $show_shipping_calculator );
$calculator_text          = '';
?>

<?php if(is_cart()):?>
<tr class="woocommerce-shipping-totals info">
	<th colspan="2">
		<p>Dowóz dostępny przy zamówieniu powżej 70 zł</p>
	</th>
</tr>
<?php endif;?>
<tr class="woocommerce-shipping-totals shipping">
	<th><?php echo wp_kses_post( $package_name ); ?></th>
	<td data-title="<?php echo esc_attr( $package_name ); ?>">

		<?php if ( !is_cart() ): ?>


			<?php foreach ( $available_methods as $method ) : ?>
				<?php if ( $method->id === $chosen_method ) {
					echo wc_cart_totals_shipping_method_label( $method );
				} ?>
			<?php endforeach; ?>


		<?php else:?>


			<?php if ( $available_methods ) : ?>
				
				<ul id="shipping_method" class="woocommerce-shipping-methods">
					<?php foreach ( $available_methods as $method ) : ?>
						<li>
							<?php
							if ( 1 < count( $available_methods ) ) {
								printf( '<input type="radio" name="shipping_method[%1$d]" data-index="%1$d" id="shipping_method_%1$d_%2$s" value="%3$s" class="shipping_method" %4$s />', $index, esc_attr( sanitize_title( $method->id ) ), esc_attr( $method->id ), checked( $method->id, $chosen_method, false ) ); // WPCS: XSS ok.
							} else {
								printf( '<input type="hidden" name="shipping_method[%1$d]" data-index="%1$d" id="shipping_method_%1$d_%2$s" value="%3$s" class="shipping_method" />', $index, esc_attr( sanitize_title( $method->id ) ), esc_attr( $method->id ) ); // WPCS: XSS ok.
							}
							printf( '<label for="shipping_method_%1$s_%2$s">%3$s</label>', $index, esc_attr( sanitize_title( $method->id ) ), wc_cart_totals_shipping_method_label( $method ) ); // WPCS: XSS ok.
							do_action( 'woocommerce_after_shipping_rate', $method, $index );
							?>
						</li>
					<?php endforeach; ?>
				</ul>
				<?php
			elseif ( ! $has_calculated_shipping || ! $formatted_destination ) :
				echo wp_kses_post( apply_filters( 'woocommerce_shipping_may_be_available_html', __( 'Enter your address to view shipping options.', 'woocommerce' ) ) );
			elseif ( ! is_cart() ) :
				echo wp_kses_post( apply_filters( 'woocommerce_no_shipping_available_html', __( 'There are no shipping options available. Please ensure that your address has been entered correctly, or contact us if you need any help.', 'woocommerce' ) ) );
			else :
				// Translators: $s shipping destination.
				echo wp_kses_post( apply_filters( 'woocommerce_cart_no_shipping_available_html', sprintf( esc_html__( 'No shipping options were found for %s.', 'woocommerce' ) . ' ', '<strong>' . esc_html( $formatted_destination ) . '</strong>' ) ) );
				$calculator_text = __( 'Enter a different address', 'woocommerce' );
			endif;
			?>

			<?php if ( $show_package_details ) : ?>
				<?php echo '<p class="woocommerce-shipping-contents"><small>' . esc_html( $package_details ) . '</small></p>'; ?>
			<?php endif; ?>

			<?php if ( $show_shipping_calculator ) : ?>
				<?php woocommerce_shipping_calculator( $calculator_text ); ?>
			<?php endif; ?>


		<?php endif;?>






	</td>
</tr>
