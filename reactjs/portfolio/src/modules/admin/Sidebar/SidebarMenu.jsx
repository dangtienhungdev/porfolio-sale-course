import { IconBars, IconDashboard, IconUser } from 'components';

import { Link } from 'react-router-dom';
import React from 'react';

const menuLinks = [
  { id: 1, title: 'Dashboard', to: '/admin/dashboard', icon: <IconDashboard /> },
  { id: 2, title: 'Projects', to: '/admin/projects', icon: <IconBars /> },
  { id: 3, title: 'Users', to: '/admin/users', icon: <IconUser /> },
];

const SidebarMenu = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <aside className="w-64" aria-label="Sidebar">
        <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2">
            {menuLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.to}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {link.icon}
                  <span className="ml-3">{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SidebarMenu;
