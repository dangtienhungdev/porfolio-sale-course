import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ type = 'button', children, className = '', isLoading = false, ...rest }) => {
  let styleButtonClassName = 'p-2 rounded w-full capitalize';
  switch (rest.kind) {
    case 'primary':
      styleButtonClassName = styleButtonClassName + ' text-white bg-primary';
      break;
    case 'secondary':
      styleButtonClassName = styleButtonClassName + ' text-white bg-secondary';
      break;
    default:
      break;
  }
  if (rest.href) {
    return (
      <Link to={rest.href} className={`${styleButtonClassName} ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={`${styleButtonClassName} ${className}`} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  kind: PropTypes.string,
  href: PropTypes.string,
};

export default Button;
