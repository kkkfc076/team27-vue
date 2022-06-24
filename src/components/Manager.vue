<template>
  <div class="manager">
    <h1>{{msg}}</h1>
  </div>
</template>

<template>
  <div class="manager">
    <h1>{{msg}}</h1>
    <button @click="toLogin">回登录</button>
  </div>
</template>

<script>
export default {
  name: 'Manager',
  data: function () {
    return {
      msg: '管理员成功登进来了',
      loginName: '',
      password: ''
    }
  },
  methods: {
    toLogin () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>

</style>
