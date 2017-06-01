<template lang="html">
  <div class="register">
    这是 register page
  </div>
</template>

<script>

    // 导入路由
    // import Router from 'vue-router/dist/vue-router'

    export default {
        name: 'v-register',
        components: {
    },
    data () {
        return {}
    },
    // 组件实例刚被创建，组件属性计算之前，如 data 属性等
    beforeCreate () {
        // let $router = new Router()
        // router.push('/')// 跳转到home组件
        console.log(this.$route.query.userId)
    },
    created () {
        // 组件创建完后获取数据，
        // 此时 data 已经被 observed 了
        // this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            console.log(this)
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