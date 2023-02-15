import { createApp } from 'vue'
import router from '@/router'
import App from '@/App.vue'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)
app.use(router)
app.use(vue3GoogleLogin, {
  clientId: '1020549635345-hqm72bqnl0jq1rqr1fnrc0uvmala2vfo.apps.googleusercontent.com'
})
app.mount('#app')
