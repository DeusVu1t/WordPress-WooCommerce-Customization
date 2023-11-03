<?php

    /**
     * Get posts from Blog
     *
     * @return array|null
     */
    function getRemotePostsFromBlog()
    {
        global $wp_query;
        $response = wp_remote_get('https://www.moje-auto.pl/blog/wp-json/wp/v2/posts?search='. $wp_query->get('s'));

        if (is_wp_error($response)) {
            return null;
        }

        $posts = json_decode(wp_remote_retrieve_body($response));

        if (empty($posts)) {
            return null;
        }

        return $posts;
    }