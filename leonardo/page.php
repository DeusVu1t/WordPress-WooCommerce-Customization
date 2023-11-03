<?php
get_header();
the_post();

if( have_rows('content') ):

  $_POST['component_index'] = 0; while ( have_rows('content') ) : the_row();

    get_template_part('components/component', get_row_layout());

  $_POST['component_index']++; endwhile;

else:

  the_content();

endif;

get_footer();
