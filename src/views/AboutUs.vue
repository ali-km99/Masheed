<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import FooterComp from '@/components/FooterComp.vue'
import NavBar from '@/components/NavBar.vue'
import SmallNavbar from '@/components/SmallNavbar.vue'

// صور السلايدر
const heroImages = [
  'https://i.postimg.cc/K8CmTH2R/img1.jpg',
  'https://i.postimg.cc/kgbk0M0g/img10.jpg',
  'https://i.postimg.cc/L5yp8yD4/img11.jpg',
  'https://i.postimg.cc/vHNyRND3/img12.jpg',

  'https://i.postimg.cc/sDXzNrfM/img9.jpg',
]

const currentImage = ref(heroImages[0])
let intervalId: number | undefined

// تغيير الصورة عشوائياً
const changeImage = () => {
  let randomImg
  do {
    randomImg = heroImages[Math.floor(Math.random() * heroImages.length)]
  } while (randomImg === currentImage.value)
  currentImage.value = randomImg
}

onMounted(() => {
  intervalId = window.setInterval(changeImage, 5000) // كل 5 ثواني
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="relative">
    <SmallNavbar />
  </div>
  <div dir="rtl" class="hidden lg:block">
    <NavBar />
  </div>

  <!-- Hero Slideshow -->
  <section class="relative h-[70vh] flex items-center justify-center overflow-hidden">
    <!-- الخلفية المتغيرة -->
    <transition name="fade" mode="out-in">
      <div
        :key="currentImage"
        class="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        :style="{ backgroundImage: `url(${currentImage})` }"
      ></div>
    </transition>

    <!-- Overlay المحتوى -->
    <div
      v-motion-slide-visible-bottom
      :duration="1000"
      class="relative z-10 bg-black/60 px-8 py-12 rounded-2xl"
    >
      <h1 class="text-5xl md:text-6xl text-white font-bold text-center">من نحن</h1>
    </div>
  </section>

  <!-- Article Body -->
  <main class="bg-white text-gray-800 font-Tajawal leading-relaxed">
    <article class="max-w-5xl mx-auto px-6 py-20 space-y-20">
      <!-- Section 1 -->
      <section class="space-y-6">
        <h2
          v-motion-slide-visible-top
          :duration="1000"
          class="text-3xl md:text-4xl font-bold text-red-600"
        >
          تأسيس الشركة
        </h2>

        <p v-motion-slide-visible-bottom :duration="1000" class="text-lg text-gray-700">
          تأسست شركة مشيد للكيماويات على يد نخبة من المهندسين المتخصصين ذوي الخبرة الطويلة في علوم
          المواد، حيث تتجاوز خبرتهم في مجال الكيماويات عشرين عامًا. تتخصص شركة مشيد للكيماويات في
          قطاعات البتروكيماويات، والنفط والغاز، والإنشاءات، ومعظم المجالات الصناعية.
        </p>

        <figure
          v-motion-slide-visible-left
          :duration="1000"
          class="md:float-left md:w-1/2 md:mr-6 mb-6"
        >
          <img
            src="../assets/imgs/img9.jpg"
            alt="فريق عمل شركة مشيد"
            class="rounded-xl shadow-lg"
          />
          <figcaption class="text-sm text-gray-500 mt-2 text-center">
            فريق عملنا أثناء تنفيذ أحد المشاريع
          </figcaption>
        </figure>

        <p v-motion-slide-visible-bottom :duration="1000" class="text-lg text-gray-700">
          كما نفخر بالتعاون مع أفضل الشركات العالمية المتخصصة لتقديم حلول احترافية عالية الجودة، من
          خلال فرق عمل متكاملة من الاستشاريين والمهندسين والكوادر الفنية.
        </p>
      </section>

      <!-- Section 2 -->
      <section class="space-y-6 clear-both">
        <h2
          v-motion-slide-visible-top
          :duration="1000"
          class="text-4xl font-bold text-primary text-center mb-8"
        >
          رؤيتنا
        </h2>
        <blockquote
          v-motion-slide-visible-bottom
          :duration="1000"
          class="border-r-4 border-primary pr-6 italic text-lg text-gray-600"
        >
          نقدم حلولاً سريعة وتقنيات فريدة بجودة عالية. ونسعى باستمرار للبحث والتطوير وإيجاد طرق
          جديدة تُمكّننا من تلبية جميع احتياجات عملائنا وفقًا للمعايير المحلية والدولية.
        </blockquote>
      </section>

      <!-- Section 3 -->
      <section class="space-y-6">
        <div class="md:flex md:items-center md:gap-10">
          <div v-motion-slide-visible-left :duration="1000" class="md:w-1/2">
            <img
              src="../assets/imgs/img4.jpg"
              alt="قطاع النفط والغاز"
              class="rounded-xl shadow-lg"
            />
          </div>
          <div v-motion-slide-visible-right :duration="1000" class="md:w-1/2 space-y-4">
            <h2 class="text-3xl font-bold text-primary">النفط والغاز والبتروكيماويات</h2>
            <p class="text-lg text-gray-700">
              يُعد قطاع النفط والغاز والبتروكيماويات عصب الاقتصاد الليبي، وهو المصدر الرئيسي للدخل
              في البلاد. ولذلك، نولي في شركة مشيد هذا المجال اهتمامًا بالغًا ونقدم أفضل وأحدث
              المنتجات والتقنيات لهذا القطاع.
            </p>
          </div>
        </div>
      </section>

      <!-- Section 4 -->
      <section class="space-y-6">
        <h2
          v-motion-slide-visible-top
          :duration="1000"
          class="text-4xl font-bold text-primary text-center mb-8"
        >
          رسالتنا
        </h2>
        <p v-motion-slide-visible-bottom :duration="1200" class="text-lg text-gray-700">
          في شركة مشيد للكيماويات، نلتزم بتقديم حلول كيميائية متقدمة تلبي احتياجات القطاعات الحيوية
          في ليبيا وخارجها، مع التركيز على قطاع النفط والغاز والبتروكيماويات. نحن نسعى للابتكار
          المستمر وتقديم حلول متكاملة في مجالات مقاومة التآكل، ومواد الحفر والتنقيب، وصيانة آبار
          النفط، ومعالجة الغاز.
        </p>
      </section>
    </article>
  </main>

  <FooterComp />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out; /* ناعم وبطيء شوي */
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
