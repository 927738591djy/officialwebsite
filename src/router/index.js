import Vue from 'vue'
import vueRouter from 'vue-router' //导入路由
import Test from '@/views/Test.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Ability from '@/views/Ability.vue'
import Example from '@/views/Example.vue'
import Work from '@/views/Work.vue'




Vue.use(vueRouter) //使用路由

//创建路由对象
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/ability',
        name: 'Ability',
        component: Ability
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/example',
        name: 'Example',
        component: Example
    },
    {
        path: '/work',
        name: 'Work',
        component: Work
    },
]

const router = new vueRouter({
    routes
})

export default router
