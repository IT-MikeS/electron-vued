import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VuedElectron from 'vued-electron'

if(navigator.userAgent.toLowerCase().indexOf('electron/') > -1) {
  const electron = window.require('electron');
  Vue.use(VuedElectron, electron)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
