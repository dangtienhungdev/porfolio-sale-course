import { useController, useForm } from 'react-hook-form';

import PropTypes from 'prop-types';
import React from 'react';

const Input = ({
  placeholder = '',
  control,
  name,
  type = 'text',
  error = '',
  children,
  className,
  ...rest
}) => {
  const { field } = useController({ control, name, defaultValue: '' });
  return (
    <div>
      <div className="relative">
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          className={`bg-gray-300 focus:bg-white border focus:border-blue-400 p-2 rounded outline-none duration-300 transition-all w-full placeholder:text-gray-500 ${className} ${
            children ? 'pr-10' : ''
          }`}
          {...rest}
          {...field}
        />
        <div className="absolute top-1/2 right-2 cursor-pointer -translate-y-1/2">{children}</div>
      </div>
      {error.length > 0 && <p className="text-error text-xs">{error}</p>}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

export default Input;
