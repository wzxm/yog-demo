let Vue = require('vue');
let VueRouter = require('vue-router');

Vue.use(VueRouter);

const Home = resolve => require(['./components/home'], resolve)

const routers = [
    { path: 'home', component: Home }
]

const router = new VueRouter({
    routers,
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

router.afterEach( route => {
    //these hooks do not get a next function and cannot affect the navigation
    
});

module.exports = router;