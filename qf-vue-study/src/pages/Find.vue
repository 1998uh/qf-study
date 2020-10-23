<template>
<div>
  <h1>我是Find页面</h1>
  <h1 v-text='msg'></h1>
  <div
    v-for='item in musicList'
    :key='item.id'
    v-text='item.title'
  >
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: function() {
    return {
      list: []
    }
  },
  computed: {
    ...mapState(['msg', 'cnodeList']),
    ...mapState('music', ['musicList'])
  },
  mounted() {

    let str = 'ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=56086135428440974&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%91%A8%E6%9D%B0%E4%BC%A6&g_tk_new_20200303=94941173&g_tk=94941173&loginUin=448914712&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'

    this.getMusicList(this.initParams(str))
  },
  methods: {
    ...mapActions(['getCnodeList']),
    ...mapActions('music', ['getMusicList']),
    initParams(str) {
      const params = {}
      str.split('&').map(ele=>{
        const arr = ele.split('=')
        params[arr[0]] = arr[1]
      })
      params.w = decodeURI(params.w)
      return params
    }
  }
}
</script>

<style lang="css" scoped>
</style>
