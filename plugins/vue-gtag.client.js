// import VueGtag from "vue-gtag-next";

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(VueGtag, {
//     property: {
//       id: "G-0MY9T6RBZX",
//     },
//   });
// });

import VueGtag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: {
        id: "G-0MY9T6RBZX",
      },
    },
    nuxtApp.$router
  );
});
