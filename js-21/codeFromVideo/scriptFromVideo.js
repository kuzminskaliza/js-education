const App = {
    data() {
        return {
            counter: 0,
            title: 'Рахунок',
            title2: 'Список закладок',
            placeholder: 'Уведіть назву нотатки',
            inputValue: '',
            notes: ['Нотатка 1', 'Нотатка 2', 'Нотатка 134']
        }

    },
    methods: {
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },

        removeNote(idx) {
            this.notes.splice(idx, 1)
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        },
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ''
            }
        }
    }
}

const app = Vue.createApp(App).mount('#app')
