<template>
    <div>
        <!-- List Group -->
        <Header />
        <div v-for="(task, index) in data" 
            class="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5"
            :class="{'bg-emerald-200': task.completed, 'bg-white': !task.completed }">
            <div class="px-8 py-4 flex gap-4">
                <Status :task="task"/>
                <div class="flex items-center w-full">
                    <div 
                        v-if="task.uuid === editable"
                        class="uppercase tracking-wide text-sm cursor-pointer w-full">
                        <input @keypress.enter="updateTask" v-model="newTodo" type="text" placeholder="Update task value" class="w-full bg-white rounded py-0 border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg">
                    </div>
                    <div v-else
                        @click="editTask(task)"
                        class="uppercase tracking-wide text-sm w-full" :class="{'cursor-pointer': !task.completed}">
                        {{ task.todo }}
                    </div>
                </div>
                <Options :task="task"/>
            </div>
        </div>
        <!-- End List Group -->
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useTaskStore } from '../../stores/store';
    import Header from '../../components/tasks/header.vue'
    import Options from '../../components/tasks/options.vue'
    import Status from '../../components/tasks/status.vue'
    import type { Task } from '../../interfaces/Task'

    // refs to store
    const taskStore = useTaskStore()
    const { tasks: data, editable } = storeToRefs(taskStore)

    // define local vars
    const newTodo = ref('')

    // Enable edit specific task
    const editTask = (task: Task) => {
        if(task.completed) return

        const taskToEdit = taskStore.getTaskByUuid(task.uuid);

        if (taskToEdit) {
            newTodo.value = taskToEdit.todo;
            taskStore.editTask(task);
        }
    }

    // Updatae task in store
    const updateTask = () => {
        taskStore.updateTask(newTodo.value)
        newTodo.value = ''
    }

</script>

<style lang="scss" scoped>

</style>