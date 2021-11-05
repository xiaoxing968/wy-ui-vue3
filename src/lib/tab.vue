<template>
  <slot/>
</template>

<script>
export default {
  name: "tab",
  props: {
    name: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  setup() {},
  components: {}
}

</script>
<style scoped>
</style>