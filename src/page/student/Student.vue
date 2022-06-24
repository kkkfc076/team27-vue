<template>
  <div>
  <el-col :span="3">
    <h5>主菜单</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1" @click="ap()">
          <i class="el-icon-tickets"></i>
          <span>寒衣申请</span>
      </el-menu-item>
      <el-menu-item index="2" @click="apinfo()">
          <i class="el-icon-document"></i>
          <span>申请信息</span>
      </el-menu-item>
      <el-menu-item index="3" @click="regis()">
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
      <el-menu-item index="6" @click="exit()">
        <i class="el-icon-warning-outline"></i>
        <span slot="title">退出登录</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  </div>
</template>

<script>

export default {
  name: 'Student',
  data: function () {
    return {
      index: ''
    }
  },
  methods: {
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
    }

  }
}
</script>

<style scoped>

</style>
