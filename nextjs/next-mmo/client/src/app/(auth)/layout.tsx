import React from 'react';

const AuthLayout = ({
	children,
}: Readonly<{
	children?: React.ReactNode;
}>) => {
	return (
		<div>
			AuthLayout
			{children}
		</div>
	);
};

export default AuthLayout;
