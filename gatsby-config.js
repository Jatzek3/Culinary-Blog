module.exports = {
  siteMetadata: {
    title: "Jatzek3",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",

  ],
};