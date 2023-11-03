<?php



  /** Shipping: Poczta Polska */ 
//   const SHIPPING = 'flexible_shipping_5_1'; // Dowóz
//   const SHIPPING_OWN_PICKUP = 'flexible_shipping_5_3'; // Odbiór własny
  
//   const SHIPPING_POLISHPOST = 'flexible_shipping_7_2';
//   const SHIPPING_POLISHPOST_COD = 'flexible_shipping_7_3';
//   const SHIPPING_COURIER = 'flexible_shipping_7_4';
//   const SHIPPING_COURIER_COD = 'flexible_shipping_7_5';


//   /** Payment: Przelew bankowy */
//   const PAYMENT_BACS = 'bacs';

//   /** Payment: Przelewy24 */
//   const PAYMENT_P24 = 'przelewy24';

//   /** Payment: Płatność przy odbiorze */
//   const PAYMENT_COD = 'cod';

//   /**
//    * Disabling payment methods on shipping
//    *
//    * @global WooCommerce $woocommerce
//    * @param array $available_gateways
//    * @return array
//    */
//   function disablePaymentOnShipping(array $available_gateways): array
//   {
//     if (!is_admin()) {
//       $chosenMethods = wc()->session->get('chosen_shipping_methods');
//       $chosenShipping = $chosenMethods[0];
//       if (
//         0 === strpos($chosenShipping, SHIPPING_COURIER_COD)
//         || 0 === strpos($chosenShipping, SHIPPING_POLISHPOST_COD)
//       ) {
//         unset(
//           $available_gateways[PAYMENT_BACS],
//           $available_gateways[PAYMENT_P24]
//         );
//       } else {
//         unset($available_gateways[PAYMENT_COD]);
//       }
//     }

//     return $available_gateways;
//   }


// /**
//  * Disable payments method on shipping method
//  */
// add_filter('woocommerce_available_payment_gateways', 'disablePaymentOnShipping');
