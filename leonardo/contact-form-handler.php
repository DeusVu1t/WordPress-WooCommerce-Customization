<?php

// Adding class to Row

$className = 'row-five-dev';
if (!empty($block['className'])) {
    $className .= ' ' . $block['className'];

    if (!empty($block['align'])) {
        $className .= ' align' . $block['align'];
    }
}


?>


<!-- 1 FULL , 5 SMALL COlUMNS -->
<!-- thisishome -->
<!-- Group loop -->
<?php if (have_rows('row-five-dev')) : ?>
    <?php while (have_rows('row-five-dev')) : the_row(); ?>


        <div class="row <?php echo esc_attr($className); ?>">



            <?php if (have_rows('col-0')) : ?>
                <?php while (have_rows('col-0')) : the_row(); ?>


                    <!-- COLUMN #1 -->


                    <div class="vi-col1">

                        <!-- Title block -->
                        <?php if (have_rows('elements')) : ?>
                            <?php while (have_rows('elements')) : the_row(); ?>


                                <?php if (get_row_layout() == 'title') : ?>
                                    <h1><?php echo get_sub_field('title'); ?></h1>

                                <?php endif; ?>
                            <?php endwhile; ?>
                        <?php endif; ?>

                        <!-- Content block #1 -->
                        <?php if (have_rows('elements')) : ?>
                            <?php while (have_rows('elements')) : the_row(); ?>
                                <!-- Title -->
                                <?php if (get_row_layout() == 'content') : ?>
                                    <h1><?php echo get_sub_field('content'); ?></h1>

                                <?php endif; ?>
                            <?php endwhile; ?>
                        <?php endif; ?>


                        <!-- Content block #2 -->

                        <?php if (have_rows('elements')) : ?>
                            <?php while (have_rows('elements')) : the_row(); ?>
                                <!-- Title -->
                                <?php if (get_row_layout() == 'content-simple') : ?>
                                    <p><?php echo get_sub_field('content-simple'); ?></p>

                                <?php endif; ?>
                            <?php endwhile; ?>
                        <?php endif; ?>


                        <!-- Image id  -->

                        <?php if (have_rows('elements')) : ?>
                            <?php while (have_rows('elements')) : the_row(); ?>

                                <?php

                                $imgID = get_sub_field('img-id');
                                $imgSize = "full"; // (thumbnail, medium, full, full or custom size)
                                $imgArr = wp_get_attachment_image_src($imgID, $imgSize);

                                ?>

                                <!-- Title -->
                                <?php if (get_row_layout() == 'img-id') : ?>
                                    <div class="imgid" style="background-size:cover;height:300px;background-image: url(<?php echo $imgArr[0]; ?> );">
                                    </div>

                                <?php endif; ?>
                            <?php endwhile; ?>
                        <?php endif; ?>


                        <!-- Image url  -->

                        <?php if (have_rows('elements')) : ?>
                            <?php while (have_rows('elements')) : the_row(); ?>

                                <!-- Title -->
                                <?php if (get_row_layout() == 'img-url') : ?>
                                    <img src="<?php echo get_sub_field('img-url') ?>" />

                                <?php endif; ?>
                            <?php endwhile; ?>
                        <?php endif; ?>



                        <!-- Button url -->

                        <?php if (have_rows('elements')) : ?>
                            <?php while (have_rows('elements')) : the_row(); ?>

                                <!-- Title -->
                                <?php if (get_row_layout() == 'link') : ?>
                                    <a href="<?php echo get_sub_field('link') ?>">
                                        <?php echo get_sub_field('name') ?></a>

                                <?php endif; ?>
                            <?php endwhile; ?>
                        <?php endif; ?>



                        <!-- YT / Vimeo video -->


                        <?php if (have_rows('elements')) : ?>
                            <?php while (have_rows('elements')) : the_row(); ?>

                                <!-- Title -->
                                <?php if (get_row_layout() == 'embeded') : ?>
                                    <div class="embeded">
                                        <?php echo get_sub_field('oEmbed') ?>
                                    </div>

                                <?php endif; ?>
                            <?php endwhile; ?>
                        <?php endif; ?>


                    </div>

                <?php endwhile; ?>
            <?php endif; ?>


            <div class="custom-section">

                <?php if (have_rows('col-1')) : ?>
                    <?php while (have_rows('col-1')) : the_row(); ?>


                        <!-- COLUMN #1 -->


                      

                            <!-- Title block -->
                            <?php if (have_rows('elements')) : ?>

                                <div class="vi-col5">
                                <?php while (have_rows('elements')) : the_row(); ?>


                                    <?php if (get_row_layout() == 'title') : ?>
                                        <h1><?php echo get_sub_field('title'); ?></h1>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>

                            <!-- Content block #1 -->
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'content') : ?>
                                        <h1><?php echo get_sub_field('content'); ?></h1>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>


                            <!-- Content block #2 -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'content-simple') : ?>
                                        <p><?php echo get_sub_field('content-simple'); ?></p>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>


                            <!-- Image id  -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <?php

                                    $imgID = get_sub_field('img-id');
                                    $imgSize = "full"; // (thumbnail, medium, full, full or custom size)
                                    $imgArr = wp_get_attachment_image_src($imgID, $imgSize);

                                    ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'img-id') : ?>
                                        <div class="imgid" style="background-size:cover;height:300px;background-image: url(<?php echo $imgArr[0]; ?> );">
                                        </div>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>


                            <!-- Image url  -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'img-url') : ?>
                                        <img src="<?php echo get_sub_field('img-url') ?>" />

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>



                            <!-- Button url -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'link') : ?>
                                        <a href="<?php echo get_sub_field('link') ?>">
                                            <?php echo get_sub_field('name') ?></a>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>



                            <!-- YT / Vimeo video -->


                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'embeded') : ?>
                                        <div class="embeded">
                                            <?php echo get_sub_field('oEmbed') ?>
                                        </div>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                                </div>
                            <?php endif; ?>


                       

                    <?php endwhile; ?>
                <?php endif; ?>



                <!-- COLUMN #2 -->

                <?php if (have_rows('col-2')) : ?>
                    <?php while (have_rows('col-2')) : the_row(); ?>

                       

                            <!-- Title block -->
                            <?php if (have_rows('elements')) : ?>
                                <div class="vi-col5">
                                <?php while (have_rows('elements')) : the_row(); ?>


                                    <?php if (get_row_layout() == 'title') : ?>
                                        <h1><?php echo get_sub_field('title'); ?></h1>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>

                            <!-- Content block #1 -->
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'content') : ?>
                                        <h1><?php echo get_sub_field('content'); ?></h1>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>


                            <!-- Content block #2 -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'content-simple') : ?>
                                        <p><?php echo get_sub_field('content-simple'); ?></p>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>


                            <!-- Image id  -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <?php

                                    $imgID = get_sub_field('img-id');
                                    $imgSize = "full"; // (thumbnail, medium, full, full or custom size)
                                    $imgArr = wp_get_attachment_image_src($imgID, $imgSize);

                                    ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'img-id') : ?>
                                        <div class="imgid" style="background-size:cover;height:300px;background-image: url(<?php echo $imgArr[0]; ?> );">
                                        </div>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>


                            <!-- Image url  -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'img-url') : ?>
                                        <img src="<?php echo get_sub_field('img-url') ?>" />

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>



                            <!-- Button url -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'link') : ?>
                                        <a href="<?php echo get_sub_field('link') ?>">
                                            <?php echo get_sub_field('name') ?></a>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>



                            <!-- YT / Vimeo video -->


                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'embeded') : ?>
                                        <div class="embeded">
                                            <?php echo get_sub_field('oEmbed') ?>
                                        </div>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                                </div>
                            <?php endif; ?>


                        



                    <?php endwhile; ?>
                <?php endif; ?>




                <!-- COLUMN #3 -->
                <?php if (have_rows('col-3')) : ?>
                    <?php while (have_rows('col-3')) : the_row(); ?>

                       

                            <!-- Title block -->
                            <?php if (have_rows('elements')) : ?>
                                <div class="vi-col5">
                                <?php while (have_rows('elements')) : the_row(); ?>


                                    <?php if (get_row_layout() == 'title') : ?>
                                        <h1><?php echo get_sub_field('title'); ?></h1>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>

                            <!-- Content block #1 -->
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'content') : ?>
                                        <h1><?php echo get_sub_field('content'); ?></h1>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>


                            <!-- Content block #2 -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'content-simple') : ?>
                                        <p><?php echo get_sub_field('content-simple'); ?></p>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>


                            <!-- Image id  -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <?php

                                    $imgID = get_sub_field('img-id');
                                    $imgSize = "full"; // (thumbnail, medium, full, full or custom size)
                                    $imgArr = wp_get_attachment_image_src($imgID, $imgSize);

                                    ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'img-id') : ?>
                                        <div class="imgid" style="background-size:cover;height:300px;background-image: url(<?php echo $imgArr[0]; ?> );">
                                        </div>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>


                            <!-- Image url  -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'img-url') : ?>
                                        <img src="<?php echo get_sub_field('img-url') ?>" />

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>



                            <!-- Button url -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'link') : ?>
                                        <a href="<?php echo get_sub_field('link') ?>">
                                            <?php echo get_sub_field('name') ?></a>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>



                            <!-- YT / Vimeo video -->


                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'embeded') : ?>
                                        <div class="embeded">
                                            <?php echo get_sub_field('oEmbed') ?>
                                        </div>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                                </div>
                            <?php endif; ?>


                        



                    <?php endwhile; ?>
                <?php endif; ?>



                <!-- COLUMN #4 -->





                <!-- COLUMN #5 -->


                <?php if (have_rows('col-5')) : ?>
                    <?php while (have_rows('col-5')) : the_row(); ?>

                        

                            <!-- Title block -->
                            <?php if (have_rows('elements')) : ?>
                                <div class="vi-col5">
                                <?php while (have_rows('elements')) : the_row(); ?>


                                    <?php if (get_row_layout() == 'title') : ?>
                                        <h1><?php echo get_sub_field('title'); ?></h1>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>

                            <!-- Content block #1 -->
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'content') : ?>
                                        <h1><?php echo get_sub_field('content'); ?></h1>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>


                            <!-- Content block #2 -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'content-simple') : ?>
                                        <p><?php echo get_sub_field('content-simple'); ?></p>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>


                            <!-- Image id  -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <?php

                                    $imgID = get_sub_field('img-id');
                                    $imgSize = "full"; // (thumbnail, medium, full, full or custom size)
                                    $imgArr = wp_get_attachment_image_src($imgID, $imgSize);

                                    ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'img-id') : ?>
                                        <div class="imgid" style="background-size:cover;height:300px;background-image: url(<?php echo $imgArr[0]; ?> );">
                                        </div>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>


                            <!-- Image url  -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'img-url') : ?>
                                        <img src="<?php echo get_sub_field('img-url') ?>" />

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>



                            <!-- Button url -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'link') : ?>
                                        <a href="<?php echo get_sub_field('link') ?>">
                                            <?php echo get_sub_field('name') ?></a>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>



                            <!-- YT / Vimeo video -->


                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'embeded') : ?>
                                        <div class="embeded">
                                            <?php echo get_sub_field('oEmbed') ?>
                                        </div>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                                </div>
                            <?php endif; ?>


                     


                    <?php endwhile; ?>
                <?php endif; ?>


                <!-- COLUMN #6 -->


                <?php if (have_rows('col-6')) : ?>
                    <?php while (have_rows('col-6')) : the_row(); ?>

                       

                            <!-- Title block -->
                            <?php if (have_rows('elements')) : ?>
                                <div class="vi-col5">
                                <?php while (have_rows('elements')) : the_row(); ?>


                                    <?php if (get_row_layout() == 'title') : ?>
                                        <h1><?php echo get_sub_field('title'); ?></h1>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>

                            <!-- Content block #1 -->
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'content') : ?>
                                        <h1><?php echo get_sub_field('content'); ?></h1>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>


                            <!-- Content block #2 -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'content-simple') : ?>
                                        <p><?php echo get_sub_field('content-simple'); ?></p>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>


                            <!-- Image id  -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <?php

                                    $imgID = get_sub_field('img-id');
                                    $imgSize = "full"; // (thumbnail, medium, full, full or custom size)
                                    $imgArr = wp_get_attachment_image_src($imgID, $imgSize);

                                    ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'img-id') : ?>
                                        <div class="imgid" style="background-size:cover;height:300px;background-image: url(<?php echo $imgArr[0]; ?> );">
                                        </div>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>


                            <!-- Image url  -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'img-url') : ?>
                                        <img src="<?php echo get_sub_field('img-url') ?>" />

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>



                            <!-- Button url -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'link') : ?>
                                        <a href="<?php echo get_sub_field('link') ?>">
                                            <?php echo get_sub_field('name') ?></a>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>



                            <!-- YT / Vimeo video -->


                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'embeded') : ?>
                                        <div class="embeded">
                                            <?php echo get_sub_field('oEmbed') ?>
                                        </div>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                                </div>
                            <?php endif; ?>


                      


                    <?php endwhile; ?>
                <?php endif; ?>


                <!-- COLUMN #7 -->

                <?php if (have_rows('col-7')) : ?>
                    <?php while (have_rows('col-7')) : the_row(); ?>

                        

                            <!-- Title block -->
                            <?php if (have_rows('elements')) : ?>
                                <div class="vi-col5">
                                <?php while (have_rows('elements')) : the_row(); ?>


                                    <?php if (get_row_layout() == 'title') : ?>
                                        <h1><?php echo get_sub_field('title'); ?></h1>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>

                            <!-- Content block #1 -->
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'content') : ?>
                                        <h1><?php echo get_sub_field('content'); ?></h1>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>


                            <!-- Content block #2 -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'content-simple') : ?>
                                        <p><?php echo get_sub_field('content-simple'); ?></p>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>


                            <!-- Image id  -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <?php

                                    $imgID = get_sub_field('img-id');
                                    $imgSize = "full"; // (thumbnail, medium, full, full or custom size)
                                    $imgArr = wp_get_attachment_image_src($imgID, $imgSize);

                                    ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'img-id') : ?>
                                        <div class="imgid" style="background-size:cover;height:300px;background-image: url(<?php echo $imgArr[0]; ?> );">
                                        </div>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>


                            <!-- Image url  -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'img-url') : ?>
                                        <img src="<?php echo get_sub_field('img-url') ?>" />

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>



                            <!-- Button url -->

                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'link') : ?>
                                        <a href="<?php echo get_sub_field('link') ?>">
                                            <?php echo get_sub_field('name') ?></a>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>



                            <!-- YT / Vimeo video -->


                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <!-- Title -->
                                    <?php if (get_row_layout() == 'embeded') : ?>
                                        <div class="embeded">
                                            <?php echo get_sub_field('oEmbed') ?>
                                        </div>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                                </div>
                            <?php endif; ?>


                        


                    <?php endwhile; ?>
                <?php endif; ?>

                 <?php if (have_rows('col-8')) : ?>
                    <?php while (have_rows('col-8')) : the_row(); ?>
                        <div class="vi-col5">
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <?php if (get_row_layout() == 'title') : ?>
                                        <h1><?php echo get_sub_field('title'); ?></h1>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <?php if (get_row_layout() == 'content') : ?>
                                        <h1><?php echo get_sub_field('content'); ?></h1>
                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <?php if (get_row_layout() == 'content-simple') : ?>
                                        <p><?php echo get_sub_field('content-simple'); ?></p>
                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <?php
                                        $imgID = get_sub_field('img-id');
                                        $imgSize = "full"; // (thumbnail, medium, full, full or custom size)
                                        $imgArr = wp_get_attachment_image_src($imgID, $imgSize);
                                    ?>
                                    <?php if (get_row_layout() == 'img-id') : ?>
                                        <div class="imgid" style="background-size:cover;height:300px;background-image: url(<?php echo $imgArr[0]; ?> );">
                                        </div>

                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <?php if (get_row_layout() == 'img-url') : ?>
                                        <img src="<?php echo get_sub_field('img-url') ?>" />
                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <?php if (get_row_layout() == 'link') : ?>
                                        <a href="<?php echo get_sub_field('link') ?>">
                                            <?php echo get_sub_field('name') ?></a>
                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <?php if (get_row_layout() == 'embeded') : ?>
                                        <div class="embeded">
                                            <?php echo get_sub_field('oEmbed') ?>
                                        </div>
                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>
                        </div>
                    <?php endwhile; ?>
                <?php endif; ?>

                <!-- <?php if (have_rows('col-9')) : ?>
                    <?php while (have_rows('col-9')) : the_row(); ?>
                        <div class="vi-col5">
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <?php if (get_row_layout() == 'title') : ?>
                                        <h1><?php echo get_sub_field('title'); ?></h1>
                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <?php if (get_row_layout() == 'content') : ?>
                                        <h1><?php echo get_sub_field('content'); ?></h1>
                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <?php if (get_row_layout() == 'content-simple') : ?>
                                        <p><?php echo get_sub_field('content-simple'); ?></p>
                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <?php
                                        $imgID = get_sub_field('img-id');
                                        $imgSize = "full"; // (thumbnail, medium, full, full or custom size)
                                        $imgArr = wp_get_attachment_image_src($imgID, $imgSize);
                                    ?>
                                    <?php if (get_row_layout() == 'img-id') : ?>
                                        <div class="imgid" style="background-size:cover;height:300px;background-image: url(<?php echo $imgArr[0]; ?> );">
                                        </div>
                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>

                                    <?php $image = get_sub_field('image'); ?>
                                    <?php if ($image) : ?>
                                        <img src="<?php echo esc_url($image['url']); ?>" />
                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                    <?php if (get_row_layout() == 'link') : ?>
                                        <a href="<?php echo get_sub_field('link') ?>">
                                            <?php echo get_sub_field('name') ?></a>
                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>
                            <?php if (have_rows('elements')) : ?>
                                <?php while (have_rows('elements')) : the_row(); ?>
                                                   <?php if (get_row_layout() == 'embeded') : ?>
                                        <div class="embeded">
                                            <?php echo get_sub_field('oEmbed') ?>
                                        </div>
                                    <?php endif; ?>
                                <?php endwhile; ?>
                            <?php endif; ?>


                        </div>


                    <?php endwhile; ?>
                <?php endif; ?> -->





            </div>
        </div>


    <?php endwhile; ?>
<?php endif; ?>