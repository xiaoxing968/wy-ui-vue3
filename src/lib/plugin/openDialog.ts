import WyDialog from '../Dialog.vue'
import { createApp, h } from 'vue'

export const openDialog = ({
                               title = '',
                               content = '',
                               confirm = () => {},
                               cancel = () => {},
                               closeOnClickOverlay = true
                           }) => {
    const div =  document.createElement('div')
    document.body.appendChild(div)
    const close = () => {
        app.unmount(div)
        div.remove()
    }
    const app = createApp({
        render() {
            return h(
                WyDialog,
                {
                    visible: true,
                    title,
                    content,
                    confirm,
                    cancel,
                    closeOnClickOverlay,
                    'onUpdate:visible':(newVisible:boolean) => {
                        if (!newVisible) {
                            close()
                        }
                    }
                }
            )
        }
    })
    app.mount(div)
}
