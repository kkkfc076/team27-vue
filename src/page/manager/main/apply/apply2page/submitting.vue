<!--待我审核子页面填写审核结果并提交-->
<template>
<el-card>
  <div>申请人{{stuInfo.sname}}同学的个人信息</div>
  <el-descriptions title="" direction="vertical" :column="3" border>
    <el-descriptions-item label="申请表编号" >{{ query.id}}</el-descriptions-item>
    <el-descriptions-item label="申请批次">{{appInfo.batKey}}</el-descriptions-item>
    <el-descriptions-item label="学生学号" >{{stuInfo.sid}}</el-descriptions-item>
    <el-descriptions-item label="学生年级" >{{stuInfo.grade}}</el-descriptions-item>
    <el-descriptions-item label="学生贫困等级" >{{ stuInfo.plevel }}</el-descriptions-item>
    <el-descriptions-item label="学生班级"  >{{stuInfo.sclass}}</el-descriptions-item>
    <el-descriptions-item label="学生姓名">{{stuInfo.sname}}</el-descriptions-item>
    <el-descriptions-item label="申请理由">{{ appInfo.reason }}</el-descriptions-item>
  </el-descriptions>
  <div style="margin: 50px 0;"></div>
  <el-input
    maxlength="150"
    show-word-limit
    type="textarea"
    :rows="4"
    label="asdasdasdasd"
    placeholder="如拒绝请输入理由(非必填)"
    v-model="textarea">
  </el-input>
  <div style="margin: 50px 0;"></div>
  <el-row>
    <el-button type="primary" @click="tempSave" plain>保存审核结果暂不提交</el-button>
  </el-row>
  <div style="margin: 50px 0;"></div>
  <el-row>
    <el-button type="primary" @click="Yes">通过该申请</el-button>
    <el-button type="danger" @click="No">拒绝通过该申请</el-button>
  </el-row>
  <div style="margin: 50px 0;"></div>
  <div style="margin: 50px 0;"></div>
</el-card>
</template>

<script>
import {getApperInfo, getsAppInfo, tempsaveReson, approve, disapprove} from '../../../../../api/waitforcheckList'

export default {
  name: 'submitting',
  data () {
    return {
      stuInfo: [],
      appInfo: [],
      textarea: '',
      query: {
        id: this.$route.params.id
      }
    }
  },
  created () {
    this.stu()
    this.sApp()
  },
  methods: {
    stu () {
      getApperInfo(this.query.id, this.query).then(res => {
        // console.info(res)
        this.stuInfo = res.data
      })
    },
    sApp () {
      getsAppInfo(this.query.id, this.query).then(res => {
        // console.info(res)
        this.appInfo = res.data
        if (res.status_code === `200`) {
          console.info('dsadasd')
        }
      })
    },
    tempSave () {
      // console.info(this.textarea)
      tempsaveReson(this.textarea, this.query.id).then(res => {
        if (res.status) {
          this.$message({
            message: '已保存审核结果',
            type: 'success'
          })
        }
      })
    },
    Yes () {
      this.$confirm('您确认要通过该学生的寒衣补助补助吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        approve(this.textarea, this.query.id).then(res => {
          if (res.status) {
            this.$message({
              message: '已通过该学生的申请！',
              type: 'success'
            })
          }
        })
        this.$router.back(-1)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        })
      })
    },
    No () {
      console.info(this.textarea)
      this.$confirm('此操作将拒绝选中用户的申请且不可撤销, 是否继续?\n(批量审核时暂不支持填写未通过原因)', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        disapprove(this.textarea, this.query.id).then(res => {
          if (res.status) {
            this.$message({
              message: '已拒绝该学生的申请！\n已告知该生审批结果',
              type: 'success'
            })
          }
        })
        this.$router.back(-1)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
