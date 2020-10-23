<template>
<div class="qf-ad">
  <div>
    <span>广告管理页面</span>
    <el-button type="primary" size='mini' @click='addHandle'>新增广告</el-button>
  </div>

  <div>
    <el-table
      :data="list"
      style="width: 100%">

      <el-table-column
        label="广告名称"
        prop='title'
        width="100">
      </el-table-column>

      <el-table-column
        label="广告图片"
        width="280">
        <template slot-scope="scope">
          <img :src="img.imgBaseUrl+scope.row.img" alt="">
        </template>
      </el-table-column>

      <el-table-column
        label="广告描述"
        prop='desc'
        width="180">
      </el-table-column>
    </el-table>
  </div>

  <!-- 表单弹框 -->
  <el-dialog title="新增广告" :visible.sync="show">
    <el-form :model="form">
      <el-form-item label="广告名称">
        <el-input v-model="form.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="广告描述">
        <el-input type="textarea" :row='2' v-model="form.desc" autocomplete="off"></el-input>
      </el-form-item>
      <!-- 图片上传 -->
      <el-form-item label="广告描述">
        <el-upload
          :action="img.upload"
          name='file'
          :on-success='imgSuccess'
          list-type="picture">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="show = false">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
import img from '@/utils/img'
export default {
  data: function() {
    return {
      img,
      list: [],
      show: false,  // 控制弹框的显示与隐藏
      form: {
        title: '',
        desc: '',
        img: ''
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$http.fetchAdList({}).then(res=>{
        this.list = res.list
      })
    },
    addHandle() {
      this.show = true
    },
    imgSuccess(e) {
      console.log('上传', e)
      this.form.img = e.data.url
    },
    submit() {
      console.log('form', this.form)
      this.$http.fetchAdAdd(this.form).then(()=>{
        this.$message({
          message: '添加广告成功',
          type: 'success'
        })
        this.show = false
        this.form = {title: '', desc: '', img: ''}
        this.init()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
