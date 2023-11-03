<?php
/**
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.6.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}


if ( !is_user_logged_in() ) {
	wp_redirect( get_permalink(192) ); // ID 192 - Strona Logowania
}



?>


<?php

do_action( 'woocommerce_before_customer_login_form' );

do_action( 'woocommerce_after_customer_login_form' );

?>


<?php if( !is_user_logged_in() ):?>
	<a href="<?php the_permalink(192);?>" class="btn btn-primary">Powrót do logowania</a>
<?php endif; ?>
