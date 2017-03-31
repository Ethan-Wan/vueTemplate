import Vue from 'vue'
import Layout from './components/layout'
import router from './router.config'
import resource from 'vue-resource'

Vue.use(resource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
