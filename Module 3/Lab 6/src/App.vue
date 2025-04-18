<script setup>
import { onMounted, ref } from 'vue'
import EmojiMixer from './components/EmojiMixer.vue'

const emojis = ref([])

const selectedEmojis = ref([null, null])

async function getEmojis() {
  try {
    const response = await fetch('https://emojihub.yurace.pro/api/all', {
      method: 'GET',
    })
    const body = await response.json()
    emojis.value = body
  } catch (e) {
    console.error(e)
  }
}

onMounted(async () => {
  getEmojis()
})

function selectEmojis(emoji, slot) {
  selectedEmojis.value[slot] = emoji
  console.log(selectedEmojis.value)
}
</script>

<template>
  <h1 class="logo">Emoji mixer</h1>
  <div class="container">
    <div class="middle">
      <div class="mixer">
        <EmojiList :values="emojis" @select-emoji="selectEmojis($event, 0)" />
        <EmojiMixer :first-emoji="selectedEmojis[0]" :second-emoji="selectedEmojis[1]" />
        <EmojiList :values="emojis" @select-emoji="selectEmojis($event, 1)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: table;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.middle {
  display: table-cell;
  vertical-align: middle;
}
.mixer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.logo {
  /* text-align: center; */
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
  -webkit-background-clip: text;
  color: rgba(255, 255, 255);
  width: fit-content;
  border-radius: 5px;
  -webkit-text-fill-color: transparent;
  font-size: 6rem;
}
</style>
