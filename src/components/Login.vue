<template>
<div>
  <header>登录</header>
  用户名<input type="text" v-model="id"><br>
  密码<input type="text" v-model="pwd"><br>
  <button @click="login">学生登录</button>
  <button @click="tlogin">管理员登录</button>
  <button @click="toprint">打印出来</button>

</div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      id: '',
      pwd: ''
    }
  },
  methods: {
    login () {
      let user = {
        sid: this.id,
        pwd: this.pwd
      }
      this.$axios.post('/api/student/login', user).then(res => {
        console.info(res.data.data)
        if (res.data.data !== null) {
          this.$router.push({name: 'Student', params: {}})
        } else {
          alert('fail')
        }
      })
    },
    tlogin () {
      let user = {
        mid: this.id,
        pwd: this.pwd
      }
      this.$axios.post('/api/manager/mlogin', user).then(res => {
        console.info(res.data.data)
        if (res.data.data !== null) {
          this.$router.push({name: 'Manager'})
        } else {
          alert('fail')
        }
      })
    },
    toprint () {
      this.$router.push({name: 'Waitfor'})
    }
  }
}
</script>

<style scoped>

</style>
