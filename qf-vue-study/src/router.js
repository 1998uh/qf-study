import Vue from 'vue'
// 引入路由的类
import VueRouter from 'vue-router'
// 用Vue.use注册这个类
Vue.use(VueRouter)

// 路由懒加载，作用是提高应用程序启动时速度，组件按需加载
const Home = ()=>import('./pages/Home.vue')
const Find = ()=>import('./pages/Find.vue')
const TodoList = ()=>import('./pages/TodoList.vue')
const Film = ()=>import('./pages/Film.vue')
const HotFilm = ()=>import('./components/film/HotFilm.vue')
const FutureFilm = ()=>import('./components/film/FutureFilm.vue')
const Detail = ()=>import('./pages/Detail.vue')
const Module = ()=>import('@/pages/Module.vue')

// 创建路由实例（对象）
export default new VueRouter({
  // vue-router有两种常用路由模式，它们有什么区别呢？
  // 区别1：hash模式在url中有一个很难看的#，history没有
  // 区别2：hash模式使用location来实现，history模式使用history.pushState来实现的
  // 区别3：hash模块打包上线后，没有任何问题；但是history模块打包上线，刷新页面会出现404，需要在后端服务上做重定向处理。
  // mode: 'history',
  mode: 'hash',
  // routes字段用于指定一条一条的路由匹配规则
  routes: [
    // alias字段的作用是，给复杂的path取一个简单的易记的小名，alias就是一个路径，可能直接访问
    // name字段的作用是，给当前这条路由匹配规则取一个名字，使用 {name:'ho'} 进行访问
    { path: '/home', component: Home, alias: '/h', name: 'ho' },
    { path: '/find', component: Find },
    // { path: '/', component: TodoList },
    // 当你访问 '/' 路径时，
    // vue-router用名字叫abc的容器来承载TodoList组件
    // 用名字叫default的容器来承载Home组件
    {
      path: '/todo',
      components: {
        abc: Home,
        default: TodoList
      }
    },
    // 嵌套视图
    {
      path: '/film',
      component: Film,
      children: [
        // 当前这个规则的路由是 /film/hot
        // 当url=/film/hot时，路由会在Film组件中寻找一个名字叫f的容器来承载HotFilm
        {
          path: 'hot',
          components: {
            f: HotFilm
          }
        },
        // /film/future
        {
          path: 'future',
          components: {
            g: FutureFilm
          }
        },
        // 当url访问/film 时，重定向到/film/hot
        {
          path: '',
          // redirect: 'hot'
          redirect: '/film/hot'
        }
      ]
    },
    // :id表示动态路由参数，:time支持多个动态路由参数
    // 在路由跳转时，动态传递参数，在Detail页面使用 this.$route.params 来接收
    // 在Deatail页面中，还可以使用props选项来接收，但在路由匹配规则中必须添加`props:true`
    { path: '/detail/:id/:time', component: Detail, props: true },
    { path: '/module', component: Module },
    // 重定向规则，一般放在所有路由规则的最后面
    // { path: '/*', redirect: '/home' }
    // { path: '/*', redirect: '/h' }
    { path: '/*', redirect: {name: 'ho'}}
  ]
})
