import { fetchMusic } from '@/utils/api'

export default {
  namespaced: true,
  state: {
    musicList: []
  },
  mutations: {
    updateMusicList(state, payload) {
      state.musicList = payload
    }
  },
  actions: {
    getMusicList(store, params) {
      fetchMusic(params).then(res=>{
        console.log('music', res.song.list)
        store.commit('updateMusicList', res.song.list)
      })
    }
  }
  
}
