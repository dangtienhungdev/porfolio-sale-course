import React from 'react';

const DescriptionTitle = ({ children, className = '' }) => {
	return (
		<p className={`text-base text-text3 leading-7 mb-6 ${className}`}>
			{children}
		</p>
	);
};

export default DescriptionTitle;
