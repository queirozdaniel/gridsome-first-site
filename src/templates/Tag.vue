<template>
  <Layout>
    <h1>#{{ $page.tag.title }} articles</h1>
    <article v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
      <g-image :src="edge.node.cover_image" />
      <h2>{{ edge.node.title }}</h2>
      <p>{{ edge.node.excerpt }}</p>
      <p>Posted {{ edge.node.date }} - {{ edge.node.timeToRead }} min read</p>
      <g-link :to="edge.node.path"> Read Post</g-link>
    </article>
  </Layout>
</template>

<page-query>
query ($id: ID!){
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Post {
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
  }
}
</page-query>
