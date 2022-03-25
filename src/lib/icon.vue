<template>
  <svg class="wy-icon" :style="{ color }">
    <use :xlink:href="`#x-${name}`"></use>
  </svg>
</template>

<script lang="ts">
import './iconfont.js'

export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>

<style lang="less">
.wy-icon {
  width: 1em!important;
  height: 1em!important;
  fill:currentColor;
  color: currentColor;
}
</style>
