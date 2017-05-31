<template>
    <div class="main">
        <h2 class="title">{{title}}</h2>
        <Home></Home>
    </div>
</template>

<script>
    import Home from './components/home.vue'
    // 导入路由
    import Router from 'vue-router/dist/vue-router'

    export default {
        components: { Home },
        init () {
            // console.log(123)
            // let router = new Router()
            // console.log(router)
            // router.push('/home')// 跳转到home组件
        },
        data () {
            return {
                title: '这是一个 vue 的启动页面'
            }
        },
        watch: {
            '$route' (to, from) {
                // const toDepth = to.path.split('/').length
                // const fromDepth = from.path.split('/').length
                // console.log(toDepth)
            }
        }
    }
</script>

<style lang="scss">
    html, body{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    .main .title {
        width: 90%;
        margin: 0 auto;
        margin-top: 20px;
    }
</style>