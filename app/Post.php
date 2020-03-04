<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Post;
use Voyager;

class Post extends Model {

  // Get Posts Summaries
  public function get_posts_summaries() {
    $collection = Post::all(['id', 'title', 'slug', 'image','excerpt','created_at','category_id','mycategory']);
    $collection->transform(function($post) {
      $post->thumb = Voyager::image($post->image);
      return $post;
    });

    return $collection->toArray();
  }

  // Get Post
  public function get_post($slug) {
    $collection = Post::where('slug', '=', $slug)->firstOrFail();
    $collection['image'] = Voyager::image($collection->image);
    return $collection->toArray();
  }

  //
}
