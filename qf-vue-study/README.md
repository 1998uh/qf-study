# 环境搭建

第1步：安装Node.js
  去node.js官网下载windows对应版本，安装即可。
  验证node.js是否安装成功：
    node -v
    npm -v

第2步：解决npm安装第三方模块很慢问题，建议使用cnpm淘宝镜像
  官网地址：https://developer.aliyun.com/mirror/NPM?from=tnpm
  ```
  # 全局安装cnpm这个工具
  # -g 表示全局安装，一次安装，永久使用
  npm install -g cnpm --registry=https://registry.npm.taobao.org
  ```

第3步：安装vue脚手架工具
  ```
  # -g 表示全局安装
  cnpm install @vue/cli -g
  ```

第4步：创建vue项目
  ```
  # 先进入目标目录
  vue create vue-study
  # 在创建项目的过程中，可能会涉及到vue版本的选择，建议选择2.0
  # 如果还需要选择包管理工具，建议使用 npm
  ```

第5步：启动vue项目
  ```
  # 进入项目的根目录
  npm run serve
  # 在浏览器中通过本地服务来访问vue项目
  # 自己配置一个start命令
  npm start
  ```
  如果当前代码没有node_modules包
  执行`cnpm install`可以根据package.json文件进行重装

# 项目目录结构说明

1、node_modules
  是整个vue程序运行所必须的依赖，不能随便改
  当你分享代码时，node_modules不用给别人

2、package.json
  是整个应用程序的说明文件
  它记录当前应用程序所需要的第三方包
  它还指定项目若干操作命令

3、public
  是本地静态资源服务目录

4、src
  是源码目录，工作中写代码的地方
  main.js是应用程序的入口文件
  App.vue 可根组件、容器组件

# 路由

作用：用于实现单页面应用程序

第1步：安装vue-router
```
cnpm install vue-router -S
# -S 表示安装完成时，同步把这个包记录在package.json文件'dependencies'中
# -D 表示安装完成时，同步把这个包记录在package.json文件'devDependencies'中
# -g 表示全局安装这个包，一次安装，永久使用
```

第2步：在src根目录，新建一个router.js的文件，代码如下
```
# 引入VueRouter类，并注册
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

# 引入路由匹配所需要的组件
import Home from './pages/Home.vue'
import Find from './pages/Find.vue'

# 创建路由实例，并抛出
export default new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/find', component: Find }
  ]
})
```

第3步：在main.js中挂载路由
```
import router from './router.js'

new Vue({
  router,  
  render: h=>h(),
  el: '#app',
})
```

第4步：在App组件中使用<router-view></router-view>来承载路由匹配成功的组件。


# 状态管理

作用：1、实现组件之间的数据  2、用于实现缓存
提示：在vue应用程序中，vuex不是必须的，是可选的

1、安装
```
cnpm install vuex -S
```
2、注册并创建Store
在src根目录创建 store.js 文件
```
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {}
})
```
3、在main.js中挂载store
```
import store from './store'
new Vue({
  store
}).$mount('#app')
```
4、在组件中使用store

下面代码可以用，但工作不建议这么写：
```
this.$store.state.msg 访问store中共享的数据
# 修改store数据
this.$store.state.msg = 'new val' // 不建议这么做，因为在devTools中没法调试
this.$store.commit('mutations方法', payload)
```
在组件中使用Vuex的终极写法：
```
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
# 被map*系列方法映射进来的，都可以使用this直接访问，使用起来更方便。
export default {
  computed: {
    ...mapState('namespace', ['msg', 'list']),
    ...mapGetters('namespace', ['length'])
  },
  methods: {
    ...mapMutations('namespace', ['addTodo', 'delTodo']),
    ...mapActions('namespace', ['getCnodeList'])
  }
}
```
特别注意1：在分modules时，一定要给每一个子store开启命名空间——`namespaced:true`
特别注意2：在actions中也可以直接修改state，但不建议这么做，因为这么做devTools就失效了。


# devTools的安装

1、下载这个包，放在你喜欢的任何目录下
  https://github.com/arcliang/Vue-Devtools-
2、打开谷歌浏览器，点击设置、打开设置
3、在设置页面，点击“扩展程序”，并开启“开发者模式”
4、选择“加载已解压的扩展程序”，选择刚刚你下载的devTools/chrome文件夹
5、关闭谷歌浏览器，就有了devTools这个调试工具

# axios

简介：它是基于Promise封装 axios().then().catch().finall()
特点：可以用浏览器环境，也可用于Node.js环境

安装：`cnpm install axios -S`
文档：https://www.npmjs.com/package/axios

# Vue环境下解决跨域问题

什么是跨域？协议、IP地址和端口号，三者有任意一个不相同就是跨域。
怎么理解CORS同源策略？
  只有浏览器环境下才有同源策略，是浏览器内置一种安全机制。
  它不阻塞img、js、css等静态资源的请求
  它只针对XHR通信，针对的结果是ajax请求根本发不出去
怎么解决浏览器环境下跨域问题呢？
  思路：让浏览器客户端向本地同源服务发起api请求，本地服务收到请求时将其代理转发至远程目标服务器。
在Vue环境下具体做法：
  在项目根目录新建一个vue.config.js的文件，代理如下：
  ```
  module.exports = {
    // 本地服务器
    devServer: {
      proxy: {
        '/soso': {
          target: 'https://c.y.qq.com',  // 远程目标服务器
          ws: true,
          changeOrigin: true
        }
      }
    }
  }
  ```
  重启项目，然后把axios封装里的baseUrl改变本地服务器地址。

# Sass使用

在vue脚手架环境默认不能sass，要使用sass安装下面两个插件即可：
```
cnpm install sass-loader -D
cnpm install node-sass -D
```
在组件如何使用sass？常用语法有：变量定义，作用域嵌套，&代表是父元素。
```
<style lang='scss' scoped>
$size: 20px;
$red: rgba(ff,00,22,1);

.box {
  font-size: $size;
  &>span {
    color: $red;
  }
}
</style>
```
注意：工作中，不是所有vue项目都使用sass，也可能会使用到less、postCSS、stylus这些CSS技术
如果使用其它的，自己翻Vue CLI 指南文档（'CSS相关'这篇文章中去找）
