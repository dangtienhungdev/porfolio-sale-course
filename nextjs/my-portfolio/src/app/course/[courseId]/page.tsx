'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Book, ChevronRight, Home, List } from 'lucide-react';
import { useMemo, useState } from 'react';

import CourseContent from '@/features/course/[courseId]/components/course-content';
import CourseOverview from '@/features/course/[courseId]/components/course-overview';
import Header from '@/features/home/components/header';
import { courses } from '@/mocks/courses.mock';
import { getICourse } from '@/utils/slugify.util';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function CourseLandingPage() {
	const { courseId } = useParams();
	const courseIdParam = getICourse(courseId as string);

	const [activeTab, setActiveTab] = useState('overview');

	const course = useMemo(() => {
		if (courseIdParam) {
			return courses.find((course) => course.id === Number(courseIdParam));
		}
	}, [courseIdParam]);
	const overview = course?.overview;
	const courseContent = course?.content;

	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-800">
			{/* Header */}
			<Header />

			{/* Breadcrumbs */}
			<motion.nav
				className="bg-gray-200 py-3 dark:bg-gray-700"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}
			>
				<div className="container mx-auto px-4">
					<div className="flex items-center text-sm text-gray-600 dark:text-white">
						<Link href={'/'} className="flex items-center gap-2">
							<Home className="h-4 w-4 mr-2" />
							<motion.span
								className="cursor-pointer"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								transition={{ duration: 0.3 }}
							>
								Home
							</motion.span>
						</Link>
						<ChevronRight className="h-4 w-4 mx-2" />
						<span>Courses</span>
						<ChevronRight className="h-4 w-4 mx-2" />
						<span className="font-semibold truncate">{course?.title}</span>
					</div>
				</div>
			</motion.nav>

			{/* Main Content */}
			<AnimatePresence>
				<main className="container mx-auto px-4 py-8">
					<div className="flex flex-col lg:flex-row">
						{/* Left Side - 80% width on large screens */}
						<div className="lg:w-[70%] lg:pr-8">
							<motion.h2
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className="text-3xl font-bold text-gray-800 dark:text-white mb-6"
							>
								{course?.title}
							</motion.h2>

							{/* Tabs */}
							<motion.div
								className="mb-6"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.7 }}
							>
								<div className="border-b border-gray-200">
									<nav className="-mb-px flex">
										<motion.button
											initial={{ opacity: 0, y: -20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.5, delay: 0.7 }}
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											exit={{ opacity: 0 }}
											className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
												activeTab === 'overview'
													? 'border-blue-500 dark:border-white text-blue-600 dark:text-white'
													: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
											}`}
											onClick={() => setActiveTab('overview')}
										>
											<Book className="h-5 w-5 mr-2 inline" />
											Overview
										</motion.button>
										<motion.button
											initial={{ opacity: 0, y: -20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.5, delay: 0.7 }}
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											exit={{ opacity: 0 }}
											className={`py-4 px-1 border-b-2 font-medium text-sm ${
												activeTab === 'content'
													? 'border-blue-500 dark:border-white text-blue-600 dark:text-white'
													: 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-white hover:border-gray-300'
											}`}
											onClick={() => setActiveTab('content')}
										>
											<List className="h-5 w-5 mr-2 inline" />
											Course Content
										</motion.button>
									</nav>
								</div>
							</motion.div>

							{/* Tab Content */}
							{activeTab === 'overview' && !overview && (
								<motion.div
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.3 }}
									exit={{ opacity: 0, y: -20 }}
									className="p-4 text-center text-gray-500 dark:text-white bg-white dark:bg-gray-700 !rounded-md"
								>
									Course content is currently being updated. Please check back
									later.
								</motion.div>
							)}

							{activeTab === 'overview' && overview && (
								<CourseOverview course={course} />
							)}

							{activeTab === 'content' && (
								<CourseContent courseContent={courseContent} />
							)}
						</div>

						{/* Right Side - 20% width on large screens */}
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="lg:w-[30%] mt-8 lg:mt-0"
						>
							<motion.div className="bg-gray-200 py-3 dark:bg-gray-700 shadow overflow-hidden sm:rounded-lg">
								<motion.div
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									className="px-4 py-5 sm:p-6"
								>
									<Image
										src={course?.images?.[0] as string}
										onError={() => {
											return 'https://res.cloudinary.com/dcwdrvxdg/image/upload/v1728202497/cs-portal/html-css-js-course-intro_bss5fu.jpg';
										}}
										alt="Course Image"
										width={300}
										height={200}
										className="w-full h-auto rounded-lg mb-4"
									/>
									{/* <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
										<div className="flex">
											<div className="flex-shrink-0">
												<AlertCircle className="h-5 w-5 text-yellow-400" />
											</div>
											<div className="ml-3">
												<p className="text-sm text-yellow-700">
													This course is currently in high demand. Enroll now to
													secure your spot!
												</p>
											</div>
										</div>
									</div> */}
								</motion.div>
							</motion.div>
						</motion.div>
					</div>
				</main>
			</AnimatePresence>
		</div>
	);
}
