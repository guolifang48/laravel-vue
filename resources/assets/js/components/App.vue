<template>
  <div>






<vue-page-transition name="overlay-down-full">
<router-view></router-view>
</vue-page-transition>

  </div>
</template>

<script>


  export default {
    name: 'App',

    metaInfo: {
      title: 'AMCD Blog',

      htmlAttrs: {
        charset: 'utf-8',
        lang: 'es',
        amp: undefined
      },
    },

    created() {},

    mounted () {},

    destroyed () {},

    data() {
      return {
        csrf_token: window.csrf_token
      }
    },

    methods: {},

    components: {

      }
  }
</script>

