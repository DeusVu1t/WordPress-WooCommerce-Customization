<?php if ( is_a(get_queried_object(), 'WP_Term') ): ?>

	<div class="section-title typo large red extra-asset">
		<h1>Polecamy <strong>również</strong></h1>
	</div>
	<div class="empty-spacer half"></div>

	<?php
	$categories = get_categories(array(
		'taxonomy' => 'product_cat',
		'hide_empty' => false,
		'exclude' => array(4349, 15005, get_queried_object()->term_id, get_queried_object()->parent)
	));
	?>

	<div class="full-width-links">
		<?php foreach ( $categories as $category ): ?>
			<?php if ( $category->category_parent === 0 ): ?>
				<a href="<?=get_term_link($category->term_id, 'product_cat');?>" class="item">
					<span class="text">
						<p><?=$category->name;?></p>
					</span>
					<?php $image = get_field('bg_image', $category); ?>
					<img src="<?=$image['url'];?>" alt="<?=$image['alt'];?>">
				</a>
			<?php endif; ?>
		<?php endforeach; ?>
	</div>

<?php endif; ?>

<?php

$show_contact_section = true;
if ( is_page(15) ) { // contact
  $show_contact_section = false;
}
if ( is_page(16) ) { // home
  $show_contact_section = false;
}
if ( is_page(13) ) { // o nas
  $show_contact_section = false;
}
if ( is_page(14) ) { // cukiernie
  $show_contact_section = false;
}
if ( is_page(80) ) { // koszyk
  $show_contact_section = false;
}
if ( is_page(81) ) { // zamówienie
  $show_contact_section = false;
}
if ( is_page(82) ) { // moje konto
  $show_contact_section = false;
}



if ( $show_contact_section ) {
  get_template_part('components/component', 'contact_section');
}

?>


						</div>
					</div>
					<script>
						document.addEventListener("DOMContentLoaded", function() {
							const contactForm = document.getElementById("contact-form");
							const sendButton = contactForm.querySelector("[name='send']");

							sendButton.addEventListener("click", function(e) {
								e.preventDefault();

								const email = document.getElementById("email").value;
								const subject = document.getElementById("subject").value;
								const message = document.getElementById("message").value;

								// Отправка данных на сервер
								fetch("<?php echo get_template_directory_uri(); ?>/contact-form-handler.php", {
										method: "POST",
										headers: {
											"Content-Type": "application/json",
										},
										body: JSON.stringify({
											email,
											subject,
											message,
										}),
									})
									.then((response) => response.json())
									.then((data) => {
										if (data.success) {
											alert("Сообщение успешно отправлено.");
											contactForm.reset();
										} else {
											alert("Ошибка при отправке сообщения.");
										}
									})
									.catch((error) => {
										console.error("Ошибка: " + error);
									});
							});
						});
					</script>

<footer id="main-footer">
  <div class="content">
    <div class="text">
      <?php while (have_rows('footer_items', 'options') ): the_row(); ?>
        <div class="item typo alt">
          <?php the_sub_field('text');?>
        </div>
      <?php endwhile; ?>
    </div>
    <div class="nav">
      <div class="item">
        <?php wp_nav_menu(array(
					'theme_location' => 'footer_1',
					'container' => 'ul'
				));?>
      </div>
      <div class="item">
        <?php wp_nav_menu(array(
					'theme_location' => 'footer_2',
					'container' => 'ul'
				));?>
      </div>
    </div>
    <div class="legal">
      <p>nice things by <a href="https://leonardo.pl/" target="_blank">Grupa Leonardo</a></p>
    </div>
  </div>
</footer>

<div id="cookie-notify">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="cookie-content">
          <div class="text-wrapper typo">
            <p><?php _e('Na swoich stronach wykorzystujemy pliki cookies. Jeśli korzystasz z naszych stron bez zmiany ustawień przeglądarki, zostaną one zapisane w pamięci urządzenia.', 'leonardo'); ?></p>
            <a href="#" id="accept-cookies"><?php _e('Ok', 'leonardo'); ?></a>
            <a href="<?php the_permalink(507); ?>"><?php _e('Więcej', 'leonardo'); ?></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="developer">
  <div class="circle">
    <div class="icon" id="developer-toggle">
      <span></span>
    </div>
  </div>
  <div class="box">
    <div class="graph">
      <canvas id="dev-graph" width="700" height="500"></canvas>
    </div>
    <div class="title">
      <p>Developer tools</p>
    </div>
    <div class="content" id="developer-features"></div>
    <div class="foot">
      <p>ReD Responsive Framework version</p>
    </div>
  </div>
</div>


<div class="fixed-social">
  <div class="box">
    <a href="https://www.facebook.com/cukierniabolero/" target="_blank" class="fb">
      <span class="ico ico-facebook"></span>
    </a>
    <a href="https://pl.pinterest.com/dariuszpietka0337" target="_blank" class="pt">
      <span class="ico ico-pinterest"></span>
    </a>
    <a href="https://www.instagram.com/cukierniabolero" target="_blank" class="inst" style="background-color: #C32AA3">
      <span class="ico ico-instagram"></span>
    </a>
    <a href="https://twitter.com/cukierniabolero" target="_blank" class="tw">
      <span class="ico ico-twitter"></span>
    </a>
  </div>
</div>

<div id="browser-alert">
  <div class="text-wrapper typo">
    <p class="h1">Uwaga!</p>
    <p><strong>Przeglądarka internetowa</strong>, z której korzystasz <strong>jest przestarzała</strong>, przez co
      strona <strong>nie będzie</strong> wyświetlać się w prawidłowy sposób.</p>
    <p class="small">Wymagana zmiana przeglądarki na np.: Chrome, Firefox, Opera</p>
  </div>
</div>

<div id="css-to-js">
  <div id="navbar-break-point"></div>
</div>


<?php wp_footer(); ?>

</div>
</body>

</html>
