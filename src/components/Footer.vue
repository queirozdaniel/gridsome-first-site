<template>
  <footer>
    Feito com muito Amor. {{getCurrentYear}}
    <a :href="href">Google</a>
  </footer>
</template>

<script>
export default {
  data() {
    return { href: "http://google.com" };
  },
  computed: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style>
</style>