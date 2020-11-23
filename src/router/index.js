import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/view/homepage/index.vue'
import Resume from '@/view/resume/index.vue'
import Experience from '@/view/experience/index.vue'
import Project from '@/view/project/index.vue'
import Certification from '@/view/Certification/index.vue'
import Blogs from '@/view/blogs/index.vue'

import Blank from '@/view/blank/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/Resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/Experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/Project',
      name: 'Project',
      component: Project
    },
    {
      path: '/Certification',
      name: 'Certification',
      component: Certification
    },
    {
      path: '/Blogs',
      name: 'Blogs',
      component: Blogs
    },
    {
      path:'/Blank',
      name:'Blank',
      component:Blank
    }
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
