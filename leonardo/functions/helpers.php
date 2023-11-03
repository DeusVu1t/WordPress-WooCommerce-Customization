<?php

function format_product_price($price) {
    return str_replace('.', ',', (string)number_format((float)$price, 2));
}


// uber pro debugowanie 2.0
function dump( $target, $title = "" ) {
  echo "<pre>";
  if ( $title ) {
    printf('<strong>%s</strong> ', $title);
  }
  var_dump($target);
  echo "</pre>";
}

    /**
     * Helpers definitions
     *
     * @author Paweł Farys <pfarys@leonardo.pl>
     * @package Leonardo
     */

    /**
     * Generating URL for assets
     *
     * @param string $path
     * @param bool $echo (default: true)
     * @return void|string
     */
    if (!function_exists('assets')) {
        function assets(string $path, bool $echo = true)
        {
            if (!$echo) {
                return sprintf('%s/assets/%s',
                    get_bloginfo('template_directory'),
                    $path
                );
            }

            printf('%s/assets/%s',
                get_bloginfo('template_directory'),
                $path
            );
        }
    }

    /**
     * Generating absolute path for assets
     *
     * @param string $path
     * @return string
     */
    if (!function_exists('assetsAbsolute')) {
        function assetsAbsolute(string $path): string
        {
            return sprintf('%s/assets/%s',
                get_template_directory(),
                $path
            );
        }
    }

    /**
     * Generating URL for vendor
     *
     * @param string $path
     */
    if (!function_exists('vendor')) {
        function vendor(string $path): void
        {
            echo bloginfo('template_directory') . "/vendor/$path";
        }
    }

    /**
     * Formatting dump results
     *
     * @param mixed $data
     */
    if (!function_exists('dump')) {
        function dump($data): void
        {
            if (is_array($data)) {
                array_walk_recursive($data, function (&$item) {
                    $item = is_string($item) ? htmlspecialchars($item) : $item;
                });
            } else {
                $data = is_string($data) ? htmlspecialchars($data) : $data;
            }

            echo '<pre>', var_dump($data), '</pre>';
        }
    }

    /**
     * Getting current page URL based on WP Request
     */
    if (!function_exists('currentPageUrl')) {
        function currentPageUrl(): void
        {
            global $wp;
            echo home_url(add_query_arg(array(), $wp->request));
        }
    }

    /**
     * Getting string translation
     *
     * @param string $polishText
     * @param bool $echo (default: true)
     * @return string|void
     */
    if (!function_exists('trans')) {
        function trans(string $polishText, bool $echo = true)
        {
            if (!$echo) {
                return __($polishText, 'leonardo');
            }

            _e($polishText, 'leonardo');
        }
    }

    /**
     * Getting array index for partial looked value
     *
     * @param string $keyword
     * @param array $array
     * @return null|int
     */
    if (!function_exists('arrayPartialSearch')) {
        function arrayPartialSearch(string $keyword, array $array): ?int
        {
            foreach ($array as $index => $value) {
                if (strpos($value, $keyword) !== false) {
                    return $index;
                }
            }

            return null;
        }
    }

    /**
     * Converts bytes into human readable file size
     *
     * @param int $bytes
     * @param int $decimals (default: 2)
     * @return string
     */
    if (!function_exists('humanFilesize')) {
        function humanFilesize(int $bytes, int $decimals = 2): string
        {
            $sz = 'BKMGTP';
            $factor = floor((strlen($bytes) - 1) / 3);

            return sprintf("%.{$decimals}f", $bytes / (1024 ** $factor)) . @$sz[$factor];
        }
    }

    /**
     * Formatting dateTime string
     *
     * @param string $dateTimeString
     * @param string $format (default: %e %b %Y)
     * @return string
     */
    if (!function_exists('formatDateTime')) {
        function formatDateTime(string $dateTimeString, string $format = '%e %b %Y'): string
        {
            setlocale(LC_TIME, get_locale());
            return strftime($format, strtotime($dateTimeString));
        }
    }

    /**
     * Replacing tags {{...}} in text
     *
     * @param string $text
     * @param array $tags
     * @param bool $forceLowerCase (default: false)
     * @return string
     */
    if (!function_exists('replaceTags')) {
        function replaceTags(string $text, array $tags, bool $forceLowerCase = false): string
        {
            return preg_replace_callback('/\\{\\{([^{}]+)\}\\}/', function ($matches) use ($forceLowerCase, $tags) {
                $key = $forceLowerCase
                    ? strtolower($matches[1])
                    : $matches[1];

                return array_key_exists($key, $tags)
                    ? $tags[$key]
                    : '';
            }, $text);
        }
    }

    /**
     * Dump & Die
     *
     * @param mixed $data
     */
    if (!function_exists('dd')) {
        function dd($args): void
        {
            if (function_exists('dump')) {
                dump($args);
            } else {
                var_dump($args);
            }
            die;
        }
    }

    /**
     * Creating Not Found (404) status
     */
    if (!function_exists('createNotFoundStatus')) {
        function createNotFoundStatus(): void
        {
            status_header(404);
            nocache_headers();
            include(get_query_template('404'));
            die;
        }
    }

    /**
     * Get comment's rating
     *
     * @param int $commentId
     * @return float
     */
    function getCommentsRating(int $commentId): float
    {
        return CommentsRatingService::getCommentsRating($commentId);
    }

    /**
     * Get post's average rating based on rates from comments
     *
     * @param int $postId
     * @return float
     */
    function getPostAverageRating(int $postId): float
    {
        return CommentsRatingService::getPostAverageRating($postId);
    }

    /**
     * Getting total post's views
     *
     * @param int|null $postId
     * @return int
     */
    function getPostViewsCount(?int $postId = null): int
    {
        if (!$postId) {
            /** @var WP_Post $post */
            global $post;

            $postId = $post->ID;
        }

        return MostPopularPostsService::getPostViewsCount($postId);
    }

    /**
     * Getting most popular posts
     *
     * @param int|null $perPage (default: 10)
     * @param array $postType (default: ['post'])
     * @param array $postStatus (default: ['publish'])
     * @return WP_Query
     */
    function getMostPopularPosts(
        ?int $perPage = 10,
        array $postType = ['post'],
        array $postStatus = ['publish']
    ): WP_Query
    {
        if ($perPage === null) {
            $perPage = get_option('posts_per_page');
        }

        return MostPopularPostsService::getMostPopularPosts($perPage, $postType, $postStatus);
    }

    /**
     * Getting most popular posts
     *
     * @param int $perPage
     * @param string $taxonomy
     * @param string $term
     * @param array $postType (default: ['post'])
     * @param array $postStatus (default: ['publish'])
     * @return WP_Query
     */
    function getMostPopularPostsTax(
        int $perPage,
        string $taxonomy,
        string $term,
        array $postType = ['post'],
        array $postStatus = ['publish']
    ): WP_Query
    {
        if ($perPage === null) {
            $perPage = get_option('posts_per_page');
        }

        return MostPopularPostsService::getMostPopularPostsTax($perPage, $taxonomy, $term, $postType, $postStatus);
    }


    /**
     * Getting posts from blog
     *
     * @return array
     */
    function getPostsFromBlog(): array
    {
        $connector = new BlogConnector();

        return $connector->getPostsFromBlog();
    }

    /**
     * Get catalog categories
     *
     * @param int $id
     * @return array
     */
    function getCatalogCategories(int $id = 0): array
    {
        $result = array();
        foreach (get_terms(array(
            'taxonomy' => 'katalog-online',
            'hide_empty' => false,
            'orderby' => 'term_order',
            'order' => 'ASC'
        )) as $item) {
            if ($item->parent === $id) {
                $category = array(
                    'id' => $item->term_id,
                    'name' => $item->name,
                    'description' => $item->description,
                    'slug' => $item->slug,
                    'url' => get_bloginfo('url') . '/katalog-online/' . $item->slug,
                    'children' => getCatalogCategories($item->term_id),
                    'raw_data' => $item
                );
                $result[] = $category;
            }
        }

        return $result;
    }

    /**
     * Get catalog sinle category
     *
     * @param $id
     * @return array|bool
     */
    function getCatalogCategory($id)
    {
        $result = false;
        foreach (get_terms(array(
            'taxonomy' => 'katalog-online',
            'hide_empty' => false,
            'orderby' => 'term_order',
            'order' => 'ASC'
        )) as $item) {
            if ($item->term_id === $id) {
                $result = array(
                    'id' => $item->term_id,
                    'name' => $item->name,
                    'description' => $item->description,
                    'slug' => $item->slug,
                    'url' => get_bloginfo('url') . '/katalog-online/' . $item->slug,
                    'children' => getCatalogCategories($item->term_id),
                    'raw_data' => $item
                );
            }
        }
        return $result;
    }

    function getCategoryParentIDbyCategoryID($id)
    {
        return getCategoryTerm($id)->parent;
    }

    function getCategoryTerm($id)
    {
        $term = get_terms(array(
            'taxonomy' => 'katalog-online',
            'hide_empty' => false,
            'term_taxonomy_id' => $id
        ));
        return $term[0];
    }

    function getCategoryLevel($id)
    {
        $result = 1;
        $current_term = getCategoryTerm($id);
        while ($current_term->parent !== 0) {
            $result++;
            $current_term = getCategoryTerm($current_term->parent);
        }
        return $result;
    }


    function isFilter($id)
    {
        return getCategoryLevel($id) === 3;
    }

    function isFilterable($id)
    {
        return getCategoryLevel($id) === 2 || getCategoryLevel($id) === 3;
    }


    /**
     * Collect catalog's categories tree with only id, name and his childs recursive
     *
     * @param int $id
     * @return array
     */
    function generateMsdsContentTree(int $id = 0): array
    {
        $catalogTerms = get_terms([
            'taxonomy' => 'katalog-online',
            'hide_empty' => false,
            'orderby' => 'term_order',
            'order' => 'ASC'
        ]);

        $result = [];
        foreach ($catalogTerms as $item) {
            if ($item->parent === $id) {
                $pQuery = new WP_Query([
                    'post_type' => 'produkt',
                    'posts_per_page' => -1,
                    'tax_query' => [
                        [
                            'taxonomy' => 'katalog-online',
                            'field' => 'slug',
                            'terms' => $item->slug
                        ]
                    ],
                    'meta_query' => [
                        'relation' => 'AND',
                        [
                            'key' => 'product-download--msds',
                            'compare' => 'NOT IN',
                            'value' => ['']
                        ]
                    ]
                ]);

                if (!empty($pQuery->posts)) {
                    $result[] = [
                        'id' => $item->term_id,
                        'name' => $item->name,
                        'slug' => $item->slug,
                        'children' => generateMsdsContentTree($item->term_id),
                        'products' => $pQuery->posts
                    ];
                }
            }
        }

        $result = removeEmptyArrays($result);

        return $result;
    }

    /**
     * Remove any elements where the value is empty
     *
     * @param array $array
     * @return array
     */
    function removeEmptyArrays(array &$array)
    {
        foreach ($array as $key => &$value) {
            if (is_array($value)) {
                $value = removeEmptyArrays($value);
            }

            if (empty($value)) {
                unset($array[$key]);
            }
        }

        return $array;
    }
