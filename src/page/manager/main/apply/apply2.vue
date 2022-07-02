<!--这是待我审核界面-->
<template>
  <el-card>
    <h1>本学院待审核学生申请</h1>
  <el-table
    :data="waits"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="id"
      label="表单号"
      width="60"
    >
    </el-table-column>
    <el-table-column
      prop="manKey"
      label="审核人账号"
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
      label="未通过原因(通过请忽略)"
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
      label="提交状态"
      width="100"
    >
    </el-table-column>
    <el-table-column
      prop="state"
      label="审核状态"
      width="100"
    >
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row.id)" type="text" size="small">进行审核</el-button>
<!--        <el-button type="text" size="small">编辑</el-button>-->
      </template>
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
import {waitForList} from '../../../../api/waitforcheckList'

export default {

  name: 'apply2',
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
    handleClick (id) {
      // console.info(id)
      this.$router.push({name: 'submitting', params: {id: id}})
    }, // console.log(row)
    aplly () {
      waitForList(this.query).then(res => {
        console.info(res)
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
