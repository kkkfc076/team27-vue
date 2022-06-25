import Vue from 'vue'
import Router from 'vue-router'

import Student from '../page/student/Student'
import Ap from '../page/student/main/Ap'
import Info from '../page/student/main/Info'
import Regis from '../page/student/main/Regis'
import Record from '../page/student/main/Record'
import ApInfo from '../page/student/main/ApInfo'
import Managemain from '../page/manager/Managemain'
import apply1 from '../page/manager/main/apply/apply1'
import apply2 from '../page/manager/main/apply/apply2'
import apply3 from '../page/manager/main/apply/apply3'
import routes from './routes'
Vue.use(Router)

let router = new Router({
  routes
})
export default router
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '/student',
//       name: 'Student',
//       component: Student
//     },
//     {
//       path: '/student/ap',
//       name: 'Ap',
//       component: Ap
//     },
//     {
//       path: '/student/apinfo',
//       name: 'ApInfo',
//       component: ApInfo
//     },
//     {
//       path: '/student/record',
//       name: 'Record',
//       component: Record
//     },
//     {
//       path: '/student/regis',
//       name: 'Regis',
//       component: Regis
//     },
//     {
//       path: '/student/info',
//       name: 'Info',
//       component: Info
//     },
//     {
//       path: '/manager',
//       name: 'Managemain',
//       component: Managemain
//     },
//     {
//       path: '/manager/apply1',
//       name: 'apply1',
//       component: apply1
//     },
//     {
//       path: '/manager/apply2',
//       name: 'apply2',
//       component: apply2
//     },
//     {
//       path: '/manager/apply3',
//       name: 'apply3',
//       component: apply3
//     }
//
//   ]
// })
