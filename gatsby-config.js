module.exports = {
  siteMetadata: {
    title: `Coastal Airlines`,
    description: `FBLA Web Design 2020 - Monta Vista High School`,
  },
  plugins: [
    // {
    //     //   resolve: "gatsby-plugin-firebase",
    //     //   options: {
    //     //     features: {
    //     //       auth: true,
    //     //       database: false,
    //     //       firestore: true,
    //     //       storage: true,
    //     //       messaging: false,
    //     //       functions: false,
    //     //       performance: false,
    //     //     },
    //     //     credentials: {}//TODO
    //     //   },
    //     // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Troop 485`,
        short_name: `T485`,
        start_url: `/`,
        // icon:``, //TODO
        background_color: `#20232a`,
        theme_color: `#20232a`,
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        showSpinner: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
