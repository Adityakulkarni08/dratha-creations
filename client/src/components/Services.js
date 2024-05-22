import React, { useState } from "react";
import axios from "axios";
import img from "../images/web.svg";
import img2 from "../images/app.svg";
import img3 from "../images/hosting.svg";
import img4 from "../images/consultation.svg";
import birthdayDecor from "../images/birthdaydecor.png"
import babyShowerDecor from "../images/babyshowerdecor.png"
import houseWarmingDecor from "../images/housewarmingdecor.png"
import {
  FaRegCalendarCheck,
  FaQuoteRight,
  FaBullhorn,
  FaUser,
  FaPhone,
  FaVoicemail,
} from "react-icons/fa";
import { Button, Modal, Form, Input } from "semantic-ui-react";
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

const ServiceCard = ({ image, title }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");

  const handleOpen = (title) => {
    setSelectedService(title);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedService("");
    setPhoneNumber("");
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8087/api/send-enquiry', {
        service: title,
        phone: phoneNumber,
        email: emailId,
      });
      console.log(response.data);
      handleClose();
    } catch (error) {
      console.error('Error sending enquiry:', error);
    }
  };

  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />
      <h3 className="service-title">{title}</h3>
      <Button primary onClick={() => handleOpen(title)}>
        Send Enquiry
      </Button>
      <Modal open={modalOpen} onClose={handleClose} size="tiny">
        <Modal.Header>Send Enquiry</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Name</label>
              <Input
                icon={<FaUser />}
                iconPosition="left"
                placeholder="Name"
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Service</label>
              <Input
                icon="tag"
                iconPosition="left"
                placeholder={selectedService}
                disabled
              />
            </Form.Field>
            <Form.Field>
              <label>Phone Number</label>
              <Input
                icon={<FaPhone />}
                iconPosition="left"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Email id</label>
              <Input
                icon={<FaVoicemail />}
                iconPosition="left"
                placeholder="email id"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                required
              />
            </Form.Field>
            <Button type="submit" primary>
              Submit
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    </div>
  );
};

const Services = () => {
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
            Decorations
          </h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
