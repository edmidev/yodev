<template>
    <div>
        <!-- List Group -->
        <div class="max-w-md mx-auto overflow-hidden md:max-w-2xl m-5 flex justify-between">
            <p class="text-emerald-500 text-4xl">
                Tasks list
            </p>
            <button v-if="!showForm" @click="showForm = true" class="flex text-white bg-emerald-500 border-0 py-2 px-8 focus:outline-none hover:bg-emerald-600 rounded text-sm">
                New task
            </button>
        </div>
        <div class="max-w-md mx-auto overflow-hidden md:max-w-2xl m-5 flex justify-between gap-4" v-if="showForm">
            <input @keypress.enter="addTask" v-model="newTask" type="text" placeholder="insert task to do" class="w-full bg-white rounded py-0 border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg">
            <button @click="addTask" class="flex text-white bg-emerald-500 border-0 py-2 px-8 focus:outline-none hover:bg-emerald-600 rounded text-sm">
                Save task
            </button>
        </div>
        <div v-for="(task, index) in data" class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
            <div class="px-8 py-4 flex gap-4">
                <div class="pr-4 text-center" :class="{'text-red-400': !task.completed, 'text-emerald-400': task.completed}">
                    <p class="text-4xl font-bold">{{ index + 1 }}</p>
                    <span class="text-sm">{{ task.completed ? 'Completed!' : 'Incomplete' }}</span> 
                </div>
                <div class="flex items-center w-full">
                    <div 
                        class="uppercase tracking-wide text-sm cursor-pointer">
                        {{ task.todo }}
                    </div>
                </div>
                <div class="pr-4 ml-auto flex gap-2 items-center">
                    <button type="button" title="Mark as completed" @click="markAsCompleted(index)" v-if="!task.completed">
                        <svg style="width: 20px; height: 20px; fill: currentColor; color: green;" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 472.37"><path fill-rule="nonzero" d="M145.33 172.6l57.21-.75c2.76-.04 5.33.74 7.51 2.1 11.85 6.86 23.04 14.67 33.45 23.48 5.86 4.97 11.53 10.28 16.99 15.96 19.67-30.56 43.04-61.58 67.52-90.78 31.9-38.04 65.91-73.2 96.22-100.37 2.65-2.37 5.97-3.53 9.26-3.53l44.22-.07c7.7 0 13.95 6.25 13.95 13.95 0 3.86-1.56 7.34-4.09 9.87-40.58 45.12-82.2 96.78-119.92 149.72-34.92 49.02-66.55 99.17-90.93 146.26-3.52 6.83-11.92 9.51-18.75 5.99a13.796 13.796 0 01-6.23-6.5c-13.36-28.57-29.28-54.8-48.23-78.2-18.93-23.37-41-44.09-66.69-61.72-6.35-4.33-7.98-13-3.65-19.35 2.82-4.14 7.49-6.27 12.16-6.06zM62.55 0h270.16c-19.14 19.72-35.72 38.96-49.97 57.45H62.55c-1.42 0-2.71.57-3.64 1.46a5.27 5.27 0 00-1.46 3.64v347.26c0 1.34.6 2.6 1.54 3.55.96.95 2.23 1.56 3.56 1.56h386.89c1.29 0 2.55-.62 3.52-1.58.97-.97 1.59-2.24 1.59-3.53V213.59c20.82-8.61 40.4-17.48 57.45-25.81v222.03c0 17.14-7.11 32.82-18.43 44.14-11.33 11.33-26.99 18.42-44.13 18.42H62.55c-17.13 0-32.83-7.06-44.17-18.4C7.08 442.67 0 427.03 0 409.81V62.55C0 45.4 7.04 29.78 18.35 18.46l.11-.11C29.78 7.04 45.4 0 62.55 0z"/></svg>
                    </button>
                    <button type="button" title="Delete" @click="deleteTask(index)">
                        <svg style="width: 20px; height: 20px; fill: currentColor; color: red;" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="108.294px" height="122.88px" viewBox="0 0 108.294 122.88" enable-background="new 0 0 108.294 122.88" xml:space="preserve"><g><path d="M4.873,9.058h33.35V6.2V6.187c0-0.095,0.002-0.186,0.014-0.279c0.075-1.592,0.762-3.037,1.816-4.086l-0.007-0.007 c1.104-1.104,2.637-1.79,4.325-1.806l0.023,0.002V0h0.031h19.884h0.016c0.106,0,0.207,0.009,0.309,0.022 c1.583,0.084,3.019,0.76,4.064,1.81c1.102,1.104,1.786,2.635,1.803,4.315l-0.003,0.021h0.014V6.2v2.857h32.909h0.017 c0.138,0,0.268,0.014,0.401,0.034c1.182,0.106,2.254,0.625,3.034,1.41l0.004,0.007l0.005-0.007 c0.851,0.857,1.386,2.048,1.401,3.368l-0.002,0.032h0.014v0.032v10.829c0,1.472-1.195,2.665-2.667,2.665h-0.07H2.667 C1.195,27.426,0,26.233,0,24.762v-0.063V13.933v-0.014c0-0.106,0.004-0.211,0.018-0.315v-0.021 c0.089-1.207,0.624-2.304,1.422-3.098l-0.007-0.002C2.295,9.622,3.49,9.087,4.81,9.069l0.032,0.002V9.058H4.873L4.873,9.058z M77.79,49.097h-5.945v56.093h5.945V49.097L77.79,49.097z M58.46,49.097h-5.948v56.093h5.948V49.097L58.46,49.097z M39.13,49.097 h-5.946v56.093h5.946V49.097L39.13,49.097z M10.837,31.569h87.385l0.279,0.018l0.127,0.007l0.134,0.011h0.009l0.163,0.023 c1.363,0.163,2.638,0.789,3.572,1.708c1.04,1.025,1.705,2.415,1.705,3.964c0,0.098-0.009,0.193-0.019,0.286l-0.002,0.068 l-0.014,0.154l-7.393,79.335l-0.007,0.043h0.007l-0.016,0.139l-0.051,0.283l-0.002,0.005l-0.002,0.018 c-0.055,0.331-0.12,0.646-0.209,0.928l-0.007,0.022l-0.002,0.005l-0.009,0.018l-0.023,0.062l-0.004,0.021 c-0.118,0.354-0.264,0.698-0.432,1.009c-1.009,1.88-2.879,3.187-5.204,3.187H18.13l-0.247-0.014v0.003l-0.011-0.003l-0.032-0.004 c-0.46-0.023-0.889-0.091-1.288-0.202c-0.415-0.116-0.818-0.286-1.197-0.495l-0.009-0.002l-0.002,0.002 c-1.785-0.977-2.975-2.882-3.17-5.022L4.88,37.79l-0.011-0.125l-0.011-0.247l-0.004-0.116H4.849c0-1.553,0.664-2.946,1.707-3.971 c0.976-0.955,2.32-1.599,3.756-1.726l0.122-0.004v-0.007l0.3-0.013l0.104,0.002V31.569L10.837,31.569z M98.223,36.903H10.837 v-0.007l-0.116,0.004c-0.163,0.022-0.322,0.106-0.438,0.222c-0.063,0.063-0.104,0.132-0.104,0.179h-0.007l0.007,0.118l7.282,79.244 h-0.002l0.002,0.012c0.032,0.376,0.202,0.691,0.447,0.825l-0.002,0.004l0.084,0.032l0.063,0.012h0.077h72.695 c0.207,0,0.399-0.157,0.518-0.377l0.084-0.197l0.054-0.216l0.014-0.138h0.005l7.384-79.21L98.881,37.3 c0-0.045-0.041-0.111-0.103-0.172c-0.12-0.118-0.286-0.202-0.451-0.227L98.223,36.903L98.223,36.903z M98.334,36.901h-0.016H98.334 L98.334,36.901z M98.883,37.413v-0.004V37.413L98.883,37.413z M104.18,37.79l-0.002,0.018L104.18,37.79L104.18,37.79z M40.887,14.389H5.332v7.706h97.63v-7.706H67.907h-0.063c-1.472,0-2.664-1.192-2.664-2.664V6.2V6.168h0.007 c-0.007-0.22-0.106-0.433-0.259-0.585c-0.137-0.141-0.324-0.229-0.521-0.252h-0.082h-0.016H44.425h-0.031V5.325 c-0.213,0.007-0.422,0.104-0.576,0.259l-0.004-0.004l-0.007,0.004c-0.131,0.134-0.231,0.313-0.259,0.501l0.007,0.102V6.2v5.524 C43.554,13.196,42.359,14.389,40.887,14.389L40.887,14.389z"/></g></svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- End List Group -->
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useTaskStore } from '../../stores/store';

    const taskStore = useTaskStore()
    const { tasks: data } = storeToRefs(taskStore)

    const showForm = ref(false)
    const newTask = ref('')

    const addTask = () => {
        if (!newTask.value) return
        showForm.value = false
        taskStore.addTask(newTask.value, false, false)
        newTask.value = ''
    }

    const deleteTask = (index: number) => {
        taskStore.deleteTask(index)
    }

    const markAsCompleted = (index: number) => {
        taskStore.markAsCompleted(index)
    }

</script>

<style lang="scss" scoped>

</style>