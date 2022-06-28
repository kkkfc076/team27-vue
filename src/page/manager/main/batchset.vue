<template>
  <div class="el-main">
        <el-card class="crumbs-card">
        </el-card>
    <el-form :model="batchForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="批次编号" prop="bid">
        <el-input v-model="batchForm.bid"></el-input>
      </el-form-item>
      <el-form-item label="开始时间" required>
        <el-col :span="11">
          <el-form-item prop="startdate">
            <el-date-picker type="date" placeholder="选择日期" v-model="batchForm.startdate" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="截止时间" required>
        <el-col :span="11">
          <el-form-item prop="enddate">
            <el-date-picker type="date" placeholder="选择日期" v-model="batchForm.enddate" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'batchset',
  data () {
    return {
      batchForm: {
        bid: '',
        startdate: '',
        enddate: ''
      },
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
        ]
      }
    }
  },
  methods: {
    submitForm () {
      var bid = this.batchForm.bid
      var startdate = this.batchForm.startdate
      var enddate = this.batchForm.enddate
      this.$axios.post('/api/batch/addBatch', {bid, startdate, enddate}).then(res => {
        console.assert(res.data.data)
        if (res.data.data.flag === 2) {
          alert('创建成功!')
          this.$router.push({name: 'Managemain'})
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
