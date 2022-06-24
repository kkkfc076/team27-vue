import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Manager from '@/components/Manager'
import Student from '../page/student/Student'
import Ap from '../page/student/Ap'

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
    }
  ]
})
