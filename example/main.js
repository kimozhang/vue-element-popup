import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import VueElementPopup from '../lib'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueElementPopup)

new Vue({
  render: h => h(App)
}).$mount('#app')
