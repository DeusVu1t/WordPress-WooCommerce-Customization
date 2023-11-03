<?php

function my_login_logo() { ?>
  <style type="text/css">
    #user_login, #user_pass {
      color: #2c1e53!important;
    }
    #login h1, .login h1 {
      display: flex;
      justify-content: center;
    }
    #login h1 a, .login h1 a {
      background-image: url("<?php bloginfo('template_directory');?>/assets/img/gl-logo.svg");
      height: 180px;
      width: 270px;
    	background-size: contain;
    	background-repeat: no-repeat;
      background-position: center;
    	padding-bottom: 30px;
      padding: 0;
      margin: 0;
    }
    #loginform {
      margin: 0;
      background-color: white!important;
    }
    #wp-submit {
      border-radius: 0;
      background-color: #f04e54;
      border: 0;
      box-shadow: none;
      text-shadow: none;
    }
    body {
      background-image: url("<?php bloginfo('template_directory');?>/assets/img/login-bg.jpg")!important;
    }
    .login form {
      background: none!important;
      box-shadow: none!important;
    }
    .login form .input {
      background: none!important;
      border: 0!important;
      color: white!important;
      box-shadow: none!important;
      border-bottom: 1px solid rgba(58,58,58, .3)!important;
      font-weight: 300;
    }
    .login #backtoblog, .login #nav {
      text-align: center;
    }
    .login #backtoblog a, .login #nav a {
      color: #2c1e53!important;
    }
    .login form .input, .login form input[type=checkbox], .login input[type=text] {}
  </style>
<?php }
add_action( 'login_enqueue_scripts', 'my_login_logo' );
