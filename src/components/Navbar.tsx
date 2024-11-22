import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Explore',
    href: '/explore',
  },
  {
    name: 'Login',
    href: '/login',
  },
];

const Navbar: React.FC = () => {
  return (
    <>
      <header className="fixed left-0 top-0 z-40 flex w-full items-center justify-between bg-white p-4 text-dark shadow-lg backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
          <h1 className="text-xl font-bold">Nepal Tourism</h1>
        </div>

        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  isActive ? 'font-bold text-green-600' : ''
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Navbar;
