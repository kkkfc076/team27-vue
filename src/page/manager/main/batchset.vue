<template>
  <div class="el-main">
    <el-card>
      <h1>新建批次</h1>
      <el-form :model="batchForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="批次编号" prop="bid">
          <el-input v-model="batchForm.bid"></el-input>
        </el-form-item>
        <el-form-item label="批次开始" required>
          <el-col :span="11">
            <el-form-item prop="startdate">
              <el-date-picker type="date" placeholder="选择日期" v-model="batchForm.startdate" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="批次结束" required>
          <el-col :span="11">
            <el-form-item prop="enddate">
              <el-date-picker type="date" placeholder="选择日期" v-model="batchForm.enddate" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="申请截止" required>
          <el-col :span="11">
            <el-form-item prop="applyend">
              <el-date-picker type="date" placeholder="选择日期" v-model="batchForm.applyend" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-descriptions title="当前批次信息" direction="vertical" :column="4" border>
          <el-descriptions-item label="批次号">{{batchList.bid}}</el-descriptions-item>
          <el-descriptions-item label="开始时间">{{batchList.startdate}}</el-descriptions-item>
          <el-descriptions-item label="截止时间">{{batchList.enddate}}</el-descriptions-item>
        </el-descriptions>
        <br/>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button type="primary" @click="handleEdit()">延长时间</el-button>
        </el-form-item>
      </el-form>
      <prolong-enddate ref="prolong"/>
    </el-card>
  </div>
</template>

<script>

import ProlongEnddate from './component/prolongEnddate'
import {getCurBatch} from '../../../api/api'
export default {
  name: 'batchset',
  inject: ['reload'],
  components: {ProlongEnddate},
  data () {
    return {
      batchForm: {
        bid: '',
        startdate: '',
        enddate: '',
        applyend: ''
      },
      batchList: {},
      rules: {
        bid: [
          { required: true, message: '请输入批次编号', trigger: 'blur' },
          { min: 4, max: 4, message: '如：2019年输入2019', trigger: 'blur' }
        ],
        startdate: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        enddate: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        applyend: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ]
      }
    }
  },
  created () {
    this.getBatchInfo()
  },
  methods: {
    submitForm () {
      var bid = this.batchForm.bid
      var startdate = this.batchForm.startdate
      var enddate = this.batchForm.enddate
      var applyend = this.batchForm.applyend
      this.$axios.post('/api/batch/addBatch', {bid, startdate, enddate, applyend}).then(res => {
        console.assert(res.data.data)
        if (res.data.data.flag === 2) {
          alert('创建成功!').then(() => {
            this.reload()
          })
          this.$router.push({name: 'Maindata'})
        } else {
          alert(' 错误！')
          return false
        }
      })
    },
    checkForm (batchForm) {
      this.$refs[batchForm].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (batchForm) {
      this.$refs[batchForm].resetFields()
    },
    handleEdit () {
      this.$refs.prolong.show(this.batchList)
    },
    getBatchInfo () {
      getCurBatch().then(res => {
        console.info(res)
        if (res.data != null) {
          this.batchList = res.data
        } else {
          alert('请新建批次！')
        }
      })
    }
  }
}
</script>

<style scoped>
.el-main {
  padding: 0;
  height: calc(100vh - 70px);
  margin-left: 300px;
  margin-right: 300px;
}
</style>
