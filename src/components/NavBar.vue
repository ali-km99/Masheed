<template>
  <nav class="bg-gray-400/[53%] backdrop-blur-md flex items-center px-20 h-[120px]">
    <img width="180" class="ml-8" src="../assets/imgs/logo.png" alt="" />
    <div class="flex w-2/3 gap-16 text-white font-semibold font-cairo duration-300 text-lg mx-auto">
      <RouterLink to="/" class="hover:text-primary duration-300 p-3"> الصفحة الرئيسة </RouterLink>
      <RouterLink to="/about" class="hover:text-primary duration-300 p-3"> حول </RouterLink>

      <RouterLink to="/products" class="hover:text-primary duration-300 p-3"> المنتجات </RouterLink>
      <RouterLink to="/Portfolio" class="hover:text-primary duration-300 p-3"> أعمالنا </RouterLink>
      <RouterLink
        to="/contact"
        class="duration-500 border-primary border-[3px] p-3 rounded-lg hover:bg-primary mr-6"
      >
        تواصل معنا
      </RouterLink>
    </div>
    <img width="180" class="mr-8" src="../assets/imgs/weberLogo.png" alt="" />
  </nav>
</template>
