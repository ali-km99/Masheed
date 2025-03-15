<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import ProductM from '@/components/ProductM.vue'
import SmallNavbar from '@/components/SmallNavbar.vue'
import { ref } from 'vue'

const model = ref(false)
const main = ref(true)
const onModle = () => {
  main.value = false
  model.value = true
}
</script>

<template>
  <div dir="rtl" class="min-h-[100vh]">
    <div class="relative"><SmallNavbar /></div>
    <div class="hidden lg:block"><NavBar></NavBar></div>
    <div v-if="model">
      <ProductM :datass="false" />
    </div>
    <div v-if="main">
      <div class="w-4/5 h-[50vh] bg-yellow-400 mx-auto my-10 rounded-lg overflow-hidden">
        <img src="../assets/imgs/bg3.webp" alt="" />
      </div>
      <div class="w-4/5 mx-auto">
        <p class="text-3xl text-white font-Tajawal">ماذا تقدم لكم مشيد ؟</p>
        <p class="text-white w-3/4 font-Tajawal">
          نسعى لتوفير كل ما يحتاجه المستهلك في ليبيا، من كيماويات البناء بجودة تفوق توقعات عملائنا
          دائماً. منتجاتنا من علامات تجارية متعددة حول العالم، نهدف لجعل كل ما تحتاجه متوفر أينما
          كنت، بأسعار تنافسية، بالإضافة إلى تقديم منتجات جديدة استجابة لطلبات الزبائن واحتياجات
          السوق.
        </p>
      </div>

      <section class="w-4/5 mx-auto my-10">
        <p class="text-3xl text-white font-Tajawal mt-20 mb-14">استكشف ما نوفره لكم من منتجات</p>

        <div class="grid md:grid-cols-3 grid-cols-1 gap-5">
          <div
            @click="onModle()"
            class="py-6 bg-[#FEEB00]/60 hover:bg-[#FEEB00]/80 rounded-lg duration-500"
          >
            <div class="w-4/5 mx-auto rounded-lg overflow-hidden">
              <img src="../assets/imgs/product1.jpg" alt="" />
            </div>
            <p class="text-white font-bold text-lg w-4/5 mx-auto font-cairo mt-6">عوازل مائية</p>
            <p class="text-white font-bold text-lg w-4/5 mx-auto font-cairo">Waterproofing</p>
            <button @click="onModle()" class="w-4/5 mx-auto hover:scale-105 duration-500">
              عرض المنتجات
            </button>
          </div>
          <div class="py-6 bg-[#FEEB00]/60 hover:bg-[#FEEB00]/80 rounded-lg duration-500">
            <div class="w-4/5 mx-auto rounded-lg overflow-hidden">
              <img src="../assets/imgs/product15.jpg" alt="" />
            </div>
            <p class="text-white font-bold text-lg w-4/5 mx-auto font-cairo mt-6">
              تثبيت البلاط وحشو البلاط
            </p>
            <p class="text-white font-bold text-lg w-4/5 mx-auto font-cairo">
              Tile fixing & tile grouting
            </p>
            <p class="w-4/5 mx-auto hover:scale-105 duration-500">عرض المنتجات</p>
          </div>
          <div class="py-6 bg-[#FEEB00]/60 hover:bg-[#FEEB00]/80 rounded-lg duration-500">
            <div class="w-4/5 mx-auto rounded-lg overflow-hidden">
              <img src="../assets/imgs/product17.jpg" alt="" />
            </div>
            <p class="text-white font-bold text-lg w-4/5 mx-auto font-cairo mt-6">
              إصلاح وتنعيم الخرسانة
            </p>
            <p class="text-white font-bold text-lg w-4/5 mx-auto font-cairo">
              Concrete repair & smoothing
            </p>
            <p class="w-4/5 mx-auto hover:scale-105 duration-500">عرض المنتجات</p>
          </div>
          <div class="py-6 bg-[#FEEB00]/60 hover:bg-[#FEEB00]/80 rounded-lg duration-500">
            <div class="w-4/5 mx-auto rounded-lg overflow-hidden">
              <img src="../assets/imgs/product18.jpg" alt="" />
            </div>
            <p class="text-white font-bold text-lg w-4/5 mx-auto font-cairo mt-6">
              أنظمة طلاء الأرضيات الإيبوكسي
            </p>
            <p class="text-white font-bold text-lg w-4/5 mx-auto font-cairo">
              Epoxy Floor Coating Systems
            </p>
            <p class="w-4/5 mx-auto hover:scale-105 duration-500">عرض المنتجات</p>
          </div>
          <div class="py-6 bg-[#FEEB00]/60 hover:bg-[#FEEB00]/80 rounded-lg duration-500">
            <div class="w-4/5 mx-auto rounded-lg overflow-hidden">
              <img src="../assets/imgs/product19.png" alt="" />
            </div>
            <p class="text-white font-bold w-4/5 text-lg mx-auto font-cairo mt-6">
              الأرضيات من مادة البولي يوريثين
            </p>
            <p class="text-white font-bold text-lg w-4/5 mx-auto font-cairo">
              polyurethane floor coating systems
            </p>
            <p class="w-4/5 mx-auto hover:scale-105 duration-500">عرض المنتجات ></p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
