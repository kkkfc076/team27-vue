<template>
<div>
  <header>登录</header>
  用户名<input type="text" v-model="id"><br>
  密码<input type="text" v-model="pwd"><br>
  <button @click="login">学生登录</button>
  <button @click="tlogin">管理员登录</button>

</div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      loginName: '',
      password: ''
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
          this.$router.push({name: 'HelloWorld'})
        } else {
          alert('fail')
        }
      })
    },
    tlogin () {
      let user = {
        tid: this.id,
        pwd: this.pwd
      }
      this.$axios.post('/api/manager/tlogin', user).then(res => {
        console.info(res.data.data)
        if (res.data.data !== null) {
          this.$router.push({name: 'Manager'})
        } else {
          alert('fail')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
