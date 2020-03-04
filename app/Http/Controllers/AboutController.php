<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Voyager;

class AboutController extends Controller
{
    private function get_about()
    {


        return collect([
            'datapoint' => '',
            'seo' => [
                'title' => 'About AMCD Web Development',
                'description' => 'About AMCD Web Development - Web Design / Web Hosting in Wollongong area. Located in Thirroul / Wollongong',
                'openGraphImage' => 'http://via.placeholder.com/1200x630',
                'twitterImage' => 'http://via.placeholder.com/1200x628'
            ],
            'content' => [],
            'components' => [

            ]
        ]);
    }

    public function get_about_web(Request $request)
    {
        $data = $this->get_about();
        $data = $this->add_meta_data($data, $request);
        return view('frontend.views.about.index', ['data' => $data]);
    }

    public function get_about_api() {
        $data = $this->get_about();
        return response()->json($data);
    }
}
