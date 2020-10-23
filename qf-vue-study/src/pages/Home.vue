<template>
<div>
  <h1>Home页面</h1>
  <h1 v-text='msg'></h1>
  <input type="text" v-model='foo' />
  <button @click='clickHandle'>修改msg</button>
  <hr>
  <br>
  <br>
  <br>
  <br>

  <div>
    <input type="text" v-model.trim='task' @keyup.enter='update("add")'>
    <span>
      总共有<span v-text='length'></span>条任务
    </span>
  </div>
  <div v-for='item in list' :key='item.id'>
    <span v-text='item.id'></span>
    <span>-</span>
    <input type="text" v-model.trim='item.task' @keyup.enter='update("edit", item)'>
    <span>-</span>
    <span @click='update("del", item)'>删除</span>
  </div>
</div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Home',
  data: function() {
    return {
      foo: '',
      task: ''
    }
  },
  computed: {
    ...mapState(['msg', 'list']),
    ...mapGetters(['length']),
    foo2: function() {
      return this.foo + 'hello'
    }
  },
  mounted() {
    console.log('store', this.$store)
    let msg = this.$store.state.msg
    console.log('msg', msg)
  },
  methods: {
    ...mapMutations(['updateMsg','updateList']),
    ...mapActions([]),
    clickHandle() {
      // 第一种修改state的方式，直接修改
      // this.$store.state.msg = this.foo
      // 第二种，使用mutations方法来修改state
      // this.$store.commit('updateMsg', {
      //   foo: this.foo,
      //   arg1: '123',
      //   arg2: '345',
      //   arg3: [1,2,3,4],
      //   arg4: true
      // })
      // 第三种写法，是工作推荐的写法
      this.updateMsg({
        foo: this.foo,
        arg1: '123',
        arg2: '345',
        arg3: [1,2,3,4],
        arg4: true
      })
    },

    update(type, item) {
      let payload = {type}
      switch (type) {
        case 'add':
          payload.data = {id: Date.now(), task: this.task}
          this.task = ''
          break
        case 'del':
          payload.data = {id: item.id}

          break
        case 'edit':
          payload.data = item
          break
        default:
      }
      // this.$store.commit('updateList', payload)
      this.updateList(payload)
    }
  }
}
</script>

<style scoped>
</style>
