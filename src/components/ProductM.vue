<script setup lang="ts">
const props = defineProps<{
  datass: boolean
}>()
</script>

<template>
  <button
    class="bg-red-600 text-white text-lg mx-auto p-2 px-6 m-2 bg-gradient-to-r from-primary to-[#ff3902] rounded-full hover:from-primary hover:to-primary"
  >
    رجوع
  </button>
  <p>{{ props.datass }}</p>
  <div class="py-6 bg-[#FEEB00]/60 hover:bg-[#FEEB00]/80 rounded-lg duration-500">
    <div class="w-4/5 mx-auto rounded-lg overflow-hidden">
      <img src="../assets/imgs/product1.jpg" alt="" />
    </div>
    <p class="text-white font-bold text-lg w-4/5 mx-auto font-cairo mt-6">عوازل مائية</p>
    <p class="text-white font-bold text-lg w-4/5 mx-auto font-cairo">Waterproofing</p>
    <p class="w-4/5 mx-auto hover:scale-105 duration-500">عرض المنتجات</p>
  </div>
</template>
