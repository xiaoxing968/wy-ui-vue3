<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang="ts">

export default {
  name: 'wy-markdown',
  props: {
    content:{
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped lang="scss">

</style>
