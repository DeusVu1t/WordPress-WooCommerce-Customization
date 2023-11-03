<?php
/**
 * Add the field to the checkout page
 */
add_action('woocommerce_after_order_notes', 'customise_checkout_field');
function customise_checkout_field($checkout)
{
  woocommerce_form_field('company_nip', array(
    'type' => 'text',
    'class' => array(
      'my-field-class form-row-wide'
    ) ,
    'label' => __('NIP') ,
    'placeholder' => __('') ,
    'required' => false,
  ), $checkout->get_value('company_nip') );

// get_user_meta( get_current_user_id(), 'company_nip', true)


  echo '<div id="customise_checkout_field">';
  echo '<h3>Termin realizacji</h3>';
  woocommerce_form_field('custom_order_date', array(
    'type' => 'text',
    'class' => array(
      'my-field-class form-row-wide'
    ) ,
    'label' => __('Wybierz termin realizacji zamówienia') ,
    'placeholder' => __('') ,
    'required' => true,
  ) , $checkout->get_value('custom_order_date'));
  echo '</div>';

  
  echo '<div class="custom-time-order">';
  if ( WC()->session->get( 'chosen_shipping_methods' )[0] === "flexible_shipping_5_3" ) {
    echo '<h3>Godzina odbioru</h3>';
  } else {
    echo '<h3>Godzina dostawy</h3>';
  }


  woocommerce_form_field('custom_order_time', array(
    'type' => 'radio',
    'class' => array(
      'my-field-class form-row-wide'
    ),
    'options' => array(
      '8:00 - 11:00' => '8:00 - 11:00',
      '11:00 - 14:00' => '11:00 - 14:00',
      '14:00 - 17:00' => '14:00 - 17:00'
    ),
    'label' => __('Wybierz godzinę o której chcesz odebrać zamówienie') ,
    'placeholder' => __('') ,
    'required' => true,
  ) , $checkout->get_value('custom_order_time'));
  echo '</div>';
}

/**
 * Checkout Process
 */
add_action('woocommerce_checkout_process', 'customise_checkout_field_process');
function customise_checkout_field_process()
{
  // if the field is set, if not then show an error message.
  if (!$_POST['custom_order_date']) {
    wc_add_notice('Wybierz termin realizacji', 'error');
  }
  if (!$_POST['custom_order_time']) {
    wc_add_notice('Wybierz godzinę realizacji', 'error');
  }
  // if (!$_POST['company_nip']) {
  //   wc_add_notice('Wprowadź NIP', 'error');
  // }
}

/**
 * Update value of field
 */
add_action('woocommerce_checkout_update_order_meta', 'customise_checkout_field_update_order_meta');
function customise_checkout_field_update_order_meta($order_id)
{
  if (!empty($_POST['custom_order_date'])) {
    update_post_meta(
      $order_id,
      'custom_order_date',
      sanitize_text_field( $_POST['custom_order_date'] )
    );
  }
  if (!empty($_POST['custom_order_time'])) {
    update_post_meta(
      $order_id,
      'custom_order_time',
      sanitize_text_field( $_POST['custom_order_time'] )
    );
  }
  if (!empty($_POST['company_nip'])) {
    update_post_meta(
      $order_id,
      'company_nip',
      sanitize_text_field( $_POST['company_nip'] )
    );
  }
}

/**
 * Display field value on the order edit page
 */
add_action( 'woocommerce_admin_order_data_after_billing_address', 'my_custom_checkout_field_display_admin_order_meta', 10, 1 );
add_action( 'woocommerce_order_details_after_order_table', 'my_custom_checkout_field_display_admin_order_meta', 10, 1 );
add_action( 'woocommerce_email_after_order_table', 'my_custom_checkout_field_display_admin_order_meta', 10, 1 );

function my_custom_checkout_field_display_admin_order_meta($order){
  if( get_post_meta( $order->id, 'company_nip', true ) ){
    echo '<p><strong>NIP:</strong> '.get_post_meta( $order->id, 'company_nip', true ).'</p>';
  }
  echo '<p><strong>Data realizacji:</strong> '.get_post_meta( $order->id, 'custom_order_date', true ).'</p>';
  echo '<p><strong>Godzina dowozu/odbioru:</strong> '.get_post_meta( $order->id, 'custom_order_time', true ).'</p>';
}

/**
 * Change the checkout city field to a dropdown field.
 */
function change_city_to_dropdown( $fields ) {
	$city_args = wp_parse_args( array(
		'type' => 'select',
		'options' => array(
			'Będzin' => 'Będzin',
			'Czeladź' => 'Czeladź',
			'Dąbrowa Górnicza' => 'Dąbrowa Górnicza',
			'Katowice' => 'Katowice',
			'Sosnowiec' => 'Sosnowiec',
		),
	), $fields['shipping']['shipping_city'] );
	$fields['shipping']['shipping_city'] = $city_args;
	$fields['billing']['billing_city'] = $city_args; // Also change for billing field
	return $fields;
}
add_filter( 'woocommerce_checkout_fields', 'change_city_to_dropdown' );