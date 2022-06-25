// 查看个人信息界面
<template>
  <div>
    <el-descriptions title="个人信息" direction="vertical" :column="8" border>
      <el-descriptions-item label="学号">kooriookami</el-descriptions-item>
      <el-descriptions-item label="姓名">18100000000</el-descriptions-item>
      <el-descriptions-item label="贫困等级" :span="2">苏州市</el-descriptions-item>
      <el-descriptions-item label="贫困认定学年" :span="2">苏州市</el-descriptions-item>
      <el-descriptions-item label="学院">学校</el-descriptions-item>
      <el-descriptions-item label="年级" :span="2">苏州市</el-descriptions-item>
      <el-descriptions-item label="班级" :span="2">苏州市</el-descriptions-item>
      <el-descriptions-item label="性别" :span="2">苏州市</el-descriptions-item>
      <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
    </el-descriptions>
  </div>

</template>

<script>
export default {
  name: 'Info',
  data () {
  },
  methods: {
  }

}
</script>

<style scoped>

</style>
