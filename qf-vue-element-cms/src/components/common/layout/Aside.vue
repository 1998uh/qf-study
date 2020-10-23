<template>
<div class="qf-aside">
  <div class="logo">
    <img :src="img.logo" alt="qf">
  </div>

  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">

    <!-- 一级菜单循环 -->
    <!-- index要求是String -->
    <el-submenu v-for='group in routes' :index='group.id+""' :key='group.id'>
      <template slot="title">
        <i :class="group.icon"></i>
        <span v-text='group.title'></span>
      </template>
      <!-- 二级菜单循环 -->
      <router-link :to='item.path' tag='div' v-for='item in group.children' :key='item.id'>
        <el-menu-item :index='item.id+""'>
          <i :class="item.icon"></i>
          <span v-text='item.title'></span>
        </el-menu-item>
      </router-link>
    </el-submenu>
  </el-menu>
</div>
</template>

<script>
import img from '@/utils/img'
import routes from '@/views/'
export default {
  data: function() {
    return {
      img,
      routes
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-aside {
  .logo {
    padding: 20px 0;
    img {
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 0 auto;
    }
  }
}
</style>
