<template>
  <el-card>
  <h1 align="left" style="font-size: medium">申请统计</h1>
  <el-card body-style="padding: 15px">
    <el-row :gutter="0">
      <el-col :span="6">
        <span style="color: #8c939d " >申请人数(人)</span>
        <el-card shadow="hover">
          {{this.applys.total}}
        </el-card>
      </el-col>
      <el-col :span="6">
        <span style="color: #8c939d">已通过审核(人)</span>
        <el-card shadow="hover">
          {{this.applys.pass}}
        </el-card>
      </el-col>
      <el-col :span="6">
        <span style="color: #8c939d">未通过审核(人)</span>
        <el-card shadow="hover">
          {{this.applys.unpass}}
        </el-card>
      </el-col>
      <el-col :span="6">
        <span style="color: #8c939d">审核中(人)</span>
        <el-card shadow="hover">
          {{this.applys.unCheck}}
        </el-card>
      </el-col>
    </el-row>
  </el-card>
  <h1 align="left" style="font-size: medium">款式数量统计</h1>
  <el-card body-style="padding: 15px">
    <el-row :gutter="0">
      <el-col :span="8">
        <span style="color: #8c939d " >总款式(件)</span>
        <el-card shadow="hover">
          {{ this.styles.total }}
        </el-card>
      </el-col>
      <el-col :span="8">
        <span style="color: #8c939d">男款(件)</span>
        <el-card shadow="hover">
          {{ this.styles.man }}
        </el-card>
      </el-col>
      <el-col :span="8">
        <span style="color: #8c939d">女款(件)</span>
        <el-card shadow="hover">
          {{ this.styles.woman }}
        </el-card>
      </el-col>
    </el-row>
  </el-card>
  <div style="margin: 20px 0;"></div>
  <div>
    <h1>本批次已选择寒衣</h1>
    <el-table
      :data="info"
      :span-method="arraySpanMethod"
      border
      style="width: 100%">
      <el-table-column
        prop="style"
        label="款式"
        width="180">
      </el-table-column>
      <el-table-column
        prop="cname"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="size"
        label="尺码">
      </el-table-column>
      <el-table-column
        prop="num"
        label="数量">
      </el-table-column>
    </el-table>
  </div>
  </el-card>
</template>

<script>
import {getSelectedData, getSelectedClo} from '../../../api/api'
export default {

  name: 'collegeData',
  data () {
    return {
      meragePos: 0,
      applys: [],
      styles: [],
      info: [],
      query: {
        batch: this.$route.params.batch,
        college: this.$route.params.college
      }

    }
  },
  created () {
    this.getSumData()
    this.getCloData()
  },
  methods: {
    getSumData () {
      getSelectedData(this.query.college, this.query.batch).then(res => {
        console.info(res)
        this.applys = res.data
      })
    },
    getCloData () {
      getSelectedClo(this.query.batch).then(res => {
        console.info(res)
        this.styles = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
