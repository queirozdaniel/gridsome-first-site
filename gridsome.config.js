// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Meu Blog",
  siteDescription: "Blog criado para estudar o uso do Gridsome",
  plugins: [
    "@gridsome/transformer-remark",
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "./content/posts/**/*.md",
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
  ],
  templates: {
    Post: "/posts/:title",
    Tag: "/tags/:id",
  },
  transformers: {
    remark: {},
  },
};
