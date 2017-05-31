<template>
  <div class="home">
    home 页面
    <br>
    <router-link to="/">Go to Home</router-link>
    <br>
    <router-link to="/about">Go to About</router-link>
    <br>
    <hr>
    <transition name="slide-fade">
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

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-leave-active {
    transition: all 0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>