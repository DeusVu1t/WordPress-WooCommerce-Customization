<?php
function getPaginationLinks($query) {
  $current_page = isset($query->query['paged'])?$query->query['paged']:1;

  $result = [];

  for ( $i = 1; $i <= $query->max_num_pages; $i++ ) {
    $item = array(
      'url' => get_pagenum_link($i),
      'label' => $i,
      'is_current' => ($current_page == $i)
    );
    array_push($result, $item);
  }
  return $result;
}



function getPaginationNav($query) {
  $buffer = getPaginationLinks($query);
  $current_page = array_search(true, array_column($buffer, 'is_current'));
  $result = array(
    'prev' => empty($buffer[$current_page - 1])?false:$buffer[$current_page - 1]['url'],
    'next' => empty($buffer[$current_page + 1])?false:$buffer[$current_page + 1]['url'],
  );
  return $result;
}
