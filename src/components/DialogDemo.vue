<template>
 <div>
   <wy-dialog :visible="visible" title="111">
     <template v-slot:title>title</template>
     <template v-slot:content>content</template>
   </wy-dialog>
   <wy-button @click="visible = true">click</wy-button>
 </div>
</template>

<script>

import wyDialog from "../lib/dialog.vue";
import wyButton from "../lib/button.vue";
import {ref} from "vue"
export default {
name: "SwitchDemo",
setup(){
  const visible = ref(false)
  return {visible}
},
created(){},
methods:{},
components:{wyDialog,wyButton}
}

</script>
<style scoped>
</style>