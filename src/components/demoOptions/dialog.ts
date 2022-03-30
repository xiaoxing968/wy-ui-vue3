// dialog
const DIALOG_OPTION: Object = {
    name: 'dialog',
    title: 'Dialog 对话框',
    description: `弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。
对话框组件支持函数调用和组件调用两种方式。`,
    option: [
        {
            name: 'primary',
            title: '基础用法',
            introduction: '使用组件调用',
            description: `
         通过 <code>v-model:visible</code> 绑定对话框的打开状态，使用 <code>title</code> 和 <code>content</code> 属性定义标题和内容
        `,
            code: `
    <template>
      <wy-button @click="toggle">打开对话框</wy-button>
      <wy-dialog v-model:visible="show" title="标题" content="content"></wy-dialog>
    </template>

    <script lang="ts">
    
    import { WyDialog, WyButton } from 'wy-ui-v3'
    import { ref } from 'vue'
    
    export default {
      components: { WyDialog, WyButton },
      setup() {
        const show = ref(false)
        const toggle = () => {
          show.value = !show.value
        }
        return {
          showDialog,
          toggle
        }
      }
    }
    </script>

          `
        },
        {
            name: 'slots',
            title: '自定义内容',
            introduction: '',
            description: `通过 <code>slot</code> 具名插槽属性自定义对话框标题和内容`,
            code: `
    <template>
      <wy-button @click="toggle">自定义对话框</wy-button>
      <wy-dialog v-model:visible="visible">
        <template v-slot:title>
          <span>title</span>
        </template>
        <template v-slot:footer>
          <span>footer</span>
        </template>
        <p>通过slot传入内容~</p>
        <p>通过slot传入内容~</p>
        <p>通过slot传入内容~</p>
      </wy-dialog>
    </template>

        <script lang="ts">
    
    import { WyDialog, WyButton } from 'wy-ui-v3'
    import { ref } from 'vue'
    
    export default {
      components: { WyDialog, WyButton },
      setup() {
        const show = ref(false)
        const toggle = () => {
          show.value = !show.value
        }
        return {
          showDialog,
          toggle
        }
      }
    }
    </script>
          `
        },
        {
            name: 'event',
            title: '异步关闭',
            introduction: '对话框关闭前进行特定操作',
            description: `通过 <code>onCancel</code> 属性和 <code>onConfirm</code> 属性可以传入一个回调函数，在对话框关闭前进行特定操作；<code>onConfirm</code>传入的回调函数如果返回false，则对话框不关闭`,
            code: `
    <template>
      <wy-button @click="toggle('eg3')">异步关闭</wy-button>
      <wy-dialog v-model:visible="visible.eg3"
                title="删除" content="确认删除吗"
                :confirm="confirm"
                :on-cancel="cancel">
      </wy-dialog>
    </template>

    <script lang="ts">
    
   import { WyDialog, WyButton } from 'wy-ui-v3'
    import { ref } from 'vue'
    
    export default {
      components: { WyDialog, WyButton },
      setup() {
        const show = ref(false)
        const toggle = () => {
          show.value = !show.value
        }
         const confirm = () => {
          console.log('您暂时不能删除')
          return false
        }
        const cancel = () => {
          console.log('取消')
        }
        return {
          showDialog,
          toggle,
          confirm,
          cancel
        }
      }
    }
    </script>
          `
        },
        {
            name: 'function',
            title: '函数调用',
            introduction: '',
            description: `通过调用 <code>openDialog</code> 函数直接弹出对话框`,
            code: `
    <template>
      <wy-button @click="showDialog">函数调用</wy-button>
    </template>

    <script lang="ts">
    
   import { WyDialog, WyButton } from 'wy-ui-v3'
    import { ref } from 'vue'
    
    export default {
      components: { WyDialog, WyButton },
      setup() {
        const showDialog = () => {
         openDialog({
            title: '标题',
            content: '嗨',
            confirm: () => {
            console.log('confirm')
            return true
         },
         cancel: () => {
           console.log('cancel')
         },
         closeOnClickOverlay: false
      })
    }
        return {
          showDialog
        }
      }
    }
    </script>
          `
        }

    ]
}

export default DIALOG_OPTION
