<template>
  <Layout>
    <h1 class="text-xl text-center">Blog</h1>
    <article class="shadow-md my-8 p-4" v-for="edge in $page.allPost.edges" :key="edge.node.id">
      <g-image :src="edge.node.cover_image" />
      <h2>{{ edge.node.title }}</h2>
      <p>{{ edge.node.excerpt }}</p>
      <p>Posted {{ edge.node.date }} - {{ edge.node.timeToRead }} min read</p>
      <div class="my-8">
        <g-link
          class="bg-gray-200 py-4 px-8 rounded-sm mx-4"
          style="padding: .25rem"
          v-for="tag in edge.node.tags"
          :to="tag.path"
          :key="tag.id"
        >#{{ tag.id }}</g-link>
      </div>
      <div class="text-center">
        <g-link class="font-semibold" :to="edge.node.path">Read Post</g-link>
      </div>
    </article>

    <Pager :info="$page.allPost.pageInfo" linkClass="pager text-center" />
  </Layout>
</template>

<page-query>
query ($page: Int){
  allPost (perPage: 2, page: $page) @paginate{
    pageInfo{
      totalPages
      currentPage
    }
    edges{
      node{
        id
        content
        title
        excerpt
        tags {
            id
            path
        }
        date(format: "MMMM Do, YYYY")
        timeToRead
        path
        cover_image (width: 960, height: 300, fit: cover, quality: 100, blur: 15)
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
export default {
  components: {
    Pager,
  },
};
</script>

<style scoped>
.pager {
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  padding: 40px 20px;
}
</style>
