import React from 'react';

const HeadingMeta = ({ children, className = '' }) => {
  return (
    <span
      className={`mb-4 text-[10px] font-quicksan uppercase font-medium text-text3 tracking-[5px] ${className}`}
    >
      {children}
    </span>
  );
};

export default HeadingMeta;
