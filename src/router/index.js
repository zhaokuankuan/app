import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import login from '../page/login/login.vue';
import  mainList from '../page/mainlist/mainList';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: "login",
      component: login
    },
    {
      path: '/mainList',
      name: "mainlist",
      component: mainList
    }
  ]
})
