import React from 'react';
import banner from '../assets/Banner-CTA.png';

const CallToAction = () => {
  return (
    <section
      className="bg-cover bg-center rounded-lg mx-4 sm:mx-6 md:mx-auto my-6 p-6 sm:p-10 md:p-16 lg:p-20 text-center text-white max-w-full md:max-w-6xl lg:max-w-7xl"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h2 className="text-3xl lg:text-4xl font-bold leading-tight">Mau Belajar Lebih Banyak?</h2>
      <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
        Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik
        hariesok.id
      </p>
      <form className="hidden sm:flex my-6 justify-center items-center max-w-xl mx-auto bg-white rounded-md shadow-lg overflow-hidden">
        <input
          type="email"
          placeholder="Masukkan Emailmu"
          className="flex-1 p-3 text-gray-700 focus:outline-none placeholder-gray-500"
        />
        <button className="px-6 py-3 m-2 text-base bg-[#F4B43A] hover:bg-[#e0a832] text-white font-medium rounded-lg">
          Subscribe
        </button>
      </form>
      <form className="md:hidden grid gap-4 my-6 max-w-xl mx-auto rounded-md shadow-lg overflow-hidden p-4">
        <input
          type="email"
          placeholder="Masukkan Emailmu"
          className="p-3 text-gray-700 focus:outline-none placeholder-gray-500 border border-gray-300 rounded-xl text-center"
        />
        <button className="px-6 py-2 text-base md:text-lg bg-[#F4B43A] hover:bg-[#e0a832] text-white rounded-xl">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default CallToAction;