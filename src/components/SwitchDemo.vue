<template>
  <!--  等同于之前的.sync-->
  <wy-switch v-model:value="flag"/>
</template>

<script>
import wySwitch from "../lib/switch.vue"
import { ref } from "vue"

export default {
  data(){
    return {
      flag: false
    }
  },

  setup() {
    const flag = ref(false)
    return { flag }
  },
  components: {wySwitch}
}

</script>
<style scoped>
</style>