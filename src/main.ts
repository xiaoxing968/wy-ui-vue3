import {createApp} from 'vue'
import App from './App.vue'
import './lib/wy.less'
import "./index.less";
import {router} from "./router"

const app = createApp(App)
app.use(router)
app.mount('#app')