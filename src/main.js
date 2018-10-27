import './assets/scss/main.scss'

import store from './store'

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import VueFullPage from 'vue-fullpage.js/dist/vue-fullpage.min.js';
// window.$ = require('jquery');
// window.fullpage = require('fullpage.js');
// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
// import VueFullPage from 'vue-fullpage.js'

// Vue.use(VueFullPage)

new Vue({
    render: h => h(App),
    store
}).$mount('#app')
