import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) // 注册

// @ 是一个路径别名，它指向当前 src，是一个绝对路径
import { fetchCnodeList } from '@/utils/api'

// 引入封装好的子store
import good from './modules/good'
import music from './modules/music'

// 创建一个store实例，它是用于管理应用程序中的状态数据的
const store = new Vuex.Store({
  // state
  // 凡是在放在state中的数据，可以被当前程序中任何组件进行访问
  // state中的数据，是可以被共享的
  state: {
    msg: '2006',
    list: [],
    cnodeList: []
  },
  // getters
  // 它相当于是计算属性
  // 当它所关联的state变量发生变化时，getters变量自动更新
  getters: {
    length: function(state) {
      return state.list.length
    }
  },
  // mutations
  // 它的作用只有一个，就是用于修改state中的数据
  // 当state中的数据发生变化时，页面视图自动更新
  mutations: {
    // payload 负荷负载，表示从视图中传递过来的业务数据
    // 当需要传递多个数据时，建议使用 json对象格式来包装数据
    updateMsg(state, payload) {
      console.log('payload', payload)
      state.msg = payload.foo
    },
    updateList(state, payload) {
      // payload = { type, data }
      switch (payload.type) {
        case 'add':
          state.list.push(payload.data)
          break
        case 'del':
          state.list = state.list.filter(ele=>ele.id!=payload.data.id)
          break
        case 'edit':
          state.list.map((ele,idx,arr)=>{
            if(ele.id === payload.data.id) {
              arr[idx].task = payload.data.task
            }
          })
          break
        default:
      }
    },
    updateCnodeList(state, payload) {
      // 把后端数据更新到state中
      // state发生变化，组件自动更新
      // 组件中，使用 this.$store.state.cnodeList 的方式来使用数据
      state.cnodeList = payload
    }
  },
  // actions
  // 它的作用是专门用于和后端api交互的
  // 在组件中，使用this.$store.dispatch('actions方法名', '接口入参')触发
  actions: {
    getCnodeList(store, params) {
      // 调用接口的api方法
      fetchCnodeList(params).then(res=>{
        // 调后端接口成功
        // 触发mutaions方法，把后端数据更新到state中去
        store.commit('updateCnodeList', res)
      })
    }
  },
  // modules
  // 作用是把一个大的Store拆分成多个子store
  // 好处：单一模块便于维护，多人协同开发减少代码耦合与冲突
  modules: {
    // key，就是子store的名字、命名空间
    good,
    music,
  }
})

export default store
