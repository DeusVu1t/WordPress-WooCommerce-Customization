<?php
require_once 'functions/theme-support.php';
require_once 'functions/styles-and-scripts.php';
require_once 'functions/navbar.php';
require_once 'functions/customizer.php';
require_once 'functions/dashboard.php';
require_once 'functions/admin-bar.php';
require_once 'functions/images.php';
require_once 'functions/login-page.php';
require_once 'functions/mail.php';
require_once 'functions/post-types.php';
require_once 'functions/rest-api.php';
require_once 'functions/search.php';
require_once 'functions/taxonomies.php';
// require_once 'functions/redirections.php';

require_once 'functions/widgets.php';
require_once 'functions/supported-files-upload.php';
require_once 'functions/gutenberg.php';
require_once 'functions/cleanup.php';

require_once 'functions/pagination.php';
require_once 'functions/breadcrumbs.php';
require_once 'functions/helpers.php';

require_once 'functions/tiny-mce.php';
require_once 'functions/acf.acf-options-page.php';
require_once 'functions/acf.add-acf-support-to-wp-search.php';

// require_once 'functions/html-compressor.php';

// require_once 'functions/security.php';

require_once 'functions/woocommerce-custom.php';
require_once 'functions/woocommerce-custom-registration-fields.php';
require_once 'functions/woocommerce-custom-product-fields.php';
require_once 'functions/woocommerce-custom-checkout-fields.php';
require_once 'functions/woocommerce-custom-payment.php';

require_once 'functions/work.php';
require_once 'functions/woo-new-functions.php';


wp_localize_script('core-js', 'ajax_posts', array(
    'ajaxurl' => admin_url('admin-ajax.php'),

));

add_filter('woocommerce_add_cart_item_data', 'add_cart_item_data', 10, 3);

function add_cart_item_data($cart_item_data, $product_id, $variation_id)
{
    $product = wc_get_product($product_id);
    $price = $product->get_price();

    if (!empty($_POST['addition_taste'])) {
        $selected_taste_price = floatval($_POST['addition_taste']);
        $selected_topper_price = floatval($_POST['additional_topper']);
        $cart_item_data['new_price'] = $selected_taste_price + $selected_topper_price;
        $cart_item_data['selected_taste'] = sanitize_text_field($_POST['addition_taste']);
    }

    return $cart_item_data;
}

add_action('woocommerce_before_calculate_totals', 'before_calculate_totals', 10, 1);

function before_calculate_totals($cart_obj)
{
    if (is_admin() && !defined('DOING_AJAX')) {
        return;
    }
    // Iterate through each cart item
    foreach ($cart_obj->get_cart() as $key => $value) {
        if (isset($value['new_price'])) {
            $price = $value['new_price'];
            $value['data']->set_price(($price));
        }
    }
}


function custom_add_to_cart_text($text) {
   
    $text = 'do koszyka';
    return $text;
}

add_filter('woocommerce_product_single_add_to_cart_text', 'custom_add_to_cart_text');