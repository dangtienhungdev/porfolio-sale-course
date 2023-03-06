import React from 'react';

interface ICard {
	title: string;
	image: string;
	description: string;
	link: string;
}

const Card = ({ title, image, description, link }: ICard) => {
	return <div>Card</div>;
};

export default Card;
