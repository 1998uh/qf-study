<template>
<div>
  <h3>热映的电影列表</h3>
  <div v-for='(item,idx) in list' :key='idx' @click='skipToDetail(item)'>
    <!-- <router-link to='/detail' tag='div'> -->
      <span v-text='item.id'></span>
      <span>-</span>
      <span v-text='item.name'></span>
      <span>-</span>
      <span v-text='item.time'></span>
    <!-- </router-link> -->
  </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      list: [
        { id: 1, name: '电影A', time: '2018年'},
        { id: 2, name: '电影B', time: '2019年'},
        { id: 3, name: '电影C', time: '2020年'}
      ]
    }
  },
  methods: {
    // 声明式路由跳转和编程式路由跳转，如何灵活选择使用？
    // 比如，当做菜单时，建议使用声明式路由，因为这样更容易实现高亮样式
    // 当点击一个按钮或列表元素时跳转页面，用编程式路由，因为这可以方便做一些额外的业务运算
    skipToDetail(item) {
      // 在跳转之前，还可以做一些复杂的业务运算
      // console.log(this.$router)
      // 编程式路由跳转 使用this.$router这个内置对象来实现的
      // 路由栈（先进后出）
      this.$router.push('/detail/'+item.id+'/'+item.time)
      // this.$router.replace('/detail')
      // replace()
      // back()
    }
  }
}
</script>

<style lang="css" scoped>
</style>
