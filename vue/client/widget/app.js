import Vue from 'vue/dist/vue'
import AppMain from './AppMain.vue'
import store from './vuex/stores'
import router from './routers'

/**
 * [template 实例化Vue]
 * @type {String}
 */
new Vue({
    store,
    router,
    template: '<AppMain/>',
    components: { AppMain }
}).$mount('#app');