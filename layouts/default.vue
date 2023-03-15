<template>
    <div>
        <section class="container-2xl bg-white  dark:bg-gray-900" v-if="!active">
            <div class="main-box md:grid grid-cols-3">
                <!-- Background Image Start -->
                <div class="box-image-sing md:col-span-2 drop-shadow-md"></div>
                <!-- Background Image End -->
                
                <!-- Form login Start -->
                <div class="bg-white dark:bg-gray-900 ">
                    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                        
                        <div class="w-full max-w-md space-y-8">
                            <div>
                            <img class="mx-auto h-16 w-auto" src="~/assets/img/qT3NGDBDWFhaty6.webp" alt="Your Company">
                            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $t('logIn') }}</h2>
                            <p class="mt-2 text-center text-sm text-gray-600 dark:text-white">
                                O
                                <a href="#" class="font-medium text-blue-600 hover:text-blue-500 dark:text-white">{{ $t('subLogIn') }}</a>
                            </p>
                            </div>
                            <form class="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" value="true">
                            <div class="-space-y-px rounded-md shadow-sm">
                                <div>
                                    <label for="email-address" class="sr-only">Email address</label>
                                    <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="Email address">
                                </div>
                                <div>
                                    <label for="password" class="sr-only">Password</label>
                                    <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="Password">
                                </div>
                            </div>
                            
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                <label for="remember-me" class="ml-2 block text-sm text-gray-900 dark:text-white">{{ $t('rember') }}</label>
                                </div>

                                <div class="text-sm">
                                <a href="#" class="font-medium text-blue-600 hover:text-blue-500">{{ $t('passRember')}}</a>
                                </div>
                            </div>
                            <div>
                                <button @click="active=true" type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <!-- Heroicon name: mini/lock-closed -->
                                        <svg class="h-5 w-5 text-blue-400 group-hover:text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    {{ $t('signBtn')}}
                                </button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- Form login End -->
            </div>
        </section>
        <section class="container-2xl bg-white  dark:bg-gray-900  dark:text-white" v-if="active">
            <div class="grid grid-rows-1 grid-flow-col-1">
                <header>
                    <div class="sm: row-span-6 md:row-span-5 lg:row-span-full p-0 m-0 text-sm">
                        <Sidebar/>
                    </div>
                    <div class="col-span-12">
                        <Navbar/>
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
                                        <slot/>
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
    import { ref } from 'vue';
    import { onMounted } from 'vue'
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
        initTooltips } from 'flowbite'
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
        })
        // Import de Activations Flowbite End
        // Dinamic
        useHead({
            titleTemplate: '%s - Sea&Ports',
        })
        const { locale } = useI18n()
        const active = ref(false);
        const changeDarkMode = () => {
            document.documentElement.classList.toggle("dark");
        }
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
    }</style>