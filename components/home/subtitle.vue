<template>
    <h2 class="text-lg font-bold text-gray-900 title-font mb-2 mt-4">{{ props.text }}</h2>
</template>

<script setup lang="ts">
    // Define props of the component
    const props = defineProps({
        text: {
            type: String,
            default: ''
        }
    })

</script>

<style lang="scss" scoped>

</style>