import Vue from 'vue'
import Router from 'vue-router'

function route (path, view) {
  return {
    path: path,
    component: require(`../views/${view}View.vue`)
  }
}

Vue.use(Router)

const router = new Router({
  base: __dirname,
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    route('/', 'About'),
    route('/quick-start', 'QuickStart'),
    // 301 redirects
    { path: '/overview', redirect: '/server-side-rendering' },
    { path: '/event-bus', redirect: '/' },
    // Global redirect for 404
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
    if (typeof ga !== 'undefined') {
        ga('set', 'page', to.path)
        ga('send', 'pageview')
    }
    next()
})

export default router
