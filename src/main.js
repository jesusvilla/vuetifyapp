import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Components from './components/index'
import store from './store/index'
import router from './router/index'
import { sync } from 'vuex-router-sync'

Vue.config.performance = true
sync(store, router)

Vue.use(Vuetify)

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

export {app, router, store}
