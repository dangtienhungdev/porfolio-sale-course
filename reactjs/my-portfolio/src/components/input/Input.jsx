import PropTypes from 'prop-types';
import React from 'react';
import { useController } from 'react-hook-form';

const Input = (props) => {
  const {
    type = 'text',
    placeholder = '',
    name = '',
    control,
    className = '',
    id = '',
    error,
    ...rest
  } = props;
  const { field } = useController({ control, name, defaultValue: '' });
  return (
    <>
      <input
        type={type}
        id={id}
        control={control}
        name={name}
        placeholder={placeholder}
        className={`peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:text-neutral-200 placeholder:capitalize ${className}`}
        {...rest}
        {...field}
      />
      {error && error.length > 0 && <p className="text-xs text-red-400 capitalize">{error}</p>}
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Input;
