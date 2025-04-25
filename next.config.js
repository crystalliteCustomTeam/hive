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
            name: 'static/media/[name].[hash].[ext]', // You can customize this
            publicPath: '/_next/static/media', // This is the path that Next.js will use
            outputPath: 'static/media', // This is where the files will be output in your build
          },
        },
      ],
    });

    // Return the updated config
    return config;
  },
});
