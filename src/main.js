import Vue from 'vue'
import App from './App.vue'
import "./form"
import "./bootstrap"
import {router} from "./router"
import "./axios"
import store from "./store"

Vue.config.productionTip = false

new Vue({
  router : router,
  store,
  render: h => h(App),
}).$mount('#app')
