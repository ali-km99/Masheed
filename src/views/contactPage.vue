<script setup lang="ts">
import ContactUS from '@/components/ContactUS.vue'
import FooterComp from '@/components/FooterComp.vue'
import NavBar from '@/components/NavBar.vue'
import SmallNavbar from '@/components/SmallNavbar.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const dir = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'))
</script>

<template>
  <div class="relative"><SmallNavbar /></div>
  <div :dir="dir" class="hidden lg:block"><NavBar></NavBar></div>
  <section class="p-4 min-h-screen text-white">
    <ContactUS />
  </section>
  <FooterComp></FooterComp>
</template>
