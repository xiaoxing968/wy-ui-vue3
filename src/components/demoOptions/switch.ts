export default {
    name: 'switch',
    title: 'Switch 开关',
    description: '用于在打开和关闭状态之间进行切换',
    option: [
        {
            name: 'primary',
            title: '基础用法',
            introduction: '基础的开关用法',
            description: `
         通过 <code>v-model</code> 绑定开关的选中状态。
        `,
            code: `
    <template>
      <wy-switch v-model:value="checked"></wy-switch>
    </template>

    <script lang="ts">
    
    import { WySwitch } from 'wy-ui-v3'
    import {ref} from 'vue'
    
    export default {
      components: { WySwitch },
      setup() {
        const checked = ref(false)
        return { checked }
      }
    }
    </script>

          `
        },
        {
            name: 'disabled',
            title: '禁用状态',
            introduction: '',
            description: `使用 <code>disabled</code> 属性来禁用开关，禁用状态下开关不可点击`,
            code: `
    <template>
      <wy-switch v-model:value="checked" disabled></wy-switch>
    </template>

    <script lang="ts">
    
    import { XSwitch } from 'wy-ui-v3'
    import {ref} from 'vue'
    
    export default {
      components: { XSwitch },
      setup() {
        const checked = ref(false)
        return { checked }
      }
    }
    </script>
          `
        },
        {
            name: 'loading',
            title: '加载状态',
            introduction: '',
            description: `使用 <code>loading</code> 设置开关为加载状态，加载状态下开关不可点击`,
            code: `
    <template>
      <wy-switch v-model:value="checked" loading></wy-switch>
    </template>

    <script lang="ts">
    
    import { XSwitch } from 'wy-ui-v3'
    import {ref} from 'vue'
    
    export default {
      components: { XSwitch },
      setup() {
        const checked = ref(false)
        return { checked }
      }
    }
    </script>
          `
        }
    ]
}