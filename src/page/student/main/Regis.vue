<template>
  <div>
    <el-card class="container">
      <el-table
        :data="info"
        highlight-current-row
        @current-change="choose">
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
          <template slot-scope="scope">
            <img width=100px height="100px" :src="scope.row.picture" alt="">
          </template>
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
        :page-sizes="[5,10]"
        :page-size="query.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="query.total">
      </el-pagination>
      <clothes-edit ref="cloEdit"/>
    </el-card>
    <el-button type="primary" plain @click="confirm">确认</el-button>
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
        pageSize: 5,
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
          this.$alert('选择寒衣失败,请查看是否有权限', '选择结果', {
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
