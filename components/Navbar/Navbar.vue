<template>
  <nav class="isolate bg-[#ffffff]  dark:bg-gray-900">
    <div class="mx-auto px-2 sm:px-6 lg:px-8 rounded-xl">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button--> 
          <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.

              Heroicon name: outline/bars-3

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!--
              Icon when menu is open.

              Heroicon name: outline/x-mark

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-start sm:items-stretch sm:justify-center">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
               <!--Tributos Start-->

              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <!-- <a href="#" class="text-gray-700 hover:bg-sky-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>

              <a href="#" class="text-gray-700 hover:bg-sky-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Team</a>

              <a href="#" class="text-gray-700 hover:bg-sky-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Projects</a>

              <a href="#" class="text-gray-700 hover:bg-sky-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Calendar</a> -->

              <!--Tributos End-->
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- <button class="-mr-2 h-16 w-12 lg:hidden dark:border-gray-700 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="my-auto h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button> -->
          <div class="flex space-x-4 items-center">

          <!--search bar start --> 
            
            <div hidden class="md:block">
              <div class="relative flex items-center text-gray-400 focus-within:text-blue-500">
                <span class="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3 dark:border-gray-700">
                  <svg
                    xmlns="http://ww50w3.org/2000/svg"
                    class="w-4 fill-current"
                    viewBox="0 0 35.997 36.004"
                  >
                    <path
                      id="Icon_awesome-search"
                      data-name="search"
                      d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                    ></path>
                  </svg>
                </span>
                <input
                  type="search"
                  name="leadingIcon"
                  id="leadingIcon"
                  placeholder="Busca aquí"
                  class="outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 transition focus:border-blue-500 dark:bg-gray-900 dark:border-gray-700"
                />
              </div>
            </div>
            <!--search bar end --> 
            <button
              aria-label="search"
              class="h-9 w-9 rounded-xl border bg-gray-100 active:bg-gray-200 md:hidden dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
            >
              <svg
                xmlns="http://ww50w3.org/2000/svg"
                class="mx-auto w-4 fill-current text-gray-600 dark:text-gray-300"
                viewBox="0 0 35.997 36.004"
              >
                <path
                  id="Icon_awesome-search"
                  data-name="search"
                  d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                ></path>
              </svg>
            </button>
            <div class="relative ml-3">
              <button @click="isOpenMessage = !isOpenMessage"
                aria-label="chat"
                class="flex justify-center items-center h-9 w-9 rounded-xl border bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
              >
                <!-- <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="m-auto h-5 w-5 text-gray-600 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg> -->
                <Icon class="w-5 h-5 text-slate-800 dark:text-slate-200" name="material-symbols:contact-mail-outline" />
              </button>
              <div v-show="isOpenMessage" id="toast-simple" class="absolute right-0 z-10 mt-2 w-80 h-16 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5    focus:outline-none flex items-center  max-w-xs p-4 space-x-4 text-gray-500divide-x divide-gray-200 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                    <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-500" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
                    <div class="pl-4 text-sm font-normal">Mensaje enviado con éxito.</div>
              </div>
            </div>
            <button @click="changeDarkMode"
                aria-label="darkMode"
                class=" flex justify-center items-center	 h-9 w-9 rounded-xl border bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
              >
              <Icon class="w-5 h-5 text-slate-800 dark:text-slate-200" name="material-symbols:toggle-off-outline" />
              <!-- <svg class="ml-1" width="26" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill="currentColor" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="currentColor" /> </svg> -->
            </button>
              <!-- <svg class="ml-1" width="26" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill="currentColor" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="currentColor" /> </svg> -->
              <select v-model="locale" class="antialiased font-sans font-extrabold select-none uppercase text-xs h-9 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 dark:active:bg-gray-800  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="es">es</option> 
                  <option value="en">en</option>
                  <option value="fr">fr</option>
                  <option value="pt">pt</option>
              </select>
            <div class="relative ml-3">
              <div>
                <button @click="isOpenUser = !isOpenUser" type="button" class="flex rounded-xl bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  <img class="m-auto h-9 w-9 rounded-xl" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                </button>
              </div>

              

              <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              <div v-show="isOpenUser" class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-900 dark:text-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                <NuxtLink to="/User" @click="isOpenUser=false" class="block px-4 py-2 text-sm text-gray-700  dark:text-white" role="menuitem" tabindex="-1" id="user-menu-item-0">{{ $t('dnGU')}}</NuxtLink>
                <NuxtLink to="/User/Settings-User" @click="isOpenUser=false" class="block px-4 py-2 text-sm text-gray-700  dark:text-white" role="menuitem" tabindex="-1" id="user-menu-item-1">{{$t('settings')}}</NuxtLink>
                <NuxtLink to="/User/Preferences-User" @click="isOpenUser=false" class="block px-4 py-2 text-sm text-gray-700  dark:text-white" role="menuitem" tabindex="-1" id="user-menu-item-2">{{ $t('pGU') }}</NuxtLink>
                <NuxtLink to="/" @click="isOpenUser=false" class="block px-4 py-2 text-sm text-gray-700  dark:text-white" role="menuitem " tabindex="-1" id="user-menu-item-2">{{ $t('dGU') }}</NuxtLink>
              </div>
                <!-- Active: "bg-gray-100", Not Active: "" -->
              
            </div>
          </div>
        <!-- Profile dropdown -->
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
    <!-- <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
      </div>
    </div> -->
  </nav>
</template>
<script setup>
    // Import Vue3 Start
    import { ref } from 'vue';
    import { onMounted } from 'vue';
    // Import Vue3 End
    // Import de Activations Flowbite Start
    import { initDismisses, } from 'flowbite'
    // Import de Activations Flowbite End
    // initialize components based on data attribute selectors
    onMounted(() => {
        initDismisses();
    })
    // Dinamic
    const { locale } = useI18n()
    const changeDarkMode = () => {
      document.documentElement.classList.toggle("dark");
    }
    const isOpenUser = ref(false)
    const isOpenNotification = ref(false);
    const isOpenMessage = ref(false)
</script>