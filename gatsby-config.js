module.exports = {
  siteMetadata: {
    title: `Believer's in Tech`,
    description: `We are on a mission to help Believers in tech thrive and make impact for the Gospel by providing a platform for new and old to get inspired by the stories and journey of others, learn and take action while at it.`,
    author: `@believers_tech`,
    siteUrl: `https://believersin.tech/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: '/images/' // See below to configure properly
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Believer's in Tech`,
        short_name: `BiT`,
        start_url: `/`,
        background_color: `#F0EBE8`,
        theme_color: `#F0EBE8`,
        display: `minimal-ui`,
        icon: `src/images/BiT-Logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
