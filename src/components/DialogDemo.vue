<template>
  <demo-page :option="option" :attr-content="attrContent">
    <template #primary>
      <wy-button @click="toggle('eg1')">打开对话框</wy-button>
      <wy-dialog v-model:visible="visible.eg1" title="标题" content="content"></wy-dialog>
    </template>
    <template #slots>
      <wy-button @click="toggle('eg2')">自定义对话框</wy-button>
      <wy-dialog v-model:visible="visible.eg2">
        <template v-slot:title>
          <span>title</span>
        </template>
        <template v-slot:footer>
          <span>footer</span>
        </template>
        <p>通过slot传入内容~</p>
        <p>通过slot传入内容~</p>
        <p>通过slot传入内容~</p>
      </wy-dialog>
    </template>
    <template #event>
      <wy-button @click="toggle('eg3')">异步关闭</wy-button>
      <wy-dialog v-model:visible="visible.eg3"
                title="删除" content="确认删除吗"
                :confirm="confirm"
                :on-cancel="cancel">
      </wy-dialog>
    </template>
    <template #function>
      <wy-button @click="showDialog">函数调用</wy-button>
    </template>
  </demo-page>
</template>

<script lang="ts">
import WyDialog from '../lib/dialog.vue'
import WyButton from '../lib/button.vue'
import DemoPage from './common/DemoPage.vue'
import attrContentMd from '../markdown/attr-dialog.md'
import DIALOG_OPTION from './demoOptions/dialog'
import {openDialog} from '../lib/plugin/openDialog'
import {ref} from 'vue'

export default {
  name: 'dialog-demo',
  components: {
    DemoPage,
    WyDialog,
    WyButton
  },
  setup() {
    const visible = ref<object>({
      eg1: false,
      eg2: false
    })
    const visible1 = ref<boolean>(false)
    const toggle = (eg) => {
      visible.value[eg] = !visible.value[eg]
    }
    const confirm = () => {
      alert('您暂时不能删除')
      return false
    }
    const cancel = () => {
      console.log('取消')
    }
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '嗨',
        confirm: () => {
          console.log('confirm')
          return true
        },
        cancel: () => {
          console.log('cancel')
        },
        closeOnClickOverlay: false
      })
    }

    const option = ref<object>(DIALOG_OPTION)
    const attrContent = ref<string>('')
    attrContent.value = attrContentMd
    return {
      visible1, visible,
      showDialog,
      toggle, confirm, cancel,
      option,
      attrContent
    }
  }
}
</script>

<style scoped lang="scss">

</style>
