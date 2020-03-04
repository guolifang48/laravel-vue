<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use Voyager;

class HomeController extends Controller
{
  private function get_home() {

    $posts = new Post();

    return collect([
      'datapoint' => '',
      'seo' => [
        'title' => 'AMCD Web Development',
        'description' => 'AMCD Web Development - Web Design / Web Hosting in Wollongong area. Located in Thirroul / Wollongong',
        'openGraphImage' => 'http://via.placeholder.com/1200x630',
        'twitterImage' => 'http://via.placeholder.com/1200x628'
      ],
      'content' => [],
      'components' => [
        'posts_summaries' => $posts->get_posts_summaries()
      ]
    ]);
  }

  public function get_home_web(Request $request) {
    $data = $this->get_home();
    $data = $this->add_meta_data($data, $request);
    return view('frontend.views.home.index', ['data' => $data]);
  }

  public function get_home_api() {
    $data = $this->get_home();
    return response()->json($data);
  }
}
