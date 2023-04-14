import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import NavigateButtons from '../NavigateButtons/NavigateButtons';
import ProductSection from '../ProductSection/ProductSection';
import React from 'react';
import Slider from '../Slider/Slider';

const Main = () => {
	return (
		<div>
			<Navbar />
			<Slider />
			<NavigateButtons />
			<ProductSection />
			<Footer />
		</div>
	);
};

export default Main;
