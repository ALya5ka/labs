<script setup>
import { computed, ref } from 'vue'

const user_info = ref({
  firstName: '',
  lastName: '',
  gender: '',
  password: '',
  confirmPassword: '',
})

const showPassword = ref(false)

const isPasswordMatch = computed(() => {
  return user_info.value.password === user_info.value.confirmPassword
})

const showData = ref(false)

const handleSubmit = () => {
  console.log('Данные пользователя:', user_info)
  showData.value = true
}
</script>

<template>
  <div class="registration">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="firstName">Имя: </label>
        <input type="text" id="firstName" v-model="user_info.firstName" placeholder="Введите имя" />
      </div>

      <div class="form-group">
        <label for="lastName">Фамилия: </label>
        <input
          type="text"
          id="lastName"
          v-model="user_info.lastName"
          placeholder="Введите фамилию"
        />
      </div>

      <div class="form-group">
        <label>Пол:</label>
        <div class="radio-group">
          <label> <input type="radio" value="male" v-model="user_info.gender" /> Мужской </label>
          <label> <input type="radio" value="female" v-model="user_info.gender" /> Женский </label>
        </div>
      </div>

      <div class="form-group">
        <label for="password">Пароль: </label>
        <input
          :type="showPassword ? 'text' : 'password'"
          id="password"
          v-model="user_info.password"
          placeholder="Введите пароль"
        />
      </div>

      <div class="form-group">
        <label for="confirmPassword">Подтвердите пароль: </label>
        <input
          :type="showPassword ? 'text' : 'password'"
          id="confirmPassword"
          v-model="user_info.confirmPassword"
          placeholder="Повторите пароль"
        />
      </div>

      <button
        type="button"
        class="show-password-btn"
        @mousedown="showPassword = true"
        @mouseup="showPassword = false"
      >
        Показать пароль
      </button>

      <button type="submit" class="submit-btn" :disabled="!isPasswordMatch">
        Зарегистрироваться
      </button>
    </form>

    <div class="user-data" v-if="showData">
      <h3>Регистрационные данные:</h3>
      <p>
        Пользователь: {{ user_info.firstName }} {{ user_info.lastName }}.
        {{ user_info.gender === 'male' ? 'Мужского' : 'Женского' }} пола.
      </p>
    </div>
  </div>
</template>

<style>
.registration {
  max-width: 400px;
  margin: 2rem auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.radio-group {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.submit-btn {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

.submit-btn:hover {
  transition: 0.1s;
  background-color: #45a049;
}

.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.show-password-btn {
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;
  width: 100%;
}

.show-password-btn:hover {
  transition: 0.1s;
  background-color: #0056b3;
}

.user-data {
  margin-top: 2rem;
}

.user-data p {
  font-size: 1.1rem;
  color: #333;
  margin: 1rem 0;
  padding: 0.5rem;
  background-color: #f8f9fa;
  border-radius: 4px;
}
</style>
