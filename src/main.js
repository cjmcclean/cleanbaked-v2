import Vue from 'vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import CleanBaked from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(CleanBaked)
}).$mount('#app')
