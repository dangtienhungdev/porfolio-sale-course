import { Alert } from '@material-tailwind/react';
import React from 'react';

const Error = () => {
	return (
		<div className="grid grid-cols-1 items-center justify-center">
			<div className="w-96 text-center mx-auto">
				<Alert className="text-xl font-bold text-center" color="red">
					Sorry No Product Found
				</Alert>
			</div>
		</div>
	);
};

export default Error;
