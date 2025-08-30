const { i18n } = require('./next-i18next.config.js');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    i18n,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/cooks',
                permanent: true,
            },
        ]
    },
};

module.exports = nextConfig;
