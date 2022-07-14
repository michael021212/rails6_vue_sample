import Vue from 'vue'
import Router from 'vue-router'
import EmployeeIndexPage from 'pages/EmployeeIndexPage.vue'
import EmployeeDetailPage from 'pages/EmployeeDetailPage.vue'
import EmployeeNewPage from 'pages/EmployeeNewPage.vue'
import EmployeeEditPage from 'pages/EmployeeEditPage.vue'

Vue.use(Router)

export default new Router({
  name: "Router",
  mode: 'history',
  routes: [
    {
      path: '/',
      name: "Top",
      component: EmployeeIndexPage
    },
    {
      path: '/employees/:id(\\d+)',
      name: "EmployeeDetailPage",
      component: EmployeeDetailPage
    },
    {
      path: '/employees/new',
      name: "EmployeeNewPage",
      component: EmployeeNewPage
    },
    {
      path: '/employees/:id(\\d+)/edit',
      name: "EmployeeEditPage",
      component: EmployeeEditPage
    },
  ]
})
