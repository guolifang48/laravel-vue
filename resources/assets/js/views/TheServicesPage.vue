<template>
  <page :classes="{'c-page--padded-top': false}">
<NavBar></NavBar>
 <AboutBanner></AboutBanner>




    <div class="container about-banner-title animation fadeInLeft">
	<div class="row">

		<div class="col-md-8">
		<h2 class="h1-responsive font-weight-bold my-5" style="text-shadow: 1px 1px 2px #535d5e, 0 0 1em #424f95, 0 0 0.2em #424f95;">Our Services</h2>
		
		</div>
		<div class="col-md-4">
		
		</div>
	</div>
</div>

<section class=" dark-blue-area design-intro" style="padding-top:80px;padding-bottom:80px;">
 <h2 class="h1-responsive font-weight-bold text-center mysub">Web Design and Development</h2>

<div class="container mywrap">
<div class="row">
 <div class="col-md-6">
<div class="about-text-inner">

<img src="https://web.archive.org/web/20180309222757im_/https://amcd.com.au/wp-content/themes/amcd-theme/images/webdesign-and-development.png" style="width:80%">

</div><!-- about-text-inner -->
</div><!-- col-md-6 -->
<div class="col-md-6">
<div class="about-text-inner">


<h1 class="my-heading">Create a winning web presence for your brand based on AMCD’s creative web design and development.</h1>
<h2 class="my-sub-heading">Make creativity the difference.</h2>
<p><b>Creative web design</b> – Implement an AMCD creative website design so that your <a href="#wordpress">WordPress website</a> and or <a href="#e-commerce">E-commerce website</a> will stand out from the crowd in the marketplace.</p>
<h2 class="my-sub-heading">Make technology work for you.</h2>
<p>As <a href="https://web.archive.org/web/20180309222757/https://amcd.com.au/search-engine-optimisation/">web traffic</a> shifts towards mobile phone use, customers want to use their preferred <a href="https://web.archive.org/web/20180309222757/https://amcd.com.au/social-media/">social media</a> and getting priority in <a href="https://web.archive.org/web/20180309222757/https://amcd.com.au/search-engine-optimisation/">search engines</a> is a must. These factors and more will be addressed so your <a href="#wordpress">WordPress</a> or <a href="#e-commerce">E-commerce</a> website will have maximum market impact.</p>


</div><!-- about-text-inner -->
</div><!-- col-md-6 -->
</div><!-- row -->
</div><!-- container-fluid -->

</section>

<section class="my-dark-blue hosting-intro" style="color:#ffffff;padding-top:80px;padding-bottom:80px;">
 <h2 class="h1-responsive font-weight-bold text-center mysub">Web Hosting</h2>
<div class="container mywrap">
<div class="row">
<div class="col-md-6">
<div class="about-text-inner">
<div class="hosting-intro-text-wrap">


<h2 class="my-sub-heading">High Performance Web Hosting.</h2>
<p>Customers will receive fast, reliable and secure access to your AMCD hosted website because of AMCD’s reputation for great Wollongong web hosting, service and support, earned since 2010. AMCD Secure web hosting Wollongong, your trusted web hosting provider.</p>
<h2 class="my-sub-heading">Wollongong Web Hosting and Support</h2>
<p>Choosing AMCD for your Wollongong web hosting will support local industry. As a result your Wollongong based clients will experience super fast response times. AMCD’s office is located in Thirroul so when you for support you will talk to someone local. You will receive a potential boost in SEO rankings as a result of using a local hosting and support service.</p>


</div><!-- hosting-intro-text-wrap -->

</div><!-- about-text-inner -->
</div><!-- col-md-6 -->

 <div class="col-md-6">
<div class="about-text-inner" style="text-align:center;">
<img src="images/web-hosting.png" alt="Wollongong Web Hosting Wollongong Secure Web Hosting" style="width:100%;">
<img src="https://web.archive.org/web/20180309222951im_/https://amcd.com.au/wp-content/themes/amcd-theme/images/webhosting.png" alt="secure web hosting" style="max-width:400px;padding-top:20px;">

</div><!-- about-text-inner -->
</div><!-- col-md-6 -->
</div><!-- row -->
</div><!-- container-fluid -->
</section>


<section class="beige-area also-offer" style="padding-top:80px;padding-bottom:80px;">


 <h2 class="h1-responsive font-weight-bold text-center mysub">Web Support</h2>

<div class="container">
	<div class="row">
    		<div class="col-md-6">
<img src="https://web.archive.org/web/20180309222951im_/https://amcd.com.au/wp-content/themes/amcd-theme/images/local-support.png" style="width:100%;">
			</div>


    			<div class="col-md-6">




<div class="about-text-inner">




<h1 class="my-heading">Free Website Transfer</h1>
<p>Migration of your website from another provider is provided free.</p>
<h1 class="my-heading">Free Setup</h1>
<p>There is no charge for hosting setup.</p>
<h1 class="my-heading">Illawarra Based Supports</h1>
<p>Our office is based in Thirroul, when you call our support you will be talking to someone close by.</p>


</div>








</div><!-- col12 -->


</div><!-- row -->

</div><!--container-->







</section>











<section class="footer">


<Footer></Footer>

</section>










  </page>
</template>

<script>

  import Page from './../components/Page';
 import NavBar from './../components/NavBar';
   import AboutBanner from './../components/AboutBanner';

        import Footer from './../components/Footer';
 import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbBtn, mdbAvatar } from 'mdbvue';

  export default {
    name: 'TheServicesPage',

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

      metaInfo () {
      return {
        title: this.seo.title
      }
    },

    computed: {


      seo() {
        return this.$store.state.views['services'].seo;
      },
    },

    methods: {},

    components: {
      Page,
      NavBar,
      AboutBanner,
      Footer,
         mdbContainer,
      mdbRow,
      mdbCol,
      mdbIcon,
      mdbBtn,
      mdbAvatar, 
    }
  };
</script>


<style>
.build{
padding-top:80px;
padding-bottom:80px;

}

.build p{
color:#ffffff;
}
.build img{
width:100%;

}

.about-banner-title h2.h1-responsive{
color:#fff;

}

.mysub{

padding-bottom:30px;
}
</style>