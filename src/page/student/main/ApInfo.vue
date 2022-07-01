// 查看申请信息及结果
<template>
  <div>
    <h1 style="font-size: 20px">查看申请结果页面</h1>
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
        <th scope="row">批次</th>
        <td>{{APList.batKey}}</td>
      </tr>
      <tr bgcolor="#f8f8ff">
        <th scope="row">申请原因</th>
        <td>{{APList.reason}}</td>
      </tr>
      <tr bgcolor="#f8f8ff">
        <th scope="row">申请结果</th>
        <td>
          <span v-if="APList.result===true">
            <span class="el-icon-success" style="color: #17ce36">
              通过
            </span>
          </span>
          <span v-else-if="APList.result===false">
            <span class="el-icon-error" style="color: #FF3333">
              不通过
            </span>
          </span>
          <span v-else-if="APList.result===null">
            <span class="el-icon-question" style="color: #6666FF">
              等待中
            </span>
          </span>
        </td>
      </tr>
      <tr bgcolor="#f8f8ff">
        <th scope="row">款式</th>
        <td>{{CList.cname}}</td>
      </tr>
      <tr bgcolor="#f8f8ff">
        <th scope="row">型号</th>
        <td> {{CList.size}}<br></td>
      </tr>
      <tr bgcolor="#f8f8ff">
        <th scope="row">图片</th>
        <td><img :src="CList.picture" width="300xp"/></td>
      </tr>

    </table>
  </div>
</template>

<script>
export default {
  name: 'ApInfo',
  data () {
    return {
      userList: [],
      APList: [],
      CList: []
    }
  },
  created () {
    this.getInfo()
    this.getAP()
    this.getCInfo()
  },
  methods: {

    getInfo () {
      this.$axios.get(`/api/student/getInfo`).then(res => {
        console.info(res.data)
        this.userList = res.data.data
      })
    },
    getAP () {
      this.$axios.get('api/applicationform/getAPInfo').then(res => {
        console.info(res.data)
        this.APList = res.data.data
      })
    },
    getCInfo () {
      this.$axios.get('api/clothes/getCInfo').then(res => {
        console.info(res.data)
        this.CList = res.data.data
      })
    }
  }
}
</script>

<style scoped>

</style>
