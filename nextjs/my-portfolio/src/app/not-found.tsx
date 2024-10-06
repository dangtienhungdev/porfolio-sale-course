'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function NotFound() {
	const router = useRouter();

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
			<div className="text-center">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className="text-9xl font-bold text-gray-800 dark:text-gray-200">
						404
					</h1>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
				>
					<h2 className="text-4xl font-semibold text-gray-600 dark:text-gray-400 mt-4">
						Page Not Found
					</h2>
					<p className="text-gray-500 dark:text-gray-500 mt-4 mb-8">
						Oops! The page you are looking for doesn&apos;t exist or has been
						moved.
					</p>
					<motion.button
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						whileInView={{ scale: 1.05 }}
						whileHover={{ scale: 1.1 }}
						onClick={() => router.push('/')}
						className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
					>
						Go Home
					</motion.button>
				</motion.div>
			</div>
		</div>
	);
}
