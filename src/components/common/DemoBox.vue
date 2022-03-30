<template>
  <div class="demo-box-wrapper">
    <h3 v-if="title">{{ title }}</h3>
    <p v-if="introduction" v-html="introduction"></p>
    <div class="demo-box"
         :class="{ hover: wrapperHover }"
         @mouseenter="wrapperHover = true"
         @mouseleave="wrapperHover = false">
      <div class="components-box" :class="{ show: codeShow }">
        <slot name="components"></slot>
      </div>
      <div class="code-wrapper" ref="codeWrapper">
        <div ref="codeContent">
          <div class="code-description" v-if="description">
            <slot name="description"></slot>
          </div>
          <pre-code :code="code" type="typescript"></pre-code>
        </div>
      </div>
      <div class="code-show-control"
           :class="{ hover: controlHover }"
           @mouseenter="controlHover = true"
           @mouseleave="controlHover = false"
           @click="toggleCode">
        <wy-icon :name="`${codeShow ? 'up' : 'down'}-fill`"></wy-icon>
        <span>{{ codeShow ? '隐藏代码' : '显示代码' }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import WyIcon from '../../lib/Icon.vue'
import PreCode from './PreCode.vue'
import { ref,onMounted } from 'vue'

export default {
  name:'wy-ui-demo-box',
  components: {
    WyIcon,
    PreCode
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    introduction: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    },
    codeType: {
      type: String,
      default: 'html'
    }
  },
  setup(props, context) {
    const codeWrapper = ref<HTMLDivElement>(null)
    const codeContent = ref<HTMLDivElement>(null)
    const codeShow = ref<boolean>(false)
    const wrapperHover = ref<boolean>(false)
    const controlHover = ref<boolean>(false)
    const getCodeWrapperHeight = () => {
      let { height } = codeContent.value.getBoundingClientRect()
      codeWrapper.value.style.height = codeShow.value ? height + 'px' : 0
    }
    onMounted(getCodeWrapperHeight)
    const toggleCode = ()=> {
      codeShow.value = !codeShow.value
      getCodeWrapperHeight()
    }

    const description = ref<object>(null)
    description.value = context.slots.description?.()

    return {
      codeShow,
      wrapperHover,
      controlHover,
      codeWrapper,
      codeContent,
      description,
      toggleCode
    }
  }
}
</script>

<style scoped lang="less">
@import '../../assets/css/wy-ui-v3-docs.less';
</style>
