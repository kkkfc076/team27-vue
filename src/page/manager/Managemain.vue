<template>
  <div>
    <el-container>
      <el-aside :span="3" id="76">
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
              <el-menu-item index="1-1" @click="aplly1()">申请总览</el-menu-item>
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
          <el-menu-item index="5" @click="modifyPwd()">
            <i class="el-icon-document"></i>
            <span>修改密码</span>
          </el-menu-item>
          <el-menu-item index="6" @click="back()">
            <i class="el-icon-document"></i>
            <span>退出登录</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Managemain',
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
    modifyPwd () {

    },
    back () {
      this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style scoped>
.el-aside {
  height: calc(100vh - 70px);
}
.el-main {
  padding: 0;
  height: calc(100vh - 70px);
}
</style>
