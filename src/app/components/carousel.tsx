// components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface CarouselProps {
    images: string[];
  }
const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
     infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 3000, // Time in milliseconds for each slide
  };

  return (
      <div className="w-full overflow-hidden"> 
      <Slider {...settings}>
        {images.map((image: string | undefined, index: React.Key | null | undefined) => (
          <div key={index} className='w-40% h-20%'>
            <img src={image} alt={`Slide ${index}`} className="w-[70%] h-[5%] block ml-48 " />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
