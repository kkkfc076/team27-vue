<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <el-form :model="batchList" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="批次编号" prop="bid">
        <el-input v-model="batchList.bid"></el-input>
      </el-form-item>
      <el-form-item label="开始时间" required>
        <el-col :span="11">
          <el-form-item prop="startdate">
            <el-date-picker type="date" placeholder="选择日期" v-model="batchList.startdate" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="截止时间" required>
        <el-col :span="11">
          <el-form-item prop="enddate">
            <el-date-picker type="date" placeholder="选择日期" v-model="batchList.enddate" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitForm()">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
import {prolongBatch} from "../../../../api/api"

export default {
  name: "prolongEnddate",
  inject: ['reload'],
  data() {
    return {
      dialogVisible: false,
      batchList:{},
      rules: {
        enddate: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    show(batchList){
      this.batchList=batchList
      this.dialogVisible=true
    },
    submitForm(){
      prolongBatch(this.batchList).then(res=>{
        console.info(res)
        if(res.data!==null){
          this.$message({
            message: '编辑成功',
            type: 'success'
          }).then(() => {
            this.dialogVisible=false
            this.reload()
          })
        }else{
          this.$message.error("编辑失败")
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
