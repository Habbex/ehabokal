module.exports = {
  pathPrefix: "/ehabokal",
  siteMetadata: {
    title: `Ehabs Portfolio`,
    description: `Ehab's Portfolio desc`,
    author: `@Ehab Okal`,
    twitter:`https://www.twitter.com`,
    github: `https://www.github.com`,
    email: `mailto: ihabokal@hotmail.com`
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
 {
      resolve: `gatsby-plugin-sass`,
      options: {
       cssLoaderOptions: {
          camelCase: false,
       },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
