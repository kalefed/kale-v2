/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    target: 'experimental-serverless-trace',
    exportPathMap: function () {
      return {
        '/': { page: '/' }, // Replace with your page routes
        '/about': { page: '/about' },
        '/canadarevenueagency': { page: '/canadarevenueagency' },
        '/cisc226': { page: '/cisc226' },
        '/compsa': { page: '/compsa' },
        '/orientation': { page: '/orientation' },
        '/statisticscanada': { page: '/statisticscanada' },
        '/studentpeermentor': { page: '/studentpeermentor' },
        '/studentsubcommittee': { page: '/studentsubcommittee' },
      };
    },
  };