import React from 'react';

const FormRow = ({ children, className = '' }) => {
  return <div className={`grid grid-cols-1 lg:grid-cols-2 ${className}`}>{children}</div>;
};

export default FormRow;
