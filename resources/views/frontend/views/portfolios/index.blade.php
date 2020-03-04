@extends('frontend.shared.main')

@section('meta')
  @include('frontend.shared.meta', [
  'meta_title'    => $data['seo']['title'],
  'meta_desc'     => $data['seo']['description'],
  'meta_og_type'  => 'website',
  'meta_og_image' => $data['seo']['openGraphImage'],
  'meta_tw_type'  => 'summary_large_image',
  'meta_tw_image' => $data['seo']['twitterImage']
  ])

  {{-- Extra Metadata for this view only --}}
@endsection

@section('window-scripts')
  <script>
    window.laravelDataLayer = String("{!! addslashes(json_encode($data)) !!}");
  </script>
@endsection
