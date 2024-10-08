import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";
import banner from "../images/banner.png";
import birthdayBanner from "../images/birthdaybanner.png";
import houseWarming from "../images/housewarmingbanner.png";
import yourCeleb from "../images/yourcelebbanner.png";
import EnquiryForm from './EnquiryForm';
import EnquiryFormMobile from "./MobileComponents/EnquiryFormMobile";

const images = [banner, birthdayBanner, houseWarming, yourCeleb];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false); // State to control form visibility
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // State to check if it's mobile view

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleOpenForm = () => {
    setIsFormOpen(true); // Open the form
  };

  const handleCloseForm = () => {
    setIsFormOpen(false); // Close the form
  };

  return (
    <>
      <div className="hero" id="hero">
        <img
          src={images[currentIndex]}
          alt={`Hero Banner ${currentIndex + 1}`}
          className="hero-banner-image"
        />
        <div className="hero-content">
          <button onClick={handleOpenForm} className="hero-button">
            Get Started
          </button>
        </div>
        <div className="prev-arrow" onClick={goToPrevSlide}>
          &#9664;
        </div>
        <div className="next-arrow" onClick={goToNextSlide}>
          &#9654;
        </div>
      </div>

      {/* Conditionally render EnquiryForm or EnquiryFormMobile based on screen size */}
      {isFormOpen && (
        isMobile ? (
          <EnquiryFormMobile onClose={handleCloseForm} />
        ) : (
          <EnquiryForm isOpen={isFormOpen} onClose={handleCloseForm} />
        )
      )}
    </>
  );
};

export default Hero;
