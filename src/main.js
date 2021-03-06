// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

//import DefaultLayout from '~/layouts/Default.vue'
import AltLayout from "~/layouts/AltLayout.vue";

import "~/assets/css/tailwind.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component

  head.htmlAttrs = { lang: "pt" };
  head.htmlAttrs = { class: "body" };

  Vue.component("Layout", AltLayout);
}
