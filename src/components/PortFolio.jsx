import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const images = [
  { src: '/assets/images/Portfolio/1.jpg', alt: 'Description 1' },
  { src: '/assets/images/Portfolio/2.jpg', alt: 'Description 2' },
  { src: '/assets/images/Portfolio/3.jpg', alt: 'Description 3' },
  { src: '/assets/images/Portfolio/4.jpg', alt: 'Description 4' },
];

function PortFolio() {
  return (
    <div id="portfolio" className='p-12 bg-gray-50'>
      <div className="mt-20 mb-20">
        <div className="flex justify-center items-center">
          <div className="row">
            <div className="main_featured m-top-100">
              <div className="col-sm-12">
                <div className="text-center">
                  <h2 className="text-4xl text-black mb-5">OUR PORTFOLIO</h2>
                  <p className="h-1 bg-red-400 w-72 mx-auto mb-10"></p>
                  <div className="separator_auto"></div>
                  <p className="text-[16px] text-gray-600 p-4 mx-auto max-w-4xl">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-lg mb-8 text-gray-700">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-4">
          <PhotoProvider>
            {images.map((image, index) => (
              <PhotoView key={index} src={image.src}>
                <div className="transition-transform transform hover:scale-105 bg-gray-300 flex items-center justify-center h-72 cursor-pointer">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </div>
              </PhotoView>
            ))}
          </PhotoProvider>
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
