<template xmlns:h1="http://www.w3.org/1999/html">
<el-card>
  <div style="margin: 20px 0;"></div>
  <el-row :gutter="1" align="left">
    <el-col :span="4"><div class="grid-content bg-purple">
  <el-select v-model="value1" multiple placeholder="请选择批次" >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>

  </el-select>
    </div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple">
  <el-select
    v-model="value2"
    multiple
    collapse-tags
    style="margin-left: 20px;"
    placeholder="请选择学院">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    </div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple">
    <el-button type="primary"@click="searchData">查询</el-button>
    </div></el-col>
    <el-col :span="1"><div class="grid-content bg-purple">
    <el-button type="primary" @click="exportExcel">导出数据</el-button>
    </div></el-col>
  </el-row>
  <h1 align="left" style="font-size: medium">申请统计</h1>
  <el-card body-style="padding: 15px">
  <el-row :gutter="0">
    <el-col :span="6">
      <span style="color: #8c939d " >申请人数(人)</span>
      <el-card shadow="hover">
        总是显示
      </el-card>
    </el-col>
    <el-col :span="6">
      <span style="color: #8c939d">已通过审核(人)</span>
      <el-card shadow="hover">
        鼠标悬浮时显示
      </el-card>
    </el-col>
    <el-col :span="6">
      <span style="color: #8c939d">未通过审核(人)</span>
      <el-card shadow="hover">
        从不显示
      </el-card>
    </el-col>
    <el-col :span="6">
      <span style="color: #8c939d">审核中(人)</span>
      <el-card shadow="hover">
        从不显示
      </el-card>
    </el-col>
  </el-row>
  </el-card>
  <h1 align="left" style="font-size: medium">款式数量统计</h1>
  <el-card body-style="padding: 15px">
    <el-row :gutter="0">
      <el-col :span="6">
        <span style="color: #8c939d " >总款式(件)</span>
        <el-card shadow="hover">
          总是显示
        </el-card>
      </el-col>
      <el-col :span="6">
        <span style="color: #8c939d">男款(件)</span>
        <el-card shadow="hover">
          鼠标悬浮时显示
        </el-card>
      </el-col>
      <el-col :span="6">
        <span style="color: #8c939d">女款(件)</span>
        <el-card shadow="hover">
          从不显示
        </el-card>
      </el-col>
      <el-col :span="6">
        <span style="color: #8c939d">男女皆宜款(件)</span>
        <el-card shadow="hover">
          从不显示
        </el-card>
      </el-col>
    </el-row>
  </el-card>
  <div>
    <el-table
      :data="tableData"
      :span-method="arraySpanMethod"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="amount1"
        sortable
        label="数值 1">
      </el-table-column>
      <el-table-column
        prop="amount2"
        sortable
        label="数值 2">
      </el-table-column>
      <el-table-column
        prop="amount3"
        sortable
        label="数值 3">
      </el-table-column>
    </el-table>
  </div>
</el-card>
</template>

<script>
export default {
  name: 'Maindata'
}
</script>

<style scoped>

</style>
