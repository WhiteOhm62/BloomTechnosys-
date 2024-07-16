import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="hero-section h-[110vh] bg-cover bg-center flex items-center justify-start text-left relative" 
      style={{ backgroundImage: `url(/assets/images/background/header.jpg)`, marginTop: '-70px' }}
    >
      <div className="overlay absolute inset-0 bg-black opacity-50"></div>
      <div className="text-white max-w-xl relative z-10 px-6 sm:px-10 mt-40">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 ml-0 sm:ml-[60px] md:ml-[180px]">Crafting Code,</h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 ml-0 sm:ml-[60px] md:ml-[180px] w-full">Enhancing Lifestyle</h1>
        <button className="bg-red-500 text-white px-6 w-32 sm:w-40 py-2 text-lg rounded hover:bg-red-600 ml-0 sm:ml-[60px] md:ml-[180px]">Hire Us</button>
      </div>
    </section>
  );
};

export default HeroSection;
