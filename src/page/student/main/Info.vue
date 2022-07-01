// 查看个人信息界面
<template>
  <el-descriptions title="个人信息" direction="vertical" :column="4" border>
    <el-descriptions-item label="学号">{{info.sid}}</el-descriptions-item>
    <el-descriptions-item label="姓名">{{info.sname}}</el-descriptions-item>
    <el-descriptions-item label="性别" >{{info.sex}}</el-descriptions-item>
    <el-descriptions-item label="学院">{{info.major}}</el-descriptions-item>
    <el-descriptions-item label="年级"> {{info.grade}}</el-descriptions-item>
    <el-descriptions-item label="班级">{{info.sclass}}</el-descriptions-item>
    <el-descriptions-item label="贫困等级">{{info.plevel}}</el-descriptions-item>
    <el-descriptions-item label="贫困认定学年">{{info.pyear}}</el-descriptions-item>
  </el-descriptions>

</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      info: []
    }
  },

  created () {
    this.getInfo()
  },

  methods: {
    getInfo () {
      this.$axios.get('/api/student/getInfo').then(res => {
        console.info(res)
        this.info = res.data.data
      })
    }
  }
}

</script>

<style scoped>

</style>
