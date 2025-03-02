Vue.createApp({
    data() {
        return {
            tooltip: 'Привіт, це підказка',
            isVisible: true,
            items: ['Банан', 'Апельсин', 'Вишня'],
            x: 0,
            y: 0,
            message: "",
            itemName: null,
            itemNumber: null,
            shoppingList: [
                { name: 'Tomatoes', number: 5 }
            ],
            user: {
                name: "Ліза",
                age: 20,
                city: "Київ"
            }
        }
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
        showAlert() {
            alert('Ви натиснули кнопку');
        },
        updateCoords(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        submitForm() {
            alert('Форма відправлена (але браузер не перезавантажився)');
        },
        addItem(){
            let item = {
                name: this.itemName,
                number: this.itemNumber
            }
            this.shoppingList.push(item)
            this.itemName = null
            this.itemNumber = null
        }
    }
}).mount('#app');
