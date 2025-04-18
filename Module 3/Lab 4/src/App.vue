<script setup>
import { computed, ref } from 'vue'

const history = ref([])
const title = ref('')
const amount = ref(0)

const incomeBalance = computed(() => {
  return history.value.filter((item) => item.amount > 0).reduce((sum, item) => sum + item.amount, 0)
})
const outcomeBalance = computed(() => {
  return history.value.filter((item) => item.amount < 0).reduce((sum, item) => sum + item.amount, 0)
})
const totalBalance = computed(() => {
  return outcomeBalance.value + incomeBalance.value
})
const isNameCorrect = computed(() => {
  return title.value.length > 0
})

let showBalance = ref(false)

function addNewElement() {
  history.value.push({
    text: title.value,
    amount: amount.value,
  })
  showBalance.value = true
}
</script>

<template>
  <div class="container">
    <div class="balance" v-if="showBalance">
      <p>Баланс: {{ totalBalance }}</p>
      <p>Доходы: {{ incomeBalance }}</p>
      <p>Расходы: {{ outcomeBalance }}</p>
    </div>
    <div v-if="!showBalance">Вы не совершали финансовых операций</div>
    <form @submit.prevent="addNewElement">
      <input
        type="text"
        placeholder="Введите название"
        name="name"
        id="name"
        v-model.trim="title"
      />
      <input
        type="number"
        placeholder="Введите денежную сумму"
        name="cost"
        id="cost"
        v-model.number="amount"
      />
      <button type="submit" class="submit-btn" :disabled="!isNameCorrect">Добавить</button>
    </form>
    <div class="content">
      <div v-for="element in history" v-bind:key="element.id">
        <div class="element">{{ element.text }} : {{ element.amount }}<br /></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.container form {
  display: flex;
  flex-direction: column;
}
.balance {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.container input {
  text-align: center;
  margin-bottom: 5px;
  border-radius: 10px;
  font-size: 1rem;
  padding: 10px;
}
.submit-btn {
  font-size: 1rem;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 2rem;
  text-align: center;
  cursor: pointer;
}
.submit-btn:hover {
  background: #2f6d31;
  transition: 0.3s;
}
.submit-btn:disabled {
  background: #5b5b5b;
}
.element {
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  padding: 5px;
  text-align: left;
  background-color: #2c2c2c;
}
</style>
