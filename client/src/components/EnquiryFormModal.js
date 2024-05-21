// EnquiryFormModal.js
import React, { useState } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const EnquiryFormModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} size="small">
      <Modal.Header>Send Enquiry</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Form.Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Form.TextArea
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" primary>
            Submit
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default EnquiryFormModal;
