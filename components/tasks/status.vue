<template>
    <div class="flex justify-center w-full" :class="{'bg-red-100': !props.task.completed, 'bg-emerald-400': props.task.completed}">
        <div class="pr-4 text-center" :class="{'text-red-400': !props.task.completed, 'text-white': props.task.completed}">
            <span class="text-sm">{{ props.task.completed ? 'Completed!' : 'Incomplete' }}</span> 
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { Task } from '../../interfaces/Task'

    // Define props of the component
    const props = defineProps<{
        task: Task;
    }>();

</script>

<style lang="scss" scoped>

</style>