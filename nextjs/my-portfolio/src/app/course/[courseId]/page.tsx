'use client';

import { AlertCircle, Book, ChevronRight, Home, List } from 'lucide-react';

import Header from '@/features/home/components/header';
import Image from 'next/image';
import { useState } from 'react';

export default function CourseLandingPage() {
	const [activeTab, setActiveTab] = useState('overview');

	return (
		<div className="min-h-screen bg-gray-100">
			{/* Header */}
			<Header />

			{/* Breadcrumbs */}
			<nav className="bg-gray-200 py-3">
				<div className="container mx-auto px-4">
					<div className="flex items-center text-sm text-gray-600">
						<Home className="h-4 w-4 mr-2" />
						<span>Home</span>
						<ChevronRight className="h-4 w-4 mx-2" />
						<span>Courses</span>
						<ChevronRight className="h-4 w-4 mx-2" />
						<span className="font-semibold">
							50 HTML CSS JavaScript Projects
						</span>
					</div>
				</div>
			</nav>

			{/* Main Content */}
			<main className="container mx-auto px-4 py-8">
				<div className="flex flex-col lg:flex-row">
					{/* Left Side - 80% width on large screens */}
					<div className="lg:w-[75%] lg:pr-8">
						<h2 className="text-3xl font-bold text-gray-800 mb-6">
							50 HTML CSS JavaScript Projects - HTML5, CSS3, vanilla JS
						</h2>

						{/* Tabs */}
						<div className="mb-6">
							<div className="border-b border-gray-200">
								<nav className="-mb-px flex">
									<button
										className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
											activeTab === 'overview'
												? 'border-blue-500 text-blue-600'
												: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
										}`}
										onClick={() => setActiveTab('overview')}
									>
										<Book className="h-5 w-5 mr-2 inline" />
										Overview
									</button>
									<button
										className={`py-4 px-1 border-b-2 font-medium text-sm ${
											activeTab === 'content'
												? 'border-blue-500 text-blue-600'
												: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
										}`}
										onClick={() => setActiveTab('content')}
									>
										<List className="h-5 w-5 mr-2 inline" />
										Course Content
									</button>
								</nav>
							</div>
						</div>

						{/* Tab Content */}
						{activeTab === 'overview' ? (
							<div className="prose max-w-none">
								<h3 className="text-xl font-semibold mb-4">Description</h3>
								<p className="mb-4">
									50 HTML CSS JavaScript ENTERTAINING & NEW PROJECTS
								</p>
								<p className="mb-4">
									Hello, and thank you for visiting the web's premier tutorial
									for mastering HTML, CSS, and JavaScript through the
									development of user-friendly and entertaining projects.
								</p>
								<p className="mb-4">
									The goal of this class is to familiarize you with HTML, CSS,
									and JavaScript while guiding you through the process of
									developing websites that are simple but still functional.
								</p>
								<p className="mb-4">
									You will learn how to write codes in HTML, CSS, and
									JavaScript, as well as how to create websites that are
									responsive and interesting to users of all ages and devices.
								</p>
								<p className="mb-4">
									This brand-new training program begins with an easy-to-follow
									tutorial on how to set up Visual Studio Code and all of the
									essential extensions it requires. After that, the first thing
									we do for each project is write the HTML. Following the
									completion of the HTML part of the project, we will then
									proceed to the CSS and JavaScript parts of the project.
								</p>
								<p className="mb-4">
									Before getting started, it is not necessary for you to have
									any prior knowledge of HTML, CSS, or JavaScript. This is
									perfectly acceptable. This document provides a comprehensive
									explanation of the syntax used in HTML, CSS, and JavaScript.
								</p>
								<p className="mb-4">
									Every one of the 50 projects is initiated from scratch and
									carried through to completion without the utilization of any
									code that has been copied and pasted.
								</p>
								<p className="mb-4">
									The codes are carefully broken down and explained line by line
									before being demonstrated on the actual project. This is done
									to ensure that the codes are fully comprehended.
								</p>
								<p className="mb-4">
									This will be a fun project-based course that will teach you
									HTML, CSS, and JavaScript while you build websites that are
									responsive, cutting edge, and super cool.
								</p>
								<p className="mb-4">
									If you are as excited as I am about learning HTML, CSS, and
									JavaScript in order to create truly spectacular websites, then
									let's get started.
								</p>

								<h3 className="text-xl font-semibold mt-8 mb-4">
									What will you learn?
								</h3>
								<ul className="list-disc pl-5 space-y-2">
									<li>
										Learn how to build fun projects from scratch using HTML,
										CSS, and JavaScript without third-party libraries or
										plugins.
									</li>
									<li>
										You'll learn HTML, CSS, JavaScript, and responsive web
										design.
									</li>
									<li>
										Follow this tutorial to learn the basics of HTML, CSS, and
										JavaScript.
									</li>
									<li>
										In each project, we begin by writing the HTML section, and
										once completed, we move on to the CSS and JavaScript
										sections.
									</li>
									<li>
										A fun project-based course in which you will learn HTML,
										CSS, and JavaScript while creating modern, super cool, and
										responsive websites.
									</li>
									<li>
										In this brand-new course, you will learn about the most
										important JavaScript methods.
									</li>
									<li>
										Project-based teaching to help you improve your HTML, CSS,
										and JavaScript skills.
									</li>
									<li>
										Flexbox, CSS animations, custom properties, and other modern
										styling features
									</li>
									<li>
										Manipulation of the Document Object Model (DOM), events,
										array methods, HTTP requests, and more
									</li>
									<li>
										Ideal for those just starting out who are looking to
										construct one-of-a-kind projects in a relatively short
										amount of time
									</li>
								</ul>

								<h3 className="text-xl font-semibold mt-8 mb-4">
									Requirements
								</h3>
								<p>
									Starting without HTML, CSS, or JavaScript knowledge is fine.
									This course details all HTML, CSS, and JavaScript syntax. All
									projects are started from scratch without copy-and-pasting
									code. To ensure understanding, all codes are explained
									line-by-line and demonstrated on the project.
								</p>
							</div>
						) : (
							<div>
								<h3 className="text-xl font-semibold mb-4">Course Content</h3>
								<div className="bg-white shadow overflow-hidden sm:rounded-md">
									<ul className="divide-y divide-gray-200">
										<li>
											<div className="px-4 py-4 sm:px-6">
												<div className="flex items-center justify-between">
													<p className="text-sm font-medium text-blue-600 truncate">
														Project 1 - Digital Clock (5 lectures)
													</p>
												</div>
												<div className="mt-2 sm:flex sm:justify-between">
													<div className="sm:flex">
														<p className="flex items-center text-sm text-gray-500">
															Preview - Digital Clock
														</p>
													</div>
												</div>
											</div>
										</li>
										{/* Add more course content items here */}
									</ul>
								</div>
							</div>
						)}
					</div>

					{/* Right Side - 20% width on large screens */}
					<div className="lg:w-[25%] mt-8 lg:mt-0">
						<div className="bg-white shadow overflow-hidden sm:rounded-lg">
							<div className="px-4 py-5 sm:p-6">
								<Image
									src="/placeholder.svg"
									alt="Course Image"
									width={300}
									height={200}
									className="w-full h-auto rounded-lg mb-4"
								/>
								<div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
