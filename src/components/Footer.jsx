import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link as ScrollLink, scroller } from 'react-scroll';

const Footer = () => {
  const scrollToSection = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <footer className="relative top-[330px] bg-gray-800 text-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-gray-400">
              We are a team of passionate individual developers dedicated to providing the best service and quality.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <ScrollLink to="/" smooth={true} duration={800} className="hover:text-white cursor-pointer">
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="about" smooth={true} duration={800} className="hover:text-white cursor-pointer">
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="services" smooth={true} duration={800} className="hover:text-white cursor-pointer">
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="blog" smooth={true} duration={800} className="hover:text-white cursor-pointer">
                  Blogs
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" smooth={true} duration={800} className="hover:text-white cursor-pointer">
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400">123 Street, City, State, 12345</p>
            <p className="text-gray-400">Email: contact@company.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="md:text-sm lg:text-lg mt-8 text-center text-gray-400">
          || &copy; {new Date().getFullYear()} BLOOMTECHNOSYS  | All rights reserved.  ||
        </div>
      </div>
    </footer>
  );
};

export default Footer;
