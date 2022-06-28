<!--待我审核子页面填写审核结果并提交-->
<template>
<el-card>
<h1>审核页面</h1>
  <el-descriptions title="" direction="vertical" :column="4" border>
    <el-descriptions-item label="申请表编号" >kooriookami</el-descriptions-item>
    <el-descriptions-item label="申请批次">18100000000</el-descriptions-item>
    <el-descriptions-item label="学生学号" >苏州市</el-descriptions-item>
    <el-descriptions-item label="学生贫困等级" :span="2">苏州市</el-descriptions-item>
    <el-descriptions-item label="学生姓名">
<!--      <el-tag size="small">学校</el-tag>-->
    </el-descriptions-item>
    <el-descriptions-item label="申请理由">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
  </el-descriptions>
  <div style="margin: 80px 0;"></div>
  <el-input
    maxlength="150"
    show-word-limit
    type="textarea"
    :rows="4"
    label="asdasdasdasd"
    placeholder="拒绝请输入理由"
    v-model="textarea">
  </el-input>
  <div style="margin: 50px 0;"></div>
  <el-row>
    <el-button type="primary" @click="Yes">通过申请</el-button>
    <el-button type="danger" @click="No">拒绝申请</el-button>
  </el-row>
  <div style="margin: 50px 0;"></div>
  <el-row>
    <el-button type="primary" @click="tempSave" plain>保存审核结果暂不提交</el-button>
  </el-row>
  <div style="margin: 50px 0;"></div>
</el-card>
</template>

<script>
export default {
  name: 'submitting',
  data () {
    return {
      textarea: ''
    }
  }
}
</script>

<style scoped>

</style>
