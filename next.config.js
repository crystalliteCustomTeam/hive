
const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    async rewrites() {
        return [
          {
            source: "/api/send-email",
            destination: "https://dev18.pulse-force.com/api/send-email/",
          },
        ];
      },
}