<template>
  <footer class="bg-slate-200 min-h-[70vh] bg-no-repeat bg-cover p-8 shadow-inner">
    <div class="p-6 flex justify-between flex-col md:flex-row" dir="rtl">
      <div class="h-full md:w-1/4">
        <img class="pt-2 mt-4 mx-auto" width="200" src="../assets/imgs/logo.png" alt="" />
      </div>
      <div class="h-full md:w-1/3 w-full">
        <h3 class="text-center text-primary p-3 mb-6 text-xl font-bold">الصفحات</h3>
        <div class="flex justify-around">
          <ul class="p-2 text-black/50">
            <li class="my-2">
              <RouterLink to="/" class="hover:text-black duration-200"> الصفحة الرئيسة </RouterLink>
            </li>
            <li class="my-2">
              <RouterLink to="/about" class="hover:text-black duration-200"> المنتجات </RouterLink>
            </li>
            <li class="my-2">
              <RouterLink to="/Portfolio" class="hover:text-black duration-200">
                أعمالنا
              </RouterLink>
            </li>
            <li class="my-2">
              <RouterLink to="/about" class="hover:text-black duration-200"> حول </RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="h-full md:w-1/4">
        <h3 class="text-center text-primary p-3 mb-6 text-xl font-bold">التواصل</h3>
        <ul class="p-2 text-black/50">
          <li class="my-2 flex items-center">
            <img src="../assets/icons/redPhonr.png" class="size-7 mx-2" alt="" />
            <p dir="ltr">092 123 0000</p>
          </li>

          <li class="my-2 flex items-center">
            <img src="../assets/icons/redMAIL.png" class="size-7 mx-2" alt="" />
            <p dir="ltr">masheed@gmail.com</p>
          </li>
          <li class="my-2 flex items-center">
            <img src="../assets/icons/redTime.png" class="size-7 mx-2" alt="" />
            <p>مواعيد العمل 8:30 ص - 8:00 م</p>
          </li>
        </ul>
      </div>
    </div>
    <hr class="border-blatext-white/15" />
    <div class="w-full h-5 justify-center items-center gap-2 flex my-6">
      <a href=""><img width="35px" src="../assets/icons/youtube.png" alt="" /></a>
      <a href=""><img width="35px" src="../assets/icons/facebook.png" alt="" /></a>
      <a href=""><img width="35px" src="../assets/icons/instagram.png" alt="" /></a>
    </div>
    <p class="text-center text-black/50 mt-3 text-sm">© 2025 Masheed</p>
  </footer>
</template>
