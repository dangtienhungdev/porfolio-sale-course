import React from 'react';

const LayoutItem = ({ children }) => {
	return (
		<div className="px-[23px] py-[150px]">
			<div className="px-4">{children}</div>
		</div>
	);
};

export default LayoutItem;
