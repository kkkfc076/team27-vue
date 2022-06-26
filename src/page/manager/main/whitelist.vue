<template>
  <el-table
    :data="mans"
    style="width: 100%"
    max-height="100%">
    <el-table-column
      prop="mid"
      label="编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="mname"
      label="姓名"
      width="150">
    </el-table-column>
    <el-table-column
      prop="mlevel"
      label="等级"
      width="150">
    </el-table-column>
    <el-table-column
      prop="major"
      label="专业"
      width="150">
    </el-table-column>
    <el-table-column
      prop="grade"
      label="年级"
      width="150">
    </el-table-column>
    <el-table-column
      type="boolean"
      prop="permission"
      label="权限"
      width="150">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="160">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="addPermission(scope.$index, tableData)"
          type="text"
          size="small">
          授权
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {manList} from '../../../api/manList'

export default {
  name: 'whitelist',
  data () {
    return {
      mans: []
    }
  },
  created () {
    this.manList()
  },
  methods: {
    manList () {
      manList({}).then(res => {
        console.info(res)
        this.mans = res.data.records
      })
    }
  }

}
</script>

<style scoped>
.el-main {
  padding: 0;
  height: calc(100vh - 70px);
  margin-left: 300px;
  margin-right: 300px;
}
</style>
