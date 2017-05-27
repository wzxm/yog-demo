<template>
    <div>
        <h2>这是一个 vue 的启动页面</h2>
        <Home></Home>
    </div>
</template>

<script>
    const Home = require('./components/home.vue');
    // 导入路由
    const Router = require('vue-router');

    module.exports = {
        components: { Home },
        init () {
            console.log(123)
            let router = new Router()
            console.log(router)
            router.push('/home')// 跳转到home组件
        },
        data () {
            return {}
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                console.log(toDepth)
            }
        }
    }
</script>

<style>
    html, body{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
</style>