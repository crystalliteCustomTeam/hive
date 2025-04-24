/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.infinitidigital.us",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/landing", "/landing/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/landing", "/landing/*"],
      },
    ],
  },
};
