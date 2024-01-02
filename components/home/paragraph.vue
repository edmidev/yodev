<template>
    <p class="leading-relaxed text-sm">{{ props.text }}</p>
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