<template>
    <p class="flex items-center text-gray-600 mb-2 text-sm mt-2 ml-4">
        <span class="w-2 h-2 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>{{ props.text }}
        </p>
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