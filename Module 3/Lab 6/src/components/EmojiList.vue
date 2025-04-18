<script setup>
import EmojiComponent from './EmojiComponent.vue'

const emojis = defineProps(['values'])

const emit = defineEmits(['select-emoji'])

function selectEmoji(emoji) {
  emit('select-emoji', emoji)
}
</script>

<template>
  <div class="emojis-list">
    <div class="no-name"></div>
    <EmojiComponent
      v-for="emoji in emojis.values"
      :key="emoji.name"
      :emoji="emoji"
      @click="selectEmoji(emoji)"
      class="emoji-item"
    />
  </div>
</template>

<style scoped>
.emojis-list {
  justify-content: space-between;
  display: flex;
  overflow-y: scroll;
  width: 40vw;
  height: 40vh;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 2rem;
  margin-right: 10px;
  margin-left: 10px;
  scrollbar-width: none;

  border: 3px solid rgb(255, 99, 71);
  border-radius: 5px;
}
</style>
