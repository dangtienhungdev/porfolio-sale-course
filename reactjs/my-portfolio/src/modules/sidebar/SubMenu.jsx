import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const SubMenu = ({ item }) => {
  return (
    <NavLink
      to={item.to}
      className="flex gap-x-2 items-center py-1 px-6 hover:bg-blue-200 cursor-pointer"
    >
      {item.icon}
      <span>{item.title}</span>
    </NavLink>
  );
};

SubMenu.propTypes = {
  item: PropTypes.object,
};

export default SubMenu;
