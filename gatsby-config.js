module.exports = {
  siteMetadata: {
    title: "Jatzek3 Blog",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
      resolve: "gatsby-source-filesystem",
      options: {
        name: `apps`,
        path: `${__dirname}/apps`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};