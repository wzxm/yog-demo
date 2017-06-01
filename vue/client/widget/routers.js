import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router/dist/vue-router.js';

/**
 * 使用vue-router
 */
Vue.use(VueRouter);

// const Chat = resolve => require(['./components/chat'], resolve)
// const Register = resolve => require(['./components/register'], resolve)
import Chat from './components/chat.vue';
import Register from './components/register.vue';

const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }
const Baz = { template: '<p>Baz page</p>' }

const routes = [
    { path: '*', component: NotFound },
    { path: '/', components: { default: Home, a: Chat, b: Register } },
    { path: '/chat', components: { default: Home, a: Chat, b: About } },
    // { path: '/chat', component: Chat },
    { path: '/about', component: About },
    { path: '/register', component: Register }
]

// const routers = [
//     { path: 'home', component: Home }
// ]

const router = new VueRouter({
    //mode指定路由模式，默认'hash'，另一种可选的模式是'history'
    mode: 'hash',
    routes,
    scrollBehavior (to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 }
        }
    }
});

router.beforeEach((to, from, next) => {
    //to and from are Route Object,next() must be called to resolve the hook
    next();
});

router.afterEach(route => {
    //these hooks do not get a next function and cannot affect the navigation
    
});

export default router