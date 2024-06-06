import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Form, Input, Button } from "semantic-ui-react";
import { FaUser, FaPhone, FaVoicemail } from "react-icons/fa";
import axios from "axios";

const ServiceCard = ({ image, title }) => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [emailId, setEmailId] = useState("");
  
    const handleCardClick = () => {
      navigate(`/service/${title}`);
    };
  
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
        const response = await axios.post(
          "http://localhost:8087/api/send-enquiry",
          {
            service: title,
            phone: phoneNumber,
            email: emailId,
          }
        );
        console.log(response.data);
        handleClose();
      } catch (error) {
        console.error("Error sending enquiry:", error);
      }
    };
  
    return (
      <div className="service-card" onClick={handleCardClick}>
        <img src={image} alt={title} className="service-image" />
        <h3 className="service-title">{title}</h3>
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
  
export default ServiceCard;
