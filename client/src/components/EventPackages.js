import React, { useState } from "react";
import Slider from "react-slick";
import ServiceCard from "./ServiceCard";
import birthdayTrending from "../images/birthdayTrending.png";

const EventPackages = () => {
  const events = [{ image: birthdayTrending, title: "Birthday Packages" }];

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
            {events.map((event, index) => (
              <div key={index} className="trend-card-wrapper">
                <div className="slider-card">
                  <ServiceCard
                    image={event.image}
                    title={event.title}
                    route={`/event/${event.title}`}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default EventPackages;
