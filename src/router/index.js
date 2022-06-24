import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Manager from '@/components/Manager'
import Student from '../page/student/Student'
import Ap from '../page/student/Ap'
import Info from '../page/student/Info'
import Regis from '../page/student/Regis'
import Record from '../page/student/Record'
import ApInfo from '../page/student/ApInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/manager',
      name: 'Manager',
      component: Manager
    },
    {
      path: '/student',
      name: 'Student',
      component: Student
    },
    {
      path: '/student/ap',
      name: 'Ap',
      component: Ap
    },
    {
      path: '/student/apinfo',
      name: 'ApInfo',
      component: ApInfo
    },
    {
      path: '/student/record',
      name: 'Record',
      component: Record
    },
    {
      path: '/student/regis',
      name: 'Regis',
      component: Regis
    },
    {
      path: '/student/info',
      name: 'Info',
      component: Info
    }
  ]
})
