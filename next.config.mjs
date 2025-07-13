/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com'
            },
            {
                protocol: 'https',
                hostname: 'framerusercontent.com'
            },
            {
                protocol: 'https',
                hostname: '10billion.org'
            },
            {
                protocol: 'https',
                hostname: 'zormor.com'
            },
            {
                protocol: 'https',
                hostname: 'techclaritycoach.com'
            },
            {
                protocol: 'https',
                hostname: 'img.freepik.com'
            }
        ],
    },
};

export default nextConfig;
