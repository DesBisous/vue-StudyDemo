import Vue from 'vue'
import router from './router'
import axios from './axios'
import store from './store/store.js'

import App from './App'
import loading from './components/loading'
import filters from './filters'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap'
import jqueryEasing from 'jquery.easing'



Vue.config.productionTip = false;
Vue.prototype.$http = axios; //其他页面在使用axios的时候直接  this.$http就可以了

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

Vue.use(loading);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
