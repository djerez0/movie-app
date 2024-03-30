/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "image.tmdb.org"
            },
            {
                protocol: "https",
                hostname: "www.kindpng.com"
            }
        ]
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/peliculas?page=1",
                permanent: true
            }
        ];
    }
};

export default nextConfig;
