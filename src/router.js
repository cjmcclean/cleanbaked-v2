import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
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
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () =>
        import(/* webpackChunkName: "contact" */ './views/Contact.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () =>
        import(/* webpackChunkName: "portfolio" */ './views/Portfolio.vue')
    },
    {
      path: '/process',
      name: 'process',
      component: () =>
        import(/* webpackChunkName: "process" */ './views/Process.vue')
    },
    {
      path: '/vue-docs',
      name: 'vue-docs',
      component: () =>
        import(/* webpackChunkName: "process" */ './views/VueDocs.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
