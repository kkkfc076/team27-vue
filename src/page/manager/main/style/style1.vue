<template>
  <div>
    <el-card class="crumbs-card">
    </el-card>
    <el-card class="container">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="款式编号">
          <el-input v-model="query.style" placeholder="款式编号"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="query.sex" placeholder="性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
            <el-option label="全部" value=""></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getInfo">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table
        highlight-current-row
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
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete( scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        @size-change="pageSizeChange"
        @current-change="pageNoChange"
        :current-page="query.pageNo"
        :page-sizes="[10,20]"
        :page-size="query.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="query.total">
      </el-pagination>
      <clothes-edit ref="cloEdit"/>
    </el-card>
    <h2></h2>
  </div>
</template>

<script>
import {cloList, deleteClothes} from '../../../../api/clothes'
import ClothesEdit from '../component/dialog'
export default {
  name: 'style1',
  components: {
    ClothesEdit
  },
  data () {
    return {
      info: [],
      data: '',
      query: {
        pageNo: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      cloList(this.query).then(res => {
        console.info(res)
        this.info = res.data.records
        this.query.total = res.data.total
      })
    },
    pageSizeChange (value) {
      this.query.pageSize = value
      this.getInfo()
    },
    pageNoChange (value) {
      this.query.pageNo = value
      this.getInfo()
    },
    handleEdit (clothes) {
      this.$refs.cloEdit.show(clothes)
    },
    handleDelete (row) {
      deleteClothes(row).then(res => {
        console.info(res)
        if (res.status) {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        }
        this.getInfo()
      })
    }
  }
}
</script>

<style scoped>

</style>
