<template>
  <div class="app">
    <!-- Login页面和Layout布局，不可能同时显示出来 -->
    <router-view v-if='$route.path==="/login"'></router-view>
    <Layout v-else />
  </div>
</template>

<script>
import { Layout } from '@/components/'
export default {
  name: 'App',
  components: {
    Layout
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(247, 248, 250, 1);
}
.app {
  height: 100%;
}
</style>
