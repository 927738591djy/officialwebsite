import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from '@/router' //引入路由对象
import '@/assets/style/reset.css'

Vue.config.productionTip = false

new Vue({
  router, //vue中使用路由对象
  render: h => h(App),
}).$mount('#app')

