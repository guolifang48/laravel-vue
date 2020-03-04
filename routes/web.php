<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Home
Route::get('/', 'HomeController@get_home_web');

Route::get('/posts/{slug}', 'PostController@get_post_web');

Route::get('/about', 'AboutController@get_about_web');

Route::get('/contact', 'ContactController@get_contact_web');

Route::get('/services', 'ServicesController@get_services_web');

Route::get('/posts', 'PostsController@get_posts_web');

Route::get('/portfolio', 'PortfolioController@get_portfolios_web');

Route::get('/portfolios', 'PortfolioController@get_portfolios_api');

//
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
