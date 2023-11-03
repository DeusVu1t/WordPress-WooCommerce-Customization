<?php

// add files support
function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  $mimes['epub'] = 'application/epub+zip';
  $mimes['mobi'] = 'application/x-mobipocket-ebook';
  $mimes['epub|mobi'] = 'application/octet-stream';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');
