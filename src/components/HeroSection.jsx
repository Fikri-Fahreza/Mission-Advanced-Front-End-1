import React from 'react';
import banner from '../assets/FrameBanner.png';

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center rounded-lg mx-4 sm:mx-6 md:mx-auto my-6 p-6 sm:p-10 md:p-16 lg:p-20 text-center text-white max-w-full md:max-w-6xl lg:max-w-7xl"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
        Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
      </h2>
      <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
        Temukan kursus yang sesuai untuk meningkatkan keterampilan dan pengetahuan Anda.
      </p>
      <button className="mt-4 px-6 py-2 md:px-8 md:py-2 text-base md:text-lg bg-[#3ECF4C] hover:bg-green-600 text-white rounded-md">
        Temukan Video Course Untuk Dipelajari!
      </button>
    </section>
  );
};

export default HeroSection;