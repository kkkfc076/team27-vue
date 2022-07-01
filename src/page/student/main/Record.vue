//查看历史批次记录
<template>
  <div>
  <el-table
    highlight-current-row
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="aid"
      label="申请编号">
    </el-table-column>
    <el-table-column
      prop="batKey"
      label="批次">
    </el-table-column>
    <el-table-column
      prop="stuKey"
      label="学号">
    </el-table-column>
    <el-table-column
      prop="cid"
      label="衣服编号">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button @click="dele(scope.row),dialogFormVisible=true" type="text" size="small">点击查看</el-button>
      </template>
    </el-table-column>
  </el-table>
    <span v-if="List===null">
       <el-dialog title="暂无详情" :visible.sync="dialogFormVisible" >
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false" >确 定</el-button>
      </div>
    </el-dialog>
    </span>
    <span v-else>
      <el-dialog title="查看详情" :visible.sync="dialogFormVisible" >
      <table width="700" border="1" align="center">
        <tr>
          <th scope="row">款式名称</th>
          <td>{{List.cname}}</td>
        </tr>
        <tr>
          <th scope="row">款式编号</th>
          <td> {{List.style}}<br></td>
        </tr>
        <tr>
          <th scope="row">尺码</th>
          <td>{{List.size}}</td>
        </tr>
        <tr>
          <th scope="row">批次</th>
          <td>{{List.batKey}}</td>
        </tr>
        <tr>
          <th scope="row">图片</th>
          <td><img :src="List.picture" width="300xp"/></td>
        </tr>
      </table>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false" >确 定</el-button>
      </div>
    </el-dialog>
    </span>

  </div>
</template>

<script>
export default {
  name: 'Record',
  data () {
    return {
      tableData: [],
      List: [],
      dialogFormVisible: false,
    }
  },
  created () {
    this.getBClothes()
  },
  methods: {
    getBClothes () {
      this.$axios.get('/api/applicationform/getDInfo').then(res => {
        console.info(res.data)
        this.tableData = res.data.data.records
      })
    },
    dele (e) {
      let cid = e.cid
      this.$axios.post('/api/clothes/getDetail', {cid}).then(res => {
        console.info(res.data.data)
        this.List=res.data.data
      })
    }
  }
}
</script>

<style scoped>

</style>
