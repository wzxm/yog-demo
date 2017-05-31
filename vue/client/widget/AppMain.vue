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
        // 组件实例刚被创建，组件属性计算之前，如 data 属性等
        beforeCreate () {
            // let router = new Router()
            // router.push('/')// 跳转到home组件
        },
        data () {
            return {
                title: '这是一个 vue 的启动页面'
            }
        },
        created () {
            // 组件实例创建完成，属性已绑定，但 DOM 还未生成，$el 属性还不存在
            // 此时 data 已经被 observed 了
        },
        // 模板编译/挂载之前
        beforeMount () {

        },
        // 模板编译/挂载之后
        mounted () {

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