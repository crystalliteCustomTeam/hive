/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.infinitidigital.us',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  async additionalPaths(config) {
    return [
      {
        loc: '/landing', 
        lastmod: new Date().toISOString(),
        priority: 0.8,
      },
    ];
  },
};
