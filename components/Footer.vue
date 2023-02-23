<template>
  <footer>
    <div class="sosmed">
      <NuxtLink
        to="/location"
        class="menu-btn p-1 text-xs"
        onclick="mapsSelector()"
      >
        <Icon name="ph:map-pin" class="icon" />
      </NuxtLink>
      <a
        href="https://api.whatsapp.com/send?phone=6287855310153"
        target="_blank"
        class="menu-btn p-1 text-xs"
      >
        <Icon name="ph:whatsapp-logo" class="icon" />
      </a>
      <a
        href="https://www.instagram.com/mrsodonoghue.yk/"
        target="_blank"
        class="menu-btn p-1 text-xs"
      >
        <Icon name="ph:instagram-logo" class="icon" />
      </a>
      <a
        href="https://www.facebook.com/mrsodonoghue.yk/"
        target="_blank"
        class="menu-btn p-1 text-xs"
      >
        <Icon name="ph:facebook-logo" class="icon" />
      </a>
    </div>
    <p class="text-xs uppercase prose">
      <span class="font-semibold">Mrs O'Donoghue</span> - Home Made Foods
    </p>
  </footer>
</template>
