<template>
    <section class="bg-white dark:bg-gray-900 h-screen">
        <h1 class="mb-4 text-left text-2xl text-slate-900 dark:text-white font-bold">User General</h1>
        <h2>Welcome User {{ id }}</h2>
    </section>
</template>
<script setup>
    // Imports Components Start
    // Imports Components End

    // Dinamic
    useHead({
        title: "Description-User_General"
    })
    const {id} = useRoute().params;
</script>