import { Course } from '@/types/course.type';
import { motion } from 'framer-motion';

interface CourseOverviewProps {
	course?: Course;
}

const CourseOverview = ({ course }: CourseOverviewProps) => {
	const overview = course?.overview;
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.3 }}
			exit={{ opacity: 0, y: -20 }}
			className="prose max-w-none dark:text-white"
		>
			{course?.overview?.desc && course?.overview?.desc.length > 0 && (
				<>
					<h3 className="text-xl font-semibold mb-4">Description</h3>
					{course?.overview?.desc?.map((item) => {
						return (
							<p
								className="mb-4"
								key={item}
								dangerouslySetInnerHTML={{
									__html: item,
								}}
							></p>
						);
					})}
				</>
			)}

			{overview?.learning && overview?.learning.length > 0 && (
				<>
					<h3 className="text-xl font-semibold mt-8 mb-4">
						What will you learn?
					</h3>
					<ul className="list-disc pl-5 space-y-2">
						{overview?.learning?.map((item) => {
							return (
								<li
									key={item}
									dangerouslySetInnerHTML={{
										__html: item,
									}}
								></li>
							);
						})}
					</ul>
				</>
			)}

			{overview?.requirements && overview?.requirements.length > 0 && (
				<>
					<h3 className="text-xl font-semibold mt-8 mb-4">Requirements</h3>
					<ul className="list-disc pl-5 space-y-2">
						{overview?.requirements?.map((item) => {
							return (
								<li
									key={item}
									dangerouslySetInnerHTML={{
										__html: item,
									}}
								></li>
							);
						})}
					</ul>
				</>
			)}
		</motion.div>
	);
};

export default CourseOverview;
