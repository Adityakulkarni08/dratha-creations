import React, { useState } from "react";
import EnquiryForm from "./EnquiryForm.js";
import "../../styles/send-enquiry.css";

const SendEnquiryButton = () => {
    const [showForm, setShowForm] = useState(false);
  
    const handleButtonClick = () => {
      setShowForm(!showForm);
    };
  
    const handleCloseForm = () => {
      setShowForm(false);
    };
  
    return (
      <div>
        <button className="send-enquiry-button" onClick={handleButtonClick}>
          Send Enquiry
        </button>
        {showForm && <EnquiryForm onClose={handleCloseForm} />}
      </div>
    );
  };
    
export default SendEnquiryButton;
