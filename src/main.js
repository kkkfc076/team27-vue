// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// eslint-disable-next-line import/no-duplicates
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// eslint-disable-next-line import/no-duplicates
import Element from 'element-ui'

Vue.use(Element, { size: 'small', zIndex: 3000 })

var axios = require('axios')

Vue.prototype.$axios = axios
axios.defaults.withCredentials = true
Vue.config.productionTip = false

Vue.use(ElementUI)
//登录拦截
router.beforeEach((to,from,next)=>{
  if (to.meta.requireAuth) {//requireAuth若为true则该路由需要判断是否登录
    if (localStorage.userName) {//判断当前的userName数据是否存在
      next();
    }
    else {
      next({//返回登录页面
        path: '/',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
