import React, { useEffect, useState } from 'react';
import logo from '/assets/images/logo.png'; // Adjust the path if necessary
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

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

  
  const scrollToSection = (id) => {
    console.log('Scrolling to:', id); // Check if 'home' is correctly detected
    if (id === '/') {
      scroll.scrollToTop({ smooth: true });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  

  return (
    <header 
      className={`fixed top-0 left-0 w-full flex justify-around items-center p-5 transition-colors duration-300 ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`} 
      style={{ height: '90px', zIndex: 10 }}
    >
      <div className="flex items-center">
        <img src={logo} alt="Bloomtech Logo" className="h-12 w-auto mr-3 cursor-pointer" onClick={() => scrollToSection('home')} />
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><ScrollLink to="/" smooth={true} className="cursor-pointer hover:text-gray-500">Home</ScrollLink></li>
          <li><ScrollLink to="about" smooth={true} className="cursor-pointer hover:text-gray-500">About</ScrollLink></li>
          <li><ScrollLink to="services" smooth={true} className="cursor-pointer hover:text-gray-500">Services</ScrollLink></li>
          <li><ScrollLink to="portfolio" smooth={true} className="cursor-pointer hover:text-gray-500">Portfolio</ScrollLink></li>
          <li><ScrollLink to="blog" smooth={true} className="cursor-pointer hover:text-gray-500">Blog</ScrollLink></li>
          <li><ScrollLink to="contact" smooth={true} className="cursor-pointer hover:text-gray-500">Contact</ScrollLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
