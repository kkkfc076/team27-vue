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
      <div style="margin: 10px 0;" >审核信息</div>
      <el-descriptions title="" direction="vertical" :column="3" border>
        <el-descriptions-item label="审核人姓名" >{{ manInfo.mname}}</el-descriptions-item>
        <el-descriptions-item label="审核人账号">{{manInfo.mankey}}</el-descriptions-item>
        <el-descriptions-item label="审核结果" >{{manInfo.result}}</el-descriptions-item>
        <el-descriptions-item label="审核人负责年级" >{{manInfo.grade}}</el-descriptions-item>
        <el-descriptions-item label="审核通过时间" >{{ manInfo.time }}</el-descriptions-item>
        <el-descriptions-item label="审核等级"  >{{manInfo.mlevel}}</el-descriptions-item>
<!--        <el-descriptions-item label="学生姓名">{{stuInfo.sname}}</el-descriptions-item>-->
        <el-descriptions-item label="审核未通过原因(如通过则忽略)">{{ manInfo.reason }}</el-descriptions-item>
      </el-descriptions>
      <div style="margin: 30px 0;" ></div>
      <el-col >
        <el-button type="primary" @click="return1" size="medium">返回</el-button>
        <div style="margin: 30px 0;" ></div>
        </el-col>
<!--      <div style="margin: 20px 0;"></div>-->
      </el-card>
</template>

<script>
import {getsAppInfo, getApperInfo, getCheckedInfo} from '../../../../../api/waitforcheckList'

export default {
  data () {
    return {
      stuInfo: [],
      appInfo: [],
      manInfo: [],
      query: {
        id: this.$route.params.id
      }
    }
  },
  name: 'detailedInfo',
  created () {
    this.stu()
    this.sApp()
    this.minfo()
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
    minfo () {
      getCheckedInfo(this.query.id, this.query).then(res => {
        this.manInfo = res.data
        if (res.status_code === '200') {
          console.info('Yes')
        }
      })
    },
    return1(){
      this.$router.back();
    }
  }
}
</script>

<style scoped>

</style>
