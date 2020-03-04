<template>
  <page :classes="{'c-page--padded-top': false}">
	<NavBar></NavBar>
	<HomeBanner></HomeBanner>


	<section class="home-intro" style="padding-top:80px;padding-bottom:80px;">

  <mdb-container>
    <section class="text-center my-5">
      <h2 class="h1-responsive font-weight-bold my-5">Our Web Services</h2>
      <p class="lead grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      <mdb-row>
        <mdb-col md="4">
          <mdb-icon icon="desktop" size="3x" class="red-text"/>
          <h5 class="font-weight-bold my-4">Web Design and Development</h5>
          <p class="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
        </mdb-col>
        <mdb-col md="4">
          <mdb-icon icon="server" size="3x" class="cyan-text"/>
          <h5 class="font-weight-bold my-4">Web Hosting</h5>
          <p class="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
        </mdb-col>
        <mdb-col md="4">
          <mdb-icon far icon="comments" size="3x" class="orange-text"/>
          <h5 class="font-weight-bold my-4">Web Support</h5>
          <p class="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>

</section>




<section class="testimonials" style="background:#424f95;padding-top:80px;padding-bottom:80px;">

<mdb-container>
    <section class="text-center my-5" style="margin-top: 2rem !important;">
      <h2 class="h1-responsive font-weight-bold my-5" style="color:#fff;">Testimonials</h2>
      <mdb-carousel testimonial fade :interval="5000" showControls>


        <mdb-carousel-item>
          <mdb-testimonial>
            <mdb-avatar class="mx-auto mb-4 myquote">
              <img src="images/penny.jpg" class="rounded-circle img-fluid" alt="First sample avatar image"/>
            </mdb-avatar>
             <p style="color:#ffffff;">
              <mdb-icon icon="quote-left"></mdb-icon>
	      The support that AMCD has given us has been excellent. From development to ongoing hosting and security - we know our website is in safe hands.
	     </p>
            <h4 class="font-weight-bold" style="color:#ffffff;">Penny Travers</h4>
            <h6 class="font-weight-bold my-3" style="color:#ffffff;">Manager at Travers Training</h6>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
          </mdb-testimonial>
        </mdb-carousel-item>


        <mdb-carousel-item>
          <mdb-testimonial>
            <mdb-avatar class="mx-auto mb-4 myquote">
              <img src="images/ken.jpg" class="rounded-circle img-fluid" alt="First sample avatar image" style="max-width:100px;"/>
            </mdb-avatar>
             <p style="color:#ffffff;">
              <mdb-icon icon="quote-left"></mdb-icon>
	     I have been really happy with the website that AMCD designed and built for my mobile Ice creams vendor business and I am happy to recommend their services.
	     </p>
            <h4 class="font-weight-bold" style="color:#ffffff;">Ken Murray</h4>
            <h6 class="font-weight-bold my-3" style="color:#ffffff;">Manager at Kens Cones</h6>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
          </mdb-testimonial>
        </mdb-carousel-item>


	      <mdb-carousel-item>
          <mdb-testimonial>
            <mdb-avatar class="mx-auto mb-4 myquote">
              <img src="images/geoff.jpg" class="rounded-circle img-fluid" alt="First sample avatar image" style="max-width:100px;"/>
            </mdb-avatar>
             <p style="color:#ffffff;">
              <mdb-icon icon="quote-left"></mdb-icon>
	   AMCD built our Real Estate website and we have been more than happy with their work. They are always around to answer any questions that arise.
	     </p>
            <h4 class="font-weight-bold" style="color:#ffffff;">Geoff Payne</h4>
            <h6 class="font-weight-bold my-3" style="color:#ffffff;">Owner/Manager at House Sales Australia</h6>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
          </mdb-testimonial>
        </mdb-carousel-item>



	      <mdb-carousel-item>
          <mdb-testimonial>
            <mdb-avatar class="mx-auto mb-4 myquote">
              <img src="images/julie.jpg" class="rounded-circle img-fluid" alt="First sample avatar image" style="max-width:100px;"/>
            </mdb-avatar>
             <p style="color:#ffffff;">
              <mdb-icon icon="quote-left"></mdb-icon>
	   AMCD's technical knowledge on web design and development is exceptional. You can garentee you'll get a great website and the technical support you will need.
	     </p>
            <h4 class="font-weight-bold" style="color:#ffffff;">Julie Johnston</h4>
            <h6 class="font-weight-bold my-3" style="color:#ffffff;">Digital Manager at REX</h6>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
          </mdb-testimonial>
        </mdb-carousel-item>


	      <mdb-carousel-item>
          <mdb-testimonial>
            <mdb-avatar class="mx-auto mb-4 myquote">
              <img src="images/terry.jpg" class="rounded-circle img-fluid" alt="First sample avatar image" style="max-width:100px;"/>
            </mdb-avatar>
             <p style="color:#ffffff;">
              <mdb-icon icon="quote-left"></mdb-icon>
	   Awesome web design company to work with. Their work is always of high quality and very easy to work with.
	     </p>
            <h4 class="font-weight-bold" style="color:#ffffff;">Terry Peters</h4>
            <h6 class="font-weight-bold my-3" style="color:#ffffff;">Digital Designer at Clicks</h6>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
            <mdb-icon icon="star" class="blue-text"> </mdb-icon>
          </mdb-testimonial>
        </mdb-carousel-item>


      </mdb-carousel>
    </section>
  </mdb-container>

