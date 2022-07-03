import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'
Vue.$httpRequestList = []
Vue.use(Router)

let router = new Router({
  routes
})


export default router
