<template>
<div>
  <h1>电影详情页</h1>

  <!-- 用this.$route来接收动态路由参数 -->
  <h1 v-text='$route.params.id'></h1>
  <h1 v-text='$route.params.time'></h1>
  <hr>

  <!-- 使用props选项来接收动态路由参数 -->
  <h1 v-text='id'></h1>
  <h1 v-text='time'></h1>
  <hr>

  <h1>测试sass语法</h1>
  <div class="box">
    <h3>hello sass</h3>
  </div>

</div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    time: { type: String, required: false, default: '' }
  },
  mounted() {
    console.log('---------------', this.id, this.time)
    console.log('route', this.$route)
    var id = this.$route.params.id
    // 当收到电影id时
    // 根据这个id调接口，获取当前电影的完整详细，进一步渲染详细页面
    console.log('id', id)
  }
}
</script>

<!-- css预处理器  前置处理器  后置处理器 -->
<style lang="scss" scoped>

// 导入全局的sass变量
@import '@/assets/css/common.scss';

.box {
  font-size: $size;
  &>h3 {
    color: $color;
  }
}
</style>
