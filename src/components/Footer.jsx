import React, { useState } from 'react';
import logo from '../assets/Logo.png';

const Footer = () => {
  const [openMenus, setOpenMenus] = useState({
    kategori: false,
    perusahaan: false,
    komunitas: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-6 sm:px-12">
      <div className="lg:mx-12 md:mx-12 mx-4">
        <div className="md:flex flex-col sm:flex-row justify-between items-start w-full">
          <div className="sm:w-1/3 text-left">
            <div className="flex">
              <img src={logo} alt="Logo" className="h-10" />
            </div>
            <p className="mt-3 text-sm text-gray-700 font-semibold">
              Gali Potensi Anda Melalui <br />
              <span className="font-bold">Pembelajaran Video di hariesok.id!</span>
            </p>
            <p className="mt-3 text-sm text-gray-600">
              Jl. Satria, Desa Lama, Pancur Bat <br />
              +62-877-7123-1234
            </p>
          </div>
          <div className="hidden sm:flex flex-wrap sm:flex-nowrap sm:gap-16 mt-6 sm:mt-0 text-sm text-gray-700 text-right sm:w-2/3 justify-end">
            <div>
              <h3 className="font-semibold text-left">Kategori</h3>
              <ul className="mt-2 space-y-1 text-left">
                <li>Digital & Teknologi</li>
                <li>Pemasaran</li>
                <li>Manajemen Bisnis</li>
                <li>Pengembangan Diri</li>
                <li>Desain</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-left">Perusahaan</h3>
              <ul className="mt-2 space-y-1 text-left">
                <li>Tentang Kami</li>
                <li>FAQ</li>
                <li>Kebijakan Privasi</li>
                <li>Ketentuan Layanan</li>
                <li>Bantuan</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-left">Komunitas</h3>
              <ul className="mt-2 space-y-1 text-left">
                <li>Tips Sukses</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div className="sm:hidden mt-6">
            <button
              className="w-full text-left py-3 border-b border-gray-300 font-semibold flex justify-between items-center"
              onClick={() => toggleMenu('kategori')}
            >
              Kategori <span>›</span>
            </button>
            {openMenus.kategori && (
              <ul className="mt-2 space-y-1 px-4 text-sm text-gray-700">
                <li>Digital & Teknologi</li>
                <li>Pemasaran</li>
                <li>Manajemen Bisnis</li>
                <li>Pengembangan Diri</li>
                <li>Desain</li>
              </ul>
            )}
            <button
              className="w-full text-left py-3 border-b border-gray-300 font-semibold flex justify-between items-center"
              onClick={() => toggleMenu('perusahaan')}
            >
              Perusahaan <span>›</span>
            </button>
            {openMenus.perusahaan && (
              <ul className="mt-2 space-y-1 px-4 text-sm text-gray-700">
                <li>Tentang Kami</li>
                <li>FAQ</li>
                <li>Kebijakan Privasi</li>
                <li>Ketentuan Layanan</li>
                <li>Bantuan</li>
              </ul>
            )}
            <button
              className="w-full text-left py-3 border-b border-gray-300 font-semibold flex justify-between items-center"
              onClick={() => toggleMenu('komunitas')}
            >
              Komunitas <span>›</span>
            </button>
            {openMenus.komunitas && (
              <ul className="mt-2 space-y-1 px-4 text-sm text-gray-700">
                <li>Tips Sukses</li>
                <li>Blog</li>
              </ul>
            )}
          </div>
        </div>
        <div className="mt-6 border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-600">
          <p>@2025 Fikri Fahreza All Rights Reserved.</p>
          <div className="flex space-x-4 mt-3 sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;