<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-152979964-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'UA-152979964-1');
	</script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<title><?php wp_title(''); ?></title>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="format-detection" content="telephone=no">
	<!-- <meta name="theme-color" content="#ff8b07"> -->
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

	<div class="animsition">

		<nav id="main-navbar">
			<div class="content">
				<div class="text top-left">
					<?php the_field('header_text', 'options'); ?>
				</div>
				<a href="<?php bloginfo('url'); ?>" class="brand">
					<img class="logo" src="<?php bloginfo('template_directory'); ?>/assets/img/brand.svg" alt="brand">
					<img class="bg" src="<?php bloginfo('template_directory'); ?>/assets/img/brand_bg.svg" alt="brand">
					<img class="scroll" src="<?php bloginfo('template_directory'); ?>/assets/img/brand_scroll.svg" alt="brand">
				</a>
				<div class="shop">
					<div class="top-row">
						<div class="top-menu">
							<?php wp_nav_menu(array(
								'theme_location' => 'primary_top',
								'container' => 'ul'
							)); ?>
						</div>
						<div class="social scroll-hide">
							<a href="https://www.facebook.com/cukierniabolero/" target="_blank"><span class="ico ico-facebook"></span></a>
							<a href="https://pl.pinterest.com/dariuszpietka0337" target="_blank"><span class="ico ico-pinterest"></span></a>
							<a href="https://www.instagram.com/cukierniabolero" target="_blank"><span class="ico ico-instagram"></span></a>
							<a href="https://twitter.com/cukierniabolero" target="_blank"><span class="ico ico-twitter"></span></a>
						</div>
					</div>
					<div class="shop-menu">

						<?php if (is_user_logged_in()) : ?>

							<a href="<?php the_permalink(82); ?>" class="btn btn-small btn-primary scroll-hide">Moje konto</a>
							<a href="<?= wp_logout_url(home_url()); ?>" class="btn btn-small btn-primary-alt scroll-hide">Wyloguj się</a>

						<?php else : ?>

							<a href="<?php the_permalink(192); ?>" class="btn btn-small btn-primary scroll-hide">Zaloguj się</a>
							<a href="<?php the_permalink(190); ?>" class="btn btn-small btn-primary-alt scroll-hide">Zarejestruj się</a>

						<?php endif; ?>

						<a href="<?= wc_get_cart_url(); ?>" class="cart-link">
							<div class="ico ico-cart"></div>
							<?php if (getCartCount() > 0) : ?>
								<span class="cart-count"><?= getCartCount(); ?></span>
							<?php endif; ?>
						</a>
						<!-- <div class="ico ico-search"></div> -->
					</div>

				</div>
				<div class="nav-left">
					<?php wp_nav_menu(array(
						'theme_location' => 'primary_left',
						'container' => 'ul'
					)); ?>
				</div>
				<div class="nav-right">
					<?php wp_nav_menu(array(
						'theme_location' => 'primary_right',
						'container' => 'ul'
					)); ?>
				</div>
				<div class="hamburger">
					<div class="icon">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</nav>


		<div class="mobile-navbar">
			<?php wp_nav_menu(array(
				'theme_location' => 'mobile',
				'container' => 'ul'
			)); ?>

			<div class="social">
				<a href="https://www.facebook.com/cukierniabolero/" target="_blank"><span class="ico ico-facebook"></span></a>
				<a href="https://pl.pinterest.com/dariuszpietka0337" target="_blank"><span class="ico ico-pinterest"></span></a>
				<a href="https://www.instagram.com/cukierniabolero" target="_blank"><span class="ico ico-instagram"></span></a>
				<a href="https://twitter.com/cukierniabolero" target="_blank"><span class="ico ico-twitter"></span></a>
			</div>
		</div>