<script setup lang="ts">
import { ref } from 'vue'
import { productsData } from '@/data/products'
import type { ProductCategory } from '@/types/products'
import FooterComp from '@/components/FooterComp.vue'
import SmallNavbar from '@/components/SmallNavbar.vue'
import NavBar from '@/components/NavBar.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
// حالة الـ Modal
const isModalOpen = ref(false)
const selectedCategory = ref<ProductCategory | null>(null)

// فتح الـ Modal لعرض كل المنتجات
const openModal = (category: ProductCategory) => {
  selectedCategory.value = category
  isModalOpen.value = true
}

// إغلاق الـ Modal
const closeModal = () => {
  isModalOpen.value = false
  selectedCategory.value = null
}
</script>

<template>
  <div dir="rtl" class="min-h-[100vh]">
    <div class="relative"><SmallNavbar /></div>
    <div class="hidden lg:block"><NavBar></NavBar></div>

    <div>
      <div class="w-4/5 h-[50vh] bg-yellow-400 mx-auto my-10 rounded-lg overflow-hidden">
        <img src="../assets/imgs/bg3.webp" alt="" />
      </div>
      <div class="w-4/5 mx-auto">
        <p class="text-3xl text-black font-Tajawal">ماذا تقدم لكم مشيد ؟</p>
        <p class="text-black w-3/4 font-Tajawal">
          نسعى لتوفير كل ما يحتاجه المستهلك في ليبيا، من كيماويات البناء بجودة تفوق توقعات عملائنا
          دائماً. منتجاتنا من علامات تجارية متعددة حول العالم، نهدف لجعل كل ما تحتاجه متوفر أينما
          كنت، بأسعار تنافسية، بالإضافة إلى تقديم منتجات جديدة استجابة لطلبات الزبائن واحتياجات
          السوق.
        </p>
      </div>

      <section class="w-4/5 mx-auto my-10">
        <p class="text-3xl text-black font-Tajawal mt-20 mb-14">استكشف ما نوفره لكم من منتجات</p>

        <div class="grid md:grid-cols-3 grid-cols-1 gap-5">
          <div
            v-for="category in productsData"
            :key="category.id"
            @click="openModal(category)"
            class="py-6 bg-[#FEEB00]/60 hover:bg-[#FEEB00]/80 rounded-lg duration-500"
          >
            <div class="w-4/5 mx-auto rounded-lg overflow-hidden">
              <img :src="category.mainImg" alt="" />
            </div>
            <p class="text-gray-800 font-bold text-lg w-4/5 mx-auto font-cairo mt-6">
              {{ category.name }}
            </p>
            <p class="text-gray-800 font-bold text-lg w-4/5 mx-auto font-cairo">
              {{ category.text }}
            </p>
            <button @click="openModal(category)" class="w-4/5 mx-auto hover:scale-105 duration-500">
              عرض جميع المنتجات
            </button>
          </div>
          <!-- Modal -->
          <div
            v-if="isModalOpen"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center w-screen h-screen"
          >
            <div class="bg-white rounded-lg shadow-lg p-6 relative size-full">
              <button
                @click="closeModal"
                class="hover:text-primarybg-red-600 text-white text-lg mx-auto p-2 px-6 m-2 bg-gradient-to-r from-primary to-[#ff3902] rounded-full hover:from-primary hover:to-primary"
              >
                رجوع
              </button>

              <h2 class="text-2xl font-bold mb-4">{{ selectedCategory?.name }}</h2>
              <p class="text-gray-600 mb-6">{{ selectedCategory?.text }}</p>

              <div v-if="selectedCategory?.products.length">
                <swiper
                  :modules="[Navigation, Pagination, Autoplay]"
                  :slides-per-view="5"
                  :space-between="10"
                  :loop="true"
                  :autoplay="{ delay: 3000, disableOnInteraction: false }"
                  :navigation="true"
                  :pagination="{ clickable: true }"
                  class="md:w-[98vw] z-40"
                  :breakpoints="{
                    320: { slidesPerView: 1, spaceBetween: 10 }, // موبايل
                    640: { slidesPerView: 2, spaceBetween: 15 }, // تابلت
                    1024: { slidesPerView: 3, spaceBetween: 15 }, // ديسكتوب
                  }"
                >
                  <swiper-slide
                    v-for="product in selectedCategory.products"
                    :key="product.name"
                    class="drop-shadow-md"
                  >
                    <div
                      class="bg-[#FEEB00]/60 hover:bg-[#FEEB00]/80 rounded-lg duration-300 w-full m-4"
                    >
                      <img
                        :src="product.img"
                        alt="Product Image"
                        class="h-60 w-full duration-300 object-cover rounded-lg mb-4"
                      />
                      <h3 class="text-xl font-semibold mb-2">{{ product.title }}</h3>
                      <p class="text-gray-700 text-sm mb-2">{{ product.text }}</p>

                      <div>
                        <h4 class="font-semibold text-sm mb-1">الأستعمال:</h4>
                        <ul class="list-disc list-inside text-sm text-gray-600">
                          <li v-for="type in product.type" :key="type">{{ type }}</li>
                        </ul>
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>

                <!-- <div
                  v-for="product in selectedCategory.products"
                  :key="product.name"
                  class="border rounded-lg p-4 shadow-sm"
                >
                  <h3 class="text-xl font-semibold mb-2">{{ product.title }}</h3>
                  <p class="text-gray-700 text-sm mb-2">{{ product.text }}</p>

                  <div>
                    <h4 class="font-semibold text-sm mb-1">الأنواع:</h4>
                    <ul class="list-disc list-inside text-sm text-gray-600">
                      <li v-for="type in product.type" :key="type">{{ type }}</li>
                    </ul>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="w-4/5 bg-yellow-400 mx-auto my-10 rounded-lg overflow-hidden">
        <img src="../assets/imgs/WEBER.jpg" alt="" />
      </div>
    </div>
  </div>
  <FooterComp />
</template>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: #c20001;
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  color: #feeb00;
  transition-duration: 300ms;
}
.swiper-pagination-bullet {
  background: rgb(107, 23, 23);
}
</style>
