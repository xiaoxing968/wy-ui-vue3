<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">


      <div class="gulu-tabs-nav-item"
           v-for="item in titles"
           :ref=" el =>{
             if (item.name === modelValue)
                currentItem = el
           }"
           @click="select(item)"
      >
        {{ item.title }}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
      <div class="gulu-tabs-content">
        <component :is="selected"></component>
      </div>
    </div>
    <br> <p>子组件tabs里的：{{modelValue}}</p>
  </div>
</template>

<script lang="ts">
import tab from "./tab.vue"
import {ref, onMounted, watchEffect} from "vue"

export default {
  name: "tabs",
  props: {
    modelValue: {
      type: String,
    },
  },
  setup(props: any, context: any) {
    const currentItem = ref<HTMLDivElement>(null) // 当前展示的组件
    const container = ref<HTMLDivElement>(null) // 最外层框
    const indicator = ref<HTMLDivElement>(null) // 下边线

    const modelValue = ref(props.modelValue) // 需要选中的tab的name

    const defaults = context.slots.default() // 所有的tab

    // o.type 是全等于引入的tab组件的
    const selected = defaults.find(o => o.props.name && o.props.name === modelValue)
    const titles = defaults.map(o => {
          if (o.type !== tab) throw new Error("tabs的子组件必须是tab")
          return {name: o.props.name, title: o.props.title}
        }
    )


    const select = (item:object) =>{
      context.emit('update:modelValue', item.name)
      console.log(item)
    }

    onMounted(() => {
      watchEffect(() => {
        console.log(currentItem)
        const {
          width
        } = currentItem.value.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
        const {
          left: left1
        } = container.value.getBoundingClientRect()
        const {
          left: left2
        } = currentItem.value.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.left = left + 'px'
        console.log(width)
      })
    })
    return {selected, titles, modelValue, currentItem, container,indicator,select}
  },
  components: {}
}

</script>
<style lang="less">
@blue: #67C23A;
@color: #333;
@border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: @color;
    border-bottom: 1px solid @border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: @blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: @blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>