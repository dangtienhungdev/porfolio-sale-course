'use client';

import { CheckCircle, Star } from 'lucide-react';

import Banner from '@/features/home/components/banner';
import Courses from '@/features/home/components/courses';
import Header from '@/features/home/components/header';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LandingPage() {
	const router = useRouter();

	useEffect(() => {
		// Add the custom-scrollbar class to the body when the component mounts
		document.body.classList.add('custom-scrollbar');

		// Remove the class when the component unmounts
		return () => {
			document.body.classList.remove('custom-scrollbar');
		};
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white">
			<Header />
			{/* Hero Section */}
			<Banner />

			{/* Courses Section */}
			<Courses />

			{/* Features Section */}
			<section className="bg-gray-50 dark:bg-gray-800 px-4 py-16">
				<div className="mx-auto max-w-4xl">
					<h2 className="mb-12 text-center text-3xl font-bold">
						Why Choose Our Courses?
					</h2>
					<div className="grid gap-8 sm:grid-cols-2">
						{[
							'Expert instructors',
							'Hands-on projects',
							'Flexible learning',
							'Career support',
							'Industry-relevant curriculum',
							'Community access',
						].map((feature, index) => (
							<motion.div
								key={feature}
								className="flex items-center"
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<CheckCircle className="mr-3 h-6 w-6 text-green-500" />
								<span>{feature}</span>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonial Section */}
			<section className="px-4 py-16">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="mb-12 text-3xl font-bold">My Favorites Quote</h2>
					<motion.div
						className="rounded-lg bg-white dark:bg-gray-700 p-8 shadow-lg"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
					>
						<p className="mb-4 text-xl italic text-gray-600 dark:text-gray-300">
							&quot;Learning new everyday not the copy cat of yesterday!&quot;
						</p>
						<p className="mb-4 text-sm italic text-gray-600 dark:text-gray-300">
							&quot;Qua một ngày, chúng ta học thêm được gì mới? Hay trở thành
							bản sao của ngày hôm qua!&quot;
						</p>
						<div className="flex items-center justify-center">
							<Star className="mr-1 h-5 w-5 text-yellow-500" />
							<Star className="mr-1 h-5 w-5 text-yellow-500" />
							<Star className="mr-1 h-5 w-5 text-yellow-500" />
							<Star className="mr-1 h-5 w-5 text-yellow-500" />
							<Star className="h-5 w-5 text-yellow-500" />
						</div>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-blue-600 px-4 py-16 text-white dark:bg-gray-800">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="mb-4 text-3xl font-bold">
						Ready to Start Your Coding Journey?
					</h2>
					<p className="mb-8 text-xl">
						Enroll now and get 20% off your first course!
					</p>
					<motion.button
						className="rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => router.push(`/course/123`)}
					>
						Enroll Now
					</motion.button>
				</div>
			</section>
		</div>
	);
}
