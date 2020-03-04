<template>
  <page :classes="{'c-page--padded-top': false}">
  <NavBar></NavBar>
<AboutBanner></AboutBanner>
<div class="container about-banner-title">
<div class="row">

<div class="col-md-8">
  <h2 class="h1-responsive font-weight-bold my-5" style="text-shadow: 1px 1px 2px #535d5e, 0 0 1em #424f95, 0 0 0.2em #424f95;">{{ post.title }}</h2>
</div>
<div class="col-md-4">
<img :src="post.image" alt="" style="width:100%;">
</div>
</div>
</div>



<div class="container">

  <div class="mybreadcrumb-wrap">
    <mdb-breadcrumb>

      <mdb-breadcrumb-item> <router-link :to="{ name: 'home' }">Home</router-link></mdb-breadcrumb-item>
      <mdb-breadcrumb-item> <router-link :to="{ name: 'posts' }">Posts</router-link></mdb-breadcrumb-item>
      <mdb-breadcrumb-item active>{{post.title}}</mdb-breadcrumb-item>
    </mdb-breadcrumb>
  </div>


</div>
<section class="main">
<div class="container">

<div class="row">

<div class="col-md-12">

    <article>

      <div v-html="post.body"></div>

    </article>

</div><!-- col12 -->

</div><!-- row-->

</div><!-- container -->


</section>


<section class="footer">


<Footer></Footer>

</section>



  </page>
</template>

<script>
  import { mdbBreadcrumb, mdbBreadcrumbItem } from 'mdbvue';
  import Page from './../components/Page';
  import NavBar from './../components/NavBar';
import AboutBanner from './../components/AboutBanner';
     import Footer from './../components/Footer';
  export default {
    name: 'TheHomePage',

    metaInfo () {
      return {
        title: this.seo.title
      }
    },

    created() {},

    mounted () {},

    destroyed () {},

    props: [],

    data() {
      return {
        ui: {},
        dataLayer: window.laravelDataLayer,
      }
    },

    computed: {
      post() {
        // const thisPost = this.$store.getters.getPost(this.$route.params.slug)
        // if (thisPost) return thisPost;
        // this.$router.push({ name: 'posts' })
        // return false;
        return this.$store.getters.getPost(this.$route.params.slug)
      },

      seo() {
        return this.$store.state.views['post'].seo;
      },
    },

    methods: {},

    components: {
      Page,
      NavBar,
      mdbBreadcrumb,
      Footer,
        AboutBanner,
	   mdbBreadcrumb,
      mdbBreadcrumbItem
    }
  };
</script>


<style>
.about-banner-title{
margin-top: -200px;
padding-bottom: 150px;
}

</style>