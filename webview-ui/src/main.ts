import { createApp } from 'vue'
import PrimeVue from 'primevue/config'

import App from './App.vue'

// Import de bibliotecas para habilitar o web-component da vscode no App
import '@vscode-elements/elements'

const app = createApp(App)
app.use(PrimeVue)

app.mount('#app')
