const loginPage = [
  {
    path: '/',
    name: 'Login',
    component: () =>
      import('../page/login/Login')
  }
]
const managerPage = [
  {
    path: '/maneger',
    name: 'Managemain',
    meta: {
      requireAuth: true
    },
    component: () =>
      import('../page/manager/Managemain'),
    children: [
      {
        path: '/manager',
        name: 'Maindata',
        meta: {
          requireAuth: true
        },
        component: () =>
          import(
            '../page/manager/main/Maindata'
          )
      },
      {
        path: '/manager',
        name: 'collegeData',
        component: () =>
          import(
            '../page/manager/main/collegeData'
          )
      },
      {
        path: '/apply/apply1',
        name: 'apply1',
        meta: {
          requireAuth: true
        },
        component: () =>
          import(
            '../page/manager/main/apply/apply1'
          )
      },
      {
        path: '/apply/apply2',
        name: 'apply2',
        meta: {
          requireAuth: true
        },
        component: () =>
          import(
            '../page/manager/main/apply/apply2'
          )
      },

      {
        path: '/apply/apply2page/submitting/:id',
        name: 'submitting',
        meta: {
          requireAuth: true
        },
        component: () =>
          import(
            '../page/manager/main/apply/apply2page/submitting'
          )
      },
      {
        path: '/apply/apply3',
        name: 'apply3',
        meta: {
          requireAuth: true
        },
        component: () =>
          import(
            '../page/manager/main/apply/apply3'
          )
      },
      {
        path: '/apply/apply2page/detailedInfo/:id',
        name: 'detailedInfo',
        meta: {
          requireAuth: true
        },
        component: () =>
          import(
            '../page/manager/main/apply/apply2page/detailedInfo'
          )
      },
      {
        path: '/batchset',
        name: 'batchset',
        meta: {
          requireAuth: true
        },
        component: () =>
          import(
            '../page/manager/main/batchset'
          )
      },
      {
        path: '/style/style1',
        name: 'style1',
        meta: {
          requireAuth: true
        },
        component: () =>
          import(
            '../page/manager/main/style/style1'
          )
      },
      {
        path: '/style/style2',
        name: 'style2',
        meta: {
          requireAuth: true
        },
        component: () =>
          import(
            '../page/manager/main/style/style2'
          )
      },
      {
        path: '/white/whitelist',
        name: 'whitelist',
        meta: {
          requireAuth: true
        },
        component: () =>
          import(
            '../page/manager/main/white/whitelist'
          )
      },
      {
        path: '/white/Addstudent',
        name: 'Addstudent',
        meta: {
          requireAuth: true
        },
        component: () =>
          import(
            '../page/manager/main/white/Addstudent'
          )
      }
    ]
  }
]
const studentPage = [
  {
    path: '/student',
    name: 'Student',
    meta: {
      requireAuth: true
    },
    component: () =>
      import('../page/student/Student'),
    children: [
      {
        path: '/hello',
        name: 'hello',
        meta: {
          requireAuth: true
        },
        component: () =>
          import(
            '../page/student/main/hello'
          )
      },
      {
        path: '/student/Ap',
        name: 'Ap',
        meta: {
          requireAuth: true
        },
        component: () =>
          import(
            '../page/student/main/Ap'
          )
      },
      {
        path: '/student/ApInfo',
        name: 'ApInfo',
        meta: {
          requireAuth: true
        },
        component: () =>
          import(
            '../page/student/main/ApInfo'
          )
      },
      {
        path: '/student/Info',
        name: 'Info',
        meta: {
          requireAuth: true
        },
        component: () =>
          import(
            '../page/student/main/Info'
          )
      },
      {
        path: '/student/Record',
        name: 'Record',
        meta: {
          requireAuth: true
        },
        component: () =>
          import(
            '../page/student/main/Record'
          )
      },
      {
        path: '/student/Regis',
        name: 'Regis',
        meta: {
          requireAuth: true
        },
        component: () =>
          import(
            '../page/student/main/Regis'
          )
      }

    ]
  }
]

export default [...loginPage, ...managerPage, ...studentPage]
