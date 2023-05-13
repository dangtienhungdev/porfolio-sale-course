export const formatterDate = (date: string) => {
	const dateObj = new Date(date);
	const day = dateObj.getDate();
	const month = dateObj.getMonth() + 1;
	const year = dateObj.getFullYear();
	return `${day}/${month}/${year}`;
};
