export const fomatCurrent = (number: number) => {
	if (number === undefined) return 0;
	const fomattedCurrent = number.toLocaleString('en-US', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	});
	return fomattedCurrent;
};
