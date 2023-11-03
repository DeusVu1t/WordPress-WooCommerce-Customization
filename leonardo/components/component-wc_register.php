<?php

if ( is_user_logged_in() ) {
  wp_redirect( get_permalink(82) ); // ID 82 - Strona Moje konto
}

?>
<div class="wc-register-section">
  <div class="box typo">


    <div class="section-title typo">
      <h1>Zarejestruj się</h1>
    </div>

    <form method="post" id="register-form" class="woocommerce-form woocommerce-form-register register wc-form" <?php do_action( 'woocommerce_register_form_tag' ); ?> >

      <?php do_action( 'woocommerce_register_form_start' ); ?>

      <div class="input-wrapper firstname">
        <label for="reg_billing_first_name"><?php _e('First name', 'woocommerce');?><span class="required">*</span></label>
        <input type="text" name="billing_first_name" id="reg_billing_first_name" value="<?php if ( ! empty( $_POST['billing_first_name'] ) ) esc_attr_e( $_POST['billing_first_name'] ); ?>">
      </div>

      <div class="input-wrapper lastname">
        <label for="reg_billing_last_name"><?php _e('Last name', 'woocommerce');?><span class="required">*</span></label>
        <input type="text" name="billing_last_name" id="reg_billing_last_name" value="<?php if ( ! empty( $_POST['billing_last_name'] ) ) esc_attr_e( $_POST['billing_last_name'] ); ?>">
      </div>

      <div class="input-wrapper email">
        <label for="email"><?php esc_html_e('Email address', 'woocommerce');?><span class="required">*</span></label>
        <input type="email" name="email" id="email" autocomplete="email" value="<?php echo ( ! empty( $_POST['email'] ) ) ? esc_attr( wp_unslash( $_POST['email'] ) ) : ''; ?>">
      </div>

      <!-- <div class="input-wrapper password">
        <label for="password"><?php esc_html_e('Password', 'woocommerce');?></label>
        <input type="password" name="password" id="password" autocomplete="new-password">
      </div> -->



      <div class="input-group shipping-address">
        <div class="label">
          <p>Dane do wysyłki</p>
        </div>
        <div class="fields-wrapper">
          <div class="input-wrapper address-1">
            <label for="shipping_address_1">Ulica, numer domu</label>
            <input type="text" name="shipping_address_1" id="shipping_address_1" autocomplete="new-shipping_address_1">
          </div>
          <div class="input-wrapper address-2">
            <label for="shipping_address_2">Numer mieszkania</label>
            <input type="text" name="shipping_address_2" id="shipping_address_2" autocomplete="new-shipping_address_2">
          </div>
          <div class="input-wrapper post-code">
            <label for="shipping_postcode">Kod pocztowy</label>
            <input type="text" name="shipping_postcode" id="shipping_postcode" autocomplete="new-shipping_postcode">
          </div>
          <div class="input-wrapper city">
            <label for="shipping_city">Miasto</label>
            <input type="text" name="shipping_city" id="shipping_city" autocomplete="new-shipping_city">
          </div>
          <div class="input-wrapper country">
            <label for="shipping_country">Kraj</label>
            <select name="shipping_country" id="shipping_country" class="country_to_state country_select" rel="calc_shipping_state">
              <option value=""><?php esc_html_e( 'Select a country&hellip;', 'woocommerce' ); ?></option>
              <?php
              foreach ( WC()->countries->get_shipping_countries() as $key => $value ) {
                echo '<option value="' . esc_attr( $key ) . '"' . selected( WC()->customer->get_shipping_country(), esc_attr( $key ), false ) . '>' . esc_html( $value ) . '</option>';
              }
              ?>
            </select>
          </div>
        </div>
      </div>



      <div class="input-group billing-address">
        <div class="label">
          <p>Adres rozliczeniowy</p>
        </div>
        <div class="fields-wrapper">
          <div class="input-wrapper company-name">
            <label for="company-name">Nazwa firmy</label>
            <input type="text" name="billing_company" id="company-name" autocomplete="new-company-name">
          </div>
          <!-- <div class="input-wrapper company-name">
            <label for="company-nip">NIP</label>
            <input type="text" name="company_nip" id="company-nip" autocomplete="new-company-nip">
          </div> -->
          <div class="input-wrapper address-1">
            <label for="billing_address_1">Ulica, numer domu</label>
            <input type="text" name="billing_address_1" id="billing_address_1" autocomplete="new-billing_address_1">
          </div>
          <div class="input-wrapper address-2">
            <label for="billing_address_2">Numer mieszkania</label>
            <input type="text" name="billing_address_2" id="billing_address_2" autocomplete="new-billing_address_2">
          </div>
          <div class="input-wrapper post-code">
            <label for="billing_postcode">Kod pocztowy</label>
            <input type="text" name="billing_postcode" id="billing_postcode" autocomplete="new-billing_postcode">
          </div>
          <div class="input-wrapper city">
            <label for="billing_city">Miasto</label>
            <input type="text" name="billing_city" id="billing_city" autocomplete="new-billing_city">
          </div>
          <div class="input-wrapper country">
            <label for="billing_country">Kraj</label>
            <select name="billing_country" id="billing_country" class="country_to_state country_select" rel="calc_shipping_state">
              <option value=""><?php esc_html_e( 'Select a country&hellip;', 'woocommerce' ); ?></option>
              <?php
              foreach ( WC()->countries->get_shipping_countries() as $key => $value ) {
                echo '<option value="' . esc_attr( $key ) . '"' . selected( WC()->customer->get_shipping_country(), esc_attr( $key ), false ) . '>' . esc_html( $value ) . '</option>';
              }
              ?>
            </select>
          </div>
        </div>
      </div>






      <?php do_action( 'woocommerce_register_form' ); ?>

      <div class="input-wrapper submit">
        <?php wp_nonce_field( 'woocommerce-register', 'woocommerce-register-nonce' ); ?>
        <button type="submit" class="btn btn-primary" name="register" value="<?php esc_attr_e( 'Register', 'woocommerce' ); ?>"><?php esc_html_e( 'Register', 'woocommerce' ); ?></button>
      </div>

      <?php do_action( 'woocommerce_register_form_end' ); ?>

    </form>


  </div>
</div>
