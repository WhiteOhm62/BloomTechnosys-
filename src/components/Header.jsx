// src/components/Header.jsx
import React, { useEffect, useState } from 'react';
import logo from '/assets/images/logo.png'; // Adjust the path if necessary

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full flex justify-around items-center p-5 transition-colors duration-300 ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`} 
      style={{ height: '90px', zIndex: 10 }}
    >
      <div className="flex items-center ">
        <img src={logo} alt="Bloomtech Logo" className="h-12 w-auto mr-3" />
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
