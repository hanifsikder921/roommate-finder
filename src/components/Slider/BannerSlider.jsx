import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Typewriter from 'typewriter-effect';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Import all images
import r1 from "../../assets/r1.jpg";
import r2 from "../../assets/r2.jpg";
import r3 from "../../assets/r3.jpg";
import r4 from "../../assets/r4.jpg";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const slides = [
    {
      img: r1,
      title: "Find Your Perfect Roommate",
      desc: "Browse trusted profiles and connect with compatible roommates easily."
    },
    {
      img: r2,
      title: "Safe & Verified Listings",
      desc: "Every roommate profile is carefully verified for your safety."
    },
    {
      img: r3,
      title: "Affordable & Flexible Living",
      desc: "Find rooms that match your budget and lifestyle."
    },
    {
      img: r4,
      title: "Live with Peace of Mind",
      desc: "Enjoy hassle-free co-living with like-minded people."
    }
  ];

  return (
    <div className="relative mx-auto overflow-hidden rounded-lg">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="h-[250px] md:h-[500px] w-full overflow-hidden rounded-lg">
              <div
                className="h-full w-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                {/* Overlay Layer */}
                <div className="absolute inset-0 bg-black/40 z-[1]"></div>

                {/* Text Content */}
                <div className="relative z-[2] h-full w-full flex items-center justify-center text-white text-center px-4">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 ">
                      <Typewriter
                        options={{
                          strings: [`${slide.title}`],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </h2>
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
