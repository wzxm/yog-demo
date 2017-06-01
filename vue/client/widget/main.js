import Vue from 'vue/dist/vue'
import App from './app.vue'
import store from './vuex/stores'
import router from './routers'

/**
 * [template 实例化Vue]
 * @type {String}
 */
new Vue({
    store,
    router,
    // template: '<App/>',
    // components: { App }
    render: h => h(App) //用render函数渲染引入的组件App.vue到index.html中的#application元素中
}).$mount('#app');