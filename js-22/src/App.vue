<template>
  <div class="container">
    <div class="card">
      <h1>Генератор порад</h1>

      <div class="form-control">
        <label for="category">Виберіть категорію:</label>
        <select v-model="selectedCategory">
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>

      <button class="btn" @click="generateAdvice">Отримати пораду</button>
    </div>

    <div v-if="showAlert" class="alert">
      <p class="alert-title">Порада:</p>
      <p>{{ advice }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const categories = ref(['Мотивація', 'Продуктивність', 'Здоров\'я']);
const selectedCategory = ref(categories.value[0]);
const advice = ref('');
const showAlert = ref(false);

const advices = {
  'Мотивація': [
    'Кожен день – це нова можливість.',
    'Вір у себе і йди до мети!',
    'Невдачі – це лише частина шляху до успіху.'
  ],
  'Продуктивність': [
    'Плануй свій день заздалегідь.',
    'Використовуй техніку Pomodoro.',
    'Зосередься на головних задачах.'
  ],
  'Здоров\'я': [
    'Пий більше води!',
    'Роби зарядку щоранку.',
    'Дотримуйся режиму сну.'
  ]
};

const generateAdvice = () => {
  const adviceList = advices[selectedCategory.value];
  advice.value = adviceList[Math.floor(Math.random() * adviceList.length)];
  showAlert.value = true;

  setTimeout(() => {
    showAlert.value = false;
  }, 4000);
};

watch(selectedCategory, generateAdvice);
</script>
