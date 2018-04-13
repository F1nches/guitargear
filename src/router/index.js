import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/landing/landing'
import Dashboard from '@/views/dashboard/dashboard'
import MyGuitars from '@/components/myguitars'
import MyAmps from '@/components/myamps'
import MyExtras from '@/components/myextras'
import MyPedals from '@/components/mypedals'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'guitars',
          name: 'MyGuitars',
          component: MyGuitars
        },
        {
          path: 'pedals',
          name: 'MyPedals',
          component: MyPedals
        },
        {
          path: 'amps',
          name: 'MyAmps',
          component: MyAmps
        },
        {
          path: 'extras',
          name: 'MyExtras',
          component: MyExtras
        }
      ]
    }
  ]
})
