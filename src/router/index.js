import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@/views/landing/landing'
import Signout from '@/components/signout'

import Dashboard from '@/views/dashboard/dashboard'

import MyGuitars from '@/components/myguitars'
import MyAmps from '@/components/myamps'
import MyExtras from '@/components/myextras'
import MyPedals from '@/components/mypedals'

import Wanted from '@/views/wanted/wanted'

import WantedGuitars from '@/components/wantedguitars'
import WantedAmps from '@/components/wantedamps'
import WantedPedals from '@/components/wantedpedals'
import WantedExtras from '@/components/wantedextras'

import Community from '@/components/community'
import Gallery from '@/components/gallery'
import Profile from '@/components/profile'
import Settings from '@/components/settings'

import Gear from '@/components/gear'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/signout',
      name: 'Signout',
      component: Signout
    },
    {
      path: '/',
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
        },
        {
          path: 'gear',
          name: 'Gear',
          component: Gear
        },
        {
          path: 'community',
          name: 'community',
          component: Community
        },
        {
          path: 'gallery',
          name: 'Gallery',
          component: Gallery
        },
        {
          path: 'profile',
          name: 'Profile',
          component: Profile
        },
        {
          path: 'settings',
          name: 'Settings',
          component: Settings
        },
        {
          path: '/wanted/guitars',
          name: 'WantedGuitars',
          component: WantedGuitars
        },
        {
          path: '/wanted/amps',
          name: 'WantedAmps',
          component: WantedAmps
        },
        {
          path: '/wanted/pedals',
          name: 'WantedPedals',
          component: WantedPedals
        },
        {
          path: '/wanted/extras',
          name: 'WantedExtras',
          component: WantedExtras
        },
      ]
    }
  ]
})
