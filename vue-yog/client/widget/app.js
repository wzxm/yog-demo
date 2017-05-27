let Vue = require('vue');

let Main = require('./Main.vue');
let store = require('./vuex/stores');
let router = require('./routers');

/**
 * [template 实例化Vue]
 * @type {String}
 */
new Vue({
    store,
    router,
    render: h => h(Main)
}).$mount('#app');