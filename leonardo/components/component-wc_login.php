<?php

if ( is_user_logged_in() ) {
  wp_redirect( get_permalink(82) ); // ID 82 - Strona Moje konto
}

do_action( 'woocommerce_before_customer_login_form' );
?>
<div class="wc-login-section">
  <div class="box typo">

    <div class="section-title typo">
      <h1>Zaloguj się</h1>
    </div>

    <form class="woocommerce-form woocommerce-form-login login wc-form" method="post" id="login-form">

      <?php do_action( 'woocommerce_login_form_start' ); ?>

      <div class="input-wrapper">
        <label for="username">
          <?php esc_html_e( 'Username or email address', 'woocommerce' ); ?>&nbsp;<span class="required">*</span>
        </label>
        <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>">
      </div>

      <div class="input-wrapper">
        <label for="password">
          <?php esc_html_e( 'Password', 'woocommerce' ); ?>&nbsp;<span class="required">*</span>
        </label>
        <input class="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" id="password" autocomplete="current-password">
      </div>

      <?php do_action( 'woocommerce_login_form' ); ?>

      <div class="input-wrapper chekcbox">
        <label for="rememberme">
          <?php esc_html_e( 'Remember me', 'woocommerce' ); ?>
        </label>
        <input class="woocommerce-form__input woocommerce-form__input-checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever">
      </div>
      <div class="input-wrapper submit">
        <?php wp_nonce_field( 'woocommerce-login', 'woocommerce-login-nonce' ); ?>
        <button type="submit" class="btn btn-primary" name="login" value="<?php esc_attr_e( 'Log in', 'woocommerce' ); ?>"><?php esc_html_e( 'Log in', 'woocommerce' ); ?></button>
      </div>

      <div class="input-wrapper lost-pass">
        <a href="<?php echo esc_url( wp_lostpassword_url() ); ?>"><?php esc_html_e( 'Lost your password?', 'woocommerce' );?></a>
      </div>

      <?php do_action( 'woocommerce_login_form_end' ); ?>

    </form>

  </div>
</div>
<?php
do_action( 'woocommerce_after_customer_login_form' );
?>
