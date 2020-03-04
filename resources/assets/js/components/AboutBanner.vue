<template>

<div>


<div class="big-wrap  mask myBig" style="background-image: url('images/AboutBanner3.png');
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
height: calc(100vh - 60px);height:300px;">


<section class="gradient about-banner" style="height:300px;position:relative;">


<div class="container" style="height:100%;">

<div class="row" style="height:100%;">

<div class="col-md-12" style="height:100%;position:relative;">



</div>


</div>




</div>

</section>
</div>




 </div>
</template>




<script>


  export default {
    name: 'AboutBanner',



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



    methods: {},

    components: {
  
    }
  };




</script>

<style>

.myBig{



}

<style>


  .gradient {
    background: -moz-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
    background: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
    background: -webkit-gradient(linear, 45deg, from(rgba(42, 27, 161, 0.7)), to(rgba(29, 210, 177, 0.7)));
    background: -o-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
    background: linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
  }
  h6 {
    line-height: 1.7;
  }


</style>