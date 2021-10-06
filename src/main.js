import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vSelect from 'vue-select'

createApp(App).use(router).use(store).use(vSelect).mount('#app')
