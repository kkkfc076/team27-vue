//查看历史批次记录
<template>
  <el-table
    :data="tableData"
    border>
    <el-table-column
      prop="batKey"
      label="批次">
    </el-table-column>
    <el-table-column
      prop="cname"
      label="衣服">
    </el-table-column>
    <el-table-column
      prop="picture"
      label="图片">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Record',
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.getBClothes()
  },
  methods: {
    getBClothes () {
      this.$axios.get('/api/clothes/getDInfo').then(res => {
        console.info(res.data)
        this.tableData = res.data.data.records
      })
    }
  }
}
</script>

<style scoped>

</style>
