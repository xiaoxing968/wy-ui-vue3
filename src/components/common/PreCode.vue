<template>
  <pre class="language-html" v-html="Prism.highlight(code, Prism.languages.html, type)"/>
</template>

<script lang="ts">
import 'prismjs';

const Prism = (window as any).Prism

export default {
  name: 'pre-code',
  props: {
    code: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'html'
    }
  },
  setup() {
    return {
      Prism
    }
  }

}
</script>

<style lang="less">
@import "../../assets/css/wy-ui-v3-docs.less";
@import '../../assets/css/prism.css';

</style>
