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
     <th scope="row">申请原因</th>
     <td><el-input type="text" v-model="reason"></el-input></td>
   </tr>
   </table>
   <br>
       <button type="primary" @click="addReason" >提交申请(首次提交）</button>
       <button type="primary" @click="updateReason" >修改申请（提交过）</button>
       <button>取消</button>
 </div>
</template>

<script>
export default {
  name: 'Ap',
  data () {
    return {
      userList: [],
      reason: ''
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
    updateReason () {
      var reason = {reason: this.reason}
      this.$axios.post(`/api/applicationform/updateReason`, reason).then(res => {
        console.assert(res.data.data)
        if (res.data.data.flag === 2) {
          alert('成功')
        } else {
          alert('失败')
          return false
        }
      })
    },
    addReason () {
      var reason = this.reason
      this.$axios.post(`/api/applicationform/addReason`, reason).then(res => {
        console.info(res.data.data)
      })
    }
  }
}
</script>

<style scoped>

</style>
