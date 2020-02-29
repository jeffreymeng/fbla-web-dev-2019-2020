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
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
          require('autoprefixer'),
        ],
      },
    },
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
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        showSpinner: true,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: true,
          database: false,
          firestore: true,
          storage: false,
          messaging: false,
          functions: false,
          performance: false,
        },
        credentials: {
          apiKey: "AIzaSyAxwtWhP9KDXEiqV2pAk67O2d-fnDDmxMg",
          authDomain: "fbla-website-design-2020.firebaseapp.com",
          databaseURL: "https://fbla-website-design-2020.firebaseio.com",
          projectId: "fbla-website-design-2020",
          storageBucket: "fbla-website-design-2020.appspot.com",
          messagingSenderId: "336349869076",
          appId: "1:336349869076:web:ac05b19b25c05f96b06301",
          measurementId: "G-5BBC2V2HZE",
        }
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
