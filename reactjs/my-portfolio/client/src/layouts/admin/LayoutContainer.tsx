import React from 'react';

interface LayoutContainerProps {
	children: React.ReactNode;
	className?: string;
}

const LayoutContainer = ({
	children,
	className = '',
}: LayoutContainerProps) => {
	return (
		<div className={`min-h-screen w-full ${className} bg-white p-6`}>
			{children}
		</div>
	);
};

export default LayoutContainer;
