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
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: []
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.$axios.get('/api/clothes/styles').then(res => {
        console.info(res)
        this.info = res.data.data.records
      })
    }
  }
}
</script>

<style scoped>

</style>
