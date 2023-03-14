import PropTypes from 'prop-types';
import React from 'react';

const Label = (props) => {
  const { children, className = '', id = '', ...rest } = props;
  return (
    <label htmlFor={id} className={`text-black capitalize ${className}`} {...rest}>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
};

export default Label;
