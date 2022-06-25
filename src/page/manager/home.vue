<template>
  <div class="home">
    <h3>Side Bar</h3>
    <side-bar :categoryList="categoryList"/>
  </div>
</template>

<script>
import SideBar from '@/components/side-bar.vue'
import SideData from './sideData.js'

export default {
  name: 'Home',
  components: {
    SideBar
  },
  data () {
    return {
      sideData: SideData.sideData
    }
  },
  computed: {
    categoryList () {
      let list = []
      if (this.sideData && this.sideData.categoryList) {
        list = this.sideData.categoryList
      }
      return list
    }
  }
}
</script>
