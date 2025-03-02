const App = {
    data() {
        return {
            getInput: '',
            tasks: [],
            filter: 'all'
        }
    },
    computed: {
        filteredTasks() {
            if (this.filter === 'done') {
                return this.tasks.filter(task => task.done);
            } else if (this.filter === 'not_done') {
                return this.tasks.filter(task => !task.done)
            }
            return this.tasks;
        }
    },
    methods: {
        addNewTask() {
            if (this.getInput.trim() !== '') {
                this.tasks.push({
                    text: this.getInput,
                    done: false
                });
                this.getInput = '';
                this.saveToLocalStorage();
            }
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
            this.saveToLocalStorage();
        },
        setFilter(filterType) {
            this.filter = filterType;
        },
        clearCompletedTasks() {
            this.tasks = this.tasks.filter(task => !task.done);
            this.saveToLocalStorage();
        },
        saveToLocalStorage() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },
        loadFromLocalStorage() {
            const data = localStorage.getItem('tasks');
            if (data) {
                this.tasks = JSON.parse(data);
            }
        }
    },
    created() {
        this.loadFromLocalStorage()
    }
}

const app = Vue.createApp(App).mount('#app')