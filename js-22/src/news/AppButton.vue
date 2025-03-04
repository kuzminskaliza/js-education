<template>
  <button class="btn" :class="color" @click="$emit('action')">
{{text}}
  </button>
</template>

<script>
export default {
  emits: ['action'],
  props: {
    text: {
      type: String,
      required: true
    },

    color: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'primary', 'danger'].includes(value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
