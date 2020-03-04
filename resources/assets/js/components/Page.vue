<template>
  <div class="c-page" v-bind:class="classes" :style="{'min-height': `${styles.height}px`}">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'ThePage',

  mounted () {
    this.updateHeight()
    window.addEventListener('resize', this.updateHeight)
  },

  destroyed () {
    window.removeEventListener('resize', () => {})
  },

  props: ['classes'],

  data () {
    return {
      styles: {
        height: 440
      }
    }
  },

  methods: {
    updateHeight () {
      const mobileSize = 568;
      const minHeight = 450;
      const deviceHeight = document.documentElement.clientHeight || window.innerHeight;
      const deviceWidth = window.innerWidth;
      this.styles.height = (deviceWidth <= mobileSize) ? deviceHeight : (deviceHeight > minHeight) ? deviceHeight : minHeight;
    },
  }

}
</script>
