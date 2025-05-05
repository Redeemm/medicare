import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link 
      to={href}
      className={`relative px-3 py-2 font-medium text-sm transition-colors duration-200 
      ${isActive 
        ? 'text-teal-600' 
        : 'text-gray-700 hover:text-teal-600'
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 transform transition-transform duration-200"></span>
      )}
    </Link>
  );
};

export default NavLink;