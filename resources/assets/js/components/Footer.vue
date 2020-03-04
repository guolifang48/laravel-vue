<template>
  <!-- Footer -->
  <mdb-footer class="font-small pt-4 mt-4 gradient" style="margin-top:100px!important;padding-top:80px!important;">
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col sm="6">
          <h5 class="title">Footer Content</h5>
          <p>Here you can use rows and columns here to organize your footer content.</p>
        </mdb-col>
        <mdb-col sm="6">
  <address><strong>Thodey Design.</strong><br>
14 Bridge Rd<br>
Queenscliff, NSW 2096<br>
<abbr title="Phone">P:</abbr> 0418 206 225</address>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3" style="margin-top:80px !important;">
      <mdb-container fluid>
        &copy; 2018 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>


<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>

<style>

footer.page-footer .footer-copyright {
 
    background-color: rgb(66, 79, 149);
   
}

</style>