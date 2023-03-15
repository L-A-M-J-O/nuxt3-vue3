<template>
    <aside class="sidebar fixed transition ease-in delay-400 hover:-translate-y-2 hover:scale-70 rounded-xl left-0 top-0 z-10 hover:h-screen w-[calc(3.80rem)] border-gray-300/40 bg-[#ffffff] dark:bg-gray-900 dark:border-gray-700 hover:w-60 hover:shadow-2xl duration-200 shadow-lg dark:drop-shadow-2xl">
      <div class="sidebar min-h-screen w-[3.75rem] overflow-hidden border-4 border-white border-r-white rounded-xl hover:w-60  dark:bg-gray-900 dark:border-gray-900 hover:shadow-lg">
        <div class="flex h-screen flex-col justify-between pt-2 pb-6">
          <div class="box-menu-scroll overflow-y-auto overflow-x-0">
            <div class="w-max p-2.5">
              <img src="~/assets/img/qT3NGDBDWFhaty6.webp" class="cursor-pointer w-9" alt="Sea&Ports">
            </div>
            <ul class="mt-6 space-y-2 tracking-wide">
              <li class="min-w-max hover:bg-gradient-to-r from-[#002066] to-[#0066FF] rounded-md hover:text-white duration-200 text-[#ffffff]">
                <NuxtLink to="/" aria-label="dashboard" class="cursor-help relative flex items-center space-x-4 px-4 py-3 text-gray-600 hover:text-white  dark:text-white">
                  <!-- <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-current text-cyan-700 dark:fill-[#0066FF]"></path>
                    <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-current text-[#0066FF] group-hover:text-blue-900"></path>
                    <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-current group-hover:text-[#0066FF]"></path>
                  </svg> -->
                  <Icon name="material-symbols:view-cozy-outline" class="h-5 w-5  dark:text-slate-200 text-[#0066FF] hover:from-[#002066] hover:text-sky-200"/>
                  <span class="-mr-1 font-medium">{{ $t('home') }}</span>
                </NuxtLink>
              </li>
              <li class="min-w-max hover:  hover:text-white">
                <NuxtLink @click="isOpenGeneral = !isOpenGeneral" class="cursor-pointer hover:bg-gradient-to-r from-[#002066] to-[#0066FF] hover:rounded-md relative flex items-center space-x-4 px-4 py-3 text-gray-600 hover:text-white  dark:text-white">
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path class="fill-current  text-[#0066FF] group-hover:text-cyan-500" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                    <path class="fill-current bg-slate-300 group-hover:text-blue-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                  </svg> -->
                  <Icon name="material-symbols:360" class="h-5 w-5 dark:text-slate-200 text-[#0066FF] hover:from-[#002066]  hover:text-sky-200"/>
                  <span class="-mr-1 font-medium">{{ $t('general') }}</span>
                  <svg class="w-5 h-3 mt-1 animate-bounce" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </NuxtLink>
                <div v-show="isOpenGeneral" class="flex items-center space-x-4 drop-shadow-md rounded-md ml-2 bg-slate-100 dark:bg-gray-900 divide-slate-200 text-white">
                  <ul>
                    <li class="min-w-max transition">
                      <NuxtLink to="/" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600  dark:text-white">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path class="fill-current dark:text-[#0066FF] text-[#002066]  group-hover:text-slate-700" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                        <path class="fill-current text-slate-500 group-hover:text-slate-500" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg> -->
                      <Icon name="material-symbols:folder-open-outline" class="h-4 w-5  text-[#0066FF] hover:from-[#002066]"/>
                      <span class=" dark:group-hover:text-gray-100 group-hover:text-gray-700 transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-80 duration-200">{{ $t('gCountry')}}</span>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600  dark:text-white">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path class="fill-current dark:text-[#0066FF] text-[#002066]  group-hover:text-slate-700" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                        <path class="fill-current text-slate-500 group-hover:text-slate-500" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg> -->
                      <Icon name="material-symbols:folder-open-outline" class="h-4 w-5 text-[#0066FF] hover:from-[#002066]"/>
                      <span class=" dark:group-hover:text-gray-100 group-hover:text-gray-700 transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-80 duration-200">{{ $t('gUsers')}}</span>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/Entidades" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600  dark:text-white">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path class="fill-current dark:text-[#0066FF] text-[#002066]  group-hover:text-slate-700" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                        <path class="fill-current text-slate-500 group-hover:text-slate-500" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg> -->
                      <Icon name="material-symbols:folder-open-outline" class="h-4 w-5 text-[#0066FF] hover:from-[#002066]"/>
                      <span class=" dark:group-hover:text-gray-100 group-hover:text-gray-700 transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-80 duration-200">{{ $t('gEntities')}}</span>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600  dark:text-white">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path class="fill-current dark:text-[#0066FF] text-[#002066]  group-hover:text-slate-700" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                        <path class="fill-current text-slate-500 group-hover:text-slate-500" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg> -->
                      <Icon name="material-symbols:folder-open-outline" class="h-4 w-5 text-[#0066FF] hover:from-[#002066]"/>
                      <span class=" dark:group-hover:text-gray-100 group-hover:text-gray-700 transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-80 duration-200">{{ $t('gCatalogs')}}</span>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="min-w-max hover:  hover:text-white">
                <NuxtLink @click="isOpenAgencia = !isOpenAgencia" class="cursor-pointer hover:bg-gradient-to-r from-[#002066] to-[#0066FF] hover:rounded-md relative flex items-center space-x-4 px-4 py-3 text-gray-600 hover:text-white  dark:text-white">
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path class="fill-current  text-[#0066FF] group-hover:text-cyan-500" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                    <path class="fill-current bg-slate-300 group-hover:text-blue-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                  </svg> -->
                  <Icon name="material-symbols:directions-boat-outline"  class="h-5 w-5 dark:text-slate-200 text-[#0066FF] hover:from-[#002066]  hover:text-sky-200"/>
                  <span class="-mr-1 font-medium">{{ $t('maritimeAgency') }}</span>
                  <svg class="w-5 h-3 mt-1 animate-bounce" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </NuxtLink>
                <div v-show="isOpenAgencia" class="flex items-center space-x-4 drop-shadow-md rounded-md ml-2 bg-slate-100 dark:bg-gray-900 divide-slate-200 text-white">
                  <ul>
                    <li class="min-w-max transition">
                      <NuxtLink to="/" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600  dark:text-white">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path class="fill-current dark:text-[#0066FF] text-[#002066]  group-hover:text-slate-700" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                        <path class="fill-current text-slate-500 group-hover:text-slate-500" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg> -->
                      <Icon name="material-symbols:folder-open-outline" class="h-4 w-5 text-[#0066FF] hover:from-[#002066]"/>
                      <span class=" dark:group-hover:text-gray-100 group-hover:text-gray-700 transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-80 duration-200">{{ $t('maFiles') }}</span>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600  dark:text-white">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path class="fill-current dark:text-[#0066FF] text-[#002066]  group-hover:text-slate-700" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                        <path class="fill-current text-slate-500 group-hover:text-slate-500" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg> -->
                      <Icon name="material-symbols:folder-open-outline" class="h-4 w-5 text-[#0066FF] hover:from-[#002066]"/>
                      <span class=" dark:group-hover:text-gray-100 group-hover:text-gray-700 transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-80 duration-200">{{ $t('maBilling') }}</span>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="min-w-max hover:  hover:text-white">
                <NuxtLink @click="isOpenTransitario = !isOpenTransitario" class="tra-hover cursor-pointer hover:bg-gradient-to-r from-[#002066] to-[#0066FF] hover:rounded-md relative flex items-center space-x-4 px-4 py-3 text-gray-600 hover:text-white  dark:text-white">
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path class="fill-current  text-[#0066FF] group-hover:text-cyan-500" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                    <path class="fill-current bg-slate-300 group-hover:text-blue-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                  </svg> -->
                  <Icon name="material-symbols:add-home-work-outline"  class="h-5 w-5 dark:text-slate-200 text-[#0066FF] hover:from-[#002066]  hover:text-sky-200"/>
                  <span class="-mr-1 font-medium">{{ $t('ftf') }}</span>
                  <svg class="w-5 h-3 mt-1 animate-bounce" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </NuxtLink>
                <div v-show="isOpenTransitario" class="flex items-center space-x-4 drop-shadow-md rounded-md ml-2 bg-slate-100 dark:bg-gray-900 divide-slate-200 text-white">
                  <ul>
                    <li class="min-w-max transition">
                      <NuxtLink to="/" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600  dark:text-white">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path class="fill-current dark:text-[#0066FF] text-[#002066]  group-hover:text-slate-700" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                        <path class="fill-current text-slate-500 group-hover:text-slate-500" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg> -->
                      <Icon name="material-symbols:folder-open-outline" class="h-4 w-5 text-[#0066FF] hover:from-[#002066]"/>
                      <span class=" dark:group-hover:text-gray-100 group-hover:text-gray-700 transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-80 duration-200">{{ $t('ftfOfferts') }}</span>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/Entidades" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600  dark:text-white">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path class="fill-current dark:text-[#0066FF] text-[#002066]  group-hover:text-slate-700" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                        <path class="fill-current text-slate-500 group-hover:text-slate-500" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg> -->
                      <Icon name="material-symbols:folder-open-outline" class="h-4 w-5 text-[#0066FF] hover:from-[#002066]"/>
                      <span class=" dark:group-hover:text-gray-100 group-hover:text-gray-700 transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-80 duration-200">{{ $t('ftfOffert') }}</span>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="min-w-max hover:  hover:text-white">
                <NuxtLink @click="isOpenTarifas = !isOpenTarifas" class="cursor-pointer hover:bg-gradient-to-r from-[#002066] to-[#0066FF] hover:rounded-md relative flex items-center space-x-4 px-4 py-3 text-gray-600 hover:text-white  dark:text-white">
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path class="fill-current  text-[#0066FF] group-hover:text-cyan-500" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                    <path class="fill-current bg-slate-300 group-hover:text-blue-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                  </svg> -->
                  <Icon name="material-symbols:price-change-outline"  class="h-5 w-5 dark:text-slate-200 text-[#0066FF] hover:from-[#002066]  hover:text-sky-200"/>
                  <span class="-mr-1 font-medium">{{ $t('rates') }}</span>
                  <svg class="w-5 h-3 mt-1 animate-bounce" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </NuxtLink>
                <div v-show="isOpenTarifas" class="flex items-center space-x-4 drop-shadow-md rounded-md ml-2 bg-slate-100 dark:bg-gray-900 divide-slate-200 text-white">
                  <ul>
                    <li class="min-w-max transition">
                      <NuxtLink to="/" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600  dark:text-white">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path class="fill-current dark:text-[#0066FF] text-[#002066]  group-hover:text-slate-700" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                        <path class="fill-current text-slate-500 group-hover:text-slate-500" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg> -->
                      <Icon name="material-symbols:folder-open-outline" class="h-4 w-5 text-[#0066FF] hover:from-[#002066]"/>
                      <span class=" dark:group-hover:text-gray-100 group-hover:text-gray-700 transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-80 duration-200 w-32">{{ $t('rFee') }}</span>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600  dark:text-white">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path class="fill-current dark:text-[#0066FF] text-[#002066]  group-hover:text-slate-700" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                        <path class="fill-current text-slate-500 group-hover:text-slate-500" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg> -->
                      <Icon name="material-symbols:folder-open-outline" class="h-4 w-5 text-[#0066FF] hover:from-[#002066]"/>
                      <span class=" dark:group-hover:text-gray-100 group-hover:text-gray-700 transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-80 duration-200">{{ $t('rFeeC') }}</span>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600  dark:text-white">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path class="fill-current dark:text-[#0066FF] text-[#002066]  group-hover:text-slate-700" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                        <path class="fill-current text-slate-500 group-hover:text-slate-500" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg> -->
                      <Icon name="material-symbols:folder-open-outline" class="h-4 w-5 text-[#0066FF] hover:from-[#002066]"/>
                      <span class=" dark:group-hover:text-gray-100 group-hover:text-gray-700 transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-80 duration-200">{{ $t('rC') }}</span>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600  dark:text-white">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path class="fill-current dark:text-[#0066FF] text-[#002066]  group-hover:text-slate-700" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                        <path class="fill-current text-slate-500 group-hover:text-slate-500" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg> -->
                      <Icon name="material-symbols:folder-open-outline" class="h-4 w-5 text-[#0066FF] hover:from-[#002066]"/>
                      <span class=" dark:group-hover:text-gray-100 group-hover:text-gray-700 transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-80 duration-200">{{ $t('rS') }}</span>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600  dark:text-white">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path class="fill-current dark:text-[#0066FF] text-[#002066]  group-hover:text-slate-700" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                        <path class="fill-current text-slate-500 group-hover:text-slate-500" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg> -->
                      <Icon name="material-symbols:folder-open-outline" class="h-4 w-5 text-[#0066FF] hover:from-[#002066]"/>
                      <span class=" dark:group-hover:text-gray-100 group-hover:text-gray-700 transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-80 duration-200">{{ $t('rQ') }}</span>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600  dark:text-white">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path class="fill-current dark:text-[#0066FF] text-[#002066]  group-hover:text-slate-700" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                        <path class="fill-current text-slate-500 group-hover:text-slate-500" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg> -->
                      <Icon name="material-symbols:folder-open-outline" class="h-4 w-5 text-[#0066FF] hover:from-[#002066]"/>
                      <span class=" dark:group-hover:text-gray-100 group-hover:text-gray-700 transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-80 duration-200">{{ $t('rMC') }}</span>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600  dark:text-white">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path class="fill-current dark:text-[#0066FF] text-[#002066]  group-hover:text-slate-700" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                        <path class="fill-current text-slate-500 group-hover:text-slate-500" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg> -->
                      <Icon name="material-symbols:folder-open-outline" class="h-4 w-5 text-[#0066FF] hover:from-[#002066]"/>
                      <span class=" dark:group-hover:text-gray-100 group-hover:text-gray-700 transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-80 duration-200">{{ $t('rMO') }}</span>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="min-w-max hover:  hover:text-white">
                <NuxtLink @click="isOpenCRM = !isOpenCRM" class="cursor-pointer hover:bg-gradient-to-r from-[#002066] to-[#0066FF] hover:rounded-md relative flex items-center space-x-4 px-4 py-3 text-gray-600 hover:text-white  dark:text-white">
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path class="fill-current  text-[#0066FF] group-hover:text-cyan-500" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                    <path class="fill-current bg-slate-300 group-hover:text-blue-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                  </svg> -->
                  <Icon name="material-symbols:supervisor-account-outline"  class="h-5 w-5 dark:text-slate-200 text-[#0066FF] hover:from-[#002066]  hover:text-sky-200"/>
                  <span class="-mr-1 font-medium">{{ $t('crm') }}</span>
                  <svg class="w-5 h-3 mt-1 animate-bounce" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </NuxtLink>
                <div v-show="isOpenCRM" class="flex items-center space-x-4 drop-shadow-md rounded-md ml-2 bg-slate-100 dark:bg-gray-900 divide-slate-200 text-white">
                  <ul>
                    <li class="min-w-max transition">
                      <NuxtLink to="/" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600  dark:text-white">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path class="fill-current dark:text-[#0066FF] text-[#002066]  group-hover:text-slate-700" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                        <path class="fill-current text-slate-500 group-hover:text-slate-500" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg> -->
                      <Icon name="material-symbols:folder-open-outline" class="h-4 w-5 text-[#0066FF] hover:from-[#002066]"/>
                      <span class=" dark:group-hover:text-gray-100 group-hover:text-gray-700 transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-80 duration-200 w-32">{{ $t('crCM') }}</span>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="min-w-max hover:  hover:text-white">
                <NuxtLink @click="isOpenChat = !isOpenChat" class="cursor-pointer hover:bg-gradient-to-r from-[#002066] to-[#0066FF] hover:rounded-md relative flex items-center space-x-4 px-4 py-3 text-gray-600 hover:text-white  dark:text-white">
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path class="fill-current  text-[#0066FF] group-hover:text-cyan-500" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                    <path class="fill-current bg-slate-300 group-hover:text-blue-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                  </svg> -->
                  <Icon name="material-symbols:mark-chat-unread-outline"  class="h-5 w-5 dark:text-slate-200 text-[#0066FF] hover:from-[#002066]  hover:text-sky-200"/>
                  <span class="-mr-1 font-medium">Chat</span>
                  <svg class="w-5 h-3 mt-1 animate-bounce" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </NuxtLink>
                <div v-show="isOpenChat" class="flex items-center space-x-4 drop-shadow-md rounded-md ml-2 bg-slate-100 dark:bg-gray-900 divide-slate-200 text-white">
                  <ul>
                    <li class="min-w-max transition">
                      <NuxtLink to="/" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600  dark:text-white">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path class="fill-current dark:text-[#0066FF] text-[#002066]  group-hover:text-slate-700" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                        <path class="fill-current text-slate-500 group-hover:text-slate-500" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg> -->
                      <Icon name="material-symbols:folder-open-outline" class="h-4 w-5 text-[#0066FF] hover:from-[#002066]"/>
                      <span class=" dark:group-hover:text-gray-100 group-hover:text-gray-700 transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-80 duration-200 w-32">{{ $t('chM') }}</span>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>   
              <li class="min-w-max hover:  hover:text-white">
                <NuxtLink @click="isOpenMantenimiento = !isOpenMantenimiento" class="cursor-pointer hover:bg-gradient-to-r from-[#002066] to-[#0066FF] hover:rounded-md relative flex items-center space-x-4 px-4 py-3 text-gray-600 hover:text-white  dark:text-white">
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path class="fill-current  text-[#0066FF] group-hover:text-cyan-500" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                    <path class="fill-current bg-slate-300 group-hover:text-blue-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                  </svg> -->
                  <Icon name="material-symbols:local-shipping-outline"  class="h-5 w-5 dark:text-slate-200 text-[#0066FF] hover:from-[#002066]  hover:text-sky-200"/>
                  <span class="-mr-1 font-medium">{{ $t('maintenance') }}</span>
                  <svg class="w-5 h-3 mt-1 animate-bounce" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </NuxtLink>
                <div v-show="isOpenMantenimiento" class="flex items-center space-x-4 drop-shadow-md rounded-md ml-2 bg-slate-100 dark:bg-gray-900 divide-slate-200 text-white">
                  <ul>
                    <li class="min-w-max transition">
                      <NuxtLink to="/" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600  dark:text-white">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path class="fill-current dark:text-[#0066FF] text-[#002066]  group-hover:text-slate-700" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                        <path class="fill-current text-slate-500 group-hover:text-slate-500" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg> -->
                      <Icon name="material-symbols:folder-open-outline" class="h-4 w-5 text-[#0066FF] hover:from-[#002066]"/>
                      <span class=" dark:group-hover:text-gray-100 group-hover:text-gray-700 transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-80 duration-200 w-32">{{ $t('mPM') }}</span>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/" class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600  dark:text-white">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path class="fill-current dark:text-[#0066FF] text-[#002066]  group-hover:text-slate-700" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                        <path class="fill-current text-slate-500 group-hover:text-slate-500" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg> -->
                      <Icon name="material-symbols:folder-open-outline" class="h-4 w-5 text-[#0066FF] hover:from-[#002066]"/>
                      <span class=" dark:group-hover:text-gray-100 group-hover:text-gray-700 transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-80 duration-200 w-32">{{ $t('mMC') }}</span>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="w-max">
            <a href="#" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-blue-600  dark:text-white   hover:text-sky-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5  group-hover:fill-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>
              <span class="group-hover:text-gray-700">{{ $t('settings') }}</span>
            </a>
          </div>
        </div>
      </div> 
    </aside>
</template>
<script setup>
  // Import Vue3 Start 
  import { ref, onMounted } from 'vue';
  // Import Vue3 End
  // Import de Activations Flowbite Start
  import { initDropdowns, } from 'flowbite'
  // Import de Activations Flowbite End
  // initialize components based on data attribute selectors
  onMounted(()=> {
      initDropdowns()
  })
  // Dinamic Arbol
  const isOpenGeneral = ref(false);
       const isOpenGeneralEmpresas = ref(false);
       const isOpenGeneralUsuarios = ref(false);
       const isOpenGeneralEntidades = ref(false);
       const isOpenGeneralCatalago = ref(false);
  const isOpenAgencia = ref(false);
  const isOpenTransitario = ref(false);
  const isOpenTarifas = ref(false);
  const isOpenCRM = ref(false);
  const isOpenChat = ref(false);
  const isOpenMantenimiento = ref(false);
</script>