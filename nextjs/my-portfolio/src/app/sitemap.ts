import { courses } from '@/mocks/courses.mock';
import { Slugify } from '@/utils/slugify.util';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	// url website and sitemap
	const websiteUrl =
		process.env.NEXT_PUBLIC_WEBSITE_URL ?? 'http://localhost:4200';

	// create sitemap
	// add all pages in the sitemap
	// Các trang tĩnh
	const staticPages = [`${websiteUrl}`];

	// Các trang động dựa trên courseId
	const dynamicPages = courses.map((course) => {
		return `${websiteUrl}/course/${Slugify(
			course.title,
			course.id.toString()
		)}`;
	});

	// Tổng hợp tất cả các URL
	const allPages = [...staticPages, ...dynamicPages];

	// Trả về response với content type là XML
	return allPages.map((url, index) => ({
		url,
		lastmod: new Date().toISOString(),
		changefreq: 'monthly',
		lastModified: new Date().toISOString(),
		priority: 1 - index / allPages.length,
		changeFrequency: 'monthly',
	}));
}
