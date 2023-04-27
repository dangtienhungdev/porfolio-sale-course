import { useState } from 'react';

export const useToggleValue = (initialValue = false) => {
	const [toggleValue, setToggleValue] = useState<boolean>(initialValue);
	const handleToggleValue = () => {
		setToggleValue(!toggleValue);
	};
	return { toggleValue, handleToggleValue };
};
