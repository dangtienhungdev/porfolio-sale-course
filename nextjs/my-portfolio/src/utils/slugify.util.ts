export const Slugify = (name: string, id?: string): string => {
	if (id) {
		return name.split('/').join('-').split(' ').join('-').concat(`-idc.-${id}`);
	}
	const slug = name.split('/').join('-').split(' ').join('-');
	return slug;
};

export const getICourse = (slug: string) => {
	return slug.split('-idc.-')[1];
};
