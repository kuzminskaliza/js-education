<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Aктуальні новини {{ now }}</h2>
      <span>Відкрито: {{ openRate }} | Прочитано {{ readRate }}</span>
      <hr/>
      <button class="btn" @click="sortNews">Сортувати за алфавітом</button>
      <div>
        <input v-model="newTitle" placeholder="Назва новини" class="input"/>
        <textarea v-model="newContent" placeholder="Текст Новини" class="textarea"></textarea>
        <button class="btn" @click="addNews">Додати новину</button>
      </div>
    </div>

    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      :was-read="item.wasRead"
      :content="item.content"
      @open-news="openNews(item.id)"
      @read-news="readNews"
      @unmark="unreadNews">
    </app-news>
  </div>
</template>

<script>
import AppNews from "./AppNews.vue";
import {resolveTransitionHooks} from "vue";

export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        {
          title: 'Новина 1',
          id: 1,
          isOpen: false,
          content: 'Текст першої новини',
          wasRead: false
        },
        {
          title: 'Новина 2',
          id: 2,
          isOpen: false,
          content: 'Текст другої новини',
          wasRead: false
        }
      ],
      openRate: 0,
      readRate: 0,
      newTitle: '',
      newContent: ''
    }
  },
  components: {
    'app-news': AppNews
  },
  methods: {
    openNews(id) {
      this.openRate++
      console.log(`Новина з id ${id} була відкрита`)
    },
    readNews(id) {
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++
    },
    sortNews() {
      this.news.sort((a, b) => a.title.localeCompare(b.title))
    },
    addNews() {
      if (this.newTitle.trim() && this.newContent.trim()) {
        this.news.push({
          title: this.newTitle,
          content: this.newContent,
          id: Date.now(),
          isOpen: false
        })
        this.newTitle = ''
        this.newContent = ''
      }
    },
    unreadNews(id) {
      const news = this.news.find(news => news.id === id)
      news.wasRead = false
      this.readRate--
    }
  },
  provide() {
    return {
      title: 'Список всіх новин',
      news: this.news
    }

  }
}
</script>