</section>





<section class="home-posts-area" style="background:#fdfdfd;padding-top:80px;padding-bottom:80px;">

<h2  class="h1-responsive font-weight-bold my-5" style="rgb(66, 79, 149);text-align:center;">Posts</h2>

  <mdb-container>
  <carousel :perPageCustom="[[768, 3], [1024, 3]]" :navigationEnabled="true" :paginationEnabled="true" :autoplayHoverPause="true" :loop="true" :autoplay="true" v-if="postsSummary">
  <slide v-for="post in postsSummary" v-bind:key="post.id">
 

				<mdb-card dark>
					<mdb-view hover>
						
						   <router-link :to="{ name: 'post', params: { slug: post.slug } }">
							
						      
							<mdb-card-image v-bind:src="'storage/' + post.image" alt="Card image cap"></mdb-card-image>
							<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
						</router-link>
					</mdb-view>
					<mdb-card-body color="elegant" class="white-text">
						<a class="activator mr-4"><mdb-icon icon="share-alt" /></a>
						<mdb-card-title>{{ post.title }}</mdb-card-title>
						<hr class="hr-light"/>
						<p class="font-small mb-3">{{ post.excerpt }}</p>
						<a class="white-text d-flex justify-content-end"><h5>Read more <mdb-icon icon="angle-double-right" class="pl-1" /></h5></a>
					</mdb-card-body>
				</mdb-card>





  </slide>


</carousel>

  </mdb-container>


  			




</section>

<section class="footer">


<Footer></Footer>

</section>


  </page>
</template>

<script>

  import Page from './../components/Page';
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardUp, mdbAvatar, mdbIcon, mdbCarousel, mdbCarouselItem, mdbTestimonial, mdbCardFooter, mdbView, mdbMask,
 mdbCardImage, mdbCardTitle, mdbCardText, mdbBtn} from 'mdbvue';
    import NavBar from './../components/NavBar';
   import HomeBanner from './../components/HomeBanner';

      import Footer from './../components/Footer';

import { Carousel, Slide } from 'vue-carousel';


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

props: {
 
},

    data() {
      return {
      navigationEnabled: true,
        ui: {},
        dataLayer: window.laravelDataLayer,
      }
    },

    computed: {
      postsSummary() {
        return this.$store.getters.getPostSummary
      },

      seo() {
        return this.$store.state.views['home'].seo;
      },
    },

    methods: {},

    components: {
      Page,
      NavBar,
      HomeBanner,
      Footer,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardBody,
      mdbCardUp,
      mdbAvatar,
      mdbIcon,
      mdbCarousel,
      mdbCarouselItem,
      mdbTestimonial,
    mdbCarouselItem, mdbCardImage, mdbCardTitle, mdbCardText, mdbBtn, mdbCardFooter, mdbView, mdbMask,
  
    }
  };
</script>


<style scoped>
  .carousel__item {
    padding: 10px;
  }
</style>

<style>

.myquote{
color:#ffffff;

}


.elegant-color {
    background-color: #424f95 !important;
}


.VueCarousel-slide {

    padding: 15px;
}



.home-posts-area .view img, .view video {
    position: relative;
    display: block;
    height: 200px;
    width:100%
}


.home-posts-area .font-small {
    font-size: 0.9rem;
    min-height: 110px;
}



.home-posts-area .card-title {
   min-height: 55px;
}
</style>