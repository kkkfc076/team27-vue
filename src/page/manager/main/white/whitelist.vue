<template>
  <el-card>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="按权限查询">
        <el-input v-model="query.permission" placeholder="按权限查询"></el-input>
      </el-form-item>
      <el-form-item label="管理员等级">
        <el-select v-model="query.mlevel" placeholder="管理员等级">
          <el-option label="学校" value="3"></el-option>
          <el-option label="学院" value="2"></el-option>
          <el-option label="辅导员" value="1"></el-option>
          <el-option label="全部" value=""></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="manList">查询</el-button>
        <el-button type="danger" v-if="ids.length>0" @click="setPers">授权</el-button>
      </el-form-item>
    </el-form>
    <el-upload
      class="upload-demo"
      action="/api/manager/importMan"
      :on-success="(res) => {
            return uploadSuccess(res);
         }"
      multiple>
      <el-button size="small" type="primary" >点击上传管理员名单</el-button>
      <div slot="tip" class="el-upload__tip">只能上传excel文件</div>
    </el-upload>
    <el-table
      :data="mans"
      style="width: 955px"
      max-height="100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection">
      </el-table-column>
      <el-table-column
        prop="mid"
        label="编号">
      </el-table-column>
      <el-table-column
        prop="mname"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="mlevel"
        label="等级">
      </el-table-column>
      <el-table-column
        prop="major"
        label="专业">
      </el-table-column>
      <el-table-column
        prop="grade"
        label="年级">
      </el-table-column>
      <el-table-column
        prop="permission"
        label="权限">
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
</template>

<script>
import {manList, setPermissions} from '../../../../api/manList'

export default {
  name: 'whitelist',
  inject: ['reload'],
  data () {
    return {
      ids: [],
      mans: [],
      query: {
        pageNo: 1,
        pageSize: 10,
        total: 0,
        mlevel: ''
      },
      multipleSelection: []
    }
  },
  created () {
    this.manList()
  },
  methods: {
    uploadSuccess (res) {
      console.log(res) // 上传接口返回结果
      this.reload()
    },
    manList () {
      manList(this.query).then(res => {
        console.info(res)
        this.mans = res.data.records
        this.query.total = res.data.total
      })
    },
    pageSizeChange (value) {
      this.query.pageSize = value
      this.manList()
    },
    pageNoChange (value) {
      this.query.pageNo = value
      this.manList()
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (checkedMans) {
      this.ids = checkedMans.map(man => man.id)
    },
    setPers () {
      let query = {ids: this.ids}
      setPermissions(query).then(res => {
        if (res.status) {
          this.$message({
            message: '授权成功',
            type: 'success'
          })
        }
        this.manList()
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
