import React from 'react';

// const travelItem = image, name, totalReview, rating, location, price, date, daparture,
// features: wifi, parking, offer

const travelItem: {
	name: string;
	image: string;
	totalReview: string;
	rating: number;
	location: string;
	price: number;
	date: string;
	departure: string;
	feature: { wifi: string; parking: string; offer: string };
}[] = [
	{
		name: 'dang tien hung',
		image: 'ahihi',
		totalReview: 'abcbcbc',
		rating: 4,
		location: 'nam dinh',
		price: 45,
		date: '30/3/2002',
		departure: 'abcbac',
		feature: {
			wifi: 'dang tien hung',
			parking: 'lorem lorem',
			offer: 'dangadsfasdfk',
		},
	},
];

const TravelItem = () => {
	return <div>TravelItem</div>;
};

export default TravelItem;
