import React from 'react';
import logo from '../../assets/images/logo.png';

const Footer = () => {
	return (
		<div>
			<div className="flex items-center justify-center">
				<hr className="h-px w-4/5 bg-gray-400 opacity-50 outline-none" />
			</div>
			<div className="flex items-center justify-between p-4">
				<div>
					<img src={logo} alt="" className="h-20" />
				</div>
				<div>
					<p className="text-black text-sm no-underline">
						Copyright &copy; 2021. All Rights Reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
