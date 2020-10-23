<template>
<div class="qf-good-add">
  <div>商品新增</div>
  <div class="form">
    <el-form :model="info" :rules='rules' ref="info" label-width="100px">

      <el-form-item label="商品名称" prop="name" required>
        <el-input v-model="info.name"></el-input>
      </el-form-item>

      <el-form-item label="商品描述" prop="desc" required>
        <el-input
          type="textarea"
          :rows="3"
          v-model="info.desc">
        </el-input>
      </el-form-item>

      <el-form-item label="商品价格" prop="price" required>
        <el-input v-model.number="info.price"></el-input>
      </el-form-item>

      <el-form-item label="选择品类" prop="cate" required>
        <CateSelect v-model='info.cate' />
      </el-form-item>

      <el-form-item label="选择图片">
        <!-- action是上传图片的服务器接口 -->
        <!-- name属性，用于指定后端接收数据时的key名 -->

        <el-upload
          :action="img.upload"
          list-type="picture"
          name='file'
          :on-success='upload'
          :limit='1'
          :multiple='false'
          >
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="是否热销">
        <el-switch v-model="info.hot"></el-switch>
      </el-form-item>

      <el-form-item label="竞价排名">
        <el-input-number v-model="info.rank" :min="0" :max="100000"></el-input-number>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit">立即添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
import { CateSelect } from '@/components/'
import img from '@/utils/img'
export default {
  components: {
    CateSelect
  },
  data: function() {
    return {
      img,
      info: {
        name: '',
        desc: '',
        price: '',
        hot: false,
        cate: '',
        img: '',
        rank: 0
      },
      rules: {
        name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          { min: 4, max: 8, message: '长度在 4 到 8 个字符', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请输入商品描述', trigger: 'blur' },
          { min: 20, max: 30, message: '长度在 20 到 30 个字符', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请输入商品价格', trigger: 'blur' }
        ],
        cate: [
          { required: true, message: '请输选择商品品类', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    upload(e) {
      console.log('图片上传', e.data.url)
      this.info.img = e.data.url
    },
    submit() {
      console.log('入参', this.info)
      this.$http.fetchGoodUpdate(this.info).then(()=>{
        this.$message({
          message: '恭喜你，添加成功',
          type: 'success'
        })
        this.timer = setTimeout(()=>{
          this.$router.replace('/good/list')
        }, 1500)
      })
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  }
}
</script>

<style lang="scss" scoped>
.qf-good-add {
  .form {
    width: 65%;
    margin: 25px auto;
  }
}
</style>
