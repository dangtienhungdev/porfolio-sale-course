export type Course = {
	title: string;
	icon: string;
	color: string;
	roadmap: string;
	practical: string;
	id: number;
	images?: string[];
	overview?: OverviewCourse;
	content?: CourseContent[];
	projects?: Project[];
};

export type OverviewCourse = {
	desc: string[];
	learning: string[];
	requirements: string[];
};

export type CourseContent = {
	id: number;
	title: string;
	children?: CourseContent[];
	linkDemo?: string;
};

export type Project = {
	id: number;
	title: string;
	linkDemo?: string;
};
