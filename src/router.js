import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Team from '@/views/Team'

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
      name: 'team',
      component: Team
    }
  ]
})
