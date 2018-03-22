/**
 * Created by benson on 2017/6/24.
 */
import store from '../store/store.js'
import axios from 'axios';


//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的

axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  if( store.getters.loading < 1 ){
    $("body").css("background-color","#dedede");
  }
  store.dispatch('addLoading');
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  setTimeout(()=>{
    if( store.getters.loading < 1 ){
      $("body").css("background-color","#ffffff");
    }
    store.dispatch('addLoading');
  },5000);
  return response;
}, function (error) {
  return Promise.reject(error);
});

//配置默认的请求头
/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
 axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/


//配置默认的请求跟路径
//axios.defaults.baseURL='http://localhost:8082/';

export default axios;
