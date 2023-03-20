import React from 'react';

const Table = ({ children, className = '' }) => {
  return (
    <table className={`w-full text-sm text-left text-gray-500 dark:text-gray-400 ${className}`}>
      {children}
    </table>
  );
};

export default Table;
