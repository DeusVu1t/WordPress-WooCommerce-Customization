<?php

/**
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.6.0
 */

defined('ABSPATH') || exit;

global $product;

/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked wc_print_notices - 10
 */
do_action('woocommerce_before_single_product');

if (post_password_required()) {
	echo get_the_password_form(); // WPCS: XSS ok.
	return;
}
?>

<?php
$terms = get_the_terms($product->ID, 'product_cat');
$category_slug = "";
if ($terms[0]->parent > 0) {
	$parent_category = get_categories(
		array(
			'taxonomy' => 'product_cat',
			'hide_empty' => false,
			'include' => $terms[0]->parent
		)
	)[0];
	$category_slug = $parent_category->slug;
} else {
	$category_slug = $terms[0]->slug;
}
?>

<div class="product-card" id="product-<?php the_ID(); ?>">
	<div class="content">
		<div class="category-icon">
			<?php if ($category_slug === 'torty') : ?>
				<img src="<?php bloginfo('template_directory'); ?>/assets/img/cake.svg" alt="">
			<?php else : ?>
				<img src="<?php bloginfo('template_directory'); ?>/assets/img/cupcake.svg" alt="">
			<?php endif; ?>
		</div>
		<div class="images">


			<?php $image = wp_get_attachment_image_src(
				get_post_thumbnail_id($loop->post->ID),
				'single-post-thumbnail'
			); ?>
			<div class="big-photo">
				<?php if ($image) : ?>
					<img src="<?= $image[0]; ?>">
				<?php else : ?>
					<img src="<?php bloginfo('template_directory'); ?>/assets/img/no-photo.jpg">
				<?php endif; ?>
			</div>

			<?php $attachment_ids = $product->get_gallery_attachment_ids(); ?>
			<?php if (count($attachment_ids) > 0) : ?>
				<div class="gallery">
					<div class="navigation">
						<div class="nav prev">
							<div class="icon">
								<div class="ico ico-prev"></div>
							</div>
						</div>
						<div class="nav next">
							<div class="icon">
								<div class="ico ico-next"></div>
							</div>
						</div>
					</div>
					<div class="swiper-container">
						<div class="swiper-wrapper">

							<?php foreach ($attachment_ids as $attachment_id) : ?>

								<div class="swiper-slide">
									<div class="slide-image">
										<img src="<?= wp_get_attachment_url($attachment_id); ?>" alt="">
									</div>
								</div>

							<?php endforeach; ?>

						</div>
					</div>
				</div>
			<?php endif; ?>

			<?php
			/**
			 * Hook: woocommerce_before_single_product_summary.
			 *
			 * @hooked woocommerce_show_product_sale_flash - 10
			 * @hooked woocommerce_show_product_images - 20
			 */
			// do_action( 'woocommerce_before_single_product_summary' );
			?>
		</div>
		<div class="text">
			<div class="text-wrapper typo">
				<h1><?php the_title(); ?></h1>
				<?php the_content(); ?>
			</div>





			<?php if (get_field('addition_taste') == 1) : ?>

				<!-- Waga -->
				<div class="configurator-feature">
					<div class="configurator-item">
						<label class="configurator-label" for="#">Smak</label>
						<?php
						if (have_rows('taste_repeater')) :
							while (have_rows('taste_repeater')) : the_row();
								$taste_id = get_sub_field('opcja_smakowa');
								$taste_price = get_post_meta($taste_id, 'taste_price', true); // Без кавычек
								$taste_price_display = preg_replace("/[^0-9]/", "", $taste_price);
						?>
								<label>
									<input type="radio" class="taste-radio" name="taste" value="<?= $taste_price; ?>" taste-id="<?= $taste_id; ?>">
									<?= get_the_title($taste_id); ?>
								</label>
						<?php
							endwhile;
						endif;
						?>
						<div class="error" id="taste-error">
							<p>Wybierz opcje smakową</p>
						</div>
					</div>
				</div>

				<!-- Общая цена -->
				<div class="total">
					<div class="label">Razem</div>
					<div class="price large-number" id="custom-total-display"><?php echo $initial_product_price; ?></div>
				</div>

				<!-- JavaScript для обновления цены и добавления в корзину -->
				<script>
					$('.taste-checkbox').on('change', function() {
    const selectedCheckboxes = $('.taste-checkbox:checked');
    let totalTastePrice = 0;

    if (selectedCheckboxes.length) {
        selectedCheckboxes.each(function() {
            totalTastePrice += parseFloat($(this).val());
        });
    }

    // Обновите скрытое поле с информацией о вкусе и его цене
    $('#taste_price').val(totalTastePrice);

    // Вывод информации в консоль
    console.log(`Выбраны вкусы. Общая цена вкусов: ${totalTastePrice.toFixed(2)} zł`);
});
					jQuery(function($) {
						jQuery(document).ready(function($) {
							const totalPriceElement = $('#custom-total-display');
							const consoleInfo = $('#console-info'); // Элемент для вывода информации в консоль

							// Получаем начальную цену продукта
							const initialProductPrice = parseFloat(totalPriceElement.text());

							// Обработчик изменения выбранных вкусов (радиокнопок)
							$('.taste-radio').on('change', function() {
								const selectedRadio = $('input[name="taste"]:checked');

								if (selectedRadio.length) {
									const flavorPrice = parseFloat(selectedRadio.val().replace(/[^0-9.-]+/g, ''));
									if (!isNaN(flavorPrice)) {
										totalPriceElement.text((initialProductPrice + flavorPrice).toFixed(2)); // Обновляем общую цену

										// Вывод информации в консоль
										const selectedFlavor = selectedRadio.siblings('label').text();
										console.log(`Выбран вкус: ${selectedFlavor} (${flavorPrice.toFixed(2)} zł), Начальная цена: ${initialProductPrice.toFixed(2)}, Новая цена: ${(initialProductPrice + flavorPrice).toFixed(2)}`);
									}
								}
							});
						});
					});
				</script>
			<?php endif; ?>
			<input type="hidden" id="taste_price" name="taste_price" value="0">

			<div id="console-info"></div>






			<?php if ($product->is_type('variable')) : ?>
				<?php $variations = $product->get_available_variations(); ?>
				<div class="variant-select-title">
					<p>Wybierz rozmiar:</p>
				</div>
				<div class="variant-select">
					<?php foreach ($variations as $variant) : ?>
						<div class="item" data-value="<?= $variant['attributes']['attribute_rozmiar']; ?>">
							<div class="label">
								<p class="variant"><?= $variant['attributes']['attribute_rozmiar']; ?></p>
								<p class="desc"><?= strip_tags($variant['variation_description']); ?></p>
							</div>
							<div class="price">
								<p><?= $variant['price_html']; ?></p>
							</div>
						</div>
					<?php endforeach; ?>
				</div>
			<?php else : ?>
				<div id="single-product-price">
					<?= $product->price; ?>&nbsp;<?= get_woocommerce_currency_symbol(); ?>
				</div>
			<?php endif; ?>

			<?php if (get_field('show_extra_data_section')) : ?>
				<div class="extra-product-data">
					<div class="title">
						<p>Dołącz coś więcej</p>
					</div>
					<div class="items">

						<?php if (get_field('extra_candle')) : ?>
							<div class="extra-product-data-input" data-value="" data-label="Świeczka">
								<div class="checkbox">
									<div class="box"></div>
									<div class="label">Świeczka</div>
								</div>
								<div class="input number">
									<label for="">Ilość świeczek</label>
									<input class="value validate" type="number" value="1" min="1" max="100">
								</div>
							</div>
						<?php endif; ?>

						<?php if (get_field('extra_candle_number')) : ?>
							<div class="extra-product-data-input" data-value="" data-label="Świeczki (cyfry)">
								<div class="checkbox">
									<div class="box"></div>
									<div class="label">Świeczki (cyfry)</div>
								</div>
								<div class="input number">
									<label for="">Liczba</label>
									<input class="value validate" type="number" value="2019" max="9999" min="0">
								</div>
							</div>
						<?php endif; ?>

						<?php if (get_field('extra_text')) : ?>
							<div class="extra-product-data-input" data-value="" data-label="Dodaj napis">
								<div class="checkbox">
									<div class="box"></div>
									<div class="label">Dodaj napis</div>
								</div>
								<div class="input text">
									<label for="">Dołącz napis (max 30 znaków)</label>
									<input class="value validate" type="text" maxlength="30" class="text">
								</div>
							</div>
						<?php endif; ?>

						<?php if (get_field('extra_photo')) : ?>
							<div class="extra-product-data-input" data-value="" data-label="Dodaj zdjęcie">
								<div class="checkbox">
									<div class="box"></div>
									<div class="label">Dodaj zdjęcie</div>
								</div>
								<div class="input file">
									<label for="">Dołącz plik graficzny</label>
									<input type="file" id="extra-image" class="validate" accept="image/x-png,image/jpeg">
									<div id="image-base64" class="image-preview value"></div>
								</div>
							</div>
						<?php endif; ?>



					</div>
				</div>

			<?php endif; ?>

			<div class="product-validation-info typo" id="validation-info"></div>


			<?php if ($product->price !== '') : ?>
				<div class="product-add-to-cart-section">
					<div class="total">
						<div class="label">Razem</div>
						<div class="price large-number" id="otal-price"></div>
					</div>
					<div class="quantity">
						<div class="label">Ilość</div>
						<div class="quantity-select">
							<div class="number">
								<p class="large-number" id="custom-quantity-display">%q%</p>
							</div>
							<div class="controls">
								<div class="control-item inc">
									<p>+</p>
								</div>
								<div class="control-item dec">
									<p>-</p>
								</div>
							</div>
						</div>
					</div>
					<div class="add-to-cart">
						<button class="btn btn-cart" id="custom-cart-button">Do koszyka</button>
					</div>
				</div>
			<?php else : ?>
				<div class="no-price-text typo">
					<?php the_field('individual_pricing_text'); ?>
				</div>
			<?php endif; ?>

			<div class="debug-section typo">
				<p>Dodatkowe parametry (dla programisty)</p>
				<div id="debug"></div>
			</div>

			<div class="hide-default-wc-cart">
				<?php
				/**
				 * Hook: woocommerce_single_product_summary.
				 *
				 * @hooked woocommerce_template_single_title - 5
				 * @hooked woocommerce_template_single_rating - 10
				 * @hooked woocommerce_template_single_price - 10
				 * @hooked woocommerce_template_single_excerpt - 20
				 * @hooked woocommerce_template_single_add_to_cart - 30
				 * @hooked woocommerce_template_single_meta - 40
				 * @hooked woocommerce_template_single_sharing - 50
				 * @hooked WC_Structured_Data::generate_product_data() - 60
				 */
				do_action('woocommerce_single_product_summary');
				?>
			</div>
		</div>
	</div>
</div>

<?php
/**
 * Hook: woocommerce_after_single_product_summary.
 *
 * @hooked woocommerce_output_product_data_tabs - 10
 * @hooked woocommerce_upsell_display - 15
 * @hooked woocommerce_output_related_products - 20
 */
do_action('woocommerce_after_single_product_summary');
?>


<script>
	jQuery(document).ready(function($) {
		$(document).ready(function() {
			var taste_default = $('.taste-options option:first').attr('taste-id');

			$('#taste_id').attr('value', taste_default);
			$('#taste_id').val(taste_default);
		});

		$(document).on('change', '.taste-options', function() {
			var option = $('option:selected', this).attr('taste-id');

			$('#taste_id').attr('value', option);
			$('#taste_id').val(option);
		});


	});
</script>



<?php do_action('woocommerce_after_single_product'); ?>