/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
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
