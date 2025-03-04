<template>
  <div class="container">
    <form class="card" @submit.prevent="createPerson">
      <h2>Робота з базою даних</h2>
      <div class="form-control">
        <label for="name">Ім'я</label>
        <input type="text" id="name" v-model.trim="name">
      </div>
      <button class="btn primary" :disabled="name.length === 0">Створити людину</button>
    </form>

    <ul class="card">
      <li v-for="person in people" :key="person.id">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      people: []
    };
  },
  methods: {
    async createPerson() {
      if (!this.name) return;

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: this.name })
        });

        const newPerson = await response.json();
        this.people.push(newPerson);
        this.name = '';
      } catch (error) {
        console.error('Помилка при створенні:', error);
      }
    },
    async fetchPeople() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        this.people = await response.json();
      } catch (error) {
        console.error('Помилка при отриманні:', error);
      }
    }
  },
  mounted() {
    this.fetchPeople();
  }
};
</script>

<style lang="scss" scoped>

</style>
