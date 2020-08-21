<template>
  <Layout>
    <div class="py-16 px-8 shadow-md" v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query ($path: String!) {
  post (path: $path) {
    content
  }
}
</page-query>
