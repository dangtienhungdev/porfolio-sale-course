"use client";

import Collapsible from "@/components/ui/collapsible";
import { Project } from "@/types/course.type";
import { motion } from "framer-motion";

interface ProjectListProps {
	projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.3 }}
			exit={{ opacity: 0, y: -20 }}
		>
			<h3 className="text-xl font-semibold mb-4 dark:text-white">Projects</h3>
			<div className="overflow-hidden sm:rounded-md">
				{projects && projects?.length > 0 ? (
					projects.map((project) => {
						return (
							<Collapsible
								key={project.id}
								title={project.title}
								link={project.linkDemo}
							/>
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

export default ProjectList;
