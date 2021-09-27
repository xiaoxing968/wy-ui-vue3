<template>
  <div>
    <button @click="toggle" :class="{checked:value}">
      <span></span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  setup(props,context) { // 第一个参数为props接收的所有属性 第二个参数为context 叫啥都无所谓，里面有emit 同之前的this.$emit


    const toggle = () =>{
      context.emit("update:value",!props.value)
    }
    return { toggle }
  },
}

</script>
<style lang="less" scoped>
@height: 22px;
@height2: @height - 4px;
button {
  height: @height;
  width: @height * 2;
  border: none;
  background: #bfbfbf;
  border-radius: @height * 0.5;
  position: relative;
  cursor:pointer;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: @height2;
    width: @height2;
    background: white;
    border-radius: @height2 * 0.5;
    transition: all 250ms;
  }

  &.checked {
    background: #1890ff;

    > span {
      left: calc(100% - @height2 - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: @height2 + 4px;
    }
  }

  &.checked:active {
    > span {
      width: @height2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>