import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand Name */}
        <NavLink to="/" className="text-white text-xl font-bold">
          Courser
        </NavLink>

        {/* Nav Links */}
        <div className="space-x-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "text-white font-bold" : "text-white hover:text-gray-200"
            }
          >
            Courses
          </NavLink>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => 
              isActive ? "text-white font-bold" : "text-white hover:text-gray-200"
            }
          >
            Dashboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
