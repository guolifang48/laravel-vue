<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use Voyager;

class PostController extends Controller
{
  private function get_post($slug) {

    $posts = new Post();
    $singlePost = $posts->get_post($slug);

    return collect([
      'datapoint' => '',
      'seo' => [
        'title' => $singlePost['title'],
        'description' => 'Título Post',
        'openGraphImage' => 'http://via.placeholder.com/1200x630',
        'twitterImage' => 'http://via.placeholder.com/1200x628'
      ],
      'content' => [
        $singlePost
      ],
      'components' => [
        'posts' => $singlePost
      ]
    ]);
  }

  public function get_post_web($slug, Request $request) {
    $data = $this->get_post($slug);
    $data = $this->add_meta_data($data, $request);
    return view('frontend.views.post.index', ['data' => $data]);
  }

  public function get_post_api($slug) {
    $data = $this->get_post($slug);
    return response()->json($data);
  }
}
