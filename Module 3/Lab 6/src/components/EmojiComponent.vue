<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  emoji: {
    name: String,
    category: String,
    group: String,
    htmlCode: Array,
    unicode: Array,
  },
})
</script>
<template>
  <div class="emoji-content" v-html="props.emoji.htmlCode[0]" />
</template>

<style scoped>
.emoji-content {
  margin: 2px;
  text-align: center;
}
.emoji-content:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.452);
  transition: 0.1s;
}
</style>
