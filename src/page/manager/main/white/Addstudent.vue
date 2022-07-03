<template>
  <el-card>
    <el-upload
      class="upload-demo"
      action="/api/manager/importStu"
      :on-success="(res) => {
            return uploadSuccess(res);
         }"
      multiple>
      <el-button size="small" type="primary">点击上传学生名单</el-button>
      <div slot="tip" class="el-upload__tip">只能上传excel文件</div>
    </el-upload>
  <el-table
    :data="students"
    style="width: 955px"
    max-height="100%">
    <el-table-column
      prop="sid"
      label="学号">
    </el-table-column>
    <el-table-column
      prop="sname"
      label="学生姓名">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别">
    </el-table-column>
    <el-table-column
      prop="sclass"
      label="班级">
    </el-table-column>
    <el-table-column
    prop="grade"
    label="年级">
  </el-table-column>
    <el-table-column
      prop="major"
      label="专业">
    </el-table-column>
    <el-table-column
      prop="plevel"
      label="困难等级">
    </el-table-column>
    <el-table-column
      prop="pyear"
      label="困难认定年份">
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
import {getstuList} from '../../../../api/manList'

export default {
  name: 'Addstudent',
  inject: ['reload'],
  data () {
    return {
      students: [],
      ids: [],
      query: {
        pageNo: 1,
        pageSize: 10,
        total: 0,
        mlevel: ''
      }
    }
  },
  created () {
    this.getstu()
  },
  methods: {
    uploadSuccess (res) {
      console.log(res) // 上传接口返回结果
      this.reload()
    },
    getstu () {
      getstuList(this.query).then(res => {
        console.info(res)
        this.students = res.data.records
        this.query.total = res.data.total
      })
    },
    pageSizeChange (value) {
      this.query.pageSize = value
      this.getstu()
    },
    pageNoChange (value) {
      this.query.pageNo = value
      this.getstu()
    }
  }
}
</script>

<style scoped>

</style>
