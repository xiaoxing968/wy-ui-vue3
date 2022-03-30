// tabs
const TABS_OPTION:Object = {
    name: 'tabs',
    title: 'Tabs 标签页',
    description: '分隔内容上有关联的数据内容',
    option: [
        {
            name: 'primary',
            title: '基础用法',
            introduction: '',
            description: `
         通过 <code>Tabs</code> 和 <code>Tab</code> 组件实现基础的选项卡，通过 <code>v-model</code> 指定选中的标签。
        `,
            code: `
    <template>
      <wy-tabs v-model="selectTab">
        <wy-tab title="导航1" name="t1">tab1</wy-tab>
        <wy-tab title="导航2" name="t2">tab2</wy-tab>
        <wy-tab title="导航3" name="t3">tab3</wy-tab>
        <wy-tab title="导航4" name="t4">tab4</wy-tab>
      </wy-tabs>
    </template>

    <script lang="ts">
    
    import { WyTabs, WyTab } from 'wy-ui-v3'
    import {ref} from 'vue'
    
    export default {
      components: { WyTabs, WyTab },
      setup() {
        const selectTab = ref<string>('t1')
        return { selectTab }
      }
    }
    </script>

          `
        },
    ]
}

export default TABS_OPTION
