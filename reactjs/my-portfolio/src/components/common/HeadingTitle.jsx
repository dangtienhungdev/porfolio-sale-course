import React from 'react';

const HeadingTitle = ({ children, className = '' }) => {
  return (
    <h2
      className={`text-lg mb-[75px] font-bold uppercase tracking-[5px] font-playfair-display leading-[1.8] ${className}`}
    >
      {children}
    </h2>
  );
};

export default HeadingTitle;
