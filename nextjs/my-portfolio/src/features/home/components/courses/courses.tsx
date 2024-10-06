'use client';

import { ArrowRight, Code } from 'lucide-react';

import { PinContainer } from '@/components/ui/3d-pin';
import { Slugify } from '@/utils/slugify.util';
import { cn } from '@/lib/utils';
import { courses } from '@/mocks/courses.mock';
import { motion } from 'framer-motion';

const Courses = () => {
	return (
		<section className="px-4 py-16" id="courses">
			<h2 className="mb-12 text-center text-3xl font-bold">Our Courses</h2>
			<div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{courses.map((course, index) => {
					return (
						<PinContainer
							key={course.id}
							title={course.title}
							containerClassName="w-full"
							href={`/course/${Slugify(course.title, course.id.toString())}`}
						>
							<motion.div
								className="rounded-lg bg-white dark:bg-gray-700 p-6 shadow-lg cursor-pointer h-full flex flex-col"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div
									className={cn(
										`mb-4 inline-block rounded-full w-fit p-3 `,
										course.color === 'bg-yellow-500' ? 'bg-yellow-500' : '',
										course.color === 'bg-yellow-400' ? 'bg-yellow-400' : '',
										course.color === 'bg-blue-500' ? 'bg-blue-500' : '',
										course.color === 'bg-green-500' ? 'bg-green-500' : '',
										course.color === 'bg-purple-500' ? 'bg-purple-500' : '',
										course.color
									)}
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
								<button className="mt-auto flex items-center text-blue-600 dark:text-blue-400">
									Learn more <ArrowRight className="ml-2 h-4 w-4" />
								</button>
							</motion.div>
						</PinContainer>
					);
				})}
			</div>
		</section>
	);
};

export default Courses;
