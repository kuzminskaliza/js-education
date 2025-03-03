<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Aктуальні новини {{ now }}</h2>
      <span>Відкрито: {{ openRate }} </span>
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
      :content="item.content"
      @open-news="openNews(item.id)">
    </app-news>
  </div>
</template>

<script>
import AppNews from "./AppNews";

export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        {
          title: 'Новина 1',
          id: 1,
          isOpen: false,
          content: 'Текст першої новини'
        },
        {
          title: 'Новина 2',
          id: 2,
          isOpen: false,
          content: 'Текст другої новини'
        }
      ],
      openRate: 0,
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
    }
  }
}
</script>

