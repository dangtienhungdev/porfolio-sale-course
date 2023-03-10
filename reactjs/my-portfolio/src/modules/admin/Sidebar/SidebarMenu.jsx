import { IconBars, IconUser } from 'components';
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from 'react-pro-sidebar';

import { Link } from 'react-router-dom';
import React from 'react';
import SidebarHeader from './SidebarHeader';

const SidebarMenu = ({ userInfo }) => {
  const { collapseSidebar } = useProSidebar();
  return (
    <Sidebar>
      <SidebarHeader userInfo={userInfo} />
      <Menu>
        <SubMenu label="Quản lý dự án" icon={<IconBars />}>
          <MenuItem component={<Link to="/admin/projects" />}>Tất cả dự án</MenuItem>
          <MenuItem component={<Link to="/admin/projects/add" />}>Thêm dự án</MenuItem>
        </SubMenu>
        <SubMenu label="Thông tin người dùng" icon={<IconUser />}>
          <MenuItem component={<Link to="/admin/user" />}>Thông tin người dùng</MenuItem>
          <MenuItem component={<Link to="/admin/projects/reset-password" />}>
            Thay đổi mật khẩu
          </MenuItem>
        </SubMenu>
        <SubMenu onClick={() => collapseSidebar()} icon={<IconBars />}></SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default SidebarMenu;
