<template>
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
      this.$router.push({path: '/student/ap'})
    },
    apinfo () {
      this.$router.push({path: '/student/apinfo'})
    },
    regis () {
      this.$router.push({path: '/student/regis'})
    },
    record () {
      this.$router.push({path: '/student/record'})
    },
    info () {
      this.$router.push({path: '/student/info'})
    },
    exit () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>

</style>
