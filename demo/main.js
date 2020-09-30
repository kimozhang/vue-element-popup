import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import VueElementPopup from '../dist/index.min'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { size: 'small' })
Vue.use(VueElementPopup, { center: true })

new Vue({
  render: h => h(App)
}).$mount('#app')
