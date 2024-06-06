import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img from "../images/web.svg";
import img2 from "../images/app.svg";
import img3 from "../images/hosting.svg";
import img4 from "../images/consultation.svg";
import birthdayDecor from "../images/birthdaydecor.png";
import babyShowerDecor from "../images/babyshowerdecor.png";
import houseWarmingDecor from "../images/housewarmingdecor.png";
import {
  FaRegCalendarCheck,
  FaQuoteRight,
  FaBullhorn,
  FaUser,
  FaPhone,
  FaVoicemail,
} from "react-icons/fa";
import { Button, Modal, Form, Input } from "semantic-ui-react";
import ServiceCard from "./ServiceCard.js";
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
    {
      image: birthdayDecor,
      title: "Birthday Decorations",
    },
    {
      image: babyShowerDecor,
      title: "Baby Shower Decorations",
    },
    {
      image: houseWarmingDecor,
      title: "Housewarming Decoration",
    },
  ];

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
        </div>{" "}
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
                onClick={() => navigate(`/service/${service.title}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
