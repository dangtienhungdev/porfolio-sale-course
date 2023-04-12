import {
	dotSlice,
	nextSlice,
	prevSlice,
} from '../../features/sliderSlice/sliderSlice';
import { useDispatch, useSelector } from 'react-redux';

import IconArrowLeft from '../icon/IconArrowLeft';
import IconArrowRight from '../icon/IconArrowRight';
import React from 'react';
import { sliderData } from '../../assets/data/dummyData';

const Slider = () => {
	const sliderIndex = useSelector((state) => state.slider.value);
	const dispatch = useDispatch();
	return (
		<div className="relative mb-4 h-[850px]">
			<div>
				{sliderData.map((item) => {
					return (
						<div
							key={item.id}
							className={
								parseInt(item.id) === sliderIndex
									? 'opacity-100 duration-700 ease-in-out scale-100'
									: 'opacity-0 duration-700 ease-in-out scale-95'
							}
						>
							<div className="">
								{parseInt(item.id) === sliderIndex && (
									<img
										src={item.img}
										alt="shose"
										className="h-[850px] w-full object-cover"
									/>
								)}
							</div>
							<div className="absolute top-44 left-1/2 -translate-x-1/2">
								<p className="text-white text-4xl font-inter font-bold">
									{parseInt(item.id) === sliderIndex && item.text}
								</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className="flex absolute bottom-10 gap-x-4 left-1/2 -translate-x-1/2">
				{sliderData.map((item, index) => (
					<div key={item.id}>
						<div
							className={
								index === sliderIndex
									? 'bg-green-400 h-4 w-4 rounded-full cursor-pointer'
									: 'bg-green-400 h-4 w-4 rounded-full cursor-pointer opacity-30'
							}
							onClick={() => dispatch(dotSlice(index))}
						></div>
					</div>
				))}
			</div>
			<button
				className="absolute left-4 text-black bg-white opacity-50 rounded-full top-1/2 -translate-y-1/2 h-4 w-4 p-4 flex justify-center items-center"
				onClick={() => dispatch(nextSlice(sliderIndex + 1))}
			>
				<IconArrowLeft />
			</button>
			<button
				onClick={() => dispatch(prevSlice(sliderIndex - 1))}
				className="absolute right-4 text-black bg-white opacity-50 rounded-full top-1/2 -translate-y-1/2 h-4 w-4 p-4 flex justify-center items-center"
			>
				<IconArrowRight />
			</button>
		</div>
	);
};

export default Slider;
