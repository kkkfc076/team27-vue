<template>
  <router-view v-if="isRouterAlive">
  <div id="app">
    <router-view/>
  </div>
  </router-view>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return{
      reload: this.reload
  }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive=true
      })
    }

  }
}
</script>

<style>
html,body,#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
