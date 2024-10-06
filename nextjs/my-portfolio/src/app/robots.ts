// app/robots.ts (hoặc pages/robots.ts nếu bạn dùng Next.js <13)

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	const domain = process.env.NEXT_PUBLIC_WEBSITE_URL ?? 'localhost:3000';

	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/private/',
		},
		sitemap: `${domain}/sitemap.xml`,
	};
}
