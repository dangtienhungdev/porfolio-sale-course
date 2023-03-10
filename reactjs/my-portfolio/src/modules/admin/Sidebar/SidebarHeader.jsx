import { Link } from 'react-router-dom';
import React from 'react';

const SidebarHeader = ({ userInfo }) => {
  console.log('🚀 ~ file: SidebarHeader.jsx:6 ~ SidebarHeader ~ userInfo:', userInfo);
  return (
    <div className={`px-5 mb-2 flex gap-x-2 items-center bg-gray-100`}>
      <Link to="/admin/user" className="inline-block h-14 w-14">
        <img
          src={userInfo.avatar}
          alt={userInfo.username}
          className="h-14 w-14 rounded-full object-cover flex-shrink-0"
        />
      </Link>
      <Link to="/admin/user" className="inline-block flex-1 truncate">
        <h2 className="font-medium text-lg truncate w-full">{userInfo.username}</h2>
      </Link>
    </div>
  );
};

export default SidebarHeader;
