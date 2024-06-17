import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, Form, Input } from "semantic-ui-react";
import birthdayTrending from "../images/birthdayTrending.png";
import newBornTrending from "../images/newBornTrending.png";
import cakeTrending from "../images/cakeTrending.png";
import gifts from "../images/giftsTrending.png";
import ServiceCard from "./ServiceCard";
import "../styles/portfolio.css";
import { FaUser, FaPhone, FaVoicemail } from "react-icons/fa";

const Portfolio = () => {
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
    setEmailId("");
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8087/api/send-enquiry', {
        service: selectedService,
        phone: phoneNumber,
        email: emailId,
      });
      console.log(response.data);
      handleClose();
    } catch (error) {
      console.error('Error sending enquiry:', error);
    }
  };

  const trends = [
    { image: birthdayTrending, title: "Birthday Decorations" },
    { image: newBornTrending, title: "New Born Photography" },
    { image: cakeTrending, title: "Birthday Cakes" },
    { image: gifts, title: "Wedding Return Gifts" },
  ];

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
          <h2>Trending Now</h2>
          <p>
            Check out the latest trends in décor and gifting over a range of
            occasions, and let your celebration become a hit with your friends
            and family.
          </p>
          <div className="trend-grid">
            {trends.map((trend, index) => (
              <ServiceCard
                key={index}
                image={trend.image}
                title={trend.title}
                route={`/trend/${trend.title}`} // Pass the route prop for trends
                onClick={() => handleOpen(trend.title)} // Optional: if you want a modal for enquiry
              />
            ))}
          </div>
        </div>
      </div>

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
    </>
  );
};

export default Portfolio;
