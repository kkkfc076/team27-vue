// 选择寒衣的款式以及尺码
<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item to="{'path:/student'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item to="{'path:/student/regis'}">寒衣款式列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
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
    <el-row>
      <el-button type="primary" plain @click="confirm">确认选择</el-button>
    </el-row>
  </div>
</template>

<script>
import {getInfo} from '../../../api/clothes'

export default {
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
      getInfo(this.query).then(res => {
        console.info(res)
        this.info = res.data.records
        this.query.total = res.data.total
      })
    },
    choose (value) {
      console.info(value)
      this.data = value
    },
    confirm () {
      this.$axios.post('/api/applicationform/choose', this.data).then(res => {
        console.info(res)
        if (res.data.data.flag === 2) {
          this.$alert('选择寒衣成功', '选择结果', {
            confirmButtonText: '确定'
          })
        } else {
          this.$alert('选择寒衣失败', '选择结果', {
            confirmButtonText: '确定'
          })
        }
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
