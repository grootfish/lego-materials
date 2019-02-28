// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import lego from '../src/index'
import Card from './routers/card'
import Divider from './routers/divider'
import Floor from './routers/floor'

Vue.use(VueRouter)
Vue.use(lego)

Vue.config.productionTip = false

const router = new VueRouter({
  esModule: false,
  routes: [
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/divider',
      name: 'Divider',
      component: Divider
    },
    {
      path: '/floor',
      name: 'Floor',
      component: Floor
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
