import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueTypedJs from 'vue-typed-js'
import AnimateCSS from 'animate.css'
import AOS from 'aos'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'aos/dist/aos.css'
import App from './App.vue'
import router from './router'

AOS.init()
Vue.use(BootstrapVue)
Vue.use(VueTypedJs)
Vue.use(AnimateCSS)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
