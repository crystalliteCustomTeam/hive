/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.infinitidigital.us",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/landing", "/landing/*", "/thank-you"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/landing", "/landing/*", "/thank-you"],
      },
      {
        userAgent: "ChatGPT-User",
        disallow: "/",
        allow: ["/free-seo-score-checker", "/what-is-local-seo"],
      },
    ],
  },
};
