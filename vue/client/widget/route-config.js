// import HomePage from './components/home.vue'

// const NotFound = { template: '<p>Page not found</p>' }
const Bar = { template: '<p>home page</p>' }
const Baz = { template: '<p>about page</p>' }

const HomePage = resolve => require(['./components/home'], resolve)
const Chat = resolve => require(['./components/chat'], resolve)

// const routers = [
//     { path: 'home', component: Home }
// ]

console.log(Chat)
export default [{
    path: '/',
    components: {
        default: HomePage,
        sidebar: Bar,
        b: Baz
    }
}, {
    path: '/chat',
    components: Chat
}]