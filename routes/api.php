<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/', 'HomeController@get_home_api');

Route::get('/posts', 'PostsController@get_posts_api');

Route::get('/posts/{slug}', 'PostController@get_post_api');

Route::get('/about', 'AboutController@get_about_api');

Route::get('/contact', 'ContactController@get_contact_api');

Route::get('/services', 'ServicesController@get_services_api');

Route::get('/posts', 'PostsController@get_posts_api');

Route::get('/portfolio', 'PortfolioController@get_portfolios_api');

Route::get('/portfolios', 'PortfolioController@get_portfolios_api');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
