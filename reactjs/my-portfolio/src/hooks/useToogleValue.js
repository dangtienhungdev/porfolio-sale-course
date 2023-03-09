import { useState } from 'react';

export default function useToggleValue(initialValue = false) {
  const [toggleValue, setToggleValue] = useState(initialValue);
  const handleValue = () => {
    setToggleValue(!toggleValue);
  };
  return { toggleValue, handleValue };
}
