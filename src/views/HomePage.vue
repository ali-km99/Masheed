<template>
  <div
    dir="rtl"
    class="md:bg-home bg-homeSM min-h-[100vh] bg-no-repeat md:bg-right-top md:bg-cover bg-center bg-contain bg-fixed"
  >
    <div class="relative"><SmallNavbar /></div>
    <div class="hidden lg:block"><NavBar></NavBar></div>
    <section
      class="text-white md:p-8 p-4 font-Tajawal font-[900] bg-gray-800/65 md:w-3/4 mx-8 my-4"
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
          class="border-secandry border-2 p-4 rounded-md hover:bg-secandry/80 duration-500 hover:border-transparent"
        >
          حول المشيد
        </button>
      </div>
    </section>
  </div>
  <section class="bg-white">
    <div class="">
      <h2 class="text-center text-4xl text-black font-cairo p-2">تعرف على عملائنا</h2>
      <p class="text-center text-slate-700 p-2">لقد تعاملنا مع 120+ شركة ليبية و عالميا</p>
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
        320: { slidesPerView: 1, spaceBetween: 10 }, // موبايل
        640: { slidesPerView: 2, spaceBetween: 15 }, // تابلت
        1024: { slidesPerView: 3, spaceBetween: 15 }, // ديسكتوب
      }"
    >
      <swiper-slide v-for="program in programs" :key="program.id" class="px-12 drop-shadow-md">
        <div class="w-52 h-52 mx-auto mt-6">
          <img :src="program.image" class="rounded-[50%] w-52 h-52" />
        </div>
      </swiper-slide>
    </swiper>
    <div class="flex">
      <button
        class="bg-red-600 text-white text-lg mx-auto p-4 px-10 m-2 bg-gradient-to-r from-primary to-[#ff3902] rounded-full hover:from-primary hover:to-primary"
      >
        اطلع على عملائنا المميزون
      </button>
    </div>
  </section>
  <section dir="rtl">
    <div
      class="md:bg-home bg-homeSM bg-no-repeat md:bg-right-top md:bg-cover bg-center bg-contain bg-fixed"
    >
      <div class="bg-gray-800/65 md:w-1/3 w-full p-4">
        <h1
          v-motion-slide-right
          :delay="200"
          :duration="1200"
          class="text-6xl text-red-600 font-semibold"
        >
          01
        </h1>
        <div v-motion-slide-right :delay="600" :duration="1200">
          <h1 class="text-6xl text-white font-semibold">من نحن ؟</h1>
        </div>
        <p
          v-motion-slide-top
          :delay="800"
          :duration="1200"
          class="text-white mt-4 leading-loose text-lg"
        >
          شركة المشيد هي شركة ليبية متخصصة في مجال البتروكيماويات، النفط والغاز، والقطاعات الصناعية
          المختلفة. نتميز بتقديم حلول هندسية متطورة بجودة عالية، بالتعاون مع أفضل الشركات العالمية.
          هدفنا تلبية متطلبات السوق عبر شبكة توزيع تغطي مختلف المدن الليبية.
        </p>
        <RouterLink to="/about" class="hover:text-red-900 duration-300 text-red-600">
          حول مشيد >
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
        <h2 class="text-center text-2xl mt-10 text-white font-bold font-Tajawal">خدمات استشارية</h2>
        <p class="text-center mt-2 text-white">
          تقدم شركة المشيد للكيماويات الاستشارات الفنية للعديد من الشركات والعملاء والمقاولين الذين
          ينفذون العديد من المشاريع الحيوية والتي تشمل مشاريع البنية التحتية في ليبيا.
        </p>
      </div>
      <div class="w-full bg-gray-800 h-72 flex flex-col items-center rounded-lg relative p-2">
        <div
          class="w-20 h-20 rounded-full bg-secandry flex items-center justify-center absolute -top-10"
        >
          <img class="w-10" src="../assets/icons/oil-pump.png" alt="" />
        </div>
        <h2 class="text-center text-2xl mt-10 text-white font-bold font-Tajawal">النفط و الغاز</h2>
        <p class="text-center mt-2 text-white">
          تقدم شركة المشيد أفضل الحلول المتكاملة بما في ذلك التقنيات والمواد الكيميائية
        </p>
      </div>

      <div class="w-full bg-gray-800 h-72 flex flex-col items-center rounded-lg relative p-2">
        <div
          class="w-20 h-20 rounded-full bg-secandry flex items-center justify-center absolute -top-10"
        >
          <img class="w-10" src="../assets/icons/hook.png" alt="" />
        </div>
        <h2 class="text-center text-2xl mt-10 text-white font-bold font-Tajawal">البناء</h2>
        <p class="text-center mt-2 text-white">
          تسعى شركة المشيد لفهم احتياجات عملائها وتقديم حلول فعالة من خلال منتجات مبتكرة ومتطورة، مع
          التركيز على تحسين الكفاءة لضمان أفضل النتائج في مجال كيماويات البناء.
        </p>
      </div>
      <div class="w-full bg-gray-800 h-72 flex flex-col items-center rounded-lg relative p-2">
        <div
          class="w-20 h-20 rounded-full bg-secandry flex items-center justify-center absolute -top-10"
        >
          <img class="w-10" src="../assets/icons/factory.png" alt="" />
        </div>
        <h2 class="text-center text-2xl mt-10 text-white font-bold font-Tajawal">القطاع الصناعي</h2>
        <p class="text-center mt-2 text-white">
          للمساهمة في تطوير الاقتصاد وتقليل الاعتماد على النفط والغاز، نوفر مواد أساسية للصناعة، مثل
          الزيوت والشحوم، الأصباغ، مواد التعبئة واللصق، والدهانات الصناعية.
        </p>
      </div>
    </div>
  </section>

  <section dir="rtl">
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
        <h1 class="text-6xl text-black font-semibold">خدماتنا</h1>
      </div>
      <p
        v-motion-slide-top
        :delay="600"
        :duration="800"
        class="text-black lg:w-4/5 mt-4 leading-loose"
      >
        تولي شركة المشيد أولوية لتكون قريبة من زبائنها وتفهم احتيجاتهم وحل مشاكلهم كمانقدم منتجات
        مبتكرة و متطورة ونسعى دائما إلى زيادة كفائة منتجاتنا لنضمن أفضل النتائج الممكنة , حيث نقدم
        الحلول الأتية في مجال كيماويات البناء .
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
                    {{ program.titele }}
                  </p>
                  <p
                    v-motion-slide-top
                    :delay="600"
                    :duration="1000"
                    class="text-white font-Tajawal"
                  >
                    {{ program.decripicon }}
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
  <section dir="rtl" class="my-12">
    <div class="lg:w-1/2 px-6">
      <h1
        v-motion-slide-right
        :delay="200"
        :duration="1200"
        class="text-6xl text-red-600 font-semibold"
      >
        03
      </h1>
      <div v-motion-slide-right :delay="400" :duration="1000">
        <h1 class="text-6xl text-black font-semibold">التواصل معنا</h1>
      </div>
      <p
        v-motion-slide-top
        :delay="600"
        :duration="800"
        class="text-black lg:w-4/5 mt-4 leading-loose text-lg"
      >
        فريق مشيد سعيد بخدمتكم في أي وقت. لأي استفسار بإمكانك التواصل معنا:
      </p>

      <RouterLink to="/contact">
        <button
          class="text-white h-14 w-36 ml-16 mt-4 bg-gradient-to-r mb-10 from-primary to-[#ff3902] rounded-full hover:from-primary hover:to-primary"
        >
          تواصل معنا
        </button>
      </RouterLink>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.905542470924!2d13.242031175127021!3d32.90066557765773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a8930012b75501%3A0x9e29a815306fd94a!2z2YXYtNmK2K8g2YTZhNmD2YrZhdin2YjZitin2Ko!5e0!3m2!1sen!2sly!4v1741404910451!5m2!1sen!2sly"
        width="1300"
        height="450"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="mx-20 rounded-lg hidden md:block"
      ></iframe>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.905542470924!2d13.242031175127021!3d32.90066557765773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a8930012b75501%3A0x9e29a815306fd94a!2z2YXYtNmK2K8g2YTZhNmD2YrZhdin2YjZitin2Ko!5e0!3m2!1sen!2sly!4v1741404910451!5m2!1sen!2sly"
        width="350"
        height="350"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="rounded-lg md:hidden"
      ></iframe>
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
    titele: 'إضافة الخرسانة',
    decripicon:
      '   نقدم مجموعة واسعة من الإضافات الخرسانية    المصممة لتحسين قابلية التشغيل، وتقليل نفاذية الخرسانة،     وزيادة القوة والمتانة. سواء كنت بحاجة إلى إضافات مسرعة     أو مبطئة للشك، أو تحسين مقاومة الخرسانة للظروف البيئية     القاسية، فإن حلولنا المبتكرة تضمن أعلى مستويات الأداء والاستدامة.',
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/VNzfw37X/serv2.jpg',
    titele: 'أنظمة العزل المائي  والحراري والصوتي',
    decripicon:
      'حماية المباني من العوامل البيئية أصبح أسهل    مع أنظمتنا المتطورة للعزل المائي،    الحراري والصوتي. نقدم حلولًا متكاملة لعزل الأسطح، الجدران، والأقبية باستخدام    أحدث التقنيات والمواد ذات الكفاءة العالية، مما يضمن     تقليل استهلاك الطاقة وزيادة الراحة داخل المباني.',
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/t4QRS1WS/serv3.jpg',
    titele: 'أنظمة ترميم وتأهيل المنشئات',
    decripicon:
      'نوفر حلولًا متقدمة لمعالجة التشققات، وتعزيز الهياكل الخرسانية،    وإصلاح العناصر الإنشائية المتضررة بفعل الزمن أو    العوامل البيئية. تشمل خدماتنا مواد وتقنيات     إصلاح عالية الجودة تضمن إعادة تأهيل المباني     والمنشآت لتستعيد كفاءتها وأدائها بأعلى المعايير.',
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
      'تقنيات مبتكرة لمعالجة التسربات في الخرسانة،    تعزيز التربة، وتأمين الهياكل    باستخدام مواد الحقن الكيميائي   الفعالة. حلول التثبيت الكيميائي    لدينا تضمن قوة تحمل أعلى للبراغي    والمثبتات في المنشآت الخرسانية    والمعدنية، مما يعزز الاستقرار والأمان.',
  },
  {
    id: 6,
    image: 'https://i.postimg.cc/N0bgjpVS/serv6.webp',
    titele: 'مواد الاصقة و الرابطة  و المائلة.',
    decripicon:
      'نوفر مجموعة شاملة من المواد اللاصقة والسدادات والحشوات المستخدمة في العزل،     والتركيب، وإغلاق الفجوات لضمان مقاومة    ممتازة للمياه، والتآكل، والعوامل البيئية    المختلفة. منتجاتنا مثالية للواجهات    الأرضيات، النوافذ، والأبواب، مما  يعزز جودة البناء ويطيل عمره الافتراضي.',
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
