'use client';

import { motion } from 'framer-motion';

const Banner = () => {
	return (
		<section className="px-4 py-20 text-center">
			<motion.h1
				className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Master Coding with Our Premium Courses
			</motion.h1>
			<motion.p
				className="mx-auto mb-8 max-w-2xl text-xl text-gray-500 dark:text-gray-300"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				From beginner to pro: Comprehensive courses to boost your development
				career
			</motion.p>
			<motion.button
				className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				Get Started
			</motion.button>
		</section>
	);
};

export default Banner;
