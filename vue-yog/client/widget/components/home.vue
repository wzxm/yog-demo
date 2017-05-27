<template>
  <div>
    home 页面
  </div>
</template>

<script>
  module.exports = {
    name: 'v-home',
    components: {
    },
    data() {
      return {}
    },
    watch: {
      '$route'(to, from) {
        // const toDepth = to.path.split('/').length
        // const fromDepth = from.path.split('/').length
        // this.fade = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }

</script>

<style lang="scss">

</style>