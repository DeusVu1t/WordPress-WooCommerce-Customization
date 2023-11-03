<?php
function breadcrumbs() {
  $pages = array();
  $page = breadcrumbsGetPage( get_the_ID() );
  $type = $page['type'];
  if ( is_tax() ) {
    // TODO: breadcrumb taxonomy parent
    array_unshift( $pages, array(
      'ID' => null,
      'parent' => null,
      'title' => get_queried_object()->name,
      'url' => get_bloginfo('url').'/katalog-online/'.get_queried_object()->slug,
      'type' => 'tax'
    ) ); // add current page

  } else {

    array_unshift( $pages, $page ); // add current page
    do {
      $lastID = $page['ID'];
      if ( breadcrumbsGetPage( $page['parent'] )['ID'] != $lastID ) {
        $page = breadcrumbsGetPage( $page['parent'] );
        array_unshift( $pages, $page );
      }
    } while ( $page['parent'] != 0 ); // loop all parents

  }

  // if ( $type === 'produkt' ) {
  //   $page = breadcrumbsGetPage( 181 ); // products page
  //   array_unshift( $pages, $page );
  // }

  // add home page
  $page = breadcrumbsGetPage( 16 ); // home page ID
  array_unshift( $pages, $page );

  breadcrumbsRender($pages);
}

function breadcrumbsGetPage($id) {
  $buffer = get_post($id);
  return array(
    'ID' => $buffer->ID,
    'parent' => $buffer->post_parent,
    'title' => $buffer->post_title,
    'name' => $buffer->post_name,
    'url' => get_permalink($buffer->ID),
    'type' => $buffer->post_type
  );
}

function breadcrumbsRender($pages) {
?>
<ul itemscope itemtype="http://schema.org/BreadcrumbList">
  <?php $index = 1; foreach($pages as $page): ?>
  <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
    <a itemscope itemtype="http://schema.org/Thing" itemprop="item" href="<?=$page['url'];?>"><span itemprop="name"><?=$page['title'];?></span></a>
    <meta itemprop="position" content="<?=$index;?>" />
  </li>
  <?php $index++; endforeach; ?>
</ul>
<?php
}
