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

  const scrollToSection = (id) => {
    if (id === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
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
      <div className="flex items-center ">
        <img src={logo} alt="Bloomtech Logo" className="h-12 w-auto mr-3" />
      </div>
      <nav>
        <ul className="flex space-x-6">
        <li><a href="#home" onClick={() => scrollToSection('/')}>Home</a></li>
          <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
          <li><a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
          <li><a href="#blog" onClick={() => scrollToSection('blog')}>Blog</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
