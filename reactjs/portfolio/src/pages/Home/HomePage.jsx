import { DescriptionTitle, HeadingTitle } from 'components';

import { HeadingMeta } from 'modules';
import { LayoutItem } from 'layouts';
import React from 'react';

const HomePage = () => {
	return (
		<LayoutItem>
			<HeadingMeta>About us</HeadingMeta>
			<HeadingTitle>Who am i?</HeadingTitle>
			<DescriptionTitle>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor vel
				suscipit explicabo voluptates soluta vero, aut autem, vitae, ex totam
				voluptatibus eos! Eveniet vel ex, quam dolor doloribus in?
			</DescriptionTitle>
		</LayoutItem>
	);
};

export default HomePage;
