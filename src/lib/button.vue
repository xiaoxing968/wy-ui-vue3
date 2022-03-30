<template>
  <button class="wy-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="wy-loadingIndicator"></span>
    <slot/>
  </button>
</template>

<script>
import {computed} from "vue"

export default {
  props: {
    type: {
      type: String,
      default: "button",
      validator(val) {
        console.log()
        return ['button', 'link', 'text'].includes(val) // 按钮呈现的方式 现在只支持这三种
      }
    },
    size: {
      type: String,
      default: "normal",
      validator(val) {
        console.log()
        return ['normal', 'small', 'mini'].includes(val) // 按钮大小 支持 normal small mini
      }
    },
    level: {
      type: String,
      default: "normal",
      validator(val) {
        return ['normal', 'main', 'danger','warning'].includes(val)
      }
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const {type, size, level} = props;
    const classes = computed(() => {
      return {
        [`wy-type-${type}`]: type,
        [`wy-size-${size}`]: size,
        [`wy-level-${level}`]: level,
      };
    });
    return {classes};
  },
}

</script>
<style lang="less">
@h: 32px;
@border-color: #d9d9d9;
@color: #333;
@theme: #67C23A;
@waning: #FCC98B;
@radius: 4px;
@red: red;
@grey: grey;
.wy-button {
  box-sizing: border-box;
  height: @h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: @color;
  border: 1px solid @border-color;
  border-radius: @radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: @theme;
    border-color: @theme;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.wy-type-link {
    border-color: transparent;
    box-shadow: none;
    color: @theme;

    &:hover,
    &:focus {
      color: lighten(@theme, 10%);
    }
  }

  &.wy-type-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.wy-size-normal {
    font-size: 15px;
    height: 36px;
    padding: 0 12px;
  }

  &.wy-size-small {
    font-size: 12px;
    padding: 0 8px;
  }
  &.wy-size-mini {
    font-size: 12px;
    height: 24px;
    padding: 0 4px;
  }

  &.wy-type-button {
    &.wy-level-main {
      background: @theme;
      color: white;
      border-color: @theme;

      &:hover,
      &:focus {
        background: darken(@theme, 10%);
        border-color: darken(@theme, 10%);
      }
    }

    &.wy-level-warning {
      background: @waning;
      color: white;
      border-color: @waning;

      &:hover,
      &:focus {
        background: darken(@waning, 10%);
        border-color: darken(@waning, 10%);
      }
    }

    &.wy-level-danger {
      background: @red;
      border-color: @red;
      color: white;

      &:hover,
      &:focus {
        background: darken(@red, 10%);
        border-color: darken(@red, 10%);
      }
    }
  }

  &.wy-type-link {
    &.wy-level-danger {
      color: @red;

      &:hover,
      &:focus {
        color: darken(@red, 10%);
      }
    }
  }

  &.wy-type-text {
    &.wy-level-main {
      color: @theme;

      &:hover,
      &:focus {
        color: darken(@theme, 10%);
      }
    }

    &.wy-level-danger {
      color: @red;

      &:hover,
      &:focus {
        color: darken(@red, 10%);
      }
    }
  }

  &.wy-type-button {
    &[disabled] {
      cursor: not-allowed;
      color: @grey;

      &:hover {
        border-color: @grey;
      }
    }
  }

  &.wy-type-link, &.wy-type-text {
    &[disabled] {
      cursor: not-allowed;
      color: @grey;
    }
  }

  > .wy-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: @theme @theme @theme transparent;
    border-style: solid;
    border-width: 2px;
    animation: wy-spin 1s infinite linear;
  }
}

@keyframes wy-spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}
</style>