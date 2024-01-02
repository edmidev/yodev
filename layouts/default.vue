<template>
    <div>
        <header class="shadows-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold text-lg">YODEV</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Description</NuxtLink></li>
                    <li><NuxtLink to="/instrunctions">Instructions</NuxtLink></li>
                    <li><NuxtLink to="/tasks" class="btn">Tasks</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<style scoped>

    .router-link-exact-active {
        color: #38d880;
    }
    .btn.router-link-exact-active {
        color: #fff;
        font-weight: 600;
    }

</style>