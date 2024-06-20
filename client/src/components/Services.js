import React from "react";
import { useNavigate } from "react-router-dom";
import birthdayDecor from "../images/birthdaydecor.png";
import babyShowerDecor from "../images/babyshowerdecor.png";
import houseWarmingDecor from "../images/housewarmingdecor.png";
import pubertyDecor from "../images/pubertyDecor.png";
import weddingDecor from "../images/weddingDecor.png";
import ServiceCard from "./ServiceCard.js";
import { FaRegCalendarCheck, FaQuoteRight, FaBullhorn } from "react-icons/fa";
import "../styles/services.css";

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="cardIcon">{icon}</div>
      <h3 className="cardTitle">{title}</h3>
      <p className="cardDescription">{description}</p>
    </div>
  );
};

const Services = () => {
  const navigate = useNavigate();
  const services = [
    { image: birthdayDecor, title: "Birthday Decorations" },
    { image: babyShowerDecor, title: "Baby Shower Decorations" },
    { image: houseWarmingDecor, title: "Housewarming Decoration" },
    { image: pubertyDecor, title: "Puberty Decorations" },
    { image: weddingDecor, title: "Wedding Decorations" },
  ];

  const handleServiceCardClick = (title) => {
    navigate(`/service/${title}`);
  };

  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            How it Works
          </h2>
          
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            Get Druthi creations event experts on board in 3 easy steps to get
            your celebration mode on!
          </h2>
        </div>
        <div className="featuresContainer">
          <Card
            icon={<FaRegCalendarCheck size={50} color="#E91E63" />}
            title="Plan your Event"
            description="Send us your event details and we will plan everything to perfection to your preferences."
          />
          <Card
            icon={<FaQuoteRight size={50} color="#FFC107" />}
            title="Get a Quote"
            description="Get a transparent and comprehensive quote of all anticipated expenses and miscellaneous."
          />
          <Card
            icon={<FaBullhorn size={50} color="#00BCD4" />}
            title="Celebrate your Events"
            description="Sit back and celebrate your event with loved ones as Homevents takes care of everything else."
          />
          {/* Add more cards as needed */}
        </div>
      </section>

      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Decoration By Occassions
          </h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                image={service.image}
                title={service.title}
                onClick={() => handleServiceCardClick(service.title)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
