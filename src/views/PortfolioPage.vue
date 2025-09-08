<template>
  <div class="min-h-screen bg-white font-Tajawal">
    <div dir="rtl" class="relative"><SmallNavbar /></div>
    <div dir="rtl" class="hidden lg:block"><NavBar></NavBar></div>
    <h1
      v-motion-slide-visible-bottom
      :duration="1000"
      class="text-4xl font-bold text-primary text-center py-16"
    >
      {{ $t('proto') }}
    </h1>

    <div class="flex flex-col">
      <div
        :dir="dir"
        v-for="(program, index) in locale === 'ar' ? programsAR : programsEN"
        :key="program.id"
        class="md:min-h-[70vh] min-h-screen flex items-center"
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
                class="md:text-4xl text-2xl font-semibold text-primary"
                :class="locale === 'ar' ? 'text-right' : 'text-left'"
              >
                {{ program.titele }}
              </h2>
              <p
                v-motion-slide-visible-bottom
                :duration="1000"
                class="text-gray-700 md:text-xl leading-relaxed"
                :class="locale === 'ar' ? 'text-right' : 'text-left'"
              >
                {{ program.decripicon }}
              </p>
              <button
                v-motion-slide-visible-bottom
                :duration="1700"
                to="/products"
                class="hover:text-primarybg-red-600 text-white text-lg mx-auto p-2 px-6 m-2 bg-gradient-to-r from-primary to-[#ff3902] rounded-full hover:from-primary hover:to-primary"
              >
                <RouterLink to="/products"> {{ $t('products') }} </RouterLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComp class="bg-gray-300" />
</template>

<script setup lang="ts">
import FooterComp from '@/components/FooterComp.vue'
import NavBar from '@/components/NavBar.vue'
import SmallNavbar from '@/components/SmallNavbar.vue'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const dir = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'))
const programsAR = ref([
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
const programsEN = ref([
  {
    id: 1,
    image: 'https://i.postimg.cc/WzxpPzK4/serv1.webp',
    titele: 'Concrete Additives',
    decripicon:
      'We offer a wide range of concrete additives designed to improve workability, reduce concrete permeability, and increase strength and durability. Whether you need accelerating or retarding additives, or improving concrete resistance to harsh environmental conditions, our innovative solutions ensure the highest levels of performance and sustainability.',
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/VNzfw37X/serv2.jpg',
    titele: 'Waterproofing, Thermal & Acoustic Insulation Systems',
    decripicon:
      'Protecting buildings from environmental factors has become easier with our advanced waterproofing, thermal, and acoustic insulation systems. We provide integrated solutions for insulating roofs, walls, and basements using the latest high-efficiency technologies and materials, ensuring reduced energy consumption and increased comfort inside buildings.',
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/t4QRS1WS/serv3.jpg',
    titele: 'Restoration and Rehabilitation Systems',
    decripicon:
      'We provide advanced solutions for crack repair, strengthening concrete structures, and repairing structural elements damaged by time or environmental factors. Our services include high-quality repair materials and techniques to restore buildings and facilities to regain their efficiency and performance at the highest standards.',
  },
  {
    id: 4,
    image: 'https://i.postimg.cc/Hs7s90c8/serv4.webp',
    titele: 'Industrial Flooring',
    decripicon:
      'Design and installation of industrial floors that meet the requirements of factories, warehouses, and commercial and healthcare facilities, characterized by their high load-bearing capacity, resistance to friction, and chemicals. We offer customized solutions to fit your needs, whether epoxy, polyurethane, or treated concrete floors.',
  },
  {
    id: 5,
    image: 'https://i.postimg.cc/mZng9pDG/serv5.jpg',
    titele: 'Chemical Grouting and Injection',
    decripicon:
      'Innovative techniques for repairing concrete leaks, reinforcing soil, and securing structures using effective chemical injection materials. Our chemical stabilization solutions ensure higher load-bearing capacity for bolts and fasteners in concrete and metal structures, enhancing stability and safety.',
  },
  {
    id: 6,
    image: 'https://i.postimg.cc/N0bgjpVS/serv6.webp',
    titele: 'Adhesive, Binder and Sealant Materials',
    decripicon:
      'We provide a comprehensive range of adhesives, sealants, and fillers used in insulation, installation, and gap sealing to ensure excellent resistance to water, corrosion, and environmental factors. Our products are ideal for facades, floors, windows, and doors, enhancing building quality and extending its lifespan.',
  },
])
</script>

<style>
/* Add any custom styles here if needed */
</style>
