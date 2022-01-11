module.exports = {
  siteMetadata: {
    author: 'Jacek Kawalec',
    title: "The Yellow Pages",
    siteUrl: `https://theyellowpages.live`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Yellow Pages`,
        short_name: `Pages`,
        start_url: `http://www.theyellowpages.live/`,
        background_color: `#ebeae4`,
        theme_color: `#ffe706`,
        display: `minimal-ui`,
        icon: `src/favicon/apple-touch-icon.png`, // This path is relative to the root of the site.
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: false, // boolean to turn off the default security headers
        mergeLinkHeaders: false, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://jatzek3.gatsby.io.com',
        sitemap: 'https://jatzek3.gatsby.io/sitemap-0.xml',
        // temporary fix to duplicate files in way && blog 
        policy: [{ userAgent: "Googlebot", allow: '/', disallow: "/way" }],
        policy: [{ userAgent: '*', allow: '/' }],

      }
    },
    {
      resolve: "gatsby-plugin-offline",  // have to be after gatsby plugin manifest -- read documentation after removing
      options: {
        workboxConfig: {
          globPatterns: ['**/favicon-32x32.png*'],
        }
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog/Society`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog/Movies`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog/Cooking`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog/Programming`,
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-RX9YGFX7DV", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  ],
};