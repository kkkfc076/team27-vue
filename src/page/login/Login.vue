<template>
  <div>
    <el-row :gutter="15">
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px" label-position="top">
        <el-col :span="12" :offset="6">
          <el-form-item label="用户名" prop="id">
            <el-input v-model="formData.id" placeholder="请输入用户名" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12" :offset="6">
          <el-form-item label="密码" prop="pwd">
            <el-input v-model="formData.pwd" placeholder="请输入密码" clearable show-password
                      :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12" >
          <el-form-item label="" prop="field104">
            <el-button type="primary" icon="el-icon-search" size="medium" @click="login()"> 学生登录 </el-button>
          </el-form-item>
        </el-col>
        <el-col :span="12" >
          <el-form-item label="" prop="field105">
            <el-button type="primary" icon="el-icon-search" size="medium" @click="tlogin()"> 管理员登录 </el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<script>
import {login, tlogin} from '../../api/login'
export default {
  name: 'Login',
  data () {
    return {
      formData: {
        id: '',
        pwd: ''
      },
      rules: {
        id: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        pwd: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    login () {
      let student = {
        sid: this.formData.id,
        pwd: this.formData.pwd
      }
      login(student).then(res => {
        if (res.data) {
          localStorage.setItem('userName',this.formData.id);
          this.$router.push({name: 'Student'})
        } else {
          this.$message.error('用户名或密码错误')
        }
      })
    },
    tlogin () {
      let manager = {
        mid: this.formData.id,
        pwd: this.formData.pwd
      }
      tlogin(manager).then(res => {
        if (res.data) {
          if (res.data.permission) {
            this.$router.push({name: 'Maindata'})
            localStorage.setItem('userName',this.ruleForm.username);
          } else {
            this.$message.error('用户名或密码错误')
          }
        }
      })
    }
  }
}

</script>

<style scoped>

</style>
