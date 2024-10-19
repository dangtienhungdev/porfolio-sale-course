import Collapsible from "@/components/ui/collapsible";
import { CourseContent as CourseContentType } from "@/types/course.type";
import { motion } from "framer-motion";

interface CourseContentProps {
	courseContent?: CourseContentType[];
}

const CourseContent = ({ courseContent }: CourseContentProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.3 }}
			exit={{ opacity: 0, y: -20 }}
		>
			<h3 className="text-xl font-semibold mb-4 dark:text-white">
				Course Content
			</h3>
			<div className="overflow-hidden sm:rounded-md">
				{courseContent && courseContent?.length > 0 ? (
					courseContent.map((section) => {
						return (
							<Collapsible
								key={section.id}
								title={section.title}
								link={section.linkDemo}
							>
								{section.children &&
									section.children.length > 0 &&
									section.children?.map((child) => {
										return (
											<div
												key={child.id}
												className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors"
											>
												<span>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="currentColor"
														className="size-6"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
														/>
													</svg>
												</span>
												<p className="text-gray-800 dark:text-white">
													{child.title}
												</p>
											</div>
										);
									})}
							</Collapsible>
						);
					})
				) : (
					<div className="p-4 text-center text-gray-500 dark:text-white">
						Course content is currently being updated. Please check back later.
					</div>
				)}
			</div>
		</motion.div>
	);
};

export default CourseContent;
