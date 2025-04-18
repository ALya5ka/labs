<script setup>
import { computed } from 'vue'
import EmojiComponent from './EmojiComponent.vue'

const props = defineProps(['firstEmoji', 'secondEmoji'])
const mixedEmoji = computed(() => {
  if (props.firstEmoji && props.secondEmoji) {
    const [unicodeFirst, unicodeSecond] = [
      props.firstEmoji.unicode[0],
      props.secondEmoji.unicode[0],
    ].map((u) => u.replace('U+', '').toLowerCase())
    return `https://emk.vercel.app/s/${unicodeFirst}_${unicodeSecond}?size=48`
  }
  return null
})
</script>

<template>
  <div class="mixer-content">
    <div class="missing" v-if="!props.firstEmoji" />
    <EmojiComponent :emoji="props.firstEmoji" v-if="props.firstEmoji" /> +
    <div class="missing" v-if="!props.secondEmoji" />
    <EmojiComponent :emoji="props.secondEmoji" v-if="props.secondEmoji" /> =
    <img :src="mixedEmoji" v-if="mixedEmoji" />
  </div>
</template>

<style scoped>
.mixer-content {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-size: 4rem;
}

.missing {
  border: 2px solid;
  width: 4rem;
  height: 4rem;
  border-radius: 5px;
}
</style>
