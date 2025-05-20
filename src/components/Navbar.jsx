import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import avatar from '../assets/fikri.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white w-full p-3 md:shadow-none shadow-md fixed top-0 left-0 z-10 flex justify-between items-center">
      <div className="flex items-center md:ml-10">
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      <div className="hidden md:flex lg:flex items-center gap-4 mr-10">
        <span className="text-gray-500 font-bold">Kategori</span>
        <img src={avatar} alt="Avatar" className="h-8 w-8 rounded-md" />
      </div>
      <div className="md:hidden lg:hidden flex items-center gap-4 mr-2">
        <i
          className="bi bi-list text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        ></i>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4">
          <span className="block text-gray-500 font-bold mb-2">Kategori</span>
          <img src={avatar} alt="Avatar" className="h-8 w-8 rounded-md" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;