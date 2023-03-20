import React from 'react';

const FormGroup = ({ children, ...rest }) => {
  return (
    <div className="relative mb-12 flex flex-col gap-y-1" {...rest}>
      {children}
    </div>
  );
};

export default FormGroup;
