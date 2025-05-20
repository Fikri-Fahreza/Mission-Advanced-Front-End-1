import React from 'react';
import logo from '../assets/Logo.png';

const NavbarRegisterLogin = () => {
  return (
    <nav className="bg-white w-full p-3 md:shadow-none shadow-md fixed top-0 left-0 z-10">
      <div className="flex items-center justify-left">
        <img src={logo} alt="Logo" className="h-10" />
      </div>
    </nav>
  );
};

export default NavbarRegisterLogin;