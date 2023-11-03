<div id="noprice" class="no-price-text typo extra-product-data">
    <div class="items">
        <?php the_field('individual_pricing_text'); ?>
        <?php if (get_field('taste_add') == 1) : ?>
            <div class="smaki">
                <div class="title title-big">
                    <p>Wybierz smak</p>
                </div>
                <p class="validation-error error" style="display: none;">Proszę wybrać smak</p>
                <?php
                $categories = get_categories(array(
                    'taxonomy' => 'category',
                    'parent' => 0,
                ));

                foreach ($categories as $category) {
                    $subcategories = get_categories(array(
                        'taxonomy' => 'category',
                        'parent' => $category->cat_ID,
                    ));

                    foreach ($subcategories as $subcategory) {
                        echo '<div class="title"><p>' . $subcategory->name . '</p></div><div class="taste-ask">';

                        $args = array(
                            'post_type' => 'ask_option',
                            'posts_per_page' => -1,
                            'category_name' => $subcategory->slug,
                        );

                        $query = new WP_Query($args);

                        if ($query->have_posts()) :
                            while ($query->have_posts()) : $query->the_post();
                ?>
                                <div class="extra-product-data-input">
                                    <div class="custom-taste checkbox">
                                        <input type="checkbox" class="taste-checkbox-custom box" value="<?php the_title(); ?>">
                                        <div class="label"><?php the_title(); ?></div>
                                    </div>
                                </div>
                <?php
                            endwhile;
                            wp_reset_postdata();
                        endif;
                        echo '</div>';
                    }
                }
                ?>
            </div>
        <?php endif; ?>
        <?php if (get_field('topper_add_form') == 1) : ?>
            <div class="toppers-ask">
                <div class="title title-big">
                    <p>Wybierz topper</p>
                </div>
                <p class="validation-error error" style="display: none;">Proszę wybrać toper</p>
                <div class="toppers-ask-block">
                    <?php if (have_rows('osobny_topperss')) : ?>
                        <?php while (have_rows('osobny_topperss')) : the_row(); ?>

                            <?php $topper_id = get_sub_field('topper'); ?>
                            <div class="extra-product-data-input">
                                <div class="custom-topper checkbox">
                                    <input type="checkbox" class="topper-checkbox box" value="<?php echo get_the_title($topper_id); ?>">
                                    <div class="label">
                                        <div class="inside-topper-row">
                                            <div class="image">
                                                <?php $topper_image = get_field('topper_image', $topper_id); // Изменено на 'topper_image' 
                                                ?>
                                                <?php if ($topper_image) : ?>
                                                    <img src="<?php echo esc_url($topper_image['url']); ?>" alt="<?php echo esc_attr($topper_image['alt']); ?>" />
                                                <?php endif; ?>
                                            </div>
                                            <?php echo get_the_title($topper_id); ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php endwhile; ?>
                    <?php else : ?>
                    <?php endif; ?>

                    <div class="extra-product-data-input file-topper">
                        <div class="custom-topper">
                            <div class="checkbox">
                                <input type="checkbox" class="topper-checkbox box" value="Własny topper">
                            </div>
                            <div class="right-input">
                                <div class="checkbox">
                                    <div class="label">Własny topper</div>
                                </div>
                                <input class="custom-image2" accept=".jpg,.png,.webp" aria-invalid="false" type="file" name="input2" onchange="copyImage2(this)">
                            </div>
                        </div>
                    </div>
                    <div class="extra-product-data-input">
                        <div class="custom-topper checkbox">
                            <input type="checkbox" class="topper-checkbox box no-topper" value="Bez topperu">
                            <div class="label">Bez topperu</div>
                        </div>
                    </div>
                </div>
            </div>
        <?php endif; ?>



        <?php if (get_field('image_add') == 1) : ?>
            <div class="custom-project">
                <div class="title title-big">
                    <p>Załacz swój projekt</p>
                </div>
                <input class="custom-image" accept=".jpg,.png,.webp" aria-invalid="false" type="file" name="input1" onchange="copyImage(this)">
            </div>
        <?php endif; ?>



        <?php if (get_field('contact_add') == 1) : ?>
            <div class="title title-big">
                <p>Dane kontaktowe</p>
            </div>
            <?php echo do_shortcode('[contact-form-7 id="861df63" title="Formularz 1"]'); ?>
        <?php endif; ?>

    </div>

</div>


<?php if (get_field('contact_add') == 1) : ?>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const tasteCheckboxes = document.querySelectorAll('.taste-checkbox-custom');
            const topperCheckboxes = document.querySelectorAll('.topper-checkbox');
            const inputSelectedTastes = document.getElementById('selected_tastes');
            const inputSelectedToppers = document.getElementById('selected_toppers');

            tasteCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    const selectedValuesTaste = [];

                    tasteCheckboxes.forEach(checkbox => {
                        if (checkbox.checked) {
                            selectedValuesTaste.push(checkbox.value);
                        }
                    });

                    inputSelectedTastes.value = this.checked ? this.value : ''; // Сбрасываем значение, если чекбокс снят
                });
            });

            topperCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    const selectedValuesTopper = [];

                    topperCheckboxes.forEach(checkbox => {
                        if (checkbox.checked) {
                            selectedValuesTopper.push(checkbox.value);
                        }
                    });

                    inputSelectedToppers.value = this.checked ? this.value : ''; // Сбрасываем значение, если чекбокс снят
                });
            });
        });



        function copyImage(input1) {
            if (input1.files && input1.files[0]) {
                var input2 = document.getElementById("input2");
                input2.style.display = "block";
                var reader = new FileReader();
                reader.onload = function(e) {
                    input2.files = input1.files;
                };
                reader.readAsDataURL(input1.files[0]);
            }
        }

        function copyImage2(input2) {
            if (input2.files && input2.files[0]) {
                var input3 = document.getElementById("input3");
                input3.style.display = "block";
                var reader = new FileReader();
                reader.onload = function(e) {
                    input3.files = input2.files;
                };
                reader.readAsDataURL(input2.files[0]);
            }
        }
    </script>
    <script>
        jQuery(function($) {
            $(".label").click(function(event) {
                event.stopPropagation();
                var checkbox = $(this);
            });
            const tasteCheckboxesCustom = $('.taste-checkbox-custom');
            const toperCheckboxesCustom = $('.topper-checkbox');
            tasteCheckboxesCustom.on('change', function() {
                tasteCheckboxesCustom.not(this).prop('checked', false);
            });
            toperCheckboxesCustom.on('change', function() {
                toperCheckboxesCustom.not(this).prop('checked', false);
            });
        });
        jQuery(document).ready(function($) {
            $('input.wpcf7-submit').click(function(event) {
                var smakiCheckboxes = $('div.smaki input[type="checkbox"]:checked');
                var toppersCheckboxes = $('div.toppers-ask input[type="checkbox"]:checked');
                if (smakiCheckboxes.length === 0) {
                    $('div.smaki .validation-error.error').addClass('show-error');
                } else {
                    $('div.smaki .validation-error.error').removeClass('show-error');
                }
                if (toppersCheckboxes.length === 0) {
                    $('div.toppers-ask .validation-error.error').addClass('show-error');
                } else {
                    $('div.toppers-ask .validation-error.error').removeClass('show-error');
                }
                if (smakiCheckboxes.length === 0 || toppersCheckboxes.length === 0) {
                    $('html, body').animate({
                        scrollTop: $('#noprice').offset().top
                    }, 1000);

                    event.preventDefault();
                }
            });
        });
    </script>

<?php endif; ?>


