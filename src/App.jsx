import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Featured from './components/Featured';
import Slider from './components/Slider';
import Services from './components/Services';
import PortFolio from './components/PortFolio';
import SkillSection from './components/Skills';
import Statistics from './components/Statistics';
import Suscribe from './components/Suscribe';
import Blogs from './components/Blogs/Blogs';
import Map from './components/Map';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import 'smoothscroll-polyfill';

// Optionally, apply the polyfill globally
window.__forceSmoothScrollPolyfill__ = true;

function App() {
  const images = [
    '/assets/images/Portfolio/1.jpg',
    '/assets/images/Portfolio/1.jpg',
    '/assets/images/Portfolio/1.jpg',
    '/assets/images/Portfolio/1.jpg',
    '/assets/images/Portfolio/1.jpg',
    '/assets/images/Portfolio/1.jpg',
    '/assets/images/Portfolio/1.jpg',
    '/assets/images/Portfolio/1.jpg',

    // Add more image URLs as needed
  ];

  return (
    <div className='w-full'>
      <div className="w-ful">
        <Header />
      </div>
      <div id='/' className='w-full'>
        <HeroSection />
        <div className="max-w-screen-xl mx-auto px-4">
          <About />
          <Featured />
          <Slider images={images} />
          <Services />
          <PortFolio />
          <SkillSection />
          <Statistics />
          <Suscribe />
          <Blogs />
          <Contact />
          <Map />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
