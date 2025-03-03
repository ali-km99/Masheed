<template>
  <div
    dir="rtl"
    class="md:bg-home bg-homeSM min-h-[100vh] bg-no-repeat md:bg-right-top md:bg-cover bg-center bg-contain bg-fixed"
  >
    <div class="relative"><SmallNavbar /></div>
    <div class="hidden lg:block"><NavBar></NavBar></div>
    <section
      class="text-white md:p-8 p-4 font-Tajawal font-[900] bg-black/65 md:w-3/4 mx-8 my-4"
      dir="rtl"
    >
      <div
        class="md:p-10 p-4 lg:text-6xl text-xl"
        v-motion-slide-right
        :delay="200"
        :duration="1200"
      >
        <h1 class="md:my-6">نزود عملائنا بحلول سريعة</h1>
        <h1 class="">وتقنيات فريدة وجودة عالية</h1>
      </div>
      <p
        class="md:w-2/3 md:p-6 p-4 pt-0 md:text-base text-sm"
        v-motion-slide-right
        :delay="800"
        :duration="1200"
      >
        تأسست شركة مشيد للكيماويات من قبل مجموعة من المهندسين المتخصصين من ذوي الخبرة العالية في علم
        المواد حيث تفوق خبرتهم في مجال الكيماويات عن عشرين سنة
      </p>
      <div class="flex flex-col md:flex-row scale-90 md:scale-100 gap-2">
        <button
          v-motion-slide-top
          :delay="1500"
          :duration="500"
          class="p-4 bg-primary md:mx-6 rounded-md hover:bg-primary/80 duration-500"
        >
          العلامات التجارية
        </button>
        <button
          v-motion-slide-top
          :delay="1500"
          :duration="500"
          class="border-white border-2 p-4 rounded-md hover:bg-primary/80 duration-500 hover:border-transparent"
        >
          حول المشيد
        </button>
      </div>
    </section>
  </div>
  <section class="bg-[#1e1e1e] h-screen">
    <h2 class="text-center text-4xl text-white py-12">تعرف على عملائنا</h2>
    <swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="3"
      :space-between="10"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :navigation="true"
      :pagination="{ clickable: true }"
      class="w-full h-[60vh]"
      :breakpoints="{
        320: { slidesPerView: 1, spaceBetween: 10 }, // موبايل
        640: { slidesPerView: 2, spaceBetween: 15 }, // تابلت
        1024: { slidesPerView: 3, spaceBetween: 15 }, // ديسكتوب
      }"
    >
      <swiper-slide v-for="program in programs" :key="program.id" class="px-12 drop-shadow-md">
        <div class=""><img :src="program.image" class="h-72 w-72 rounded-full" /></div>
      </swiper-slide>
    </swiper>
  </section>
  <!-- <ContactUS /> -->
  <FooterComp></FooterComp>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import NavBar from '@/components/NavBar.vue'
import SmallNavbar from '@/components/SmallNavbar.vue'
import { ref } from 'vue'
import FooterComp from '@/components/FooterComp.vue'

// import FooterComp from '@/components/FooterComp.vue'
// import ContactUS from '@/components/ContactUS.vue'

const programs = ref([
  {
    id: 1,
    image: 'https://i.postimg.cc/wxPKYcYx/logo001.png',
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/GhsWL8bF/logo002.png',
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/W1LQhN4Q/logo003.png',
  },
  {
    id: 4,
    image: 'https://i.postimg.cc/Dy9TPyF6/logo004.png',
  },
  {
    id: 5,
    image: 'https://i.postimg.cc/wvj8j1cq/logo005.webp',
  },
  {
    id: 6,
    image: 'https://i.postimg.cc/SxcpTFxh/logo006.jpg',
  },
  {
    id: 7,
    image: 'https://i.postimg.cc/rpc27nDt/logo006.png',
  },
  {
    id: 7,
    image: 'https://i.postimg.cc/zfjYNCh2/logo007.jpg',
  },
])
</script>

<style>
body {
  background: #1e1e1e;
}
::-webkit-scrollbar {
  width: 12px;
  background-color: #f0f0f0; /* لون خلفية شريط التمرير */
  border-radius: 12px;
}

/* جزء "المسار" من الشريط */
::-webkit-scrollbar-track {
  background: #242222; /* اللون الرصاصي الباهت للخلفية */
  border-radius: 10px; /* جعل الحواف دائرية */
}

/* جزء "المقبض" من الشريط */
::-webkit-scrollbar-thumb {
  background-color: #ea2a17; /* اللون الرصاصي للمقبض */
  border-radius: 10px; /* جعل الحواف دائرية */
  border: 3px solid #c20001; /* المسافة حول المقبض */
}

.swiper-button-next,
.swiper-button-prev {
  color: #c20001;
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  color: #fefefe;
  transition-duration: 300ms;
}
.swiper-pagination-bullet {
  background: white;
}
</style>
