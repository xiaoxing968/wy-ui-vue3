<template>
  <demo-page :option="option" :attr-content="attrContent">
    <template #primary>
      <wy-tabs v-model="selectTab">
        <wy-tab title="导航1" name="t1">tab1</wy-tab>
        <wy-tab title="导航2" name="t2">tab2</wy-tab>
        <wy-tab title="导航3" name="t3">tab3</wy-tab>
        <wy-tab title="导航4" name="t4">tab4</wy-tab>
      </wy-tabs>
    </template>
  </demo-page>
</template>

<script lang="ts">
import WyTabs from '../lib/tabs.vue'
import WyTab from '../lib/tab.vue'
import DemoPage from './common/DemoPage.vue'
import attrContentMd from '../markdown/attr-tabs.md'
import TABS_OPTION from './demoOptions/tabs'
import { ref } from 'vue'

export default {
  name: 'tabs-demo',
  components: {
    DemoPage,
    WyTabs,
    WyTab
  },
  setup() {
    const selectTab = ref<string>('t1')

    const option = ref<object> (TABS_OPTION)
    const attrContent = ref<string>('')
    attrContent.value = attrContentMd
    return {
      selectTab,
      option,
      attrContent
    }
  }
}
</script>

<style scoped lang="scss">

</style>
