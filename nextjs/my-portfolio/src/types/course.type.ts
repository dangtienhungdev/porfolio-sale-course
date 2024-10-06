export type Course = {
	title: string;
	icon: string;
	color: string;
	roadmap: string;
	practical: string;
	id: number;
	images?: string[];
	overview?: OverviewCourse;
	content?: [];
};

export type OverviewCourse = {
	desc: string[];
	learning: string[];
	requirements: string[];
};
