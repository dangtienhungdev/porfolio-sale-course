import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Button = (props) => {
  const { children, type = 'button', className = '', ...rest } = props;
  let styleBtnClassName =
    'rounded bg-primary px-6 py-2.5 font-medium capitalize leading-tight shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg';
  switch (rest.kind) {
    case 'primary':
      styleBtnClassName += ' bg-blue-500 text-white';
      break;
    default:
      break;
  }
  if (rest.to) {
    return (
      <Link to={rest.to} className={`${styleBtnClassName} ${className}`} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={`${styleBtnClassName} ${className}`} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
