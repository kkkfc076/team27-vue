<template>
  <div class="x-side-bar">
    <div
      class="item"
      v-for="(item, index) in categoryList"
      :key="index"
    >
      <div class="item-title" @click.stop="isHandleFold(item)">
        <i class="iconfont" :class="item.icon"></i>
        {{item.title}}
        <i v-if="item.children" class="iconfont" :class="arrow"></i>
      </div>
      <div v-if="item.children" class="item-children" v-show="!isFold">
        <side-bar :categoryList="item.children"></side-bar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'side-bar',
  props: {
    categoryList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isFold: true,
      arrow: 'icon-arrow-down-bold'
    }
  },
  methods: {
    isHandleFold (item) {
      if (item.children && !item.url) {
        this.isFold = !this.isFold
        this.arrow = (this.isFold ? 'icon-arrow-down-bold' : 'icon-arrow-up-bold')
      } else {
        this.$router.push({ path: item.url })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.x-side-bar {
  width: 220px;
  overflow: hidden;
  background-color: rgb(27, 216, 105);
  .item {
    line-height: 30px;
    text-indent: 10px;
    .item-title {
      font-size: 18px;
      margin-bottom: 2px;
      background-color: rgb(72, 233, 72);
    }
  }
}

.item-title:nth-last {
  margin-bottom: 0;
}
</style>
