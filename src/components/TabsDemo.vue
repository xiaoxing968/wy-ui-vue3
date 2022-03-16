<template>
  <div style="width: 200px">
    <wy-tabs v-model="a">
      <wy-tab title="导航1" name="导航1">tab1</wy-tab>
      <wy-tab title="导航2" name="导航2">tab2</wy-tab>
      <wy-tab title="导航3" name="导航3">tab2</wy-tab>
      <wy-tab title="导航4" name="导航4">tab2</wy-tab>
    </wy-tabs>
  </div>
</template>

<script>
import {ref} from "vue"
import wyTabs from "../lib/tabs.vue"
import wyTab from "../lib/tab.vue"

export default {
  name: "SwitchDemo",
  setup() {
  const a = ref("导航1")
    return{a}
  },
  components: {wyTabs, wyTab}
}

</script>z
<style scoped>
</style>