import React from 'react';
import { useBearStore } from '../store/Counter-store';

const Couter = () => {
	const count = useBearStore((state) => state.count);
	const increase = useBearStore((state) => state.increase);
	const decrease = useBearStore((state) => state.decrease);
	return (
		<div className="p-5 rounded border border-gray-200 inline-flex gap-x-2 items-center mx-auto">
			<button
				onClick={decrease}
				className="px-6 py-2 rounded bg-blue-500 text-white flex justify-center items-center"
			>
				-
			</button>
			<span className="px-6 py-2">{count}</span>
			<button
				onClick={increase}
				className="px-6 py-2 rounded bg-blue-500 text-white flex justify-center items-center"
			>
				+
			</button>
		</div>
	);
};

export default Couter;
