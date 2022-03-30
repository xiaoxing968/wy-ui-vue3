<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="wy-dialog-overlay" @click="overlayClose"></div>
      <div class="wy-dialog-wrapper">
        <div class="wy-dialog">
          <header>
            <span v-if="title">{{ title }}</span>
            <slot v-else name="title"/>
            <span @click="close" class="wy-dialog-close"></span>
          </header>

          <main>
            <div v-if="content">{{ content }}</div>
            <slot/>
          </main>

          <footer>
            <slot name="footer" v-if="$slots.footer"></slot>
            <template v-else>
              <wy-button size="small" @click="close">取消</wy-button>
              <wy-button size="small" level="main" @click="onConfirm">确定</wy-button>
            </template>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import wyButton from "../lib/button.vue"

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    cancel: {
      type: Function, // 接收一个关闭弹窗的回调事件
    },
    confirm: {
      type: Function, // 点击确定的回调事件
    },
    open: {
      type: Function, // 打开弹窗的回调事件
    },
    closeInOverlay: {
      type: Boolean, // 是否支持点击遮罩层来关闭dialog
      default: true
    },
  },
  setup(props: any, context: any) {
    const close = () => {
      context.emit("update:visible", false)
      props.cancel?.()
    }
    const overlayClose = () => {
      if (props.closeInOverlay)
        close()
    }
    const onConfirm = () => {
      if (props.confirm?.() !== false){
        context.emit("update:visible", false)
      }
    }
    return {close, overlayClose, onConfirm}
  },
  mounted() {
    // console.log(this.$slots.default())
  },
  watch: {
    visible(newValue: Boolean) {
      !newValue && this.cancel?.()
      newValue && this.open?.()
    }
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
    //border-top: 1px solid @border-color;
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