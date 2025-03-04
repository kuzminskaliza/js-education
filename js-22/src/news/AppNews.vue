<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <app-button @action="open" :text="isNewsOpen ? 'Закрити' : 'Відкрити'"></app-button>
    <button class="btn danger" v-if="wasRead" @click="unmark">
      Відміти не прочитані
    </button>
    <div v-if="isNewsOpen">
      <hr/>
      <p>{{ content }}</p>
      <button v-if="!wasRead" class="btn primary" @click="mark">Прочитати новину</button>


      <app-news-list></app-news-list>
    </div>

  </div>
</template>
<script>
import AppButton from "./AppButton.vue";
import AppNewsList from "./AppNewsList.vue";
export default {
  props: {
    wasRead: Boolean,
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
  emits: {
    'open-news': null,
    'read-news'(id) {
      if (id) {
        return true
      }
      console.warn('Немає параметра id для emit read-news')
      return false
    }
  },
  data() {
    return {
      isNewsOpen: this.isOpen,
      openedAt: null
    }
  },
  computed: {},
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news', this.id)
      }
    },
    mark() {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    },
    unmark() {
      this.$emit('unmark', this.id)
    }
  },
  components: {
    AppButton,
    AppNewsList,
  }
}
</script>
