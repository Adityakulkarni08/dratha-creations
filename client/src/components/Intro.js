import React from "react";
import Slider from "react-slick";
import { FaCameraRetro, FaBirthdayCake, FaGift } from 'react-icons/fa';
import { IoFastFoodOutline } from 'react-icons/io5';
import { MdOutlineRoomService } from 'react-icons/md';
import "../styles/intro.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Intro = () => {
  const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
        <div
          className={`flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left ${isMobile ? 'mobile-carousel' : ''}`}
          data-aos="fade-up"
        >
          {isMobile ? (
            <Slider {...carouselSettings}>
              <div>
              <div className="icon-menu-item">
                <MdOutlineRoomService size={50} />
                <p>SERVICES</p>
              </div>
              </div>
              <div>
              <div className="icon-menu-item">
                <FaCameraRetro size={50} />
                <p>PHOTOGRAPHY</p>
              </div>
              </div>
              <div>
              <div className="icon-menu-item">
                <FaCameraRetro size={50} />
                <p>PHOTOGRAPHY</p>
              </div>
              </div>
              <div>
              <div className="icon-menu-item">
                <FaCameraRetro size={50} />
                <p>PHOTOGRAPHY</p>
              </div>
              </div>
              <div>
              <div className="icon-menu-item">
                <FaCameraRetro size={50} />
                <p>PHOTOGRAPHY</p>
              </div>
              </div>
              {/* Add more slides as needed */}
            </Slider>
          ) : (
            <div className="icon-menu-container">
              {/* Your existing icon menu items */}
              <div className="icon-menu-item">
                <MdOutlineRoomService size={50} />
                <p>SERVICES</p>
              </div>
              <div className="icon-menu-item">
                <FaCameraRetro size={50} />
                <p>PHOTOGRAPHY</p>
              </div>
              <div className="icon-menu-item">
                <FaBirthdayCake size={50} />
                <p>CAKES</p>
              </div>
              <div className="icon-menu-item">
                <FaGift size={50} />
                <p>GIFTS</p>
              </div>
              <div className="icon-menu-item">
                <IoFastFoodOutline size={50} />
                <p>FOOD</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Intro;
