<!--这里是审核历史界面-->
<template>
  <el-card>
    <h1>已提交的审核列表</h1>
    <el-table
      :data="waits"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="id"
        label="id"
        width="50"
      >
      </el-table-column>
      <el-table-column
        prop="manKey"
        label="审核人编号"
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="appKey"
        label="申请编号"
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="reason"
        label="原因"
      >
      </el-table-column>
      <el-table-column
        prop="time"
        label="申请时间"
        width="150"
      >
      </el-table-column>
      <el-table-column
        prop="result"
        label="审核结果"
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="state"
        label="审核等级"
        width="100"
      >
<!--        <template slot-scope="scope">-->
<!--          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
<!--          <el-button type="text" size="small">编辑</el-button>-->
<!--        </template>-->
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="pageSizeChange"
      @current-change="pageNoChange"
      :current-page="query.pageNo"
      :page-sizes="[10,20,50]"
      :page-size="query.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="query.total">
    </el-pagination>
  </el-card>
</template>

<script>
import {checkedList} from '../../../../api/waitforcheckList'

export default {

  name: 'apply3',
  data () {
    return {
      waits: [],
      query: {
        pageNo: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  created () {
    this.aplly()
  },
  methods: {
    handleClick (row) {
      console.log(row)
    },
    aplly () {
      checkedList(this.query).then(res => {
        console.info(res)
        this.waits = res.data.records.state = '已提交'
        this.waits = res.data.records
        this.query.total = res.data.total
      })
    },
    pageSizeChange (value) {
      this.query.pageSize = value
      this.aplly()
      console.info(value)
    },
    pageNoChange (value) {
      this.query.pageNo = value
      this.aplly()
      console.info(value)
    }
  }
}
</script>

<style scoped>

</style>
