<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Voyager;

class ServicesController extends Controller
{
  private function get_services() {



    return collect([
      'datapoint' => '',
      'seo' => [
        'title' => 'Web Services -  AMCD Web Development',
        'description' => 'Services AMCD Web Development Contact page - Web Design / Web Hosting in Wollongong area. Located in Thirroul / Wollongong',
        'openGraphImage' => 'http://via.placeholder.com/1200x630',
        'twitterImage' => 'http://via.placeholder.com/1200x628'
      ],
      'content' => [],
      'components' => [
 
      ]
    ]);
  }

  public function get_services_web(Request $request) {
    $data = $this->get_services();
    $data = $this->add_meta_data($data, $request);
    return view('frontend.views.contact.index', ['data' => $data]);
  }

  public function get_services_api() {
      $data = $this->get_services();
      return response()->json($data);
  }

}
