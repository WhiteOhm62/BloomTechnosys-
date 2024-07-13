import React, { useState } from 'react';

const Map = () => {
  const [showMap, setShowMap] = useState(false);

  const handleTextClick = () => {
    setShowMap(true);
  };

  return (
    <div className="relative w-full  flex items-center justify-center border-2 border-black">
      {!showMap && (
        <div className="absolute inset-0">
          <img
            src="/assets/images/maps.jpg"
            alt="Map"
            className="w-full h-80 object-cover opacity-55"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2
              className="text-5xl font-bold text-center text-gray-600 mt-80 left-1/2 cursor-pointer"
              onClick={handleTextClick}
            >
              FIND US ON MAP
            </h2>
          </div>
        </div>
      )}
      {showMap && (
        <div className="absolute inset-1">
          <iframe
            title="Google Maps"
            className="w-full h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387300.5273587382!2d-73.97968178955078!3d40.69748803338808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2595437a953ab%3A0xf3383b80537b1a78!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1621398310555!5m2!1sen!2suk"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Map;
