<template>
  <el-card>
    <div>
      <el-card>
        <el-col :span="12">
          <span style="color: #8c939d " >批次开始时间</span>
          <el-card shadow="hover">
            {{batchForm.startdate}}
          </el-card>
        </el-col>
        <el-col :span="12">
          <span style="color: #8c939d " >批次截止时间</span>
          <el-card shadow="hover">
            {{batchForm.enddate}}
          </el-card>
        </el-col>
      </el-card>
    </div>
    <br>
<div>
  <el-card>
    <el-col :span="24">
      <span style="color: #8c939d " >申请截止时间,请在该时间前完成提交申请：</span>
      <el-card shadow="hover">
        {{batchForm.applyend}}
      </el-card>
    </el-col>
  </el-card>
</div>

  </el-card>
</template>

<script>

import {getCurBatch} from '../../../api/api'

export default {
  name: 'hello',
  data () {
    return {
      batchForm: {}
    }
  },
  created () {
    this.getBatch()
  },
  methods: {
    getBatch () {
      getCurBatch().then(res => {
        if (res.data != null) {
          this.batchForm = res.data
        } else {
          alert('当前不是批次时间段')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
