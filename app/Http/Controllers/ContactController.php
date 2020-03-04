<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Voyager;

class ContactController extends Controller
{
    private function get_contact()
    {


        return collect([
            'datapoint' => '',
            'seo' => [
                'title' => 'Contact -  AMCD Web Development',
                'description' => 'About AMCD Web Development Contact page - Web Design / Web Hosting in Wollongong area. Located in Thirroul / Wollongong',
                'openGraphImage' => 'http://via.placeholder.com/1200x630',
                'twitterImage' => 'http://via.placeholder.com/1200x628'
            ],
            'content' => [],
            'components' => [

            ]
        ]);
    }

    public function get_contact_web(Request $request)
    {
        $data = $this->get_contact();
        $data = $this->add_meta_data($data, $request);
        return view('frontend.views.contact.index', ['data' => $data]);
    }

    public function get_contact_api()
    {
        $data = $this->get_contact();
        return response()->json($data);
    }
}
