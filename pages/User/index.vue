<template>
    <section class="bg-white dark:bg-gray-900 h-screen">
        <h1 class="mb-4 text-left text-2xl text-slate-900 dark:text-white font-bold">User</h1>

        <uL>
            <li><NuxtLink to="/User/1">Primer User</NuxtLink></li>
            <li><NuxtLink to="/User/2">Segundo User</NuxtLink></li>
            <li><NuxtLink to="/User/3">Tercer User</NuxtLink></li>
        </uL>

    </section>
    
</template>
<script setup>
    // Dinamic
    useHead({
        title: "User"
    })
</script>