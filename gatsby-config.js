module.exports = {
  siteMetadata: {
    title: "Jatzek3",
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
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `apps`,
        path: `${__dirname}/apps`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `way`,
        path: `${__dirname}/way`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};