// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'
import axios from 'axios'
// mint-ui文件引用
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入样式文件
import './assets/css/neat-min.css'
import './assets/css/style.css'

import router from './router'

Vue.use(MintUI)
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
