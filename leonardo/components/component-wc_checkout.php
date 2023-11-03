<div class="checkout-section">
  <div class="content typo">
    <?=do_shortcode('[woocommerce_checkout]');?>
  </div>
</div>

<?php
$disabled_dates = '';
while(have_rows('disabled_dates', 'options')){
  the_row();
  $disabled_dates .= sprintf("'%s',", get_sub_field('date'));
}
?>
<script>
  var disabledDates = [<?=$disabled_dates;?>];
</script>
