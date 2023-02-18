<template>
  <footer>
    <a href="/location" class="menu p-1 text-xs" onclick="mapsSelector()">
      <Icon name="ph:map-pin" class="icon" />
    </a>
    <a
      href="https://api.whatsapp.com/send?phone=6287855310153"
      target="_blank"
      class="menu p-1 text-xs"
    >
      <Icon name="ph:whatsapp-logo" class="icon" />
    </a>
    <a
      href="https://www.instagram.com/mrsodonoghue.yk/"
      target="_blank"
      class="menu p-1 text-xs"
    >
      <Icon name="ph:instagram-logo" class="icon" />
    </a>
    <a
      href="https://www.facebook.com/mrsodonoghue.yk/"
      target="_blank"
      class="menu p-1 text-xs"
    >
      <Icon name="ph:facebook-logo" class="icon" />
    </a>
  </footer>
</template>

<script>
function mapsSelector() {
  if (
    /* if we're on iOS, open in Apple Maps */
    navigator.platform.indexOf("iPhone") != -1 ||
    navigator.platform.indexOf("iPad") != -1 ||
    navigator.platform.indexOf("iPod") != -1
  )
    window.open("maps://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");
  /* else use Google */ else
    window.open(
      " https://www.google.pt/maps/dir//latitude,longitude/@latitude,longitude,733m/data=!3m1!1e3!4m4!4m3!1m0!1m1!4e1?hl=en"
    );
}
</script>
