/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Tatsuya Akao Portfolio Site`,
    description: `Tatsuya Akaoのポートフォリオサイトです。`,
    titleTemplate: `%s | Tatsuya Akao Portfolio Site`,
    url: `https://tatsuyaakao-portfolio.netlify.app`,
    twitterUsername: `@a_tatsu1512`,
    image: `/main-img.png`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: "tatsuya-akao",
        apis: [
          {
            endpoint: "history",
          },
          {
            endpoint: "works",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lato:400,500,700", "Roboto:300,400,500,700"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`,
      },
    },
  ],
}
