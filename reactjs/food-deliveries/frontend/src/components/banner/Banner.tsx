import { Carousel } from 'antd';
import React from 'react';

const contentStyle: React.CSSProperties = {
	height: '245px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
	borderRadius: '20px',
};

const Banner = () => {
	return (
		<Carousel
			autoplay
			style={{ borderRadius: '20px', overflow: 'hidden' }}
			effect="scrollx"
			autoplaySpeed={5000}
		>
			<div>
				<h3 style={contentStyle}>1</h3>
			</div>
			<div>
				<h3 style={contentStyle}>2</h3>
			</div>
			<div>
				<h3 style={contentStyle}>3</h3>
			</div>
			<div>
				<h3 style={contentStyle}>4</h3>
			</div>
		</Carousel>
	);
};

export default Banner;
