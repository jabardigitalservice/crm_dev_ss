import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createChatWoot } from '@productdevbook/chatwoot/vue'

const chatwoot = createChatWoot({
  init: {
    // baseUrl: "https://9e0e-36-72-200-240.ngrok-free.app",
    baseUrl: "http://127.0.0.1:3000",
    websiteToken: "iTcF7Wjc4FVPP4V5uyhBEEVz",
  },
  settings: {
    locale: "en",
    position: "right",
    launcherTitle: "Tanya Kami!",
  },
  partytown: false,
});


const app = createApp(App)

app.use(router)
app.use(chatwoot)
app.mount('#app')
