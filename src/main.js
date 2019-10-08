// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App'
import VueRouter from 'vue-router'
import NavigationPage from "./components/NavigationPage";
import contact from "./components/contact";
import Carousel from "./components/Carousel";


Vue.use(BootstrapVue),
Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: Carousel
  },
  {
    path: '/contact', component: contact
  }
]

const router = new VueRouter({routes: routes})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
