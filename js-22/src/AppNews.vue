<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="open">{{
        isNewsOpen ? 'Закрити' : 'Відкрити'
      }}
    </button>
    <p v-if="isNewsOpen">{{ content }}</p>
    <span v-if="isNewsOpen" class="date">Відкрито: {{formatedDate}}</span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      Number,
      required: true
    },
    isOpen: {
      Boolean,
      required: false,
      default: false,
      validator(value) {
        return value === true || value === false
      }
    },
    content: {
      type: String,
      required: false,
      default: 'Новини відстуні'
    }
  },
  emits: [
    'open-news'
  ],
  data() {
    return {
      isNewsOpen: this.isOpen,
      openedAt: null
    }
  },
  computed: {
    formatedDate(){
      return this.openedAt ? new Date(this.openedAt).toLocaleString() : ''
    }
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news', this.id)
      }
    }
  }
}
</script>
