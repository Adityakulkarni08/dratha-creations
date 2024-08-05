import React, { useState } from "react";
import "../../styles/send-enquiry-mobile.css";

const EnquiryFormMobile = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    celebration: "",
    services: "",
    celebrationDate: "",
    priceRange: "",
    requirements: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8087/api/send-enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
          onClose();
        }, 2000); // Display the message for 2 seconds

        // Clear the form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          state: "",
          city: "",
          celebration: "",
          services: "",
          celebrationDate: "",
          priceRange: "",
          requirements: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="enquiry-form-wrapper-mobile">
      <div className="enquiry-form-container-mobile">
        <button className="close-button-mobile" onClick={onClose}>
          ×
        </button>
        <h1
          style={{
            marginBottom: "20px",
            fontSize: "1.5em",
            color: "#f04e98",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
          }}
        >
          Enquiry Now
        </h1>
        <form className="enquiry-form-mobile" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name*</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name*</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email*</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone*</label>
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>State*</label>
            <input
              type="text"
              name="state"
              placeholder="Your State"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>City*</label>
            <input
              type="text"
              name="city"
              placeholder="Your City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Celebration*</label>
            <select
              name="celebration"
              value={formData.celebration}
              onChange={handleChange}
              required
            >
              <option value="">Your Celebration</option>
              <option value="Birthday">Birthday</option>
              <option value="Wedding">Wedding</option>
              <option value="Baby Shower">Baby Shower</option>
            </select>
          </div>
          <div className="form-group">
            <label>Services*</label>
            <select
              name="services"
              value={formData.services}
              onChange={handleChange}
              required
            >
              <option value="">Choose Services</option>
              <option value="Photography">Photography</option>
              <option value="Catering">Catering</option>
              <option value="Decoration">Decoration</option>
            </select>
          </div>
          <div className="form-group">
            <label>Celebration Date*</label>
            <input
              type="date"
              name="celebrationDate"
              placeholder="Select Celebration Date"
              value={formData.celebrationDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Price Range*</label>
            <select
              name="priceRange"
              value={formData.priceRange}
              onChange={handleChange}
              required
            >
              <option value="">Select Price Range</option>
              <option value="500-1000">$500-$1000</option>
              <option value="1000-2000">$1000-$2000</option>
              <option value="2000+">$2000+</option>
            </select>
          </div>
          <div className="form-group">
            <label>Your Requirements*</label>
            <textarea
              name="requirements"
              placeholder="Your Requirements"
              value={formData.requirements}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group file-upload">
            <label>Submit Your Event Ideas:</label>
            <input type="file" />
            <small>
              Supported Formats: png, jpg, jpeg, .doc, .docx, .pdf | Size: Upto
              5 Mb
            </small>
          </div>
          <div className="form-group terms">
            <input type="checkbox" required />
            <label>
              By selecting this, you agree to our{" "}
              <a href="#">terms and conditions</a>.
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
        {showSuccessMessage && (
          <div className="success-message-mobile">
            Details received successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default EnquiryFormMobile;
