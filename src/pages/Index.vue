<template>
  <Layout :showFooter="true">
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image
      class="mx-auto"
      alt="Example image"
      src="~/assets/images/favicon.png"
      height="200"
      width="200"
      fit="contain"
    />

    <h1 class="font-medium text-3xl text-center">Hello, world!</h1>

    <p
      class="my-16"
    >Esse é apenas um Blog para estudo do Gridsome. Ele está mais ou menos completo rs. Para entender o codigo precisa apenas saber Vue.js e Graphql</p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
  </Layout>
</template>

<script>
import Footer from "~/components/Footer.vue";
export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    Footer,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
