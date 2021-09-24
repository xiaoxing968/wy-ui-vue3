<template>
  <!--  等同于之前的.sync-->
  <Switch v-model:value="flag"/>
</template>

<script>
import Switch from "../lib/switch.vue"
import { ref } from "vue"

export default {
  setup() {
    const flag = ref(false)
    return { flag }
  },
  components: {Switch}
}

</script>
<style scoped>
</style>