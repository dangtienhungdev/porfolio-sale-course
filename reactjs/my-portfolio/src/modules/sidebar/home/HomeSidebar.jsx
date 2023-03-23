import { NavLink } from 'react-router-dom';
import React from 'react';

const menuLink = ['Home', 'About', 'Contact', 'Blog', 'Portfolio'];

const HomeSidebar = () => {
  const navLinkClass = `text-black hover:text-primary inline-block uppercase text-sm tracking-wide relative hover:text-primary after:absolute after:h-[1px] after:w-0 after:top-full after:left-0 after:bg-primary before:absolute before:h-[1px] before:w-0 before:top-full before:left-1/2 before:bg-primary`;
  return (
    <div className="w-full max-w-xs bg-gray-100 h-screen overflow-y-auto scrollbar-hidden py-[45px] lg:block hidden">
      <div className="h-[237px] w-full flex flex-col items-center mb-6">
        <div className="h-[150px] w-[150px] mb-8">
          <img
            src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
            alt="girl"
            className="object-cover rounded-full w-full h-full"
          />
        </div>
        <p className="font-extrabold text-2xl font-playfair-display text-center capitalize mb-3">
          đặng tiến hưng
        </p>
        <span className="text-primary text-xs uppercase opacity-50">FrontEnd Developer</span>
      </div>
      <ul className="flex flex-col gap-y-[10px]">
        {menuLink.map((item) => (
          <li className="w-full uppercase text-center" key={item}>
            <NavLink
              to={`/${item}`}
              className={({ isActive }) =>
                isActive ? `${navLinkClass} text-primary` : `${navLinkClass}`
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeSidebar;
