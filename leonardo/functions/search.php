<?php

/**
 * Join posts and postmeta tables
 *
 * @param string $join
 * @return string
 */
function searchPostMetaJoin(string $join): string
{
  global $wpdb;

  if (is_search()) {
    $join .= ' LEFT JOIN ' . $wpdb->postmeta . ' ON ' . $wpdb->posts . '.ID = ' . $wpdb->postmeta . '.post_id ';
  }

  return $join;
}

/**
 * Modify the search query with posts_where
 *
 * @param string $where
 * @return null|string|string[]
 */
function searchPostWhere(string $where)
{
  global $pagenow, $wpdb;

  if (is_search()) {
    $where = preg_replace(
      "/\(\s*" . $wpdb->posts . ".post_title\s+LIKE\s*(\'[^\']+\')\s*\)/",
      '(' . $wpdb->posts . '.post_title LIKE $1) OR (' . $wpdb->postmeta . '.meta_value LIKE $1)', $where);
  }

  return $where;
}

/**
 * Prevent duplicates
 *
 * @param string $where
 * @return string
 */
function searchPostDistinct(string $where)
{
  global $wpdb;

  if (is_search()) {
    return 'DISTINCT';
  }

  return $where;
}

/**
 * Extend search results from /blog
 *
 * @author Paweł Farys <pfarys@leonardo.pl>
 */
include_once 'search-extender.php';
include_once 'search-acf-videos.php';
