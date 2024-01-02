<template>
    <div class="pr-4 text-center" :class="{'text-red-400': !props.task.completed, 'text-emerald-400': props.task.completed}">
        <span class="text-sm">{{ props.task.completed ? 'Completed!' : 'Incomplete' }}</span> 
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