import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Team from '@/views/Team'
import Members from '@/views/Members'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'home',
      component: Members
    },
    {
      path: '/team/',
      name: 'team',
      component: Team
    }
  ]
})