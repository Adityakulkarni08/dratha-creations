import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import heroImg from "../images/web-dev.svg";
import banner from "../images/banner.png";
import birthdayBanner from "../images/birthdaybanner.png";
import houseWarming from "../images/housewarmingbanner.png"
import yourCeleb from "../images/yourcelebbanner.png"
import "../styles/hero.css";

const images = [banner, birthdayBanner, houseWarming, yourCeleb];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 3 seconds

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

  return (
    <>
      <div className="hero" id="hero">
        <img
          src={images[currentIndex]}
          alt={`Hero Banner ${currentIndex + 1}`}
          className="hero-banner-image"
        />
        <div className="prev-arrow" onClick={goToPrevSlide}>
          &#9664;
        </div>
        <div className="next-arrow" onClick={goToNextSlide}>
          &#9654;
        </div>
      </div>
    </>
  );
};

export default Hero;
