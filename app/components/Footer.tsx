import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router";
import UmangModal from './UmangModel';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);

  // Utility function for active icon swap
  const getIcon = (base: string, isActive: boolean) =>
    `icons/footer/${isActive ? `${base}-active` : base}.png`;

  return (
    <nav className="h-20 flex pl-5 justify-between items-center bg-white py-2 shadow-lg rounded-t-xl w-full max-w-[767px] fixed bottom-0 z-1">

      {/* Home */}
      <div
        className="flex flex-col items-center gap-1 "
        onClick={() => navigate('/')}
      >
        <img
          src={getIcon('home', location.pathname === '/')}
          alt="Home"
          className="w-5 h-5"
        />
        <span
          className={`text-sm font-semibold ${
            location.pathname === '/' ? 'text-blue-800' : 'text-gray-600'
          }`}
        >
          Home
        </span>
      </div>

      {/* Search */}
      <div
        className="flex flex-col items-center gap-1"
        onClick={() => navigate('/search')}
      >
        <img
          src={getIcon('search', location.pathname === '/search')}
          alt="Search"
          className="w-5 h-5"
        />
        <span
          className={`text-sm ${
            location.pathname === '/search' ? 'text-blue-800' : 'text-gray-600'
          }`}
        >
          Search
        </span>
      </div>

      {/* Issued */}
      <div
        className="flex flex-col items-center gap-1"
        onClick={() => navigate('/issued')}
      >
        <img
          src={getIcon('issued', location.pathname === '/issued')}
          alt="Issued"
          className="w-5 h-5"
        />
        <span
          className={`text-sm ${
            location.pathname === '/issued' ? 'text-blue-800' : 'text-gray-600'
          }`}
        >
          Issued
        </span>
      </div>

      {/* Menu */}
      <div
        className="flex flex-col items-center gap-1"
        onClick={() => navigate('/profile-menu')}
      >
        <img
          src={getIcon('menu', location.pathname === '/profile-menu')}
          alt="Menu"
          className="w-5 h-5"
        />
        <span
          className={`text-sm ${
            location.pathname === '/profile-menu' ? 'text-blue-800' : 'text-gray-600'
          }`}
        >
          Menu
        </span>
      </div>

      {/* UMANG Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-orange-500 text-white font-bold px-2 py-2 rounded-tl-lg rounded-bl-lg shadow-md"
      >
        UMANG
      </button>

      <UmangModal open={showModal} onClose={() => setShowModal(false)} />
    </nav>
  );
}
