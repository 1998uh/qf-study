<template>
  <div id="app">
    <div class="nav">
      <!-- <a href="/#/home">首页</a>
      <a href="/#/find">发现</a>
      <a href="/#/">TODO</a> -->

      <!-- router-link是vue-router提供的内置组件，可直接使用 -->
      <!-- 该组件的作用是，触发浏览器url的变化，它相当于我们的a标签 -->
      <!-- to指定要去到哪个路径 -->
      <!-- tag指定router-link最终被浏览器渲染成什么标签，默认是a标签 -->
      <!-- exact-active-class指定当前url匹配成功的高亮样式，并且是精准匹配 -->

      <!-- 声明式路由跳转 -->
      <!-- router-link的三种写法 -->
      <!-- <router-link to='/home' tag='span' exact-active-class='on'>首页</router-link> -->
      <!-- <router-link to='/h' tag='span' exact-active-class='on'>首页</router-link> -->
      <router-link :to='{name:"ho"}' tag='span' exact-active-class='on'>首页</router-link>
      <router-link to='/find' tag='span' exact-active-class='on'>发现</router-link>
      <router-link to='/todo' tag='span' exact-active-class='on'>TODO</router-link>
      <router-link to='/film' tag='span' active-class='on'>电影</router-link>
      <router-link to='/module' tag='span' active-class='on'>Vuex</router-link>


    </div>

    <!-- 该组件由vue-router这个库提供的 -->
    <!-- 路由容器：当url匹配成功，在这里显示当前url所对应的组件 -->

    <div class="box2">
      <!-- 命名视图，它的名字叫 abc -->
      <router-view name='abc'></router-view>
    </div>
    <router-view name='default'></router-view>


  </div>
</template>

<script>

export default {
  // name: 'App',
  data: function() {
    return {
      msg: '2006'
    }
  },
  watch: {
    // 监听器可以监听三种东西：声明式变量、计算属性、路由变化
    // this.$route 记录的是URL的信息数据
    // this.$router 是编程式路由的api函数
    $route: function(to, from) {
      console.log('to', to)
      console.log('from', from)
    }
  },
  methods: {
    test() {
      alert(this.msg)
    }
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  background: #cdcdcd;
}
.nav {
  line-height: 60px;
  height: 60px;
  background-color: white;
}
.nav span {
  padding: 0 20px;
  cursor: pointer;
}
.on {
  color: red;
}
.box1 {
  position: fixed;
  top: 100px;
  left: 0;
  width: 300px;
  height: 300px;
  border: 1px solid red;
  overflow: hidden;
}
.box2 {
  position: fixed;
  bottom: 100px;
  right: 0;
  width: 100px;
  height: 100px;
  border: 1px solid red;
  overflow: hidden;
}
</style>
