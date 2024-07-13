import React, { useState } from 'react';
import { FaFire } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

const About = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section id="about" className="about py-20 bg-white">
      <div className="container mx-auto ">
        <div className="flex flex-wrap ml-20 mr-20">
          <div className="w-full md:w-1/2 px-4 ">
            <div className="about_content">
              <h2 className="text-4xl font-bold mb-4">ABOUT US</h2>
              <div className="h-1 bg-red-400 w-44 mb-6"></div>

              <p className="text-lg mb-6 text-gray-700">
                BloomTechnosys is a leading software development company dedicated to delivering
                high-quality, optimized solutions at affordable rates. Specializing in a wide range
                of development services, BloomTechnosys combines technical expertise with a
                client-centric approach to drive innovation and efficiency for businesses of all
                sizes. Whether you're a startup or an established enterprise, BloomTechnosys ensures
                your software needs are met with precision and excellence.
              </p>

              <div className="about_btns mt-10">
                <a href="#" className="btn btn-primary bg-red-400 text-white px-6 py-2 rounded-md hover:bg-red-500 transition duration-300">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="about_accordion">
              <div id="faq_main_content" className="faq_main_content">
                {['UNIQUE DESIGN', 'EXPERIENCE TEAM', 'GREAT SERVICE', 'FREE UPDATES'].map((section, index) => (
                  <div key={index} className="mb-4 border-2 rounded-md">
                    <h6
                      className="text-lg font-semibold flex items-center cursor-pointer border-2 p-2 rounded-sm"
                      onClick={() => toggleSection(section)}
                    >
                      <i className={`fa ${openSection === section ? 'fa-angle-down' : 'fa-angle-right'} text-primary mr-2`}></i> {section}
                    </h6>
                    <div
                      className={`content overflow-hidden transition-max-height duration-500 ease-in-out ${openSection === section ? 'max-h-96' : 'max-h-0'}`}
                    >
                      <p className="text-gray-700 mt-2 p-4">
                        {section === 'UNIQUE DESIGN' && 'Our design philosophy blends creativity, functionality, and user-centric principles. We deliver visually stunning, high-performing solutions tailored to your business needs. Our expert designers ensure every project is both beautiful and intuitive, creating seamless and engaging user experiences. At BloomTechnosys, we craft designs that leave a lasting impact.'}
                        {section === 'EXPERIENCE TEAM' && 'Our experienced team is dedicated to delivering top-tier software solutions. Our skilled professionals bring a wealth of knowledge and expertise to every project, ensuring high-quality, optimized outcomes. We work closely with clients to understand their needs, providing innovative and efficient solutions. With BloomTechnosys, you benefit from a team committed to your success.'}
                        {section === 'GREAT SERVICE' && 'We pride ourselves on delivering exceptional service that exceeds client expectations. Our commitment to quality and customer satisfaction drives us to provide reliable, efficient, and innovative solutions tailored to your specific needs. From initial consultation to final delivery, our dedicated team ensures a seamless and professional experience, making your success our top priority.'}
                        {section === 'FREE UPDATES' && 'We believe in providing continuous value to our clients. That\'s why we offer free updates to ensure your software remains current and optimized. Our commitment to ongoing improvement means you can count on us to keep your solutions up-to-date, enhancing performance and functionality without additional cost. With BloomTechnosys, your investment is future-proofed.'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="my-20 border-t border-gray-300 p-20">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-4 mt-6">
              <div className="about_bottom_item">
                <div className="ab_head flex items-start">
                  <div className="ab_head_icon bg-red-400 border-4 border-red-300 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg mr-4">
                    <FaFire/>
                  </div>
                  <h6 className="text-xl font-semibold mt-4">WE’RE CREATIVE</h6>
                </div>
                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibsih euismod tincidiunt laorieet doloire magna diam aliquafm erat
                  voluitpati.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mt-6">
              <div className="about_bottom_item">
                <div className="ab_head flex items-start">
                  <div className="ab_head_icon bg-red-400 border-4 border-red-300 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg mr-4">
                   <IoIosChatbubbles/>
                  </div>
                  <h6 className="text-xl font-semibold mt-4">WE'RE FRIENDLY</h6>
                </div>
                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibsih euismod tincidiunt laorieet doloire magna diam aliquafm erat
                  voluitpati.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mt-6">
              <div className="about_bottom_item">
                <div className="ab_head flex items-start">
                  <div className="ab_head_icon bg-red-400 border-4 border-red-300 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg mr-4">
                   <FaHeart/>
                  </div>
                  <h6 className="text-xl font-semibold mt-4">WE LOVE MINIMALISM</h6>
                </div>
                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibsih euismod tincidiunt laorieet doloire magna diam aliquafm erat
                  voluitpati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
