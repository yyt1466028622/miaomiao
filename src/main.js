import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios

Vue.filter('setWH', (url, arg) => {
    return url.replace(/w\.h/, arg);
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store,
    axios
}).$mount('#app')