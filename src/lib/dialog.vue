<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="wy-dialog-overlay"></div>
      <div class="wy-dialog-wrapper">
        <div class="wy-dialog">
          <header>
            <span v-if="title">{{title}}</span>
            <slot v-else name="title"/>
            <span @click="close" class="wy-dialog-close"></span>
          </header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <wy-button level="main">OK</wy-button>
            <wy-button>Cancel</wy-button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import wyButton from "../lib/button.vue"
export default {
  name: "dialog",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
    },

  },
  setup(props,{emit}) {
    const close = () =>{
      emit("update:visible",false)
    }
    return {close}
  },
  components: {wyButton}
}

</script>
<style lang="less">
@radius: 4px;
@border-color: #d9d9d9;
.wy-dialog {
  background: white;
  border-radius: @radius;
  box-shadow: 0 0 3px fade(hsla(black), 50%);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade(hsla(black), 50%);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid @border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid @border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>