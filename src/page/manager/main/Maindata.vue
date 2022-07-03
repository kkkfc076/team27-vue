<template>
<el-card>
  <div style="margin: 10px 0;"></div>
  <el-row :gutter="1" align="left">
    <el-col :span="4"><div class="grid-content bg-purple">
  <el-select v-model="value1"  placeholder="请选择批次" >
    <el-option
      v-for="item in batch"
      :key="item.label"
      :label="item.label"
      :value="item.label">
    </el-option>

  </el-select>
    </div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple">
  <el-select
    v-model="value2"
    collapse-tags
    style="margin-left: 20px;"
    placeholder="请选择学院">
    <el-option
      v-for="item in college"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    </div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple">
    <el-button type="primary" @click="searchData">查询</el-button>
    </div></el-col>
    <el-col :span="1"><div class="grid-content bg-purple">
    <el-button type="primary" @click="exportExcel">导出汇总表</el-button>
  </div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple">
      <el-button type="primary" @click="verify">导出审核表</el-button>
    </div></el-col>
  </el-row>
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
import {applyStatistics, cloStatistics, appExport, verify, getAllBatch} from '../../../api/api'
import {cloList} from '../../../api/clothes'

export default {
  name: 'Maindata',
  data () {
    return {
      merageArr: [],
      batch: [],
      college: [{
        value: '计算机',
        label: '计算机学院'
      }, {
        value: '外国语',
        label: '外国语'
      }, {
        value: '历史',
        label: '历史'
      }, {
        value: '经济',
        label: '经济'
      }, {
        value: '马哲',
        label: '马哲'
      }],
      value2: [],
      value1: [],
      meragePos: 0,
      applys: [],
      styles: [],
      info: []
    }
  },
  created () {
    this.getallB()
    this.ApplyStatistics()
    this.CloSatistics()
    this.getInfo()
    this.merage(this.info)
  },
  methods: {
    ApplyStatistics () {
      applyStatistics().then(res => {
        console.info(res)
        this.applys = res.data
      })
    },
    searchData () {
      console.info(this.value1)
      console.info(this.value2)
      if (this.value1.length <= 0 || this.value2.length <= 0) {
        this.$message.error('请选择需要查询的批次和学院')
      } else {
        this.$router.push({name: 'collegeData', params: {batch: this.value1, college: this.value2}})
      }
    },
    getallB () {
      getAllBatch().then(res => {
        let result = res.data
        result.forEach(element => {
          this.batch.push({label: element.bid, value: element.id})
        })
      }).catch(error => {
        console.log(error)
      })
    },
    exportExcel () {
      appExport().then(res => {
        let blob = new Blob([res])
        let url = window.URL.createObjectURL(blob)
        let elink = document.createElement('a')
        elink.download = '汇总表.xls'
        elink.style.display = 'none'
        elink.href = url
        document.body.appendChild(elink)
        elink.click()
        document.body.removeChild(elink)
      })
    },

    verify () {
      verify().then(res => {
        let blob = new Blob([res])
        let url = window.URL.createObjectURL(blob)
        let elink = document.createElement('a')
        elink.download = '审核表.xls'
        elink.style.display = 'none'
        elink.href = url
        document.body.appendChild(elink)
        elink.click()
        document.body.removeChild(elink)
      })
    },
    CloSatistics () {
      cloStatistics().then(res => {
        console.info(res)
        this.styles = res.data
      })
    },
    getInfo () {
      cloList(this.query).then(res => {
        console.info(res)
        this.info = res.data.records
        this.merage(this.info)
      })
    },
    merage (tableData) {
      this.merageInit()
      for (var i = 0; i < tableData.length; i++) {
        if (i === 0) {
          // 第一行正常显示 必须存在
          this.merageArr.push(1)
          this.meragePos = 0
        } else {
          // 判断当前元素与上一个元素是否相同 根据是否合并的id
          if (tableData[i].style === tableData[i - 1].style) {
            this.merageArr[this.meragePos] += 1
            this.merageArr.push(0)
          } else {
            this.merageArr.push(1)
            this.meragePos = i
          }
        }
      }
    },
    merageInit () {
      this.merageArr = []
      this.meragePos = 0
    },
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex < 3 || columnIndex === 5) {
        const _row = this.merageArr[rowIndex]
        const _col = _row > 0 ? 1 : 0 // 如果被合并了_row=0则它这个列需要取消
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    }

  }
}
</script>

<style scoped>

</style>
