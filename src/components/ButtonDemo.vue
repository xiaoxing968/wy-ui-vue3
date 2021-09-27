<template>
  <wy-button>111</wy-button>
  <wy-button type="text">1122</wy-button>
  <wy-button type="link">1122</wy-button>
  <wy-button size="normal">111</wy-button>
  <wy-button  size="small">1122</wy-button>
  <wy-button size="mini">1122</wy-button>


  <wy-button level="normal">111</wy-button>
  <wy-button  level="main">1122</wy-button>
  <wy-button level="danger">1122</wy-button>
</template>
<script>
import wyButton from "../lib/button.vue"

export default {
  name: "SwitchDemo",
  setup() {
    const fn = () => {
      console.log(1)
    }
    return {fn}
  },
  components: {wyButton}
}

</script>
<style scoped>
</style>