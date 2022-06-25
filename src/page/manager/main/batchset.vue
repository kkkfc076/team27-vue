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
  name: 'batchset'
}
</script>

<style scoped>

</style>
