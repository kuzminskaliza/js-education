<template>
  <div class="container">
    <app-alert
      v-if="alert"
      text="Це важливе повідомлення, будьте уважні!"
      title="Увага"
      :closable="true"
      @close="alert = false"
    >

    </app-alert>
    <div class="card">
      <button class="btn" @click="toogleAlert">
        {{ alert ? 'Закрити ' : 'Показати '}} повідомлення
      </button>
    </div>
  </div>
</template>

<script>
import AppAlert from "./AppAlert";

export default {
  data() {
    return {
      alert: false
    }
  },
  methods: {
    toogleAlert() {
      this.alert = !this.alert
    }
  },
  components: {
    AppAlert
  }
}
</script>

<style lang="scss" scoped>

</style>
