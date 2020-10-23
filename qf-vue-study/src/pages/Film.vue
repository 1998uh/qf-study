<template>
<div>
  <div class="tab">
    <router-link to='/film/hot' tag='span' exact-active-class='on'>正在热映</router-link>
    <router-link to='/film/future' tag='span' exact-active-class='on'>即将上线</router-link>
  </div>
  <div class="content">
    <router-view name='f'></router-view>
    <router-view name='g'></router-view>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.tab {
  height: 80px;
  width: 100%;
  display: flex;
}
.tab span {
  flex: 1;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 80px;
  cursor: pointer;
}
.tab span.on {
  color: red;
}
.content {
  text-align: center;
  padding-top: 100px;
}
</style>
