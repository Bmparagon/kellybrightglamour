
import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="relative flex items-center justify-center h-screen dark:bg-black bg-white dark:text-white text-black overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/wallpaper/homepage-wallpaper.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      <div className="relative z-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
          <span className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>Transform </span>
          <span className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>Your </span>
          <span className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>Look, </span>
          <span className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>Elevate </span>
          <span className="animate-fadeInUp" style={{ animationDelay: '1s' }}>Your </span>
          <span className="animate-fadeInUp" style={{ animationDelay: '1.2s' }}>Confidence</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fadeIn" style={{ animationDelay: '1.5s' }}>
          Step into a world of style and sophistication.
        </p>
        <div className="flex justify-center gap-4 animate-fadeIn" style={{ animationDelay: '1.8s' }}>
          <button className="bg-[#d4af37] text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors">
            Book Appointment
          </button>
          <button className="border border-white text-white font-bold py-3 px-6 rounded-lg hover:border-[#d4af37] transition-colors">
            View Services
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      </div>
    </section>
  );
};

export default HeroSection;
