<?php
    /**
     * Project RAFAŁ - MojeAuto CMS
     * Author: Paweł Farys <pfarys@leonardo.pl>
     * Date: 04.04.2019, 13:52
     * File: search-acf-videos.php
     */

    add_filter('posts_where', function ($where) {
        $where = str_replace("meta_key = 'content_%", "meta_key LIKE 'content_%", $where);
        $where = str_replace("meta_key = 'category_%", "meta_key LIKE 'category_%", $where);
        $where = str_replace("meta_key = 'videos_%", "meta_key LIKE 'videos_%", $where);

        return $where;
    });

    /**
     * Search on videos content
     */
    function searchOnVideos()
    {
        $query = new WP_Query([
            'post_type' => 'wideo',
            's' => get_search_query()
        ]);

        return $query->posts;
    }