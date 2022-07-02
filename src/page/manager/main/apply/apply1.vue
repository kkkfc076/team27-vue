<template>
  <el-card>
    <h1>批量审核界面</h1>
    <el-form>
      <el-form-item>
        <el-button type="primary" @click="approveApp" v-if="ids.length > 0 ">通过选中申请</el-button>
        <el-button type="danger" @click="DisApproveApp" v-if="ids.length > 0 ">拒绝选中申请</el-button>
      </el-form-item>
    </el-form>
    <el-table
      @selection-change="handleSelectionChange"
      :data="waits"
      border
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
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
        label="审核等级"
        width="100"
      >
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
import {waitForList, batchApproveApp, batchDisApproveApp} from '../../../../api/waitforcheckList'

export default {

  name: 'apply1',
  data () {
    return {
      ids: [], // 审核通过或未通过的id集
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
    handleSelectionChange (selectedNo) {
      console.info(selectedNo)
      let ids = []
      for (let i = 0; i < selectedNo.length; i++) {
        ids.push(selectedNo[i].id)
      }
      this.ids = ids
      // this.ids = selectedNo.map(manager_application => manager_application.id)
    },
    aplly () {
      waitForList(this.query).then(res => {
        console.info(res)
        this.waits = res.data.records
        this.query.total = res.data.total
      })
    },
    approveApp () {
      let query = {ids: this.ids}
      this.$confirm('此操作将通过选中所有用户的申请且不可撤销, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        batchApproveApp(query).then(res => {
          if (res.status) {
            this.$message({
              message: '批量操作成功！已通过选中学生的申请',
              type: 'success'
            })
            this.apply()
          }
        })
        this.$router.go(0)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        })
      })
    },
    DisApproveApp () {
      let query = {ids: this.ids}
      this.$confirm('此操作将拒绝选中用户的申请且不可撤销, 是否继续?\n(批量审核时暂不支持填写未通过原因)', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        batchDisApproveApp(query).then(res => {
          if (res.status) {
            this.$message({
              message: '批量操作成功！已拒绝选中学生的申请',
              type: 'success'
            })
            this.apply()
          }
        })
        this.$router.go(0)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        })
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
