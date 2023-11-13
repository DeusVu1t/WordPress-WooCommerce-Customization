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
            'include' => $terms[0]->parent,
        )
    )[0];
    $category_slug = $parent_category->slug;
} else {
    $category_slug = $terms[0]->slug;
}
?>

<div class="product-card" id="product-<?php the_ID();?>">
    <div class="content">
       <!--  <div class="category-icon">
            <?php if ($category_slug === 'torty'): ?>
                <img src="<?php bloginfo('template_directory');?>/assets/img/cake.svg" alt="">
            <?php else: ?>
                <img src="<?php bloginfo('template_directory');?>/assets/img/cupcake.svg" alt="">
            <?php endif;?>
        </div> -->
        <div class="images">


            <?php $image = wp_get_attachment_image_src(
    get_post_thumbnail_id($loop->post->ID),
    'single-post-thumbnail'
);?>
            <div class="big-photo">
                <?php if ($image): ?>
                    <img src="<?=$image[0];?>">
                <?php else: ?>
                    <img src="<?php bloginfo('template_directory');?>/assets/img/no-photo.jpg">
                <?php endif;?>
            </div>

            <?php $attachment_ids = $product->get_gallery_attachment_ids();?>
            <?php if (count($attachment_ids) > 0): ?>
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

                            <?php foreach ($attachment_ids as $attachment_id): ?>

                                <div class="swiper-slide">
                                    <div class="slide-image">
                                        <img src="<?=wp_get_attachment_url($attachment_id);?>" alt="">
                                    </div>
                                </div>

                            <?php endforeach;?>

                        </div>
                    </div>
                </div>
            <?php endif;?>

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
        <div class="text <?php if ($product->price === ''): ?>no-price-container<?php endif;?>">

            <div class="text-wrapper typo">
                <h1><?php the_title();?></h1>
                <?php the_content();?>
            </div>

            <?php if ($product->is_type('variable')): ?>
                <?php $variations = $product->get_available_variations();?>
               <div class="title title-big">
                                        <p>Wybierz wielkość</p>
                                    </div>
                <div class="variant-select">
                    <?php foreach ($variations as $variant): ?>
                        <div class="item" data-value="<?=$variant['attributes']['attribute_rozmiar'];?>">
                            <div class="label">
                                <p class="variant"><?=$variant['attributes']['attribute_rozmiar'];?></p>
                                <p class="desc"><?=strip_tags($variant['variation_description']);?></p>
                            </div>
                            <div class="price">
                                <p><?=$variant['price_html'];?></p>
                            </div>
                        </div>
                    <?php endforeach;?>
                </div>
            <?php else: ?>
                <div id="single-product-price">
                    <?=$product->price;?>&nbsp;<?=get_woocommerce_currency_symbol();?>
                </div>
            <?php endif;?>
            <form class="cart" action="<?php echo esc_url(apply_filters('woocommerce_add_to_cart_form_action', $product->get_permalink())); ?>" method="post" enctype='multipart/form-data'>

                <div class="extra-product-data">
                    <div class="items">
                        <!-- Smak -->
                        <div class="configurator-feature">
                            <?php if (get_field('addition_taste') == 1): ?>
                                <div class="configurator-item">
                                    <div class="title title-big">
                                        <p>Wybierz smak:</p>
                                    </div>

                                    <?php if (have_rows('z_naglowkuem')): $tasteIndex = 0;?>
		                                        <div class="tastes-block">
		                                            <p class="validation-error error">Proszę wybrać smak</p>
		                                            <?php while (have_rows('z_naglowkuem')): the_row();?>

				                                                <div class="title">
				                                                    <p><?php the_sub_field('naglowek');?></p>
				                                                </div>
				                                                <div class="smaki-grid">
				                                                    <?php if (have_rows('taste_repeater')): ?>

				                                                        <?php while (have_rows('taste_repeater')): the_row();?>
						                                                            <?php $tasteClass = 'taste-checkbox-' . $tasteIndex; // Уникальный класс для вкуса
            ?>
						                                                            <div class="extra-product-data-input">
						                                                                <div class="<?php echo $tasteClass; ?> taste-check checkbox">
						                                                                    <input type="checkbox" class="taste-checkbox box" data-class="<?php echo $tasteIndex; ?>" name="selected_taste[]" value="<?php the_sub_field('nazwa_smaku');?>">
						                                                                    <div class="label"><?php the_sub_field('nazwa_smaku');?></div>
						                                                                </div>

						                                                            </div>
						                                                            <?php $tasteIndex++; // Увеличиваем индекс
            ?>
						                                                        <?php endwhile;?>
				                                                    <?php endif;?>
		                                                </div>
		                                            <?php endwhile;?>
                                        </div>
                                    <?php endif;?>
                                    <div class="title title-big">
                                        <p>Wybierz wielkość</p>
                                    </div>
                                    <div class="sizes">
                                        <p class="validation-error error">Proszę wybrać wielkość</p>
                                        <?php if (have_rows('z_naglowkuem')): $sizeIndex = 0;?>
		                                            <?php while (have_rows('z_naglowkuem')): the_row();?>
				                                                <?php if (have_rows('taste_repeater')): ?>

				                                                    <?php while (have_rows('taste_repeater')): the_row();?>
						                                                        <div class="taste-sizes variant-select" data-class="<?php echo $sizeIndex ?>">
						                                                            <?php $sizeClass = 'size-checkbox-' . $sizeIndex; // Уникальный класс для размера
            ?>
						                                                            <div class="extra-product-data-input">
						                                                                <label class="<?php echo $sizeClass; ?> size-check checkbox item" data-class="<?php echo $sizeIndex; ?>">
						                                                                    <input type="checkbox" class="size-checkbox box" name="addition_taste" value="<?php the_sub_field('cena_malego');?>" data-name="<?php the_sub_field('nazwa_smaku');?> mały">
						                                                                    <div class="label">
						                                                                        <p class="variant">Mały</p>
						                                                                        <p class="desc"><?php the_sub_field('porcji_w_malym');?> porcji</p>
						                                                                    </div>
						                                                                    <div class="price">
						                                                                        <p><span class="price"><span class="woocommerce-Price-amount amount"><?php the_sub_field('cena_malego');?> zł</span></span></p>
						                                                                    </div>
						                                                                </label>
						                                                            </div>
						                                                            <div class="extra-product-data-input">
						                                                                <label class="<?php echo $sizeClass; ?> size-check checkbox item" data-class="<?php echo $sizeIndex; ?>">
						                                                                    <input type="checkbox" class="size-checkbox box mid-check" name="addition_taste" value="<?php the_sub_field('cena_sredniego');?>" data-name="<?php the_sub_field('nazwa_smaku');?> średni">
						                                                                    <div class="label">
						                                                                        <p class="variant">Średni</p>
						                                                                        <p class="desc"><?php the_sub_field('porcji_w_srednim');?> porcji</p>
						                                                                    </div>
						                                                                    <div class="price">
						                                                                        <p><span class="price"><span class="woocommerce-Price-amount amount"><?php the_sub_field('cena_sredniego');?> zł</span></span></p>
						                                                                    </div>
						                                                                </label>
						                                                            </div>
						                                                            <div class="extra-product-data-input">
						                                                                <label class="<?php echo $sizeClass; ?> size-check checkbox item" data-class="<?php echo $sizeIndex; ?>">
						                                                                    <input type="checkbox" class="size-checkbox box" name="addition_taste" value="<?php the_sub_field('cena_duzego');?>" data-name="<?php the_sub_field('nazwa_smaku');?> duży">
						                                                                    <div class="label">
						                                                                        <p class="variant">Duży</p>
						                                                                        <p class="desc"><?php the_sub_field('porcji_w_duzym');?> porcji</p>
						                                                                    </div>
						                                                                    <div class="price">
						                                                                        <p><span class="price"><span class="woocommerce-Price-amount amount"><?php the_sub_field('cena_duzego');?> zł</span></span></p>
						                                                                    </div>
						                                                                </label>
						                                                            </div>



						                                                            <?php $sizeIndex++; // Увеличиваем индекс
            ?>
						                                                        </div>
						                                                    <?php endwhile;?>

				                                                <?php endif;?>

		                                            <?php endwhile;?>
                                        <?php endif;?>

                                    </div>
                                </div>

                            <?php endif;?>



                            <?php if (get_field('addition_toper') == 1): ?>
                                <div class="title title-big">
                                    <p>Wybierz topper</p>
                                </div>
                                <div class="toppers">
                                    <?php if (have_rows('osobny_topper')): $topperIndex = 0;
    while (have_rows('osobny_topper')): the_row();?>

				                                            <div class="extra-product-data-input">
				                                                <label class="single-topper checkbox" id="topper-<?php echo $topperIndex; ?>">
				                                                    <input type="checkbox" class="topper-checkbox box value validate" name="additional_topper" value="<?php the_sub_field('cena');?>" data-name="<?php the_sub_field('nazwa');?>">
				                                                    <div class="inside-topper-row label">

				                                                        <?php $obrazek = get_sub_field('obrazek');?>
				                                                        <?php if ($obrazek): ?>
				                                                            <div class="image">
				                                                                <img src="<?php echo esc_url($obrazek['url']); ?>" alt="<?php echo esc_attr($obrazek['alt']); ?>" />
				                                                            </div>
				                                                        <?php endif;?>

		                                                        <p><?php the_sub_field('nazwa');?></p>
		                                                    </div>
		                                                </label>

		                                            </div>
		                                    <?php endwhile;
