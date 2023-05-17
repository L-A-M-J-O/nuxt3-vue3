<template>
  <div>
    <section class="container-2xl bg-white dark:bg-gray-900" v-if="!active">
      <div class="main-box">
        <div class="box-main-image">            
            <img
              class="mx-auto h-16 w-auto"
              src="~/assets/img/qT3NGDBDWFhaty6.webp"
              alt="Your Company"
            />
        </div>
      </div>
    </section>
    <section
      class="container-2xl bg-white dark:bg-gray-900 dark:text-white"
      v-if="active"
    >
      <div class="grid grid-rows-1 grid-flow-col-1">
        <header>
          <div
            class="sm: row-span-6 md:row-span-5 lg:row-span-full p-0 m-0 text-sm"
          >
            <Sidebar />
          </div>
          <div class="col-span-12">
            <Navbar />
          </div>
        </header>
        <!-- <div class="bg-white dark:bg-gray-900 dark:text-white">
                    <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 text-center">
                        Tittle Dinamic
                        <h1 class="text-2xl font-bold tracking-tight text-gray-900">{{  }}</h1>
                    </div>
                </div> -->
        <main>
          <div class="ml-20 py-6 sm:px-6 lg:px-8">
            <div class="container">
              <div class="h-auto flex flex-row flex-wrap">
                <div class="w-full 2xl:w-screen">
                  <!-- Replace with your content -->
                  <slot />
                  <!-- /End replace -->
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  </div>
</template>
<script setup>
// Import Vue3 Start
import { ref } from "vue";
import { onMounted } from "vue";
// Import Vue3 End
// Import de Activations Flowbite Start
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips,
} from "flowbite";
// initialize components based on data attribute selectors
onMounted(() => {
  initAccordions();
  initCarousels();
  initCollapses();
  initDials();
  initDismisses();
  initDrawers();
  initDropdowns();
  initModals();
  initPopovers();
  initTabs();
  initTooltips();
});
// Import de Activations Flowbite End
// Dinamic
useHead({
  titleTemplate: "%s - Sea&Ports",
});
const { locale } = useI18n();
const active = ref(false);
const changeDarkMode = () => {
  document.documentElement.classList.toggle("dark");
};
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
