<?php
// wp_redirect( get_permalink(16) );
get_header();
?>


<div class="e404">
  <div class="box">
    <div class="text-wrapper typo">
      <h2>404</h2>
      <h5>Strona nie została znaleziona</h5>
    </div>
    <div class="back typo">
      <a href="<?php bloginfo('url');?>" class="btn btn-primary-alt">Powrót na stronę główną</a>
    </div>
  </div>
</div>

<?php get_footer();
