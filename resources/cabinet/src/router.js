import Vue from 'vue'
import VueRouter from 'vue-router'
import _includes from 'lodash/includes'
import _find from 'lodash/find'
import _some from 'lodash/some'
import pages from './pages'

Vue.use(VueRouter)

const routes = [
  {
    // main
    path: '/',
    component: pages.layoutGuest,
    children: [
      {
        path: '',
        redirect: {name: 'main'}
      },
      {
        path: 'main',
        name: 'main',
        component: pages.main
      },
      {
        path: 'decrypt',
        name: 'decrypt',
        component: pages.decrypt
      },
    ]
  },
  {
    path: '*',
    component: pages.layoutError,
    children: [
      {
        path: '*',
        component: pages.notFound
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
  linkExactActiveClass: 'router-link',
  linkActiveClass: 'is-active'
})

Vue.prototype.router = router
window.router = router
export default router
