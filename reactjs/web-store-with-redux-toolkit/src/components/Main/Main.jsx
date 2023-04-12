import Navbar from '../Navbar/Navbar';
import NavigateButtons from '../NavigateButtons/NavigateButtons';
import React from 'react';
import Slider from '../Slider/Slider';

const Main = () => {
	return (
		<div>
			<Navbar />
			<Slider />
			<NavigateButtons />
		</div>
	);
};

export default Main;