endif;?>
                                </div>
                            <?php endif;?>
                        </div>


                        <div class="product-custom-field">

                            <div class="field-wrapper">
                                <label for="extra-product-data-input">Custom field</label>
                                <textarea name="extra-product-data-input" id="extra-product-data-input"></textarea>
                            </div>
                            <div class="field-wrapper">
                                <label for="extra-photo-base64">Extra photo Base64</label>
                                <textarea name="extra-photo-base64" id="extra-photo-base64"></textarea>
                            </div>

                        </div>
                        <?php if (get_field('addition_taste') == 1): ?>
                            <script>
                                const elementsClick = document.querySelectorAll(".active ");


                                elementsClick.forEach(function(element) {
                                    element.addEventListener("click", function() {
                                        console.log('tttteee');
                                    });
                                });

                                jQuery(function($) {

                                    $(".sizes .label").click(function() {
                                        $(".sizes label").removeClass("active");
                                        $(this).closest("label").addClass("active");

                                    });

                                    $(".sizes .size-checkbox").click(function() {
                                        $(".sizes label").removeClass("active");

                                    });

                                    $(".toppers .label").click(function() {
                                        $(".toppers label").removeClass("active");
                                        $(this).closest("label").addClass("active");
                                    });

                                    $(".toppers .topper-checkbox").click(function() {
                                        $(".toppers label").removeClass("active");

                                    });
                                    $(document).ready(function() {
                                        const tasteCheckboxes = $('.taste-checkbox');
                                        const sizeCheckboxes = $('.size-checkbox');
                                        const toperCheckboxes = $('.topper-checkbox');
                                        tasteCheckboxes.on('change', function() {
                                            tasteCheckboxes.not(this).prop('checked', false);

                                        });
                                        sizeCheckboxes.on('change', function() {
                                            sizeCheckboxes.not(this).prop('checked', false);


                                        });
                                        toperCheckboxes.on('change', function() {
                                            toperCheckboxes.not(this).prop('checked', false);

                                        });
                                        tasteCheckboxes.on('change', function() {
                                            var tasteClass = (this).getAttribute('data-class');
                                            sizeCheckboxes.not(this).prop('checked', false);
                                            $(".taste-sizes[data-class='" + tasteClass + "'] .mid-check").prop('checked', true);
                                            $("size-check").removeClass("active");
                                            const midSizeLabel = $(".mid-check").closest(".extra-product-data-input");
                                            midSizeLabel.addClass("actives");
                                        });

                                        function clickMid() {
                                            $(".taste-sizes[data-class='0'] .mid-check").prop('checked', true);
                                            const midSizeLabel = $(".size-checkbox-0[data-class='0'] .mid-check").closest(".extra-product-data-input");
                                            midSizeLabel.addClass("actives");
                                        }
                                        clickMid();
                                    });



                                    $(".taste-checkbox").click(function() {
                                        var tasteClass = (this).getAttribute('data-class');
                                        $(".taste-sizes").css("display", "none");
                                        $(".taste-sizes[data-class='" + tasteClass + "'] .mid-size").removeClass("active");
                                        $(".taste-sizes[data-class='" + tasteClass + "']").css("display", "flex");
                                        $(".taste-sizes[data-class='" + tasteClass + "'] .mid-check").prop('checked', true).change();
                                        $(".taste-sizes[data-class='" + tasteClass + "'] .mid-size").addClass("active");
                                    });




                                });
                                jQuery(document).ready(function($) {
                                    $('.cart').submit(function(e) {
                                        var selectedTastes = $('input[name="selected_taste[]"]:checked').length;
                                        var selectedSizes = $('input[name="addition_taste"]:checked').length;

                                        // Проверяем наличие чекбоксов с указанными именами
                                        var hasSelectedTastes = selectedTastes > 0;
                                        var hasSelectedSizes = selectedSizes > 0;

                                        // Если нет ни одного чекбокса, то не выполняем скрипт
                                        if (!hasSelectedTastes && !hasSelectedSizes) {
                                            return;
                                        }

                                        // Если есть чекбоксы, продолжаем с остальной логикой
                                        if (!hasSelectedTastes || !hasSelectedSizes) {
                                            $('.tastes-block').addClass('incomplete-selection');
                                            $('.sizes').addClass('incomplete-selection');
                                            $('html, body').animate({
                                                scrollTop: 0
                                            }, 'fast');
                                            e.preventDefault();
                                        } else {
                                            $('.tastes-block').removeClass('incomplete-selection');
                                            $('.sizes').removeClass('incomplete-selection');
                                        }
                                    });



                                    $(document).ready(function() {
                                        const tasteCheckboxes = $('.taste-checkbox');
                                        const sizeCheckboxes = $('.size-checkbox');
                                        const topperCheckboxes = $('.topper-checkbox');
                                        let totalPrice = 0;

                                        function updateTotalPrice() {
                                            if (tasteCheckboxes.length === 0 || sizeCheckboxes.length === 0 || topperCheckboxes.length === 0) {
                                                return;
                                            }
                                            totalPrice = 0;
                                            sizeCheckboxes.filter(':checked').each(function() {
                                                totalPrice += parseFloat($(this).val());
                                            });

                                            topperCheckboxes.filter(':checked').each(function() {
                                                totalPrice += parseFloat($(this).val());
                                            });
                                            $('#custom-total-display').text(totalPrice.toFixed(2) + ' zł');
                                        }
                                        tasteCheckboxes.on('change', function() {
                                            tasteCheckboxes.not(this).prop('checked', false);
                                            var tasteClass = $(this).data('class');
                                            $(".taste-sizes[data-class='" + tasteClass + "'] .mid-check").prop('checked', true);
                                            updateTotalPrice();
                                        });
                                        sizeCheckboxes.on('change', function() {
                                            sizeCheckboxes.not(this).prop('checked', false);
                                            updateTotalPrice();
                                        });
                                        topperCheckboxes.on('change', function() {
                                            topperCheckboxes.not(this).prop('checked', false);
                                            updateTotalPrice();
                                        });
                                        updateTotalPrice();
                                    });

                                    $(".swiecka").click(function() {
                                        $(".fontanna").removeClass("active");
                                        $(".fontanna .checkbox").removeClass("active");
                                        $(".fontanna").each(function() {
                                            var dataValue = $(this).attr("data-value");
                                            dataValue = dataValue.replace(/checked/g, '');
                                            $(this).attr("data-value", dataValue);
                                        });
                                        updateExtraDataField();
                                        console.log("byl klik");
                                    });

                                    $(".fontanna").click(function() {
                                        $(".swiecka").removeClass("active");
                                        $(".swiecka .checkbox").removeClass("active");
                                        $(".swiecka").each(function() {
                                            var dataValue = $(this).attr("data-value");
                                            dataValue = dataValue.replace(/checked/g, '');
                                            $(this).attr("data-value", dataValue);
                                        });
                                        updateExtraDataField();
                                        console.log("byl klik");
                                    });


                                });
                            </script>
                        <?php endif;?>
                        <?php if (get_field('show_extra_data_section')): ?>
                            <div class="title title-big">
                                <p>Wybierz dodatki GRATIS!</p>
                            </div>


                            <?php if (get_field('extra_text')): ?>
                                <div class="extra-product-data-input gratis" data-value="" data-label="Dodaj napis">
                                    <div class="checkbox">
                                        <div class="box"></div>
                                        <div class="label">Dodaj napis</div>
                                    </div>
                                    <div class="input text">
                                        <label for="">Dołącz napis (max 30 znaków)</label>
                                        <input class="value validate" type="text" maxlength="30" class="text">
                                    </div>
                                </div>
                            <?php endif;?>
                            <?php if (get_field('extra_candle')): ?>
                                <?php if (get_field('extra_candle_number')): ?>
                                    <div class="two-row">
                                    <?php endif;?>
                                <div class="extra-product-data-input gratis swiecka" data-value="" data-label="Świeczka">
                                    <div class="checkbox">
                                        <div class="box"></div>
                                        <div class="label">Świeczka</div>
                                    </div>
                                    <div class="input number">
                                        <label for="">Ilość świeczek</label>
                                        <input class="value validate" type="number" value="1" min="1" max="100">
                                    </div>
                                </div>
                            <?php endif;?>

                            <?php if (get_field('extra_candle_number')): ?>
                                <div class="extra-product-data-input gratis fontanna" data-value="" data-label="">
                                    <div class="checkbox">
                                        <div class="box"></div>
                                        <div class="label">Fontanna</div>
                                    </div>
                                    <div class="input number" style="display: none!important;">
                                        <label for="">Liczba</label>
                                        <input class="value validate" type="text" value="Fontanna">
                                    </div>
                                </div>
                                <?php if (get_field('extra_candle')): ?>
                                </div>
                            <?php endif;?>
                            <?php endif;?>



                            <?php if (get_field('extra_photo')): ?>
                                <div class="title title-big">
                                    <p>Dodaj zdjęcie</p>
                                </div>
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
                            <?php endif;?>
                        <?php endif;?>



                    </div>
                </div>



                <div class="product-validation-info typo" id="validation-info"></div>


                <?php if ($product->price !== ''): ?>
                    <div class="product-add-to-cart-section">
                        <div class="total">
                            <div class="label">Razem</div>
                            <!-- <div class="price large-number" id="custom-total-display">%total%</div> -->
                            <div id="custom-total-display" class="product-price price large-number">%total%</div>

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

                            <?php
defined('ABSPATH') || exit;
global $product;
if (!$product->is_purchasable()) {
    return;
}

echo wc_get_stock_html($product);
if ($product->is_in_stock()): ?>
                                <?php do_action('woocommerce_before_add_to_cart_form');?>

                                <?php do_action('woocommerce_before_add_to_cart_button');?>
                                <?php do_action('woocommerce_before_add_to_cart_quantity');?>

                                <button type="submit" name="add-to-cart" value="<?php echo esc_attr($product->get_id()); ?>" class="btn btn-cart"><?php echo esc_html($product->single_add_to_cart_text()); ?></button>
                                <?php do_action('woocommerce_after_add_to_cart_button');?>

                                <?php do_action('woocommerce_after_add_to_cart_form');?>
                            <?php endif;?>

                        </div>
                    </div>
                <?php else: ?>

                    <?php include_once __DIR__ . '/no-price.php';?>

                <?php endif;?>
                <div class="debug-section typo">
                    <p>Dodatkowe parametry (dla programisty)</p>
                    <div id="debug"></div>
                </div>
            </form>
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

<?php do_action('woocommerce_after_single_product');?>