import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NavBox from '@/components/NavBox'
import Book from '@/components/Book'

Vue.use(Router)

export default new Router({
  mode: 'history', //切换路径模式，变成history模式
  scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  routes: [
    {path: '/home', name: 'home', component: Home, children:[{path: '/',component: NavBox}]},
    {path: '/book', name: 'book', component: Book},
    {path: '/', redirect: '/home'},
    {path: '*', redirect: '/home'}
  ]
})

