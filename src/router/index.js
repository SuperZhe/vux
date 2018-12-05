import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/views/login/login'], resolve),

    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/views/home/home'], resolve),
    },
    // 预约面试页
    {
      path: '/interviewList',
      name: 'interviewList',
      component: resolve => require(['@/views/interview/interviewList'], resolve),
      children: []
    },
    // 时间筛选页
    {
      path: '/timeFilter',
      name: 'timeFilter',
      component: resolve => require(['@/components/interview/timeFilter'], resolve)
    }
  ]
})
