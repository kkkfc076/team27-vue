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
      </el-table>
      <!-- 底部换页 -->
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
    </el-card>

    <el-button type="primary" @click="getSize">查看尺码</el-button>
    <!-- 尺码表弹窗-->
    <el-dialog title="尺码推荐表" :visible.sync="dialogTableVisible">
      <el-table
       :data="size"
        highlight-current-row
        @current-change="select" >
        <el-table-column property="size" label="推荐尺码" width="150">
        </el-table-column>
      </el-table>
      <el-button type="primary" plain @click="confirm">确认</el-button>
      <el-button type="primary" plain @click="dialogTableVisible=false">取消</el-button>
    </el-dialog>

  </div>
</template>
<script>
import {getStyle, getSize} from '../../../api/clothes'

export default {
  data () {
    return {
      info: [],
      data1: '',
      data2: '',
      query: {
        pageNo: 1,
        pageSize: 5,
        total: 0
      },
      dialogTableVisible: false,
      size: []
    }
  },
  created () {
    this.getStyle()
  },
  methods: {

    getStyle () {
      getStyle(this.query).then(res => {
        console.info(res)
        this.info = res.data.records
        this.query.total = res.data.total
      })
    },
    // 选中某一款式
    choose (value) {
      console.info(value)
      this.data1 = value
    },
    // 选中某一尺寸
    select (value) {
      console.info(value)
      this.data2 = value
    },
    // 向后台提交选择数据,接收返回结果
    confirm () {
      this.$axios.post('/api/applicationform/choose', this.data2).then(res => {
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
      this.dialogTableVisible = false
    },
    // 从后端得到所选款式的所有尺寸,并显示弹窗
    getSize () {
      getSize(this.data1).then(res => {
        console.info(res)
        this.size = res.data.records
      })
      this.dialogTableVisible = true
    },
    pageSizeChange (value) {
      this.query.pageSize = value
      this.getStyle()
    },
    pageNoChange (value) {
      this.query.pageNo = value
      this.getStyle()
    }
  }
}
</script>

<style scoped>

</style>
