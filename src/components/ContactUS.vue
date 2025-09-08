<template>
  <div class="relative p-4 min-h-screen font-Tajawal overflow-hidden">
    <!-- المحتوى -->
    <h1
      class="text-5xl font-bold mb-4 text-center p-4 text-primary font-Tajawal relative z-10"
      v-motion-slide-visible-bottom
      :delay="200"
      :duration="1000"
    >
      {{ $t('contact.title') }}
    </h1>

    <p class="text-black text-center">
      {{ $t('contact.description') }}
    </p>

    <div class="md:grid grid-cols-4 gap-4 m-6 p-6 font-Tajawal">
      <div class="flex items-center justify-center flex-col">
        <div class="bg-primary size-14 rounded-full flex p-2 items-center justify-center my-3">
          <img src="../assets/icons/mail2.png" alt="" />
        </div>
        <p class="text-primary text-3xl text-center my-3 font-bold">{{ $t('contact.email') }}</p>
        <p class="text-black text-center">{{ $t('contact.email_address') }}</p>
      </div>

      <div class="flex items-center justify-center flex-col">
        <div class="bg-primary size-14 rounded-full flex p-2 items-center justify-center my-3">
          <img src="../assets/icons/time2.png" alt="" />
        </div>
        <p class="text-primary text-3xl text-center my-3 font-bold">
          {{ $t('contact.working_hours') }}
        </p>
        <p class="text-black text-center">{{ $t('contact.working_hours_time') }}</p>
      </div>

      <div class="flex items-center justify-center flex-col">
        <div class="bg-primary size-14 rounded-full flex p-2 items-center justify-center my-3">
          <img src="../assets/icons/phone2.png" alt="" />
        </div>
        <p class="text-primary text-3xl text-center my-3 font-bold">{{ $t('contact.phone') }}</p>
        <p class="text-black text-center">{{ $t('contact.phone_number') }}</p>
      </div>

      <div class="flex items-center justify-center flex-col">
        <div class="bg-primary size-14 rounded-full flex p-2 items-center justify-center my-3">
          <img src="../assets/icons/internet.png" alt="" />
        </div>
        <p class="text-primary text-3xl text-center my-3 font-bold">{{ $t('contact.social') }}</p>
        <div class="flex gap-2 items-center">
          <a href="https://www.facebook.com/share/1GUrdUdzK7/?mibextid=wwXIfr"
            ><img width="35px" src="../assets/icons/instagram.png" alt=""
          /></a>
          <a href="https://www.instagram.com/mshydllkymwyt?igsh=MWdjcHBjc2pzamRpZA=="
            ><img width="35px" src="../assets/icons/facebook.png" alt=""
          /></a>
          <a href="https://www.tiktok.com/@user516502814988?_t=ZM-8zVZVMO1FeY&_r=1"
            ><img width="35px" src="../assets/icons/tiktok.png" alt=""
          /></a>
          <a
            href="https://api.whatsapp.com/send?phone=%2B218923336005&context=Afe9GBHqcpLyB8Va1iwrqk_QDjIZeZAFhtvhBLnCNJgdida85sQLLi0CU2n7x7K-gKhPsxCvdc3O_mPcxKdiKZaaD8ARc9ccrz4G9rcdKvlTN5g2KQ6tMtYFFLThMbAzL0Aw2NtjR2ocj2yuTpN2-yUM9A&source=FB_Page&app=facebook&entry_point=page_cta"
            ><img width="35px" src="../assets/icons/whatsapp.png" alt=""
          /></a>
        </div>
      </div>
    </div>
    <div class="flex justify-center p-6" dir="rtl">
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
  </div>
</template>
<style scoped></style>
