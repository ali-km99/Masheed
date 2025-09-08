<template>
  <div
    :dir="dir"
    class="md:bg-home bg-homeSM min-h-[100vh] bg-no-repeat md:bg-right-top md:bg-cover bg-center bg-contain bg-fixed"
  >
    <div class="relative"><SmallNavbar /></div>
    <div class="hidden lg:block"><NavBar></NavBar></div>
    <section
      class="text-white md:p-8 p-4 font-Tajawal font-[900] bg-gray-800/65 md:w-3/4 mx-8 my-4"
      :dir="dir"
    >
      <div
        class="md:p-10 p-4 lg:text-6xl text-xl"
        v-motion-slide-right
        :delay="200"
        :duration="1200"
      >
        <h1 class="md:my-6">{{ $t('homeTitle1') }}</h1>
        <h1 class="">{{ $t('homeTitle2') }}</h1>
      </div>
      <p
        class="md:w-2/3 md:p-6 p-4 pt-0 md:text-base text-sm"
        v-motion-slide-right
        :delay="800"
        :duration="1200"
      >
        {{ $t('homeDescription') }}
      </p>
      <div class="flex flex-col md:flex-row scale-90 md:scale-100 gap-2">
        <button
          v-motion-slide-top
          :delay="1500"
          :duration="500"
          class="border-secandry border-2 p-4 rounded-md hover:bg-secandry/80 duration-500 hover:border-transparent"
        >
          <RouterLink :to="{ name: 'about' }"> {{ $t('aboutMushaid') }} </RouterLink>
        </button>
      </div>
    </section>
  </div>
  <section class="bg-white" id="clients-section">
    <div class="">
      <h2 class="text-center text-4xl text-black font-cairo p-2">{{ $t('ourClients') }}</h2>
      <p class="text-center text-slate-700 p-2">{{ $t('clientsCount') }}</p>
    </div>
    <swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="5"
      :space-between="10"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :navigation="true"
      :pagination="{ clickable: true }"
      class="w-full h-[40vh]"
      :breakpoints="{
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 15 },
      }"
    >
      <swiper-slide v-for="program in programs" :key="program.id" class="px-12 drop-shadow-md">
        <div class="w-52 h-52 mx-auto mt-6">
          <img :src="program.image" class="rounded-[50%] w-52 h-52" alt="مشاريعنا " />
        </div>
      </swiper-slide>
    </swiper>
  </section>
  <section :dir="dir">
    <div
      class="md:bg-home bg-homeSM bg-no-repeat md:bg-right-top md:bg-cover bg-center bg-contain bg-fixed"
    >
      <div
        class="bg-gray-800/65 md:w-1/3 w-full p-4"
        :class="locale === 'ar' ? 'pr-6 mr-12' : 'pl-6  ml-12'"
      >
        <h1
          v-motion-slide-right
          :delay="200"
          :duration="1200"
          class="text-6xl text-red-600 font-semibold"
        >
          01
        </h1>
        <div v-motion-slide-right :delay="600" :duration="1200">
          <h1 class="text-6xl text-white font-semibold">{{ $t('whoWeAre') }}</h1>
        </div>
        <p
          v-motion-slide-top
          :delay="800"
          :duration="1200"
          class="text-white mt-4 leading-loose text-lg"
        >
          {{ $t('companyDescription') }}
        </p>
        <RouterLink :to="{ name: 'about' }" class="hover:text-red-900 duration-300 text-red-600">
          {{ $t('aboutMushaid') }}
        </RouterLink>
      </div>
    </div>
    <div class="w-full grid lg:grid-cols-4 grid-cols-1 gap-6 m-6 p-4 py-20 mx-auto bg-white">
      <div class="w-full bg-gray-800 h-72 flex flex-col items-center rounded-lg relative p-2">
        <div
          class="w-20 h-20 rounded-full bg-primary flex items-center justify-center absolute -top-10"
        >
          <img class="w-10" src="../assets/icons/consultation.png" alt="" />
        </div>
        <h2 class="text-center text-2xl mt-10 text-white font-bold font-Tajawal">
          {{ $t('consultationServices') }}
        </h2>
        <p class="text-center mt-2 text-white">
          {{ $t('consultationDescription') }}
        </p>
      </div>
      <div class="w-full bg-gray-800 h-72 flex flex-col items-center rounded-lg relative p-2">
        <div
          class="w-20 h-20 rounded-full bg-secandry flex items-center justify-center absolute -top-10"
        >
          <img class="w-10" src="../assets/icons/oil-pump.png" alt="" />
        </div>
        <h2 class="text-center text-2xl mt-10 text-white font-bold font-Tajawal">
          {{ $t('oilGas') }}
        </h2>
        <p class="text-center mt-2 text-white">
          {{ $t('oilGasDescription') }}
        </p>
      </div>
      <div class="w-full bg-gray-800 h-72 flex flex-col items-center rounded-lg relative p-2">
        <div
          class="w-20 h-20 rounded-full bg-primary flex items-center justify-center absolute -top-10"
        >
          <img class="w-10" src="../assets/icons/hook.png" alt="" />
        </div>
        <h2 class="text-center text-2xl mt-10 text-white font-bold font-Tajawal">
          {{ $t('construction') }}
        </h2>
        <p class="text-center mt-2 text-white">
          {{ $t('constructionDescription') }}
        </p>
      </div>
      <div class="w-full bg-gray-800 h-72 flex flex-col items-center rounded-lg relative p-2">
        <div
          class="w-20 h-20 rounded-full bg-secandry flex items-center justify-center absolute -top-10"
        >
          <img class="w-10" src="../assets/icons/factory.png" alt="" />
        </div>
        <h2 class="text-center text-2xl mt-10 text-white font-bold font-Tajawal">
          {{ $t('industrialSector') }}
        </h2>
        <p class="text-center mt-2 text-white">
          {{ $t('industrialDescription') }}
        </p>
      </div>
    </div>
  </section>

  <section :dir="dir">
    <div class="lg:w-1/2 px-6">
      <h1
        v-motion-slide-right
        :delay="200"
        :duration="1200"
        class="text-6xl text-red-600 font-semibold"
      >
        02
      </h1>
      <div v-motion-slide-right :delay="400" :duration="1000">
        <h1 class="text-6xl text-black font-semibold">{{ $t('ourServices') }}</h1>
      </div>
      <p
        v-motion-slide-top
        :delay="600"
        :duration="800"
        class="text-black lg:w-4/5 mt-4 leading-loose"
      >
        {{ $t('servicesDescription') }}
      </p>
    </div>
    <div class="flex mb-20">
      <div class="w-11/12 rounded-lg m-4 mx-auto bg-contain bg-home">
        <div class="bg-[#3a3a3a]/[53%] backdrop-blur-0 w-full">
          <Swiper
            :modules="[Navigation]"
            :loop="true"
            :autoplay="{ delay: 2000, disableOnInteraction: false }"
            navigation
          >
            <swiper-slide
              v-for="program in programs2"
              :key="program.id"
              class="md:px-12 drop-shadow-md"
            >
              <div class="flex flex-col md:flex-row justify-around w-full items-center">
                <div class="md:w-1/3 rounded-md m-4 p-4 min-w-[300px] bg-black/65 md:h-[500px]">
                  <p
                    v-motion-slide-top
                    :delay="400"
                    :duration="1200"
                    class="text-white text-3xl font-bold font-Tajawal pb-3"
                  >
                    {{ $t(program.translationKey) }}
                  </p>
                  <p
                    v-motion-slide-top
                    :delay="600"
                    :duration="1000"
                    class="text-white font-Tajawal"
                  >
                    {{ $t(program.descriptionKey) }}
                  </p>
                </div>
                <div class="md:h-[500px] p-4 min-w-[300px]">
                  <img :src="program.image" class="bg-contain rounded-lg" />
                </div>
              </div>
            </swiper-slide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
  <section :dir="dir" class="my-20">
    <div class="flex w-full flex-col md:flex-row shadow-inner">
      <div
        class="pr-6 lg:w-1/2 py-4 bg-slate-200 flex flex-col justify-center"
        :class="locale === 'ar' ? 'pr-6 ' : 'pl-6 '"
      >
        <h1
          v-motion-slide-right
          :delay="200"
          :duration="1200"
          class="text-6xl text-red-600 font-semibold"
        >
          03
        </h1>
        <div v-motion-slide-right :delay="400" :duration="1000">
          <h1 class="text-5xl text-black font-semibold pb-2">{{ $t('officialAgent') }}</h1>
          <h1 class="text-5xl text-black font-semibold max-w-[500px]">{{ $t('WeberInter') }}</h1>
        </div>
        <p
          v-motion-slide-top
          :delay="600"
          :duration="800"
          class="text-black lg:w-3/4 leading-loose text-lg mt-2"
        >
          {{ $t('weberDescription') }}
        </p>
      </div>
      <div class="md:w-1/2 w-full h-full bg-secandry flex justify-center items-center p-12">
        <img class="w-3/4" src="../assets/imgs/weber3.png" alt="" />
      </div>
    </div>
  </section>

  <section :dir="dir" class="my-12">
    <div class="lg:w-1/2 px-6">
      <h1
        v-motion-slide-right
        :delay="200"
        :duration="1200"
        class="text-6xl text-red-600 font-semibold"
      >
        04
      </h1>
      <div v-motion-slide-right :delay="400" :duration="1000">
        <h1 class="text-6xl text-black font-semibold">{{ $t('contactUs') }}</h1>
      </div>
      <p
        v-motion-slide-top
        :delay="600"
        :duration="800"
        class="text-black lg:w-4/5 mt-4 leading-loose text-lg"
      >
        {{ $t('contactDescription') }}
      </p>
      <RouterLink to="/contact">
        <button
          class="text-white h-14 w-36 ml-16 mt-4 bg-gradient-to-r mb-10 from-primary to-[#ff3902] rounded-full hover:from-primary hover:to-primary"
        >
          {{ $t('contactButton') }}
        </button>
      </RouterLink>
      <!-- الخريطة تبقى كما هي -->
    </div>
  </section>

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
import { computed, ref } from 'vue'
import FooterComp from '@/components/FooterComp.vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const dir = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'))
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
  // {
  //   id: 5,
  //   image: 'https://i.postimg.cc/wvj8j1cq/logo005.webp',
  // },
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
const programs2 = ref([
  {
    id: 1,
    image: 'https://i.postimg.cc/WzxpPzK4/serv1.webp',
    translationKey: 'concreteAdditives',
    descriptionKey: 'concreteDescription',
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/VNzfw37X/serv2.jpg',
    translationKey: 'isolationSystems',
    descriptionKey: 'isolationDescription',
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/t4QRS1WS/serv3.jpg',
    translationKey: 'restorationSystems',
    descriptionKey: 'restorationDescription',
  },
  {
    id: 4,
    image: 'https://i.postimg.cc/Hs7s90c8/serv4.webp',
    translationKey: 'industrialFloors',
    descriptionKey: 'floorsDescription',
  },
  {
    id: 5,
    image: 'https://i.postimg.cc/mZng9pDG/serv5.jpg',
    translationKey: 'chemicalInjection',
    descriptionKey: 'injectionDescription',
  },
  {
    id: 6,
    image: 'https://i.postimg.cc/N0bgjpVS/serv6.webp',
    translationKey: 'adhesiveMaterials',
    descriptionKey: 'adhesiveDescription',
  },
])
</script>
<style>
.bg-mygradient {
  background-image: linear-gradient(135deg, #fffc49 10%, #feeb00 100%);
}
body {
  background: #fefefe;
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
  color: #fefefe;
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  color: #c20001;
  transition-duration: 300ms;
}
.swiper-pagination-bullet {
  background: white;
}
</style>
