import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'



// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [{
    path: '',
    redirect: '/movie'
}, movieRouter, cinemaRouter, mineRouter]
const router = new VueRouter({
    routes,
    mode: 'history',
    base: process.env.BASE_URL
})


export default router