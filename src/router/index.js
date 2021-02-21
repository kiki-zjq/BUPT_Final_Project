import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/view/homepage/index.vue'


import Document from '@/view/document/index.vue'
import Blank from '@/view/blank/index.vue'
import LogIn from '@/view/logIn/index2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage
    },
    {
      path:'/Blank',
      name:'Blank',
      component:Blank
    },
    {
      path:'/Document/:paperid',
      name:'Document',
      component:Document
    },
  ],


  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      //console.log(to.hash)
      return {
        selector: to.hash
      }
    }
  }
})
