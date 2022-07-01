<template>
  <div>
  <el-container>
    <el-header style="text-align: left; font-size: 20px" class="el-header">
      <el-dropdown>
        <i class="el-icon-s-custom" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
        </el-dropdown-menu>
      </el-dropdown>
      <span>寒衣补助申请系统</span>
      <span>当前批次为：{{batch}}</span>
    </el-header>
    <el-container>
  <el-aside :span="3" class="el-aside">
    <h5>主菜单</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item :disabled="submissionFlag" index="1" @click="ap()">
          <i class="el-icon-tickets"></i>
          <span>寒衣申请</span>
      </el-menu-item>
      <el-menu-item :disabled="submissionFlag" index="2" @click="apinfo()">
          <i class="el-icon-document"></i>
          <span>申请信息</span>
      </el-menu-item>
      <el-menu-item :disabled="submissionFlag" index="3" @click="regis()">
        <i class="el-icon-tickets"></i>
        <span slot="title">寒衣登记</span>
      </el-menu-item>
      <el-menu-item index="4" @click="record()">
        <i class="el-icon-document" ></i>
        <span slot="title">查看记录</span>
      </el-menu-item>
      <el-menu-item index="5" @click="info()">
        <i class="el-icon-user"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
      <el-menu-item index="6" @click="dialogFormVisible=true">
        <i class="el-icon-user"></i>
        <span slot="title">修改密码</span>
      </el-menu-item>
      <el-menu-item index="7" @click="exit()">
        <i class="el-icon-warning-outline" style="color: #FF3333"></i>
        <span slot="title" style="color: #FF3333">退出登录</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
    <el-main class="el-main">
      <router-view>
      </router-view>
    </el-main>
    </el-container>
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
import {getBatch} from '../../api/api'

export default {
  name: 'Student',
  data: function () {
    return {
      submissionFlag: false,
      batch: '',
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
  created () {
    this.getBatch()
  },
  methods: {
    getBatch: function () {
      getBatch().then(res => {
        console.info(res)
        if (res.data.flag > 0) {
          console.info(res.data.flag)
          this.batch = res.data.flag
        } else {
          this.submissionFlag = true
          this.batch = '当前不属于申请时间'
        }
      })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    ap () {
      this.$router.push({name: 'Ap'})
    },
    regis () {
      this.$router.push({name: 'Regis'})
    },
    info () {
      this.$router.push({name: 'Info'})
    },
    record () {
      this.$router.push({name: 'Record'})
    },
    apinfo () {
      this.$router.push({name: 'ApInfo'})
    },
    exit () {
      this.$router.push({name: 'Login'})
    },
    onSubmit () {
      if (this.form.checkPassword === this.form.newPassword) {
        var newPassword = this.form.newPassword
        var oldPassword = this.form.oldpassword
        this.$axios.post('/api/student/modifyPwd', {oldPassword, newPassword}).then(res => {
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
<style>
.el-header {
  background-color: #80b2e5;
  color: #333;
  line-height: 60px;
}
.el-main {
  padding: 0;
  height: calc(100vh - 70px);
  width: auto;
}
  .el-aside {
    height: calc(100vh - 70px);
    overflow: hidden;
  }

</style>
