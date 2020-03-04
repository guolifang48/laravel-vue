<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use Voyager;

class PostsController extends Controller
{
  private function get_posts() {

    $posts = new Post();

    return collect([
      'datapoint' => '',
      'seo' => [
        'title' => 'Blog - AMCD Web Development',
        'description' => 'Blog - AMCD Web Development:Web Design / Web Hosting in Wollongong area. Located in Thirroul / Wollongong',
        'openGraphImage' => 'http://via.placeholder.com/1200x630',
        'twitterImage' => 'http://via.placeholder.com/1200x628'
      ],
      'content' => [],
      'components' => [
        'posts_summaries' => $posts->get_posts_summaries()
      ]
    ]);
  }

  public function get_posts_web(Request $request) {
    $data = $this->get_posts();
    $data = $this->add_meta_data($data, $request);
    return view('frontend.views.posts.index', ['data' => $data]);
  }

  public function get_posts_api() {
    $data = $this->get_posts();
    return response()->json($data);
  }
}
