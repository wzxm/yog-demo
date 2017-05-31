<template>
  <div class="home">
    home 页面
    <br>
    <router-link to="/">Go to Home</router-link>
    <br>
    <router-link to="/about">Go to About</router-link>
    <br>
    <hr>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
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

<style lang="scss" scoped>
  .home {
    padding: 50px;
  }
</style>