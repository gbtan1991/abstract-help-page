/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `abstract-help-page`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/",
      "icon": "/src/images/favicon.png",
      families: ['ThemeFonts'],
      urls: ['./src/fonts/GT-America-Standard-Regular.otf']
    },
    __key: "images"
  }]
};