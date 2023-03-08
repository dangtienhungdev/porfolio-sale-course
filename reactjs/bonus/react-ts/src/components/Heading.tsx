import React from 'react';

type Props = {
	title: string;
};

const Heading = (props: Props) => {
	const { title } = props;
	return <h2 className="capitalize font-bold text-2xl">{title}</h2>;
};

export default Heading;
