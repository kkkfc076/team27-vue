<template>
  <el-table
    :data="applists"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="id"
      >
    </el-table-column>
    <el-table-column
      prop="mankey"
      label="审核人编号"
      >
    </el-table-column>
    <el-table-column
      prop="appkey"
      label="申请编号"
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
      >
    </el-table-column>
    <el-table-column
      prop="result"
      label="申请结果"
      >
    </el-table-column>
    <el-table-column
      fixed="status"
      label="审核状态"
      >
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {waitForList} from '../../api/waitfor'

export default {

  name: 'Waitfor',
  data () {
    return {
      waits: []
    }
  },
  created () {
    this.appList()
  },
  methods: {
    appList () {
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
