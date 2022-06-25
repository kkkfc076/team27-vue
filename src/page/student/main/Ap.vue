// 学生资格申请页面
<template>
 <div>
     <h1>填写申请表页面</h1>
   姓名:{{userList.sname}}<br>
   学号:{{userList.sid}}<br>
   性别:{{userList.sex}}<br>
   贫困等级:{{userList.plevel}}<br>
   批次:{{userList.pyear}}<br>
   <el-form ref="form" :model="form" label-width="10000xp">
     <el-form-item label="申请理由" prop="reason">
       <el-input type="textarea" v-model="form.reason"></el-input>
     </el-form-item>
     <el-form-item>
       <el-button type="primary" @click="submit()" >提交申请</el-button>
       <el-button>取消</el-button>
     </el-form-item>
   </el-form>
 </div>
</template>

<script>
export default {
  name: 'Ap',

  data () {
    return {
      userList: [],
      form: {
        reason: ''
      }
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.$axios.get(`/api/student/getInfo`).then(res => {
        console.info(res.data)
        this.userList = res.data.data
      })
    },
    submit () {
      var reason = this.form.reason
      this.$axios.post('/api/applicationform/addReason', {reason}).then(res => {
        console.assert(res.data.data)
        if (res.data.data.flag === 2) {
          alert('提交成功!')
        } else {
          alert(' 错误！')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
