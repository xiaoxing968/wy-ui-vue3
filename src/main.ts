import {createApp} from 'vue'
import App from './App.vue'
import './lib/wy.less'
import "./index.less";
import "./iconfont.css";
import {router} from "./router"
import 'github-markdown-css'

const app = createApp(App)
app.use(router)
app.mount('#app')