const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'image.tmdb.org',
				port: '',
				pathname: '/t/p/original/**'
			}
		]
	}
};

module.exports = nextConfig;
