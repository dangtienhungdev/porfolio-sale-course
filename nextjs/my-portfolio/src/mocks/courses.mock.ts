import { Course } from '@/types/course.type';

export const courses: Course[] = [
	{
		id: 1,
		title: 'HTML/CSS Fundamentals',
		icon: 'Code',
		color: 'bg-yellow-500',
		roadmap: 'From basics to responsive design',
		practical: 'Build 5 real-world websites',
	},
	{
		id: 2,
		title: 'JavaScript Mastery',
		icon: 'Code',
		color: 'bg-yellow-400',
		roadmap: 'Core concepts to advanced ES6+',
		practical: 'Create 10 interactive web applications',
	},
	{
		id: 3,
		title: 'ReactJS Mastery',
		icon: 'Code',
		color: 'bg-blue-500',
		roadmap: 'Components, state, and hooks',
		practical: 'Develop a full-featured React app',
	},
	{
		id: 4,
		title: 'NextJS Advanced',
		icon: 'Code',
		color: 'bg-black',
		roadmap: 'Server-side rendering to API routes',
		practical: 'Build and deploy a NextJS application',
	},
	{
		id: 5,
		title: 'NodeJS Backend Development',
		icon: 'Code',
		color: 'bg-green-500',
		roadmap: 'Server basics to RESTful APIs',
		practical: 'Create a complete backend system',
	},
	{
		id: 6,
		title: 'Full-Stack Developer Roadmap',
		icon: 'Code',
		color: 'bg-purple-500',
		roadmap: 'Comprehensive guide to full-stack development',
		practical: 'Build a complete web application from scratch',
	},
];
