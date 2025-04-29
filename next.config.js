const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  webpack(config, { isServer }) {
    // Adding video file loader
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash].[ext]',
            publicPath: '/_next/static/media', 
            outputPath: 'static/media', 
          },
        },
      ],
    });

    return config;
  },

  async redirects() {
    return [
       {
        source: '/data-driven-social-campaigns-analytics-and-reporting',
        destination: '/assess-social-media-ad-campaign-analytics-reporting',
        permanent: true,
      },
      {
        source: '/effective-audience-targeting-via-facebook-and-instagram',
        destination: '/effective-audience-targeting-via-paid-social-media-marketing',
        permanent: true,
      },
    ];
  },
});
