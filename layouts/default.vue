<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
useServerSeoMeta({
  title: "Mrs. O'Donoghue - Home Made Foods",
  ogTitle: "Mrs. O'Donoghue - Home Made Foods",
  description:
    "Fresh from the oven daily. Dine in or open order. Jl. Kaliurang km. 7,8, Jl. Kopen Utama No.16, Banteng, Sinduharjo, Ngaglik, Sleman DIY 55581",
  ogDescription:
    "Fresh from the oven daily. Dine in or open order. Jl. Kaliurang km. 7,8, Jl. Kopen Utama No.16, Banteng, Sinduharjo, Ngaglik, Sleman DIY 55581",
  ogImage: "https://mrsodonoghue.netlify.app/images/ModBadge.png",
  twitterCard: "summary_large_image",
});
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});
</script>
