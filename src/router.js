import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from '@/store.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/fleet-dashboard',
      name: 'fleetdashboard',
      component: () => import('./views/FleetDashboard.vue')
    },
    {
      path: '/vehicle-dashboard',
      name: 'vehicledashboard',
      component: () => import('./views/VehicleDashboard/VehicleDashboard.vue'),
      children: [
        {
          path: '/vehicle-dashboard/general',
          name: 'general',
          component: () => import('./views/VehicleDashboard/General.vue')
        },
        {
          path: '/vehicle-dashboard/expenses',
          name: 'expenses',
          component: () => import('./views/VehicleDashboard/Expenses.vue')
        },
        {
          path: '/vehicle-dashboard/billing',
          name: 'billing',
          component: () => import('./views/VehicleDashboard/Billing.vue')
        },
        {
          path: '/vehicle-dashboard/maintenance',
          name: 'maintenance',
          component: () => import('./views/VehicleDashboard/Maintenance.vue')
        },
        {
          path: '/vehicle-dashboard/fuel',
          name: 'fuel',
          component: () => import('./views/VehicleDashboard/Fuel.vue')
        },
        {
          path: '/vehicle-dashboard/accident',
          name: 'accident',
          component: () => import('./views/VehicleDashboard/Accident.vue')
        }
      ]
    },
    {
      path: '/fleet-reports',
      name: 'fleetreports',
      component: () => import('./views/FleetReports.vue')
    },
    {
      path: '/fleet-resources',
      name: 'fleetresources',
      component: () => import('./views/FleetResources.vue')
      // ,meta: {
      //   authRequired: true
      // }
    },
    {
      path: '/fleet-messenger',
      name: 'fleetmessenger',
      component: () => import('./views/FleetMessenger.vue')
    },
    {
      path: '/sign-in',
      name: 'signin',
      component: () => import('./views/Signin.vue')
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('./views/Join.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.state.isAuthenticated) {
      next({ path: '/sign-in' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
