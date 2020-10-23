import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from '@/views/'
import { Login } from '@/components/'




const arr = []
routes.map(ele=>{
  ele.children.map(ele=>{
    arr.push({
      path: ele.path,
      component: ele.component
    })
  })
})

const router = new VueRouter({
  mode: 'hash',
  routes: [
    ...arr,
    { path: '/login', component: Login },
    { path: '/*', redirect: '/' }
  ]
})

// router.beforeEach((to, from, next)=>{
//
// })

export default router
