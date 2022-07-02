import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'
Vue.$httpRequestList = []
Vue.use(Router)

let router = new Router({
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to)
  if (localStorage.getItem('token') || to.name === 'Login') {
    next()
  } else {
    next({
      path: '/'
    })
  }
  next()
})

export default router
