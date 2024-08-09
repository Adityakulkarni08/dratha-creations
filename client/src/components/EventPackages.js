import React, { useState } from "react";
import Slider from "react-slick";
import ServiceCard from "./ServiceCard";
import birthdayTrending from "../images/birthdayPackages.png";
import houseWarmingPackages from "../images/houseWarmingPackages.png";
import weddingPackages from "../images/weddingPackages.png";
import { Link } from "react-router-dom";
import "../styles/EventPackages.css"

const EventPackages = () => {
  const events = [
    { image: birthdayTrending, title: "Birthday Packages" },
    { image: houseWarmingPackages, title: "House Warming" },
    { image: weddingPackages, title: "Wedding Packages" },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="my-4 py-4" id="portfolio">
        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
          Products
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
        </div>

        <div className="trending-container">
          <h2>Event Packages</h2>
          <p>
            Curated event packages from the best event planners in the city for
            every occasion and every budget.
          </p>
          <Slider {...settings}>
            <div>
              <Link to="/birthday-package">
                <img src={birthdayTrending} alt="Birthday Packages" />
              </Link>
              <h3>Birthday Packages</h3>
            </div>
            <div>
              <Link to="/housewarming-package" >
                <img src={houseWarmingPackages} alt="Housewarming Packages" />
              </Link>
              <h3>Housewarming Packages</h3>
            </div>
            <div >
              <Link to="/wedding-package">
                <img src={weddingPackages} alt="Wedding Packages" />
              </Link>
              <h3>Wedding Packages</h3>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};
export default EventPackages;
