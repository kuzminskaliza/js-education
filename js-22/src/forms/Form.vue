<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue розробника</h1>
      <div class="form-control" :class="{invalid: errors.name}">
        <label for="name">Як тебе звати?</label>
        <input
          type="text"
          id="name"
          placeholder="Увведіть ваше імʼя"
          v-model.trim="name">
        <small v-if="errors.name">{{errors.name}}</small>
      </div>

      <div class="form-control">
        <label for="age">Оберіть ваш вік</label>
        <input
          type="number"
          id="age"
          max="70"
          v-model.number="age"

        >
      </div>
      <div class="form-control">
        <label for="city">Твоє місто</label>
        <select id="city" v-model="city">
          <option value="odesa">Одеса</option>
          <option value="kyiv">Київ</option>
          <option value="kharkiv">Харків</option>
          <option value="lviv">Львів</option>
          <option value="cherkasy">Черкаси</option>
        </select>
      </div>
      <div class="form-checkbox">
        <span class="label">Готовий до переїдзу в Токіо?</span>
        <div class="checkbox">
          <label>
            <input type="radio" v-model="relocate" name="trip" value="yes"/> Так
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="radio" v-model="relocate" name="trip" value="no"/> Ні
          </label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Що знаєш про Vue</span>
        <div class="checkbox">
          <label>
            <input type="checkbox" v-model="skills" value="vuex" name="skills"> Vuex
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" v-model="skills" value="cli" name="skills"> Vue CLI
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" v-model="skills" value="router" name="skills"> Vue Router
          </label>
        </div>
      </div>
      <div class="form-checkbox">
        <div class="checkbox">
          <label>
            <input type="checkbox" v-model="skills" value="vuex"> Погоджуюсь, на обробку власних даних
          </label>
        </div>
      </div>
      <button type="submit" class="btn primary">Відправити</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: 23,
      city: 'kyiv',
      relocate: null,
      skills: [],
      agree: false,
      errors: {
        name: null
      }
    }
  },
  methods: {
    formIsValid() {
      let isValid = true
      if (this.name.length === 0) {
        this.errors.name = 'Імʼя не може бути пустим'
        isValid = false
      } else {
        this.errors.name = null
      }
      return isValid
    },
    submitHandler(event) {
      if (this.formIsValid()) {
        console.group('Form data')
        console.log('Name', this.name)
        console.log('Age', this.age)
        console.log('City', this.city)
        console.log('To Tokyo', this.relocate)
        console.log('Skills', this.skills)
        console.log('Agree', this.agree)
        console.groupEnd()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-control small {
  color: red;
}
.form-control.invalid input {
  border-color: red;
}
</style>
