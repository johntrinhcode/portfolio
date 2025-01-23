import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "pub-d2c449d80cd44af692a008410e49505e.r2.dev",
			},
		],
	},
};

export default nextConfig;
