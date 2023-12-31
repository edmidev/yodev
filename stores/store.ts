import { defineStore } from "pinia";

export const useTaskStore = defineStore({
    id: "task-store",
    state: () => {
        return {
            tasks: [
                {
                    todo: "Do something nice for someone I care about",
                    completed: false,
                    isEdit: false
                },
                {
                    todo: "Memorize the fifty states and their capitals",
                    completed: false,
                    isEdit: false
                }
            ]
        }
    },

    actions: {
        addTask(todo: string, completed: boolean, isEdit: boolean) {
            this.tasks.push({
                todo,
                completed,
                isEdit
            })
        },
        markAsCompleted(index: number) {
            this.tasks[index].completed = true
        },
        deleteTask(index: number) {
            this.tasks.splice(index, 1)
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTaskStore, import.meta.hot))
}