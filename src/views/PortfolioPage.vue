<template>
  <div class="min-h-screen bg-white font-Tajawal">
    <div dir="rtl" class="relative"><SmallNavbar /></div>
    <div dir="rtl" class="hidden lg:block"><NavBar></NavBar></div>
    <h1
      v-motion-slide-visible-bottom
      :duration="1000"
      class="text-4xl font-bold text-primary text-center py-16"
    >
      خدماتنا المتميزة
    </h1>

    <div class="flex flex-col">
      <div
        v-for="(program, index) in programs2"
        :key="program.id"
        class="min-h-screen flex items-center"
        :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-300'"
      >
        <div class="container mx-auto px-4">
          <div
            class="flex flex-col md:flex-row items-center gap-8"
            :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
          >
            <div class="w-3/4 mx-auto md:w-1/2" v-motion-slide-visible-bottom :duration="1000">
              <img
                :src="program.image"
                :alt="program.titele"
                class="w-full h-[300px] object-cover bg-contain rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="w-full md:w-1/2 space-y-6">
              <h2
                v-motion-slide-visible-top
                :duration="1000"
                class="md:text-4xl text-2xl font-semibold text-primary text-right"
              >
                {{ program.titele }}
              </h2>
              <p
                v-motion-slide-visible-bottom
                :duration="1000"
                class="text-gray-700 md:text-xl leading-relaxed text-right"
              >
                {{ program.decripicon }}
              </p>
              <button
                v-motion-slide-visible-bottom
                :duration="1700"
                class="hover:text-primarybg-red-600 text-white text-lg mx-auto p-2 px-6 m-2 bg-gradient-to-r from-primary to-[#ff3902] rounded-full hover:from-primary hover:to-primary"
              >
                المنتجات
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import SmallNavbar from '@/components/SmallNavbar.vue'
import { ref } from 'vue'

const programs2 = ref([
  {
    id: 1,
    image: 'https://i.postimg.cc/WzxpPzK4/serv1.webp',
    titele: 'إضافة الخرسانة',
    decripicon:
      '   نقدم مجموعة واسعة من الإضافات الخرسانية    المصممة لتحسين قابلية التشغيل، وتقليل نفاذية الخرسانة,     وزيادة القوة والمتانة. سواء كنت بحاجة إلى إضافات مسرعة     أو مبطئة للشك، أو تحسين مقاومة الخرسانة للظروف البيئية     القاسية، فإن حلولنا المبتكرة تضمن أعلى مستويات الأداء والاستدامة.',
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/VNzfw37X/serv2.jpg',
    titele: 'أنظمة العزل المائي  والحراري والصوتي',
    decripicon:
      'حماية المباني من العوامل البيئية أصبح أسهل    مع أنظمتنا المتطورة للعزل المائي,    الحراري والصوتي. نقدم حلولًا متكاملة لعزل الأسطح، الجدران، والأقبية باستخدام    أحدث التقنيات والمواد ذات الكفاءة العالية، مما يضمن     تقليل استهلاك الطاقة وزيادة الراحة داخل المباني.',
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/t4QRS1WS/serv3.jpg',
    titele: 'أنظمة ترميم وتأهيل المنشئات',
    decripicon:
      'نوفر حلولًا متقدمة لمعالجة التشققات، وتعزيز الهياكل الخرسانية,    وإصلاح العناصر الإنشائية المتضررة بفعل الزمن أو    العوامل البيئية. تشمل خدماتنا مواد وتقنيات     إصلاح عالية الجودة تضمن إعادة تأهيل المباني     والمنشآت لتستعيد كفاءتها وأدائها بأعلى المعايير.',
  },
  {
    id: 4,
    image: 'https://i.postimg.cc/Hs7s90c8/serv4.webp',
    titele: 'أرضيات صناعية',
    decripicon:
      'تصميم وتركيب الأرضيات الصناعية   التي تلبي متطلبات المصانع، المستودعات   ، والمرافق التجارية والصحية، حيث تتميز    بقدرتها العالية على تحمل الأحمال الثقيلة   ، ومقاومتها للاحتكاك، والمواد الكيميائية.    نقدم حلولًا مخصصة تناسب احتياجاتك، سواء كانت   أرضيات إيبوكسي، بولي يوريثان، أو خرسانية معالجة.',
  },
  {
    id: 5,
    image: 'https://i.postimg.cc/mZng9pDG/serv5.jpg',
    titele: 'الزرع و الحقن الكيميائي',
    decripicon:
      'تقنيات مبتكرة لمعالجة التسربات في الخرسانة,    تعزيز التربة، وتأمين الهياكل    باستخدام مواد الحقن الكيميائي   الفعالة. حلول التثبيت الكيميائي    لدينا تضمن قوة تحمل أعلى للبراغي    والمثبتات في المنشآت الخرسانية    والمعدنية، مما يعزز الاستقرار والأمان.',
  },
  {
    id: 6,
    image: 'https://i.postimg.cc/N0bgjpVS/serv6.webp',
    titele: 'مواد الاصقة و الرابطة  و المائلة.',
    decripicon:
      'نوفر مجموعة شاملة من المواد اللاصقة والسدادات والحشوات المستخدمة في العزل,     والتركيب، وإغلاق الفجوات لضمان مقاومة    ممتازة للمياه، والتآكل، والعوامل البيئية    المختلفة. منتجاتنا مثالية للواجهات    الأرضيات، النوافذ، والأبواب، مما  يعزز جودة البناء ويطيل عمره الافتراضي.',
  },
])
</script>

<style>
/* Add any custom styles here if needed */
</style>
