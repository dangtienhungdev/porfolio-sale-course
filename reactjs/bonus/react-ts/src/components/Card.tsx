import React, { useEffect } from 'react';

interface ICard {
	title: string;
	image: string;
	description: string;
	link: string;
}

const Card = ({ title, image, description, link }: ICard) => {
	useEffect(() => {
		const input = document.querySelector('input') as HTMLInputElement;
		console.log('🚀 ~ file: Card.tsx:13 ~ useEffect ~ input:', input);
	}, []);
	return (
		<div>
			<input type="text" />
		</div>
	);
};

export default Card;
