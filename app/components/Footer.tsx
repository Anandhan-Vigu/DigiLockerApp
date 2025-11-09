import React from 'react';
import { useNavigate, useLocation } from "react-router";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="h-20 flex pl-5 justify-between items-center bg-white py-2 shadow-lg rounded-t-xl w-full max-w-[767px] fixed bottom-0 z-1">

      {/* Home */}
      <div
        className="flex flex-col items-center mt-2 cursor-pointer"
        onClick={() => navigate('/')}
      >
        <img src="footer/homefooter.png" alt="Home" className="w-8 h-8 " />
        <span
          className={`text-sm font-semibold ${location.pathname === '/' ? 'text-blue-800' : 'text-gray-600'
            }`}
        >
          Home
        </span>
      </div>

      {/* Search */}
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => navigate('/search')}
      >
        <img src="footer/search.jpg" alt="Search" className="w-10 h-10" />
        <span
          className={`text-sm ${location.pathname === '/search' ? 'text-blue-800' : 'text-gray-600'
            }`}
        >
          Search
        </span>
      </div>

      {/* Issued */}
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => navigate('/issued')}
      >
        <img src="footer/issued.jpg" alt="Issued" className="w-9 h-9" />
        <span
          className={`text-sm ${location.pathname === '/issued' ? 'text-blue-800' : 'text-gray-600'
            }`}
        >
          Issued
        </span>
      </div>

      {/* Menu */}
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => navigate('/profile-menu')}
      >
        <img src="footer/menu.jpg" alt="Menu" className="w-9 h-9" />
        <span
          className={`text-sm ${location.pathname === '/profile-menu' ? 'text-blue-800' : 'text-gray-600'
            }`}
        >
          Menu
        </span>
      </div>

      {/* UMANG Button */}
      <button className="bg-orange-500 text-white font-bold px-2 py-2 rounded-tl-lg rounded-bl-lg shadow-md">
        UMANG
      </button>
    </nav>
  );
}
