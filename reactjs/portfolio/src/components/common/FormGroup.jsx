import React from 'react';

const FormGroup = ({children, className = ''}) => {
	return <div className={`mb-4 relative w-full ${className}`}>{children}</div>;
};

export default FormGroup;
