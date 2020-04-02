import Vue from 'vue'
import Vuex from 'vuex'
import city from './city'

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const store = new Vuex.Store({
    //一些状态
    state: {

    },
    mutations: {

    },
    actions: {

    },
    getters: {

    },
    modules: {
        city
    }
})

//3.导出store独享
export default store