'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Code, X } from 'lucide-react';

import { Course } from '@/types/course.type';
import { useState } from 'react';

const Courses = () => {
	const courses: Course[] = [
		{
			title: 'HTML/CSS Fundamentals',
			icon: 'Code',
			color: 'bg-yellow-500',
			roadmap: 'From basics to responsive design',
			practical: 'Build 5 real-world websites',
		},
		{
			title: 'JavaScript Mastery',
			icon: 'Code',
			color: 'bg-yellow-400',
			roadmap: 'Core concepts to advanced ES6+',
			practical: 'Create 10 interactive web applications',
		},
		{
			title: 'ReactJS Mastery',
			icon: 'Code',
			color: 'bg-blue-500',
			roadmap: 'Components, state, and hooks',
			practical: 'Develop a full-featured React app',
		},
		{
			title: 'NextJS Advanced',
			icon: 'Code',
			color: 'bg-black',
			roadmap: 'Server-side rendering to API routes',
			practical: 'Build and deploy a NextJS application',
		},
		{
			title: 'NodeJS Backend Development',
			icon: 'Code',
			color: 'bg-green-500',
			roadmap: 'Server basics to RESTful APIs',
			practical: 'Create a complete backend system',
		},
		{
			title: 'Full-Stack Developer Roadmap',
			icon: 'Code',
			color: 'bg-purple-500',
			roadmap: 'Comprehensive guide to full-stack development',
			practical: 'Build a complete web application from scratch',
		},
	];

	const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

	return (
		<section className="px-4 py-16">
			<h2 className="mb-12 text-center text-3xl font-bold">Our Courses</h2>
			<div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{courses.map((course, index) => (
					<motion.div
						key={course.title}
						className="rounded-lg bg-white dark:bg-gray-700 p-6 shadow-lg cursor-pointer flex flex-col"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						onClick={() => setSelectedCourse(course)}
					>
						<div
							className={`mb-4 inline-block rounded-full w-fit ${course.color} p-3`}
						>
							<Code className="h-6 w-6 text-white" />
						</div>
						<h3 className="mb-2 text-xl font-semibold">{course.title}</h3>
						<p className="text-gray-600 dark:text-gray-300 mb-2">
							Roadmap: {course.roadmap}
						</p>
						<p className="text-gray-600 dark:text-gray-300 mb-4">
							Practical: {course.practical}
						</p>
						<button className="mt-auto flex items-center text-blue-600 dark:text-blue-400 hover:underline">
							Learn more <ArrowRight className="ml-2 h-4 w-4" />
						</button>
					</motion.div>
				))}
			</div>

			{/* Course Detail Modal */}
			<AnimatePresence>
				{selectedCourse && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
						onClick={() => setSelectedCourse(null)}
					>
						<motion.div
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 50, opacity: 0 }}
							className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="flex justify-between items-center mb-4">
								<h3 className="text-2xl font-bold">{selectedCourse.title}</h3>
								<button onClick={() => setSelectedCourse(null)}>
									<X className="h-6 w-6" />
								</button>
							</div>
							<div
								className={`mb-4 inline-block rounded-full ${selectedCourse.color} p-3`}
							>
								<Code className="h-6 w-6 text-white" />
							</div>
							<h4 className="font-semibold mb-2">Course Roadmap:</h4>
							<p className="mb-4">{selectedCourse.roadmap}</p>
							<h4 className="font-semibold mb-2">Practical Application:</h4>
							<p className="mb-4">{selectedCourse.practical}</p>
							<button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
								Enroll Now
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Courses;
