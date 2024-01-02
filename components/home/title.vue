<template>
    <h2 class="font-bold title-font mb-2 text-emerald-500 hover:text-emerald-600" :class="props.secondary ? 'text-xl mt-4': 'text-4xl'">
        {{ props.text }}
    </h2>
</template>

<script setup lang="ts">
    // Define props of the component
    const props = defineProps({
        text: {
            type: String,
            default: ''
        },
        secondary: {
            type: Boolean,
            default: false
        }
    })

</script>

<style lang="scss" scoped>

</style>