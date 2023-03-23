import React from 'react';

const Thead = ({ children }) => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-primary bg-opacity-20 dark:bg-gray-700 dark:text-gray-400">
      {children}
    </thead>
  );
};

export default Thead;
