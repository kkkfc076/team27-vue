// 选择寒衣的款式以及尺码
<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item to="{'path:/student'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item to="{'path:/student/regis'}">寒衣款式列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <el-card class="container">
      <el-table
        highlight-current-row
        @current-change="choose"
        :data="info"
        border
        style="width: 100%">
        <el-table-column
          prop="cname"
          label="款式名称">
        </el-table-column>
        <el-table-column
          prop="style"
          label="款式编号">
        </el-table-column>
        <el-table-column
        prop="picture"
        label="图片">
      </el-table-column>
        <el-table-column
        prop="batKey"
        label="批次">
      </el-table-column>
        <el-table-column
        prop="sex"
        label="性别">
      </el-table-column>
        <el-table-column
          prop="size"
          label="尺码">
        </el-table-column>
      </el-table>
    </el-card>
    <h2></h2>
    <el-row>
      <el-button type="primary" plain @click="confirm">确认选择</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: [],
      data: ''
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo() {
      this.$axios.get('/api/clothes/styles').then(res => {
        console.info(res)
        this.info = res.data.data.records
      })
    },
    choose(value) {
      console.info(value)
      this.data = value
    },
    confirm() {
      this.$axios.post('/api/applicationform/choose', this.data).then(res => {
        console.info(res)
        if (res.data.data.flag === 2) {
          this.$alert('选择寒衣成功', '选择结果', {
            confirmButtonText: '确定'
          })
        } else {
          this.$alert('选择寒衣失败', '选择结果', {
            confirmButtonText: '确定'
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
