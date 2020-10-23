<template>
<div>
  <h1>测试Vuex分模块</h1>
  <h1>来自根store的msg：<span v-text='msg'></span></h1>
  <h1>来自good子store中的msg：<span v-text='msg2'></span></h1>
  <button @click='change'>改变msg2</button>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: function() {
    return {
      // msg: '2000'
    }
  },
  computed: {
    ...mapState(['msg']),  // this.msg
    ...mapState('good', ['msg2'])  // this.msg
  },
  methods: {
    ...mapMutations('good', ['updateMsg2']), // this.updateMsg2()
    change() {
      this.updateMsg2({msg: 'hello good msg'})
    }
  }
}
</script>

<style lang="css" scoped>
</style>
