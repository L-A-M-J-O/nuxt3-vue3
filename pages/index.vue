<template>
  <section class="bg-white dark:bg-gray-900 h-screen">
    <h1>Home</h1>
    <div class="container">
      <template>
        <div>
          <input v-model="message" />
          <button @click="sendMessage" v-text="'Send'"></button>
          <div>{{ data }}</div>
        </div>
      </template>
    </div>
  </section>
</template>
<script setup>
useHead({
  title: "Panel",
});
const { chat } = useChatgpt();

const data = ref("");
const message = ref("");

async function sendMessage() {
  const response = await chat(message.value);
  data.value = response;
}
</script>
