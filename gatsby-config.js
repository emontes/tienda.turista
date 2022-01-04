require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "Tienda Turista",
    siteTitleDefault: "Tienda del Turista",
    siteUrl: "https://shopify-demo.gatsbyjs.com",
    hrefLang: "en",
    siteDescription:
      "Los productos que encantan a los turistas a los mejores precios. Aquí encontrarás desde los Gadgets que utilizas mientras planeas tu viaje pasando por artículos para una vida saludable o quizás los lentes de sol que usarás en tus vacaciones.",
    siteImage: "/default-og-image.jpg",
    twitter: "@gatsbyjs",
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tienda Turista`,
        short_name: `TiendaTur`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#00f`,
        display: `standalone`,
        lang: `es`,
        icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ].filter(Boolean),
}
