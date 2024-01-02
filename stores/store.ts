import { defineStore } from "pinia";
import type { Task } from '../interfaces/Task'

function generateUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

interface MyStoreState {
    tasks: Task[];
    editable: string;
}

export const useTaskStore = defineStore({
    id: "task-store",
    state: (): MyStoreState => ({
        tasks: [
            {
                uuid: generateUuid(),
                todo: "Do something nice for someone I care about",
                completed: false,
                isEdit: false,
            },
            {
                uuid: generateUuid(),
                todo: "Memorize the fifty states and their capitals",
                completed: false,
                isEdit: false,
            },
        ],
        // This state store actual uuid of editable task
        editable: '',
    }),
    getters: {
        getTaskByUuid: (state) => (uuid: string): Task | null => {
            return state.tasks.find((task) => task.uuid === uuid) || null;
        },
    },

    actions: {
        addTask(todo: string, completed: boolean, isEdit: boolean) {
            this.tasks.unshift({
                uuid: generateUuid(),
                todo,
                completed,
                isEdit
            })
        },
        markAsCompleted(t: Task) {
            const task = this.tasks.find((el) => el.uuid === t.uuid);

            if (task) {
                task.completed = true;
            } 
        },
        deleteTask(t: Task) {
            this.tasks = this.tasks.filter((el) => el.uuid !== t.uuid);
        },
        updateTask(todo: string){
            if(!this.editable || !todo) return
            const task = this.tasks.find((el) => el.uuid === this.editable);

            if (task) {
                task.todo = todo
                this.editable = ''
            } 
        },
        editTask(t: Task) {
            this.editable = t.uuid
        }
    }
})