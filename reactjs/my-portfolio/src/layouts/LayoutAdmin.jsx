import { Outlet } from 'react-router-dom';
import React from 'react';
import { Sidebar } from '../modules';

const LayoutAdmin = () => {
  return (
    <div className="flex bg-color10">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
