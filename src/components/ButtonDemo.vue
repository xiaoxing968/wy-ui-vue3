<template>
  <demo-page :option="option" :attr-content="attrContent">
    <template #type>
      <wy-button @click="clickButton">default</wy-button>
      <wy-button type="text">text</wy-button>
      <wy-button type="link">link</wy-button>
    </template>
    <template #level>
      <div class="button-line">
        normal:
        <wy-button level="normal">信息</wy-button>
        <wy-button level="warning">警告</wy-button>
        <wy-button level="danger">危险</wy-button>
        <wy-button level="main">成功</wy-button>
      </div>
      <div class="button-line">
        text:
        <wy-button level="normal" type="text">信息</wy-button>
        <wy-button level="warning" type="text">警告</wy-button>
        <wy-button level="danger" type="text">危险</wy-button>
        <wy-button level="main" type="text">成功</wy-button>
      </div>
      <div class="button-line">
        link:
        <wy-button level="normal" type="link">信息</wy-button>
        <wy-button level="warning" type="link">警告</wy-button>
        <wy-button level="danger" type="link">危险</wy-button>
        <wy-button level="main" type="link">成功</wy-button>
      </div>
    </template>
    <template #size>
      <wy-button size="normal">迷你按钮</wy-button>
      <wy-button size="small">小型按钮</wy-button>
      <wy-button size="mini">大号按钮</wy-button>
    </template>
    <template #disabled>
      <wy-button disabled>禁用状态</wy-button>
      <wy-button disabled type="text">禁用状态</wy-button>
      <wy-button disabled type="link">禁用状态</wy-button>
    </template>
    <template #loading>
      <wy-button loading>加载中...</wy-button>
    </template>
  </demo-page>
</template>

<script lang="ts">
import WyButton from '../lib/Button.vue'
import DemoPage from './common/DemoPage.vue'
import attrContentMd from '../markdown/attr-button.md'
import BUTTON_OPTION from './demoOptions/button'
import {ref} from 'vue'

export default {
  name: 'button-demo',
  components: {
    DemoPage,
    WyButton
  },
  setup () {
    const option = ref<object> (BUTTON_OPTION)
    const attrContent = ref<string>('')
    attrContent.value = attrContentMd

    return {
      option,
      attrContent
    }
  }
}
</script>

<style scoped lang="scss">
.xwy-button {
  margin-right: 8px;
}
.button-line {
  margin-bottom: 8px;
  .xwy-button:last-of-type {
    margin-right: 0;
  }
}
</style>
