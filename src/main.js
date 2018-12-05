// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import rem from './assets/rem';
import FastClick from 'fastclick'
import router from './router/index'
import App from './App'
import 'lib-flexible/flexible.js' // 移动端适配

//全局注册
import {
  XInput,
  Group,
  XButton,
  XHeader,
  TransferDom,
  Flexbox,
  FlexboxItem,
  Grid,
  GridItem,
  Search,
  Divider
} from 'vux'

Vue.component('x-input', XInput)
Vue.component('group', Group)
Vue.component('x-button', XButton)
Vue.component('x-header', XHeader)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)
Vue.component('search', Search)
// Vue.component('scroller ', Scroller)
Vue.component('divider', Divider) //底
// 使用指令,把弹出框移动到body下面
Vue.directive("TransferDom", TransferDom)


Vue.use(rem)
FastClick.attach(document.body) // 用来确定用户是不是在双击。事件会延迟300ms

// 引入接口api
import API from './api'
Vue.use(API)

Vue.config.productionTip = false

// 过滤器注册
import filters from './filters'
for (let [k, v] of Object.entries(filters)) {
  Vue.filter(k, v)
}



/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
