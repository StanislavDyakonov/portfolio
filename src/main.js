import './assets/scss/main.scss'

import store from './store'

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store
}).$mount('#app')
