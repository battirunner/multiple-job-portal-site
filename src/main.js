import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/tailwind.css'; //Here

createApp(App).use(router).mount('#app')
