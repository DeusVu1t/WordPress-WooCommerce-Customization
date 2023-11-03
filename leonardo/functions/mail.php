<?php
// zmiana formatu email wp_mail() na html
function mail_set_content_type(){
  return "text/html";
}
add_filter( 'wp_mail_content_type','mail_set_content_type' );
