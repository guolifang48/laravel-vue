<template>
  <page :classes="{'c-page--padded-top': false}">
<NavBar></NavBar>
 <AboutBanner></AboutBanner>




    <div class="container about-banner-title animation fadeInLeft">
	<div class="row">

		<div class="col-md-8">
		<h2 class="h1-responsive font-weight-bold my-5" style="text-shadow: 1px 1px 2px #535d5e, 0 0 1em #424f95, 0 0 0.2em #424f95;">Contact Us</h2>
		
		</div>
		<div class="col-md-4">
		
		</div>
	</div>
</div>

<section class="contact-area about-impression" style="color:111;padding-top:80px;padding-bottom:80px;">

<mdb-container>
    <section class="my-5">
      <h2 class="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
      <p class="text-center w-responsive mx-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
      <mdb-row>
        <mdb-col md="9" class="md-0 mb-5">
          <form>
            <mdb-row>
              <mdb-col md="6">
                <div class="md-form mb-0">
                  <mdb-input type="text" id="contact-name" label="Your name" />
                </div>
              </mdb-col>
              <mdb-col md="6">
                <div class="md-form mb-0">
                  <mdb-input type="text" id="contact-email" label="Your email" v-validate="'required|email'" name="email"/>
		  <span>{{ errors.first('email') }}</span>

                </div>
              </mdb-col>
            </mdb-row>
            <mdb-row>
              <mdb-col md="12">
                <div class="md-form mb-0">
                  <mdb-input type="text" id="contact-subject" label="Subject" />
                </div>
              </mdb-col>
            </mdb-row>
            <mdb-row>
              <mdb-col md="12">
                <div class="md-form mb-0">
                  <mdb-textarea id="contact-message" label="Your message" />
                </div>
              </mdb-col>
            </mdb-row>
          </form>
          <div class="text-center text-md-left">
            <mdb-btn color="primary" size="md">Send</mdb-btn>
          </div>
        </mdb-col>
        <mdb-col md="3" class="text-center">
          <ul class="list-unstyled mb-0">
            <li>
              <mdb-icon icon="map-marker" size="2x" class="blue-text"/>
              <p>San Francisco, CA 94126, USA</p>
            </li>
            <li>
              <mdb-icon icon="phone" size="2x" class="blue-text mt-4"/>
              <p>+ 01 234 567 89</p>
            </li>
            <li>
              <mdb-icon icon="envelope" size="2x" class="blue-text mt-4"/>
              <p>contact@example.com</p>
            </li>
          </ul>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>

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
 import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon, mdbInput, mdbTextarea, mdbCard, mdbCardBody } from 'mdbvue';

  export default {
    name: 'TheContactPage',

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
        return this.$store.state.views['contact'].seo;
      },
    },

    methods: {},

    components: {
      Page,
      NavBar,
      AboutBanner,
      Footer,
  mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon, mdbInput, mdbTextarea, mdbCard, mdbCardBody
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

</style>