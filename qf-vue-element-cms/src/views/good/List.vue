<template>
<div class="qf-good-list">
  <div class="filter">
    <el-row type='flex' align='middle'>
      <el-col :span="2">
        <div>品类筛选：</div>
      </el-col>
      <el-col :span="4">
        <CateSelect size='small' v-model='filter.cate' @change='filterChange("cate",$event)' />
      </el-col>
    </el-row>
  </div>
  <div>
    <el-table
      :data="list"
      style="width: 100%">

      <el-table-column
        label="商品名称"
        align='center'
        prop='name'
        width="120">
        <template slot-scope="scope">
          <div class="good">
            <img :src="img.imgBaseUrl+scope.row.img" alt="">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        label="商品描述"
        align='center'
        prop='desc'
        width="150">
      </el-table-column>

      <el-table-column
        label="商品价格"
        align='center'
        prop='price'
        width="80">
      </el-table-column>

      <el-table-column
        label="商品品类"
        align='center'
        prop='cate'
        width="80">
      </el-table-column>

      <el-table-column
        label="是否热销"
        align='center'
        prop='hot'
        width="100">
      </el-table-column>

      <el-table-column
        label="竞争排名"
        align='center'
        prop='rank'
        width="100">
      </el-table-column>

      <el-table-column label="操作" width='180' align='center'>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="edit(scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <!-- 分页 -->
  <div class="qf-page">
    <el-pagination
      @size-change='filterChange("size",$event)'
      @current-change='filterChange("page",$event)'
      :page-sizes="[2, 3, 4, 5, 10]"
      :page-size="2"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
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
      list: [],
      total: 0,
      // 所有查询条件，用filter包起来
      filter: {
        cate: '',
        size: 2,
        page: 1
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$http.fetchGoodList(this.filter).then(res=>{
        this.list = res.list
        this.total = res.total
      })
    },
    edit(item) {
      console.log('item', item)
    },
    remove(item) {
      console.log('item', item)
    },
    filterChange(key, e) {
      // 当表格上方的筛选条件变化时，page要重置
      if(key!=='page' && key!=='size') {
        this.filter.page = 1
      }
      console.log('e', e)
      this.filter[key] = e
      this.init()
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-good-list {
  .filter {
    font-size: 14px;
    margin-bottom: 25px;
  }

  .good {
    text-align: center;
    img {
      display: block;
      margin: 0 auto;
      width: 80px;
      height: 80px;
    }
  }
  .qf-page {
    text-align: right;
    padding: 20px;
  }
}

</style>
