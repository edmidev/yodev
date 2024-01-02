<template>
    <div class="pr-4 text-center" :class="{'text-red-400': !props.task.completed, 'text-emerald-400': props.task.completed}">
        <span class="text-sm">{{ props.task.completed ? 'Completed!' : 'Incomplete' }}</span> 
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useTaskStore } from '../../stores/store';
    
    // Define props of the component
    const props = defineProps({
        task: {
            type: Object,
            default: () => {}
        }
    })

</script>

<style lang="scss" scoped>

</style>