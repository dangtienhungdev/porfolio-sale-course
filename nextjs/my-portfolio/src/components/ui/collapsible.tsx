"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { LinkPreview } from "./link-preview";

interface CollapsibleProps {
	title: string;
	children?: React.ReactNode;
	link?: string;
}

export default function Collapsible({
	title,
	children,
	link,
}: CollapsibleProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="w-full shadow mb-4 mx-auto border border-gray-200 dark:border-gray-800 rounded-md overflow-hidden">
			{!link && (
				<button
					className="flex justify-between items-center w-full p-4 bg-white dark:bg-gray-700 transition-colors"
					onClick={() => setIsOpen(!isOpen)}
				>
					{!link && (
						<span className="font-medium text-gray-800 dark:text-white truncate">
							{title}
						</span>
					)}
					{link && <LinkPreview url={link}>{title}</LinkPreview>}
					{children && (
						<motion.div
							animate={{ rotate: isOpen ? 180 : 0 }}
							transition={{ duration: 0.3 }}
						>
							<ChevronDown className="w-5 h-5 text-gray-800 dark:text-white" />
						</motion.div>
					)}
				</button>
			)}
			{link && (
				<LinkPreview
					className="flex justify-between items-center w-full p-4 bg-white dark:bg-gray-700 transition-colors"
					url={link}
				>
					<span className="font-medium text-gray-800 dark:text-white truncate">
						{title}
					</span>
					{children && (
						<motion.div
							animate={{ rotate: isOpen ? 180 : 0 }}
							transition={{ duration: 0.3 }}
						>
							<ChevronDown className="w-5 h-5 text-gray-800 dark:text-white" />
						</motion.div>
					)}
				</LinkPreview>
			)}
			{children && (
				<AnimatePresence initial={false}>
					{isOpen && (
						<motion.div
							initial="collapsed"
							animate="open"
							exit="collapsed"
							variants={{
								open: { opacity: 1, height: "auto" },
								collapsed: { opacity: 0, height: 0 },
							}}
							transition={{ duration: 0.3, ease: "easeInOut" }}
						>
							<div className="p-4 bg-white dark:bg-gray-600 text-gray-800 dark:text-white flex flex-col w-full gap-2">
								{children}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			)}
		</div>
	);
}
