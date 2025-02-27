import React from 'react';
import { GrPersonalComputer } from "react-icons/gr";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoCube } from "react-icons/io5";

function Services() {
  return (
    <>
      <div id="services" className='mt-20 mb-20'>
        <div className="flex justify-center items-center">
          <div className="text-center">
            <h2 className='text-4xl text-black mb-5'>OUR SERVICES</h2>
            <p className="h-1 bg-red-400 w-72 mx-auto mb-10"></p>
            <p className='text-[16px] text-gray-600 px-4 md:px-20 lg:px-40 xl:px-60'>
              Crafting dynamic and user-friendly websites, delivering impactful mobile applications across platforms, and empowering individuals and teams with essential tech skills through expert-led training at BloomTechnosys. Crafting dynamic and user-friendly websites, delivering impactful mobile applications across platforms, and empowering individuals and teams with essential tech skills through expert-led training at BloomTechnosys.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-around mb-20">
        {/* Web Development */}
        <div className="max-w-sm p-6 bg-gray-50 m-4 shadow-lg">
          <div className="text-start">
            <GrPersonalComputer className='text-5xl text-gray-400'/>
            <h6 className="text-2xl mt-6">Web Development</h6>
            <div className="h-1 w-16 bg-red-500 my-4"></div>
            <p className="text-gray-600">
              We craft dynamic, user-friendly websites that blend creativity with cutting-edge technology. Our expert team ensures responsive design, seamless navigation, and robust backend functionality to enhance user experience and drive your business forward. Whether you're launching a new site or revamping an existing one, trust BloomTechnosys to deliver tailored solutions that meet your unique needs and exceed your expectations.
            </p>
          </div>
        </div>

        {/* App Development */}
        <div className="max-w-sm p-6 bg-gray-50 m-4 shadow-lg">
          <div className="text-start">
            <IoMdPhonePortrait className='text-5xl text-gray-400'/>
            <h6 className="text-2xl mt-6">App Development</h6>
            <div className="h-1 w-16 bg-red-500 my-4"></div>
            <p className="text-gray-600">
              Innovation with expertise to create impactful mobile solutions. From concept to launch, our dedicated team ensures each app is meticulously designed, developed, and optimized for performance across platforms. Whether you need a native iOS, Android, or cross-platform app, we deliver seamless user experiences that align with your business goals. Partner with BloomTechnosys to transform your ideas into powerful mobile applications.
            </p>
          </div>
        </div>

        {/* Training */}
        <div className="max-w-sm p-6 bg-gray-50 m-4 shadow-lg">
          <div className="text-start">
            <IoCube className='text-5xl text-gray-400'/>
            <h6 className="text-2xl mt-6">Training</h6>
            <div className="h-1 w-16 bg-red-500 my-4"></div>
            <p className="text-gray-600">
              We offer comprehensive training programs designed to empower individuals and teams with the skills needed to excel in the ever-evolving tech landscape. Our expert trainers deliver hands-on learning experiences that cover a wide range of topics, from software development and digital marketing to UX/UI design and project management. Whether you're looking to enhance your career or upskill your team, BloomTechnosys provides tailored training solutions that foster growth and success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
