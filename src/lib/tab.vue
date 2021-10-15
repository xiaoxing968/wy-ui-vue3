<template>
  <slot/>
  <button @click="x">bus</button>
</template>

<script>
export default {
  name: "tab",
  props: {
    name: {
      type: String,
    },
  },
  setup() {
    const x = () =>{
    }
    return{x}
  },
  components: {}
}

</script>
<style scoped>
</style>