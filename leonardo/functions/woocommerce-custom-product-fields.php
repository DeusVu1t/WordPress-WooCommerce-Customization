<?php
/**
 * Display custom field on the front end
 * @since 1.0.0
 */
function leonardo_display_custom_field() {
  global $product;
  ?>



  <?php
}
add_action( 'woocommerce_before_add_to_cart_button', 'leonardo_display_custom_field' );



/**
 * Add the text field as item data to the cart object
 * @since 1.0.0
 * @param Array 		$cart_item_data Cart item meta data.
 * @param Integer   $product_id     Product ID.
 * @param Integer   $variation_id   Variation ID.
 * @param Boolean  	$quantity   		Quantity
 */
function leonardo_add_custom_field_item_data( $cart_item_data, $product_id, $variation_id, $quantity ) {
  if( ! empty( $_POST['extra-product-data-input'] ) ) {
    // Add the item data
    $cart_item_data['product_extra_data'] = $_POST['extra-product-data-input'];
  }
  if( ! empty( $_POST['extra-photo-base64'] ) ) {
    $base64string = $_POST['extra-photo-base64'];
    $path = wp_upload_dir()['basedir'].'/orders-uploads/';
    $filename = 'order-upload-'. str_replace(' ', '', microtime()).'.jpg';
    $url = wp_upload_dir()['baseurl'].'/orders-uploads/';


    $file = fopen( $path.$filename, 'wb');
    $baseSplitted = explode(',', $base64string);
    if (count($baseSplitted) <= 1) {
      wc_add_notice( 'Błąd uploadu pliku', 'error' );
      return false;
    }
    fwrite($file, base64_decode($baseSplitted[1]));
    fclose($file);
    $cart_item_data['product_extra_photo'] = $url.$filename;
  }
  return $cart_item_data;
}
add_filter( 'woocommerce_add_cart_item_data', 'leonardo_add_custom_field_item_data', 10, 4 );



/**
 * Display the custom field value in the cart
 * @since 1.0.0
 */
function leonardo_cart_item_name( $name, $cart_item, $cart_item_key ) {

  // dd( $cart_item );
  if( isset( $cart_item['product_extra_data'] ) ) {
    $name .= sprintf(
      '<div class="extra-data">%s</div>',
      '<p>Dodatkowe parametry: </p>'.$cart_item['product_extra_data']
    );
  }
  if( isset( $cart_item['product_extra_photo'] ) ) {
    $name .= sprintf(
      '<div class="extra-data-photo">%s</div>',
      '<img class="xd" src="'.$cart_item['product_extra_photo'].'">'
    );
  }
  return $name;
}
add_filter( 'woocommerce_cart_item_name', 'leonardo_cart_item_name', 10, 3 );



/**
 * Add custom field to order object
 */
function leonardo_add_custom_data_to_order( $item, $cart_item_key, $values, $order ) {
  foreach( $item as $cart_item_key => $values ) {
    if( isset( $values['product_extra_data'] ) ) {
      $item->add_meta_data( __( 'Dodatkowe parametry', 'leonardo' ), $values['product_extra_data'], true );
    }
    if( isset( $values['product_extra_photo'] ) ) {
      // $item->add_meta_data( __( 'Dodatkowe zdjęcie', 'leonardo' ), $values['product_extra_photo'], true );
      $item->add_meta_data( __( 'Dodatkowe zdjęcie', 'leonardo' ), '<img src="'.$values['product_extra_photo'].'">', true );
    }
  }
}
add_action( 'woocommerce_checkout_create_order_line_item', 'leonardo_add_custom_data_to_order', 10, 4 );
