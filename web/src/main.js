import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'vant/lib/index.css';
import './assets/css/normalize.css'
import './assets/css/common.css'
import './assets/iconfont/iconfont.css'

// swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// vant

import { Popup,Picker,Cell  } from 'vant';
Vue.use(Popup);
Vue.use(Picker);
Vue.use(Cell);

import './assets/js/flexible.js'

import http from './http'
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
