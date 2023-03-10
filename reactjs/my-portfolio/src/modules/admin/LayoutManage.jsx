import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from 'react-pro-sidebar';

import React from 'react';

const LayoutManage = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="flex flex-col gap-y-2">
      <div className="h-10 wfull p-4 flex justify-between">
        <SubMenu onClick={() => collapseSidebar()} icon={<IconBars />}></SubMenu>
      </div>
    </div>
  );
};

export default LayoutManage;
