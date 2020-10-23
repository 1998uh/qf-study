<template>
<div class="qf-login">
  <div class="qf-login-box">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="用户名" prop='username'>
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密 码" prop='password'>
        <el-input v-model="form.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin">立即登录</el-button>
      </el-form-item>
    </el-form>
  </div>

</div>
</template>

<script>
export default {
  data: function() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'change' },
            { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'change' }
          ],
          password: [
            { required: true, message: '请入密码', trigger: 'change' }
          ]
        }
    }
  },
  methods: {
    onLogin() {
      console.log('form', this.form)
      this.$http.fetchLogin(this.form).then(res=>{
        console.log('res', res)
        // 登录成功后，把token存储在localStorage中
        localStorage.setItem('token', res.token)
        // 进入系统
        this.$router.replace('/')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-login {
  background-color: #545c64;
  height: 100%;
  .qf-login-box {
    color: black;
    background: white;
    width: 500px;
    height: 210px;
    border-radius: 5px;
    padding: 25px;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -250px;
    margin-top: -105px;
  }
}
</style>
