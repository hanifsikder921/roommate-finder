import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75"
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const slides = [
    {
      img: "/images/roommate1.jpg",
      title: "Find Your Perfect Roommate",
      desc: "Browse trusted profiles and connect with compatible roommates easily."
    },
    {
      img: "/images/roommate2.jpg",
      title: "Safe & Verified Listings",
      desc: "Every roommate profile is carefully verified for your safety."
    },
    {
      img: "/images/roommate3.jpg",
      title: "Affordable & Flexible Living",
      desc: "Find rooms that match your budget and lifestyle."
    }
  ];

return (
  <div className="relative mx-auto overflow-hidden rounded-lg">
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div className="h-[250px] md:h-[500px] w-full overflow-hidden rounded-lg">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.img}')` }}
            >
              <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-center text-white text-center px-4">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-lg">{slide.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);


};

export default BannerSlider;
