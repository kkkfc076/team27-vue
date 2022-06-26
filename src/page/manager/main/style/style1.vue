<template>
  <div>
    <el-card class="crumbs-card">
    </el-card>
    <el-card class="container">
      <el-table
        highlight-current-row
        @current-change="choose"
        :data="info"
        border
        style="width: 100%">
        <el-table-column
          prop="cname"
          label="款式名称">
        </el-table-column>
        <el-table-column
          prop="style"
          label="款式编号">
        </el-table-column>
        <el-table-column
          prop="picture"
          label="图片">
        </el-table-column>
        <el-table-column
          prop="batKey"
          label="批次">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="size"
          label="尺码">
        </el-table-column>
      </el-table>
      <el-pagination
        background
        @size-change="pageSizeChange"
        @current-change="pageNoChange"
        :current-page="query.pageNo"
        :page-sizes="[10,20]"
        :page-size="query.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="query.total">
      </el-pagination>
    </el-card>
    <h2></h2>
  </div>
</template>

<script>
import {cloList} from '../../../../api/clothes'

export default {
  name: 'style1',
  data () {
    return {
      info: [],
      data: '',
      query: {
        pageNo: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      cloList(this.query).then(res => {
        console.info(res)
        this.info = res.data.records
        this.query.total = res.data.total
      })
    },
    pageSizeChange (value) {
      this.query.pageSize = value
      this.getInfo()
    },
    pageNoChange (value) {
      this.query.pageNo = value
      this.getInfo()
    }
  }
}
</script>

<style scoped>

</style>
