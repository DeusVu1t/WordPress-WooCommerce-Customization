<?php

/**
 * Template Name: Work temp
 * Template Post Type: praca_
 */

get_header();
?>



<?php if (have_rows('miejsce_pracy')): ?>
<?php while (have_rows('miejsce_pracy')): the_row();?>
<div class="page-header category-header">
    <div class="content typo">
        <h1 class="h2"><?php echo get_the_title(); ?></h1>
        <p><?php the_sub_field('on_tile');?></p>
        <?php the_field('krotki_opis');?>
    </div>
</div>
<?php endwhile;?>
<?php endif;?>


<?php if (have_rows('zyski')): ?>
<?php while (have_rows('zyski')): the_row();?>

<div class="contact-info-image">
    <div class="content">
        <div class="image">
            <?php $obrazek = get_sub_field('obrazek');?>
            <?php if ($obrazek): ?>
            <img src="<?php echo esc_url($obrazek['url']); ?>" alt="<?php echo esc_attr($obrazek['alt']); ?>" />
            <?php endif;?>
        </div>
        <div class="text typo">
            <?php the_sub_field('tekst');?>
        </div>
    </div>
</div>

<?php endwhile;?>
<?php endif;?>



<?php if (have_rows('wymaganiaobowiazki')): ?>
<?php while (have_rows('wymaganiaobowiazki')): the_row();?>
<div class="contact-info-image wymagania">
    <div class="content">
        <div class="text typo">
            <?php the_sub_field('wymagania');?>
        </div>
        <div class="text typo">
            <?php the_sub_field('obowiazki');?>
        </div>
    </div>
</div>
<?php endwhile;?>
<?php endif;?>

<style>
.page-header .content h1,
.page-header .content h2 {
    color: #53241f
}

.contact-info-image .content {
    grid-template-columns: 1fr 1fr;
}

.contact-info-image h2 {
    letter-spacing: .2em;
    height: 5vw;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;

    font-size: 1.8vw;
    color: #53241f;
    font-weight: 900;
    text-transform: uppercase;

}
</style>

<?php get_footer();