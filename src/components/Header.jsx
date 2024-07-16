import React, { useEffect, useState } from 'react';
import logo from '/assets/images/logo.png'; // Adjust the path if necessary
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    if (id === '/') {
      scroll.scrollToTop({ smooth: true });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full flex justify-between items-center p-5 transition-colors duration-300 ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`} 
      style={{ height: '90px', zIndex: 30 }}
    >
      <div className="flex items-center md: text-center">
        <img src={logo} alt="Bloomtech Logo" className="h-12 w-auto mr-3 cursor-pointer" onClick={() => scrollToSection('home')} />
      </div>
      <nav className="hidden md:flex space-x-6">
        <ul className="flex space-x-6">
          <li><ScrollLink to="/" smooth={true} className="cursor-pointer hover:text-gray-500">Home</ScrollLink></li>
          <li><ScrollLink to="about" smooth={true} className="cursor-pointer hover:text-gray-500">About</ScrollLink></li>
          <li><ScrollLink to="services" smooth={true} className="cursor-pointer hover:text-gray-500">Services</ScrollLink></li>
          <li><ScrollLink to="portfolio" smooth={true} className="cursor-pointer hover:text-gray-500">Portfolio</ScrollLink></li>
          <li><ScrollLink to="blog" smooth={true} className="cursor-pointer hover:text-gray-500">Blog</ScrollLink></li>
          <li><ScrollLink to="contact" smooth={true} className="cursor-pointer hover:text-gray-500">Contact</ScrollLink></li>
        </ul>
      </nav>
      <div className="md:hidden flex items-center">
        <FaBars className="text-2xl cursor-pointer" onClick={toggleSidebar} />
      </div>
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ zIndex: 40 }}
      >
        <div className="flex justify-end p-5">
          <FaTimes className="text-2xl cursor-pointer" onClick={closeSidebar} />
        </div>
        <ul className="flex flex-col items-center space-y-6">
          <li><ScrollLink to="/" smooth={true} className="cursor-pointer hover:text-gray-500" onClick={closeSidebar}>Home</ScrollLink></li>
          <li><ScrollLink to="about" smooth={true} className="cursor-pointer hover:text-gray-500" onClick={closeSidebar}>About</ScrollLink></li>
          <li><ScrollLink to="services" smooth={true} className="cursor-pointer hover:text-gray-500" onClick={closeSidebar}>Services</ScrollLink></li>
          <li><ScrollLink to="portfolio" smooth={true} className="cursor-pointer hover:text-gray-500" onClick={closeSidebar}>Portfolio</ScrollLink></li>
          <li><ScrollLink to="blog" smooth={true} className="cursor-pointer hover:text-gray-500" onClick={closeSidebar}>Blog</ScrollLink></li>
          <li><ScrollLink to="contact" smooth={true} className="cursor-pointer hover:text-gray-500" onClick={closeSidebar}>Contact</ScrollLink></li>
        </ul>
      </div>
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-30" 
          onClick={closeSidebar}
        />
      )}
    </header>
  );
};

export default Header;
