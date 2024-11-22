const siteUrl = 'https://galacticdigitalstudios.com';
module.exports = {
    siteUrl,
    exclude: ["/404"],
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          disallow: ["/404"],
        },
        { userAgent: "*", allow: "/" },
      ],
      additionalSitemaps: [
        `${siteUrl}sitemap.xml`,
        `${siteUrl}server-sitemap.xml`,
      ],
    },
    transform: async (config, path) => {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
        canonical: `${config.siteUrl}${path}`,
      };
    },
  };