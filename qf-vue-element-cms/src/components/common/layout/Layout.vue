<template>
<div class="qf-layout">

  <el-container>

    <el-aside width="145px">
      <Aside />
    </el-aside>

    <el-container>
      <el-header height='60px'>
        <Header />
      </el-header>
      <el-main>
        <Main />
      </el-main>
    </el-container>

  </el-container>
</div>
</template>

<script>
export default {
  components: {
    Aside: ()=>import('./Aside.vue'),
    Header: ()=>import('./Header.vue'),
    Main: ()=>import('./Main.vue')
  }
}
</script>

<style lang="scss" scoped>
.qf-aside {
  background-color: #545c64;
  height: 100%;
  color: #ddd;
}
.qf-header {
  background-color: white;
  line-height: 60px;
  padding-left: 20px;
}
.qf-main {
  background-color: white;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  overflow: auto;
  min-width: 900px;
}
.el-container {
  height: 100%;
}
.qf-layout {
  height: 100%;
}
.el-aside {
  height: 100%;
  padding: 0;
}
.el-header {
  padding: 0;
}
</style>
