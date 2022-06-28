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
              <el-menu-item :disabled="submissionFlag" index="1-1" @click="aplly1()">批量审核</el-menu-item>
              <el-menu-item :disabled="submissionFlag" index="1-2" @click="aplly2()">待我审核</el-menu-item>
              <el-menu-item :disabled="submissionFlag" index="1-3" @click="aplly3()">审核历史</el-menu-item>
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
            <el-menu-item-group >
              <template slot="title"></template>
              <el-menu-item index="3-1" @click="style1()">款式管理</el-menu-item>
              <el-menu-item :disabled="submissionFlag" index="3-2" @click="style2()">款式添加</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>白名单设置</span>
            </template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="4-1" @click="whitelist()">管理员授权</el-menu-item>
              <el-menu-item index="4-2" @click="addstudent()">学生导入</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
<!--          <el-menu-item index="4" @click="whitelist()">-->
<!--            <i class="el-icon-document"></i>-->
<!--            <span>白名单设置</span>-->
<!--          </el-menu-item>-->
          <el-menu-item index="5" @click="handleEdit()">
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
        <tr>
          <th scope="row">当前批次为：</th>
          <td>{{batch}}</td>
        </tr>
        <router-view></router-view>
      </el-main>
    </el-container>
    <update-pwd ref="updateP"/>
  </div>
</template>

<script>
import UpdatePwd from '../manager/main/component/updatePwd'
import {getBatch} from '../../api/api'
export default {
  name: 'Managemain',
  data: function () {
    return {
      submissionFlag: false,
      batch: ''
    }
  },
  components: {UpdatePwd},
  created () {
    this.getBatch()
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
    whitelist () {
      this.$router.push({name: 'whitelist'})
    },
    addstudent () {
      this.$router.push({name: 'Addstudent'})
    },
    back () {
      this.$router.push({name: 'Login'})
    },
    handleEdit () {
      this.$refs.updateP.show()
    },
    getBatch: function () {
      getBatch().then(res => {
        console.info(res)
        if (res.data.flag > 0) {
          console.info(res.data.flag)
          this.batch = res.data.flag
        } else {
          this.submissionFlag=true;
          this.batch = '当前不在任何批次，您可以新建批次！'
        }
      })
    }
  }
}
</script>

<style scoped>
/*.el-header {*/
/*  background-color: #80b2e5;*/
/*  color: #333;*/
/*  line-height: 60px;*/
/*}*/
.el-aside {
  height: calc(100% - 20px);
  overflow: hidden;
}
.el-main {
  padding: 0;
  height: calc(100vh - 70px);
  width: auto;
}
</style>
