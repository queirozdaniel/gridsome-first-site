<template>
  <Layout :showFooter="true">
    <h1>About us</h1>
    <p>{{$static.metadata.siteDescription}}</p>
  </Layout>
</template>

<static-query>
 {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: "About us",
      meta: [
        { name: "description", content: this.$static.metadata.siteDescription },
      ],
    };
  },
};
</script>
