<template>
  <demo-page :option="switchOption" :attr-content="attrContent">
    <template #primary>
      <wy-switch v-model:value="bool"></wy-switch>
    </template>
    <template #disabled>
      <wy-switch v-model:value="checked" disabled></wy-switch>
    </template>
    <template #loading>
      <wy-switch v-model:value="checked2" loading></wy-switch>
    </template>
  </demo-page>
</template>

<script lang="ts">

import wySwitch from "../lib/switch.vue"
import SWITCH_OPTION from './demoOptions/switch'
import attrSwitch  from '../markdown/attr-switch.md'
import DemoPage from "./common/DemoPage.vue"
import { ref } from 'vue'

export default {
  components: {
    wySwitch,DemoPage
  },
  setup() {
    const switchOption = ref<object>(SWITCH_OPTION)
    const attrContent = ref<string>('')
    attrContent.value = attrSwitch
    const bool = ref<boolean>(false)
    const checked = ref<boolean>(false)
    const checked2 = ref<boolean>(false)
    return {
      bool,
      checked,
      switchOption,
      attrContent,
      checked2
    }
  }
}
</script>

<style lang="less" scoped>
@border-color: #d9d9d9;
.demo {
  border: 1px solid @border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid @border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed @border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed @border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>