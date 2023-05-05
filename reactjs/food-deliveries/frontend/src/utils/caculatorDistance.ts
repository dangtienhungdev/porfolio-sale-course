// export const myLat = 20.4142167;
// export const myLon = 106.1228214;
export const myLat = 21.4142167;
export const myLon = 104.1228214;

export const caculatorDistance = () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition((position) => {
			const userLatitude = position.coords.latitude;
			const userLongitude = position.coords.longitude;
			const earthRadius = 6371; // Bán kính trái đất tính bằng km
			const dLat = ((userLatitude - myLat) * Math.PI) / 180;
			const dLon = ((userLongitude - myLon) * Math.PI) / 180;
			const a =
				Math.sin(dLat / 2) * Math.sin(dLat / 2) +
				Math.cos((userLatitude * Math.PI) / 180) *
					Math.cos((myLon * Math.PI) / 180) *
					Math.sin(dLon / 2) *
					Math.sin(dLon / 2);
			const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
			const distance = earthRadius * c;
			resolve(distance);
		}, reject);
	});
};
