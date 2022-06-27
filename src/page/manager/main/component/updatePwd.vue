<template>
      <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
        <el-form :model="form" ref="pwdForm" :rules="rules">
          <el-form-item label="原密码" prop="password">
            <el-input v-model="form.oldpassword" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="新密码" prop="newPassword">
            <el-input v-model="form.newPassword" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="确认密码" prop="checkPassword">
            <el-input v-model="form.checkPassword" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="onSubmit()">确 定</el-button>
        </div>
      </el-dialog>
</template>

<script>
export default {
  name: 'updatePwd',
  data: function () {
    return {
      rules: {
        oldpassword: [
          {required: true, message: '请输入原密码', trigger: 'blur'}
        ],
        newPassword: [
          {required: true, message: '请输入新密码', trigger: 'blur'}
        ],
        checkPassword: [
          {required: true, message: '不能为空', trigger: 'blur'}
        ]
      },
      dialogFormVisible: false,
      form: {
        oldpassword: '',
        newPassword: '',
        checkPassword: ''
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.form.checkPassword === this.form.newPassword) {
        var newPassword = this.form.newPassword
        var oldPassword = this.form.oldpassword
        this.$axios.post('/api/manager/modifyPwd', {oldPassword, newPassword}).then(res => {
          console.assert(res.data.data.flag)
          if (res.data.data.flag === 2) {
            this.dialogFormVisible = false
            alert('密码修改成功')
          } else {
            alert('密码错误,修改失败')
          }
        })
      } else {
        this.dialogFormVisible = false
        alert('新密码不一致,修改失败')
      }
    },
    show () {
      this.dialogFormVisible = true
    }
  }
}
</script>

<style scoped>

</style>
