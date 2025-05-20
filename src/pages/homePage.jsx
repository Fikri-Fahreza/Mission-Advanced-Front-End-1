import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import VideoCollection from '../components/VideoCollection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';


function HomePage() {
  return (
    <div className="bg-[#FFFCF5] flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow mt-16">
        <HeroSection />
        <VideoCollection />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;