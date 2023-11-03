<?php
// VALIDATE FIELDS
add_filter( 'woocommerce_registration_errors', 'wc_validate_new_registration_fields', 10, 3 );

function wc_validate_new_registration_fields( $errors, $username, $email ) {
  if ( isset( $_POST['billing_first_name'] ) && empty( $_POST['billing_first_name'] ) ) {
    $errors->add( 'billing_first_name_error', __( '<strong>Error</strong>: First name is required!', 'woocommerce' ) );
  }
  if ( isset( $_POST['billing_last_name'] ) && empty( $_POST['billing_last_name'] ) ) {
    $errors->add( 'billing_last_name_error', __( '<strong>Error</strong>: Last name is required!.', 'woocommerce' ) );
  }
  return $errors;
}

// SAVE FIELDS
add_action( 'woocommerce_created_customer', 'wc_save_new_registration_fields' );

function wc_save_new_registration_fields( $customer_id ) {
  $fields= array(
    // META_KEY            =>  META_VALUE
    'billing_first_name'   => 'billing_first_name',
    'first_name'           => 'billing_first_name',
    'billing_last_name'    => 'billing_last_name',
    'last_name'            => 'billing_last_name',
    'billing_company'      => 'billing_company',
    'billing_address_1'    => 'billing_address_1',
    'billing_address_2'    => 'billing_address_2',
    'billing_city'         => 'billing_city',
    'billing_postcode'     => 'billing_postcode',
    'billing_country'      => 'billing_country',
    'shipping_address_1'   => 'shipping_address_1',
    'shipping_address_2'   => 'shipping_address_2',
    'shipping_city'        => 'shipping_city',
    'shipping_postcode'    => 'shipping_postcode',
    'shipping_country'     => 'shipping_country',
    'company_nip'          => 'company_nip',

  );
  foreach ( $fields as $field_meta_key => $field_meta_value ) {
    if ( isset($_POST[$field_meta_value]) ) {
      update_user_meta( $customer_id, $field_meta_key, sanitize_text_field( $_POST[$field_meta_value] ) );
    }
  }

}
