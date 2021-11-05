<template>
  父组件内：{{a}}
    <wy-tabs v-model="a" ref="bbb">
      <wy-tab title="导航1" name="导航1">tab1哈哈哈哈</wy-tab>
      <wy-tab title="导航2" name="导航2">tab2嘿嘿嘿嘿</wy-tab>
    </wy-tabs>
</template>

<script>
import {ref,onMounted} from "vue"
import wyTabs from "../lib/tabs.vue"
import wyTab from "../lib/tab.vue"

export default {
  setup() {
  const a = ref("导航2")
  const bbb = ref(null)

    onMounted(()=>{
    })
    return{a,bbb}
  },
  components: {wyTabs, wyTab}
}

</script>
<style scoped>
</style>