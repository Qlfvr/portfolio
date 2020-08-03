/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/reponame",
  plugins: [
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/assets/img`,
        },
      },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
        resolve: `gatsby-source-strapi`,
        options: {
          apiURL: `http://localhost:1337`,
          queryLimit: 1000, // Default to 100
        contentTypes: [`info`, `technologies`, `education`],
          //If using single types place them in this array.
        //   singleTypes: [`home-page`, `contact`],
          // Possibility to login with a strapi user, when content types are not publically available (optional).
        //   loginData: {
        //     identifier: "",
        //     password: "",
        //   },
        },
      },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
