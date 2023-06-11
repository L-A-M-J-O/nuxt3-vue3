<template>
  <section class="bg-white dark:bg-gray-900 h-screen">
    <h1>Home</h1>
    <chat/>
  </section>
</template>
<script setup lang="ts">
import chat from "@/components/chat.vue";
useHead({
  title: "Panel",
});
</script>
