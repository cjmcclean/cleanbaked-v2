import Vue from 'vue'
import CleanBaked from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(CleanBaked)
}).$mount('#app')
