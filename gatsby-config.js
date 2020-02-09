const path = require('path')
require(`dotenv`).config({
  path: `.env`,
})

const getvssopts = ()=>{
  const { VSSUE_OWNER, VSSUE_REPO, VSSUE_CLIENTID, VSSUE_CLIENT_SECRET } = process.env
  let opts = {owner:VSSUE_OWNER, repo:VSSUE_REPO, clientId:VSSUE_CLIENTID, clientSecret:VSSUE_CLIENT_SECRET}
  return opts
}

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Minimal Blog - Gatsby Theme`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        lplugins: path.join(__dirname, 'plugins')
      }
    },
    {
      resolve: 'gatsby-plugin-vssue',
      options: getvssopts()
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/lekoarts_de`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/lekoarts.de/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
