import PropTypes from 'prop-types';
import React from 'react';

const Label = ({ children, name = '', className = '' }) => {
	return (
		<label
			htmlFor={name}
			className={`text-sm capitalize font-medium cursor-pointer text-text2 ${className}`}
		>
			{children}
		</label>
	);
};

Label.propTypes = {
	children: PropTypes.node,
	name: PropTypes.string,
	className: PropTypes.string,
};

export default Label;
