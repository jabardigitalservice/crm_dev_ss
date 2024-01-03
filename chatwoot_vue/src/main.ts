import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createChatWoot } from '@productdevbook/chatwoot/vue'


const chatwoot = createChatWoot({
  init: {
    baseUrl: import.meta.env.VITE_BASE_URL,
    websiteToken: import.meta.env.VITE_TOKEN,
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
