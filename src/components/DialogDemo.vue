<template>
  <div>
    {{ visible }}
    <wy-dialog v-model:visible="visible" title="111" :cancel="fn" :open="fn">
      <!--     标题可以通过插槽传 也可以通过title属性-->
      <template v-slot:title>title</template>
      <span>content</span>
      <template v-slot:footer>
        <wy-button level="main">OK</wy-button>
        <wy-button @click="visible = false">Cancel</wy-button>
      </template>
    </wy-dialog>
    <wy-button @click="visible = true">click</wy-button>
  </div>
</template>

<script lang="ts">

import wyDialog from "../lib/dialog.vue";
import wyButton from "../lib/button.vue";
import {ref} from "vue"

export default {
  name: "DialogDemo",
  setup() {
    const visible = ref(false)
    const fn = (type: any) => {

      console.log(visible.value)
    }
    return {visible, fn}
  },
  created() {
  },
  methods: {},
  components: {wyDialog, wyButton}
}

</script>
<style scoped>
</style>