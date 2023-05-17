<template>
  <section class="bg-white dark:bg-gray-900 h-screen">
    <h1
      class="mb-4 text-left text-2xl text-slate-900 dark:text-white font-bold"
    >
      {{ $t("welcome") }}
    </h1>
  </section>
</template>
<script setup>
useHead({
  title: "Panel",
});
</script>
