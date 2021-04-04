require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Android Dev BR`,
    description: `Uma comunidade de desenvolvimento Android para falantes de português.`,
    author: `Android Dev BR`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID || "none",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `android-dev-br`,
        short_name: `adbr`,
        start_url: `/`,
        background_color: `#259347`,
        theme_color: `#259347`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: `https://androiddevbr.us17.list-manage.com/subscribe/post?u=fca2e57107180ec967ad9b6cb&amp;id=1b10013da7`, // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: "gatsby-source-github",
      options: {
        headers: {
          Authorization: `Bearer ${process.env.GATSBY_GITHUB_TOKEN}`, // https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
        },
        queries: [
          `
          {
            repository(owner: "androiddevbr", name: "codigo-de-conduta") {
              name
              object(expression: "master:README.md") {
                ... on Blob {
                  text
                }
              }
            }
          }
          `,
          `
          {
            repository(owner: "androiddevbr", name: "como-contribuir") {
              name
              object(expression: "master:README.md") {
                ... on Blob {
                  text
                }
              }
            }
          }
          `,
          `
          {
            repository(owner: "androiddevbr", name: "materiais-de-estudo") {
              name
              object(expression: "master:README.md") {
                ... on Blob {
                  text
                }
              }
            }
          }
          `,
          `
          {
            repository(owner: "androiddevbr", name: "vagas") {
              name
              object(expression: "master:README.md") {
                ... on Blob {
                  text
                }
              }
            }
          }
          `,
          `
          {
            repository(owner: "androiddevbr", name: "sugestoes-temas") {
              name
              object(expression: "master:README.md") {
                ... on Blob {
                  text
                }
              }
            }
          }
          `,
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
