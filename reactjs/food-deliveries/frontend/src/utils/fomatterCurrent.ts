export const fomatCurrent = (number: number) => {
	const fomattedCurrent = number.toLocaleString('en-US', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	});
	return fomattedCurrent;
};
