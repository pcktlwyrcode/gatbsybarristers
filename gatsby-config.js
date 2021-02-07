/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

 module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'gabby gatsby',
    description: "some random desc",
    author: "@ronjrmey",
    data: ['itemm 1', 'item 2'],
    person: {name:'peter', age: 32}
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `krg0vtaz3aom`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
   
    `gatsby-plugin-styled-components`,
   {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
       {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`

  ],
}
