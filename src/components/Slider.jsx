import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import default styles

const Slider = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleClosePreview = () => {
    setSelectedImage(null);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // Number of slides to scroll at once
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const customButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <></>
    );
  };

  return (
    <div className="relative mt-20">
      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="carousel-item"
        showDots={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        swipeable={true}
        draggable={true}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="w-full h-[90%] cursor-pointer pl-4"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </Carousel>
      {selectedImage !== null && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-75 z-50"
          onClick={handleClosePreview}
        >
          <img
            src={images[selectedImage]}
            alt={`Image ${selectedImage}`}
            className="max-w-full h-full p-16"
          />
        </div>
      )}
    </div>
  );
};

export default Slider;
