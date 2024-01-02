<template>
    <div class="max-w-md mx-auto overflow-hidden md:max-w-2xl m-5 flex justify-between">
            <Title text="Tasks list" />
            <button v-if="!showForm" @click="showTaskForm" class="flex text-white bg-emerald-500 border-0 py-2 px-8 focus:outline-none hover:bg-emerald-600 rounded text-sm self-center">
                New task
            </button>
        </div>
        <div class="max-w-md mx-auto overflow-hidden md:max-w-2xl m-5 flex justify-between gap-4" v-if="showForm">
            <input 
                @keypress.enter="addTask" 
                v-model="newTask" 
                type="text" 
                placeholder="insert task to do" 
                class="w-full bg-white rounded py-0 border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-sm outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg">
            <div class="flex gap-4">
                <button @click="addTask" id="inputTask" class="flex text-white bg-emerald-500 border-0 py-2 px-4 focus:outline-none hover:bg-emerald-600 rounded text-sm">
                    Save
                </button>
                <button @click="cancelAddTask" id="inputTask" class="flex text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-sm">
                    Cancel
                </button>
            </div>
        </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useTaskStore } from '../../stores/store';
    import Title from '../home/title.vue'

    // refs to store
    const taskStore = useTaskStore()

    // define local vars
    const showForm = ref(false)
    const newTask = ref('')

    // Add a new task to the store
    const addTask = () => {
        if (!newTask.value) return
        showForm.value = false
        taskStore.addTask(newTask.value, false, false)
        newTask.value = ''
    }

    // Enable new task form
    const showTaskForm = () => {
        showForm.value = true
    }

    // Disable new task form
    const cancelAddTask = () => {
        showForm.value = false
        newTask.value = ''
    }

</script>