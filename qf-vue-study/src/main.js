// main.js是整个应用程序的入口文件

// 引入vue这个第三方包中的Vue
import Vue from 'vue'
// 引入一个App组件
import App from './App.vue'

Vue.config.productionTip = false

// 导入模块
import router from './router'
import store from './store/index.js'

// 把所有api接口，统一挂在原型链上
import api from './utils/api'
Vue.prototype.$api = api   // this.$api.getMusic()


// 创建vue实例（根组件）并挂载在#app这个div节点上
new Vue({
  router,// 路由挂载  // ES6 json扩展语法
  store, // 状态管理挂载
  // 把App组件渲染到根组件中去
  render: h => h(App)
}).$mount('#app')
// $mount('#app') 可以用 el:'#app'来替代
