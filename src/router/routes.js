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
    component: () =>
      import('../page/manager/Managemain'),
    children: [
      {
        path: '/manager',
        name: 'Maindata',
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
        component: () =>
          import(
            '../page/manager/main/apply/apply1'
          )
      },
      {
        path: '/apply/apply2',
        name: 'apply2',
        component: () =>
          import(
            '../page/manager/main/apply/apply2'
          )
      },

      {
        path: '/apply/apply2page/submitting/:id',
        name: 'submitting',
        meta: {requireAuth: true},
        component: () =>
          import(
            '../page/manager/main/apply/apply2page/submitting'
          )
      },
      {
        path: '/apply/apply3',
        name: 'apply3',
        component: () =>
          import(
            '../page/manager/main/apply/apply3'
          )
      },
      {
        path: '/apply/apply2page/detailedInfo/:id',
        name: 'detailedInfo',
        meta: {requireAuth: true},
        component: () =>
          import(
            '../page/manager/main/apply/apply2page/detailedInfo'
          )
      },
      {
        path: '/batchset',
        name: 'batchset',
        component: () =>
          import(
            '../page/manager/main/batchset'
          )
      },
      {
        path: '/style/style1',
        name: 'style1',
        component: () =>
          import(
            '../page/manager/main/style/style1'
          )
      },
      {
        path: '/style/style2',
        name: 'style2',
        component: () =>
          import(
            '../page/manager/main/style/style2'
          )
      },
      {
        path: '/white/whitelist',
        name: 'whitelist',
        component: () =>
          import(
            '../page/manager/main/white/whitelist'
          )
      },
      {
        path: '/white/Addstudent',
        name: 'Addstudent',
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
    component: () =>
      import('../page/student/Student'),
    children: [
      {
        path: '/Ap',
        name: 'Ap',
        component: () =>
          import(
            '../page/student/main/Ap'
          )
      },
      {
        path: '/ApInfo',
        name: 'ApInfo',
        component: () =>
          import(
            '../page/student/main/ApInfo'
          )
      },
      {
        path: '/Info',
        name: 'Info',
        component: () =>
          import(
            '../page/student/main/Info'
          )
      },
      {
        path: '/Record',
        name: 'Record',
        component: () =>
          import(
            '../page/student/main/Record'
          )
      },
      {
        path: '/Regis',
        name: 'Regis',
        component: () =>
          import(
            '../page/student/main/Regis'
          )
      }

    ]
  }
]

export default [...loginPage, ...managerPage, ...studentPage]
