// import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.vue'
import router from './router'
import store from './store/index'
import { createApp } from 'vue'
import './assets/base.css'
const app = createApp(App)


// Vue.use(BootstrapVue)
app.use(router)
app.use(store)
app.mount('#app')
// import "bootstrap/dist/js/bootstrap.js"