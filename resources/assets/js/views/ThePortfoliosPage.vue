<template>
  <page :classes="{'c-page--padded-top': false}">
<NavBar></NavBar>
  <AboutBanner></AboutBanner>



    <div class="container about-banner-title animation fadeInLeft">
	<div class="row">

		<div class="col-md-8">
		  <h2 class="h1-responsive font-weight-bold my-5" style="color:#fff;text-shadow: 1px 1px 2px #535d5e, 0 0 1em #424f95, 0 0 0.2em #424f95;">Our Portfolio</h2>
		</div>
		<div class="col-md-4">
		
		</div>
	</div>
</div>



  <section class="filter" style="margin-bottom:80px;">




	<div class="container title-container">

		<div class="filters animated bounceInDown">

			<span class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')"> <mdb-btn outline="mdb-color" darkWaves fab icon="instagram" iconClass="fa-sm" class="mybutton">All</mdb-btn></span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'WordPress' }" v-on:click="setFilter('WordPress')"><mdb-btn outline="mdb-color" fab icon="snapchat-ghost" iconClass="fa-sm" class="mybutton">WordPress</mdb-btn></span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'Laravel' }" v-on:click="setFilter('Laravel')"><mdb-btn outline="mdb-color" fab icon="snapchat-ghost" iconClass="fa-sm" class="mybutton">Laravel</mdb-btn></span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'Vue' }" v-on:click="setFilter('Vue')"><mdb-btn outline="mdb-color" fab icon="snapchat-ghost" iconClass="fa-sm" class="mybutton">Vue</mdb-btn></span>
		</div>
	</div>




<div class="container">

<div id="spinner-wrap" class="hideMe" style="position:absolute;left:45%;width:100%;min-height:500px;text-align:center;padding-top:150px;">
<atom-spinner
  :animation-duration="1000"
  :size="160"
  :color="'#ff1d5e'"
/>

</div>
<silentbox-group class="row">
    <silentbox-item v-if="currentFilter === item.category || currentFilter === 'ALL'" v-bind:key="item.name" v-for="item in items" class="col-md-4 animated fadeIn"
   v-bind:src="'storage/' + item.full_size" description="My very custom message">
    <mdb-view class="overlay img-responsive example z-depth-1-half" v-bind:src="'storage/' + item.thumb" style="width:100%;">
      <mdb-mask overlay="indigo-strong" flex-center v-bind:text="item.title"/>
       </mdb-view>
    </silentbox-item>

</silentbox-group>


</div><!-- container -->
  </section>


<section class="footer">


<Footer></Footer>

</section>



  </page>
</template>

<script>

import Page from './../components/Page';
 import NavBar from './../components/NavBar';
 import { mdbView, mdbMask,mdbBtn, mdbBtnGroup } from "mdbvue";
import AboutBanner from './../components/AboutBanner';

     import Footer from './../components/Footer';

 import {AtomSpinner} from 'epic-spinners'

const url = 'http://127.0.0.1:8000/portfolios'

  export default {
    name: 'ThePortfoliosPage',

    metaInfo () {
      return {
        title: this.seo.title
      }
    },

    created() {},

  	mounted(){
	this.getItems();

	},

    destroyed () {},

    props: [],

    data() {
      return {
      currentFilter: 'ALL',
      items:{},
        ui: {},
        dataLayer: window.laravelDataLayer,
      }
    },

    computed: {
     

      seo() {
        return this.$store.state.views['portfolio'].seo;
      },
    },

    methods: {
    
    
    	getItems(){

			    axios.get(url).then(response => {
			    console.log(response)



			       this.items = response.data
				
			 
			  })




		
		},
				setFilter: function(filter) {
			this.currentFilter = filter;
		},




},

    components: {
      Page,
      NavBar,
      AboutBanner,
      Footer,
      AtomSpinner,
        mdbView,
      mdbMask,
       mdbBtn,
      mdbBtnGroup
    }
  };
</script>


<style>

.filter{

min-height:600px;

}

.hideMe {
    -moz-animation: cssAnimation 0s ease-in 1s forwards;
    /* Firefox */
    -webkit-animation: cssAnimation 0s ease-in 1s forwards;
    /* Safari and Chrome */
    -o-animation: cssAnimation 0s ease-in 1s forwards;
    /* Opera */
    animation: cssAnimation 0s ease-in 1s forwards;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}
@keyframes cssAnimation {
    to {
        width:0;
        height:0;
        overflow:hidden;
    }
}
@-webkit-keyframes cssAnimation {
    to {
        width:0;
        height:0;
        visibility:hidden;
    }
}

.img-responsive{
cursor:pointer;
width: 100%;
margin-top:30px;
border: solid indigo 1px;

border-radius: 2px;


}

.active .mybutton{

background-color: #3f51b5 !important;
color: #fff !important;
}

.mybutton:hover{
background-color: #3f51b5 !important;
color: #fff !important;


}

.mybutton:hover i{

color: #fff !important;

}

.about-banner-title{
margin-top: -200px;
padding-bottom:80px;
}

</style>