// 学生资格申请页面
<template>
 <div>
     <h1>填写申请表页面</h1>
   <table width="1000" border="1" align="center">
     <tr>
       <th scope="row">姓名</th>
       <td>{{userList.sname}}</td>
     </tr>
     <tr>
       <th scope="row">学号</th>
       <td> {{userList.sid}}<br></td>
     </tr>
     <tr>
       <th scope="row">性别</th>
       <td>{{userList.sex}}</td>
     </tr>
     <tr>
       <th scope="row">贫困等级</th>
       <td>{{userList.plevel}}</td>
     </tr>
     <tr>
       <th scope="row">贫困认定时间</th>
       <td>{{userList.pyear}}</td>
     </tr>
     <tr>
     <th scope="row" >申请原因</th>
     <td>
       <span v-if="matchL.flag!==0">
         <el-input type="text" v-model="reason" placeholder="请输入理由"></el-input>
       </span>
       <span v-else-if="matchL.flag===0">
         <el-input type="text" v-model="reason" :placeholder="APList.reason"></el-input>
       </span>
     </td>
   </tr>
   </table>
   <br>
       <button type="primary" @click="addReason"  :disabled="addFlag">提交申请(首次提交）</button>
       <button type="primary" @click="updateReason" :disabled="updateFlag">修改申请（提交过）</button>
 </div>
</template>

<script>
export default {
  name: 'Ap',
  data () {
    return {
      APList: [],
      userList: [],
      matchL: [],
      reason: '',
      addFlag: true,
      updateFlag: true
    }
  },
  created () {
    this.getInfo()
    this.match()
    this.getAP()
  },
  methods: {
    getAP () {
      this.$axios.get('api/applicationform/getAPInfo').then(res => {
        console.info(res.data)
        this.APList = res.data.data
      })
    },
    getInfo () {
      this.$axios.get(`/api/student/getInfo`).then(res => {
        console.info(res.data)
        this.userList = res.data.data
      })
    },
    updateReason () {
      var reason = this.reason
      this.$axios.post(`/api/applicationform/updateReason`, {reason}).then(res => {
        console.info(res.data.data)
        if (res.data.data.flag === 2) {
          this.$alert('修改申请理由成功', '修改结果', {
            confirmButtonText: '确定'
          })
        } else {
          this.$alert('修改申请理由失败', '修改结果', {
            confirmButtonText: '确定'
          })
        }
      })
    },
    addReason () {
      var reason = this.reason
      this.$axios.post(`/api/applicationform/saveReason`, {reason}).then(res => {
        console.info(res.data.data)
        if (res.data.data.id !== null) {
          alert('成功')
        } else {
          alert('失败')
          return false
        }
      })
    },
    match () {
      this.$axios.get(`/api/applicationform/match`).then(res => {
        console.info(res.data)
        this.matchL = res.data.data
        let obtain = res.data.data.flag
        if (obtain === 0) {
          this.addFlag = true// 为灰色
          this.updateFlag = false
        } else {
          this.addFlag = false
          this.updateFlag = true
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
