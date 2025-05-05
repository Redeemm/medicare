import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  const location = useLocation();
  
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-teal-600 transition-colors duration-200"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div 
          className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50 animate-fadeIn"
          style={{ animation: 'fadeIn 0.2s ease-out' }}
        >
          <div className="p-4 flex flex-col space-y-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={toggleMenu}
                className={`px-4 py-3 text-base font-medium rounded-md transition-colors duration-200
                ${location.pathname === link.href 
                  ? 'bg-blue-50 text-teal-600' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-teal-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;