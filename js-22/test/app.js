Vue.createApp({
    data() {
        return {
            title: 'Заголовок',
            myHtml: '<h1>Vue 3 App</h1>',
            person: {
                firstName: 'Liza',
                lastname: 'Kuzmynska',
                age: 20,
                city: 'Paris',
                petName: 'Bella'
            },
            items: [1, 2, 3, 4, 5, 6]
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    },
    methods: {
        addItem(event) {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
            console.log(event.key)
        },
        remove (i) {
            this.items.splice(i, 1)
        },
        log(item) {
            console.log('Log item: ', item)
        }
    }
}).mount('#app')