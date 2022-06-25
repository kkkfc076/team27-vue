<template>
  <div>
    <header>申请</header>
    用户名<input type="text" v-model="id"><br>
    密码<input type="text" v-model="pwd"><br>
    <button >学生登录</button>
    <button >管理员登录</button>
  </div>
</template>

<script>
export default {
  name: 'apply1'
}
</script>

<style scoped>

</style>
