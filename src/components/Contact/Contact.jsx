import React from 'react';
import './custom.css';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div id="contact" className='flex flex-col md:flex-row bg-gray-600 md:h-[400px]'>
      <div className='md:w-1/2 p-12 mt-5 ml-5'>
        <h1 className='text-center text-white text-4xl'>BloomTechnosys</h1>
        <div className="h-1 w-64 md:ml-[205px] bg-red-500 my-4"></div>
        <p className='px-1 mt-5 text-white text-fill font-semibold'>
          BloomTechnosys is a premier software development company offering high-quality, optimized solutions at affordable rates. We specialize in delivering innovative and efficient services tailored to meet the unique needs of businesses, from startups to enterprises. At BloomTechnosys, we prioritize technical excellence and client satisfaction to ensure the success of your projects.
        </p>
      </div>
      
      <div className='md:w-1/2 flex justify-center items-center'>
        <ContactForm/>
      </div>
    </div>
  );
}

export default Contact;
