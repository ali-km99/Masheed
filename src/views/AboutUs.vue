<script setup lang="ts">
import FooterComp from '@/components/FooterComp.vue'
import NavBar from '@/components/NavBar.vue'
import SmallNavbar from '@/components/SmallNavbar.vue'
</script>

<template>
  <div class="relative"><SmallNavbar /></div>
  <div dir="rtl" class="hidden lg:block"><NavBar></NavBar></div>

  <div class="p-4 bg-white min-h-screen text-white">
    <section class="bg-about bg-contain bg-no-repeat bg-center bg-fixed mb-9">
      <div class="md:grid md:grid-cols-2 gap-32 md:mx-28 p-7">
        <div
          v-motion-slide-visible-bottom
          :duration="1000"
          class="size-full bg-gradient-to-b from-[#1e1e1e]/75 to-primary/75 font-Tajawal p-8 rounded-lg col-start-2 my-6"
        >
          <h2 class="text-5xl text-center text-primary">من نحن</h2>
          <p class="leading-loose text-lg text-white p-7 text-center">
            تأسست شركة مشيد للكيماويات على يد نخبة من المهندسين المتخصصين ذوي الخبرة الطويلة في علوم
            المواد، حيث تتجاوز خبرتهم في مجال الكيماويات عشرين عامًا. تتخصص شركة مشيد للكيماويات في
            قطاعات البتروكيماويات، والنفط والغاز، والإنشاءات، ومعظم المجالات الصناعية. كما نفخر
            بالتعاون مع أفضل الشركات العالمية المتخصصة لتقديم حلول احترافية عالية الجودة، من خلال
            فرق عمل متكاملة من الاستشاريين والمهندسين والكوادر الفنية.
          </p>
        </div>
        <div
          v-motion-slide-visible-bottom
          :duration="1000"
          class="size-full bg-gradient-to-b from-primary to-[#460b0e] p-8 rounded-lg shadow-2xl shadow-primary md:col-span-2 md:w-1/2"
        >
          <h2 class="md:text-5xl text-2xl text-white text-center font-Tajawal">رؤيتنا</h2>
          <p class="leading-loose md:text-lg text-[#D9D9D9] font-Tajawal p-7 text-center">
            نقدم حلولاً سريعة وتقنيات فريدة بجودة عالية. ونسعى باستمرار للبحث والتطوير وإيجاد طرق
            جديدة تُمكّننا من تلبية جميع احتياجات عملائنا وفقًا للمعايير المحلية والدولية، باستخدام
            أحدث التقنيات والتطبيقات، دون المساس بمعايير السلامة والجودة.
          </p>
        </div>
        <div
          v-motion-slide-visible-bottom
          :duration="1000"
          class="size-full p-8 rounded-lg col-start-2 shadow-inner bg-gradient-to-b from-[#1e1e1e]/75 to-primary/75"
        >
          <h2 class="text-4xl text-center font-Tajawal text-primary">
            النفط والغاز والبتروكيماويات
          </h2>
          <p class="leading-loose text-lg text-[#D9D9D9] font-Tajawal p-7 text-center">
            يُعد قطاع النفط والغاز والبتروكيماويات عصب الاقتصاد الليبي، وهو المصدر الرئيسي للدخل في
            البلاد. ولذلك، نولي في شركة مشيد هذا المجال اهتمامًا بالغًا ونقدم أفضل وأحدث المنتجات
            والتقنيات لهذا القطاع، ونُعتبر من الشركات الرائدة في هذا المجال.
          </p>
        </div>
        <div
          v-motion-slide-visible-bottom
          :duration="1000"
          class="bg-gradient-to-b from-primary to-[#460b0e] p-8 rounded-lg shadow-2xl shadow-primary md:col-span-2 md:w-1/2"
        >
          <h2 class="text-4xl text-white text-center font-Tajawal">
            رسالتنا في شركة مشيد للكيماويات
          </h2>
          <p class="leading-loose text-lg text-[#D9D9D9] font-Tajawal p-7 text-center">
            في شركة مشيد للكيماويات، نلتزم بتقديم حلول كيميائية متقدمة تلبي احتياجات القطاعات
            الحيوية في ليبيا وخارجها، مع التركيز على قطاع النفط والغاز والبتروكيماويات. حيث نعمل
            بشغف واحترافية لتوفير منتجات عالية الجودة تلبي أعلى معايير الأداء والكفاءة. نحن نسعى
            للابتكار المستمر وتقديم حلول متكاملة في مجالات مقاومة التآكل، ومواد الحفر والتنقيب، ودعم
            وصيانة آبار النفط، وتنقية النفط من الشوائب، ومعالجة الغاز. نتعاون مع أفضل الشركات
            العالمية لضمان تقديم أحدث التقنيات والحلول، ونفخر بفرق عملنا المتخصصة من الاستشاريين
            والمهندسين والفنيين الذين يضمنون تحقيق أفضل النتائج لعملائنا. نؤمن أن الابتكار والجودة
            والشراكات الاستراتيجية هي الركائز التي تدعم رؤيتنا في أن نكون من الشركات الرائدة في
            تقديم الحلول الكيميائية المتكاملة.
          </p>
        </div>
      </div>
    </section>
  </div>
  <FooterComp></FooterComp>
</template>
<style>
.bg-about {
  background-image: url('../assets/imgs/img1.jpg');
}
</style>
