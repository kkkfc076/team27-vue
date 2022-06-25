<template>
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
      prop="man_key"
      label="审核人编号"
      width="100"
    >
    </el-table-column>
    <el-table-column
      prop="app_key"
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
      label="申请结果"
      width="100"
    >
    </el-table-column>
    <el-table-column
      fixed="state"
      label="审核状态"
      width="100"
    >
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {waitForList} from '../../../../api/waitforcheckList'

export default {

  name: 'apply2',
  data () {
    return {
      waits: []
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
      waitForList({}).then(res => {
        console.info(res)
        this.waits = res.data.records
      })
    }
  }
}
</script>

<style scoped>

</style>
