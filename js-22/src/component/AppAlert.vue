<template>
  <div class="alert">
    <p class="alert-title">{{ title }}</p>
    <p>{{ text }}</p>
    <button class="btn" v-if="closable" @click="$emit('close')">
      Закрити
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    title: String,
    closable: {
      type: Boolean,
      default: false,
      required: false
    },
    type: {
      type: String,
      required: false,
      default: 'primary',
      validator(val) {
        return ['primary', 'danger', 'warning'].includes(val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
