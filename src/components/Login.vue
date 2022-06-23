<template>
<div>
  这是登录界面
  用户名<input type="text" v-model="sid"><br>
  密码<input type="text" v-model="pwd"><br>
  <button @click="login">学生登录</button>
  <button @click="toHello">回hello</button>
  <button @click="getById">根据id查询</button>
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
    toHello () {
      this.$router.push('/hello')
    },
    login () {
      let user = {
        sid: this.sid,
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
    getById () {
      this.$axios.get('/api/book/getById1', {params: {id: 1}}).then(res => {
        console.info(res)
      })
    }
  }
}
</script>

<style scoped>

</style>
