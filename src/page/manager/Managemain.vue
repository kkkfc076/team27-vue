<template>
  <div>
    <el-container>
      <el-aside :span="3" id="76" class="el-aside" >
        <h5>主菜单</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>申请管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="1-1" @click="aplly1()">批量审核</el-menu-item>
              <el-menu-item index="1-2" @click="aplly2()">待我审核</el-menu-item>
              <el-menu-item index="1-3" @click="aplly3()">审核历史</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2" @click="batchset()">
            <i class="el-icon-document"></i>
            <span>批次设置</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>寒衣管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="3-1" @click="style1()">款式管理</el-menu-item>
              <el-menu-item index="3-2" @click="style2()">款式添加</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4" @click="personalInfo()">
            <i class="el-icon-document"></i>
            <span>个人信息</span>
          </el-menu-item>
          <el-menu-item index="5" @click="dialogFormVisible=true">
            <i class="el-icon-document"></i>
            <span>修改密码</span>
          </el-menu-item>
          <el-menu-item index="6" @click="back()">
            <i class="el-icon-document"></i>
            <span>退出登录</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="el-main">
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- 修改密码弹出框 -->
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
  </div>
</template>

<script>
export default {
  name: 'Managemain',
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
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    aplly1 () {
      this.$router.push({name: 'apply1'})
    },
    aplly2 () {
      this.$router.push({name: 'apply2'})
    },
    aplly3 () {
      this.$router.push({name: 'apply3'})
    },
    batchset () {
      this.$router.push({name: 'batchset'})
    },
    style1 () {
      this.$router.push({name: 'style1'})
    },
    style2 () {
      this.$router.push({name: 'style2'})
    },
    personalInfo () {
      this.$router.push({name: 'personalInfo'})
    },
    back () {
      this.$router.push({name: 'Login'})
    },
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
    }

  }
}
</script>

<style scoped>
.el-aside {
  height: calc(100% - 20px);
  overflow: hidden;
}
.el-main {
  padding: 0;
  height: calc(100vh - 70px);
}
</style>
