<template>
<div class='qf-cate-select'>
  <el-select :value='value' @change='change' :size='size' clearable>
    <el-option
      v-for="item in cates"
      :key="item.id"
      :label="item.cate_zh"
      :value="item.cate">
    </el-option>
  </el-select>
</div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: String,
      required: false,
      default: 'medium'
    }
  },
  data: function() {
    return {
      cates: []
    }
  },
  mounted() {
    this.$http.fetchAllCates({}).then(res=>{
      this.cates = res.list
    })
  },
  methods: {
    change(cate) {
      // v-model的简写出来的事件
      this.$emit('input', cate)
      // 自定义事件
      this.$emit('change', cate)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
