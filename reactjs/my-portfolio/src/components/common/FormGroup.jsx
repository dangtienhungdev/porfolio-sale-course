import React from 'react';

const FormGroup = ({ children, ...rest }) => {
  return (
    <div className="relative mb-12" {...rest}>
      {children}
    </div>
  );
};

export default FormGroup;
