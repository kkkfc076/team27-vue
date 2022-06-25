// 学生资格申请页面
<template>
  <el-form ref="form" :model="form" label-width="800px">
    <h1>填写申请表页面</h1>
    <el-form-item label="姓名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="姓别">
      <el-input v-model="form.sex"></el-input>
    </el-form-item>
      <el-form-item label="学号">
        <el-input v-model="form.num"></el-input>
      </el-form-item>
    <el-form-item label="困难等级">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="1" name="type"></el-checkbox>
        <el-checkbox label="1" name="type"></el-checkbox>
        <el-checkbox label="1" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="申请理由">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交申请</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Ap',
  data () {
    return {
      form: {
        name: '',
        sex: '',
        num: '',
        type: [],
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>

</style>
