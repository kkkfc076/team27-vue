// 学生资格申请页面
<template>
 <div>
   <component :key="key">
     <h1 style="font-size: 20px">填写申请表页面</h1>
     <table width="1000" border="1" align="center">
       <tr bgcolor="#f8f8ff">
         <th scope="row">姓名</th>
         <td>{{userList.sname}}</td>
       </tr>
       <tr bgcolor="#f8f8ff">
         <th scope="row">学号</th>
         <td> {{userList.sid}}<br></td>
       </tr>
       <tr bgcolor="#f8f8ff">
         <th scope="row">性别</th>
         <td>{{userList.sex}}</td>
       </tr>
       <tr bgcolor="#f8f8ff">
         <th scope="row">贫困等级</th>
         <td>{{userList.plevel}}</td>
       </tr>
       <tr bgcolor="#f8f8ff">
         <th scope="row">贫困认定时间</th>
         <td>{{userList.pyear}}</td>
       </tr>
       <tr bgcolor="#f8f8ff">
         <th scope="row" >申请原因</th>
         <td>
       <span v-if="matchL.flag!==0">
         <span v-if="B===0"><el-input type="text" v-model="reason" placeholder="新生可不填写理由"></el-input></span>
          <span v-else-if="B===2">
            <el-input type="text" v-model="reason"  placeholder="不为新生，理由为空可能无法通过申请">
            </el-input>
          </span>
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
   </component>

 </div>
</template>

<script>
export default {
  name: 'Ap',
  inject:['reload'],
  data () {
    return {
      key: 1,
      B: '',
      APList: '',
      userList: '',
      matchL: '',
      reason: '',
      addFlag: true,
      updateFlag: true
    }
  },
  created () {
    this.getInfo()
    this.match()
    this.getBInfo()
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
      if(this.B ===2 && this.reason === ''){
        this.$alert('申请理由不能为空', '修改结果', {
          confirmButtonText: '确定'
        })
      }else {
        var reason = this.reason
        this.$axios.post(`/api/applicationform/updateReason`, {reason}).then(res => {
          console.info(res.data.data)
          if (res.data.data.flag === 2) {
            this.$alert('修改申请理由成功', '修改结果', {
              confirmButtonText: '确定'
            }).then(() => {
              this.reload()
            })
          } else {
            this.$alert('修改申请理由失败', '修改结果', {
              confirmButtonText: '确定'
            })
          }
        })
      }

    },
    addReason () {
      if(this.B === 2 && this.reason === ''){
        this.$alert('申请理由不能为空', '修改结果', {
          confirmButtonText: '确定'
        })
      }else {
        var reason = this.reason
        this.$axios.post(`/api/applicationform/saveReason`, {reason}).then(res => {
          console.info(res.data.data)
          if (res.data.data !== false) {
            this.$alert('申请成功', '修改结果', {
              confirmButtonText: '确定'
            }).then(() => {
             this.reload()
            })
          } else {
            this.$alert('申请失败,请检查您是否在申请时间段', '申请结果', {
              confirmButtonText: '确定'
            })
          }
        })
      }
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
        this.getAP()
      })
    },
    getBInfo () {
      this.$axios.get('api/student/getBInfo').then(res => {
        console.info(res.data)
        this.B = res.data.data
      })
    }
  }
}
</script>

<style scoped>

</style>
