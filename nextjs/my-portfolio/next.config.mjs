/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
			},
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
			{
				protocol: "https",
				hostname: "api.microlink.io",
			},
		],
	},
	async rewrites() {
		return [
			{
				source: "/sitemap.xml",
				destination: "/sitemap",
			},
		];
	},
};

export default nextConfig;
