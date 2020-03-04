<template>

<div>


<div class="big-wrap">

    <!--ViewWrapper-->
    <mdb-view style="background-image: url('images/slide_1.jpg');
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
height: calc(100vh - 60px);">
      <mdb-mask class="gradient d-flex justify-content-center align-items-center">
        <mdb-container>
          <mdb-row>
              <div class="white-text text-center text-md-left col-md-12  animated fadeInDown">
	          <img src="images/amcd-logo-big.png" class="img-fluid" style="margin:auto;max-width: 350px;"/>
            
                <h6 class="mb-4" style="max-width:800px;margin:auto;text-align:center;">
		AMCD provides a full range of web services, focusing on businesses in the Wollongong and nearby areas.
		</h6>
               
       
              </div>
            
          </mdb-row>
        </mdb-container>
      </mdb-mask>
    </mdb-view>
    <!--/.ViewWrapper-->

  </div> <!--big-wrap-->

 </div>
</template>




<script>
import { mdbContainer, mdbRow, mdbCol, mdbView, mdbMask, mdbBtn} from 'mdbvue';


  export default {
    name: 'HomeBanner',




    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbView,
      mdbMask,
      mdbBtn
  
    }
  };




</script>


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