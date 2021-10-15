import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Investors from "./views/Investors"
import Err404 from ""

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
      {
          path: '/team',
          name: 'team',
          component: () => import(/* webpackChunkName: "team" */ './views/Team')
      },
      {
          path: '/ecosystem',
          name: 'ecosystem',
          component: () => import(/* webpackChunkName: "team" */ './views/Ecosystem')
      },
      {
        path: '/investors',
        name: 'Investors',
        component: Investors,
    },
    {
      path: '/404',
      name: '404',
      component: 404,
  }
  ]
})
