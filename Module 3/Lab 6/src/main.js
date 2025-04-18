import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import EmojiComponent from './components/EmojiComponent.vue'
import EmojiList from './components/EmojiList.vue'
import EmojiMixer from './components/EmojiMixer.vue'

const app = createApp(App)
app.component('EmojiComponent', EmojiComponent)
app.component('EmojiList', EmojiList)
app.component('EmojiMixer', EmojiMixer)
app.mount('#app')
