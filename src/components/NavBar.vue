<template>
  <nav class="bg-gray-400/[53%] backdrop-blur-md flex items-center px-20 h-[120px]">
    <img width="180" class="ml-8" src="../assets/imgs/logo.png" alt="" />

    <div
      class="flex w-2/3 gap-12 justify-center text-white font-semibold font-cairo duration-300 text-lg mx-auto"
    >
      <RouterLink to="/" class="hover:text-primary duration-300 p-3"> {{ $t('home') }} </RouterLink>
      <RouterLink to="/about" class="hover:text-primary duration-300 p-3">
        {{ $t('about2') }}
      </RouterLink>
      <RouterLink to="/products" class="hover:text-[#FFEB00] duration-300 p-3">
        {{ $t('aboutWeber') }}
      </RouterLink>
      <RouterLink to="/Portfolio" class="hover:text-primary duration-300 p-3">
        {{ $t('ourWork') }}
      </RouterLink>
      <RouterLink
        to="/contact"
        class="duration-500 border-primary border-[3px] p-3 rounded-lg hover:bg-primary mr-6"
      >
        {{ $t('contactUs') }}
      </RouterLink>
    </div>

    <!-- زر تغيير اللغة مع تصميم جميل -->
    <button
      @click="changeLanguage"
      class="language-switcher mr-8 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
    >
      <span class="text-white font-semibold text-sm">
        {{ locale === 'ar' ? 'EN' : 'AR' }}
      </span>
      <div class="w-6 h-6 flex items-center justify-center">
        <svg
          class="w-4 h-4 text-white transform transition-transform duration-300 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </button>

    <img width="180" class="mr-8" src="../assets/imgs/weberLogo.png" alt="" />
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { locale } = useI18n()

const changeLanguage = () => {
  locale.value = locale.value === 'ar' ? 'en' : 'ar'
}
</script>

<style scoped>
.language-switcher {
  position: relative;
  overflow: hidden;
}

.language-switcher::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.language-switcher:hover::before {
  left: 100%;
}

.router-link-active {
  color: #c50000;
  position: relative;
}

.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background-color: #c50000;
  border-radius: 2px;
}
</style>
