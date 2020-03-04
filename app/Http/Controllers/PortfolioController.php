<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Portfolio;
use Voyager;

class PortfolioController extends Controller
{
    private function get_portfolios()
    {

        $portfolios = new Portfolio();

        return collect([
            'datapoint' => '',
            'seo' => [
                'title' => 'Porfolio Page',
                'description' => 'Potfolio Page - Web Design / Web Hosting in Wollongong area. Located in Thirroul / Wollongong',
                'openGraphImage' => 'http://via.placeholder.com/1200x630',
                'twitterImage' => 'http://via.placeholder.com/1200x628'
            ],
            'content' => [],
            'components' => [

            ]
        ]);
    }

    public function get_portfolios_web(Request $request)
    {
        $data = $this->get_portfolios();
        $data = $this->add_meta_data($data, $request);
        return view('frontend.views.portfolios.index', ['data' => $data]);
    }

    public function get_portfolios_api()
    {
        $data = $this->get_portfolios();
        return response()->json($data);
    }
}
