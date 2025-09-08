<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { locale, t } = useI18n()
const minu = ref(false)

const toggelMinu = () => {
  if (minu.value !== !minu.value) {
    minu.value = !minu.value
  }
}

const changeLanguage = () => {
  locale.value = locale.value === 'ar' ? 'en' : 'ar'
}
</script>

<template>
  <header class="md:hidden">
    <nav
      class="bg-[#3a3a3a]/[53%]"
      :class="{
        'h-[32rem] ': minu,
        'h-24 ': !minu,
      }"
    >
      <div class="flex w-11/12 py-2 justify-between mx-auto items-center">
        <div class="p-2">
          <img src="../assets/imgs/logo.png" width="65" alt="" />
        </div>

        <div class="flex items-center gap-4">
          <!-- زر تغيير اللغة للجوال -->
          <button
            @click="changeLanguage"
            class="language-switcher flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            :title="t('language')"
          >
            <span class="text-white font-semibold text-sm">
              {{ locale === 'ar' ? 'EN' : 'AR' }}
            </span>
          </button>

          <div
            dir="ltr"
            id="btnShow"
            @click="toggelMinu"
            class="text-white flex flex-col space-y-1 p-2 transition duration-300"
          >
            <span class="w-7 h-1 bg-white rounded-md"></span>
            <span
              class="w-7 h-1 bg-white duration-300 span rounded-md"
              :class="{ 'w-4': minu }"
            ></span>
            <span
              :class="{ 'w-2': minu }"
              class="w-7 h-1 bg-white duration-500 span2 rounded-md"
            ></span>
          </div>
        </div>
      </div>

      <section id="hero" class="h-24 bg-no-repeat bg-left bg-nav-BG flex items-center relative">
        <ul
          v-if="minu"
          id="tabel"
          class="duration-300 bg-bluee text-white bg-opacity-60 rounded-sm w-11/12 mx-auto flex flex-col items-center justify-items-center absolute top-1 left-3 z-30"
        >
          <li v-motion-pop class="py-2 border-b-2 border-bluee-sec w-full text-center rounded-t-lg">
            <RouterLink :to="{ name: 'home' }" @click="toggelMinu">
              {{ t('home') }}
            </RouterLink>
          </li>

          <li v-motion-pop :delay="200" class="py-2 border-b-2 border-bluee-sec w-full text-center">
            <RouterLink :to="{ name: 'about' }" @click="toggelMinu">
              {{ t('about2') }}
            </RouterLink>
          </li>

          <li v-motion-pop :delay="400" class="py-2 border-b-2 border-bluee-sec w-full text-center">
            <RouterLink :to="{ name: 'products' }" @click="toggelMinu">
              {{ t('aboutWeber') }}
            </RouterLink>
          </li>

          <li v-motion-pop :delay="600" class="py-2 border-b-2 border-bluee-sec w-full text-center">
            <RouterLink to="/Portfolio" @click="toggelMinu">
              {{ t('ourWork') }}
            </RouterLink>
          </li>

          <li v-motion-pop :delay="800" class="py-2 border-b-2 border-bluee-sec w-full text-center">
            <RouterLink :to="{ name: 'contact' }" @click="toggelMinu">
              {{ t('contactUs') }}
            </RouterLink>
          </li>

          <!-- زر تغيير اللغة داخل القائمة -->
          <li
            v-motion-pop
            :delay="1000"
            class="py-2 border-b-2 border-bluee-sec w-full text-center"
          >
            <button
              @click="changeLanguage"
              class="language-switcher-menu w-full flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <span class="text-white font-semibold text-sm">
                {{ t('switchTo') }}
              </span>
            </button>
          </li>
        </ul>
      </section>
    </nav>
  </header>
</template>

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

.language-switcher-menu {
  position: relative;
  overflow: hidden;
}

.language-switcher-menu::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.language-switcher-menu:hover::before {
  left: 100%;
}

.router-link-active {
  color: #ffeb00;
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
  background-color: #ffeb00;
  border-radius: 2px;
}
</style>
