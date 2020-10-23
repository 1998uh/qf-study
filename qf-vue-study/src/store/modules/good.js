const goodModule = {
  // 每一个子store都手动地开启命名空间
  namespaced: true,

  state: {
    msg2: 'good msg'
  },
  getters: {},
  mutations: {
    updateMsg2(state, payload) {
      state.msg2 = payload.msg
    }
  },
  actions: {
  }
}

