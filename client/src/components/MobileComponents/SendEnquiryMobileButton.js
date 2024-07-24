import React, { useState } from "react";
import EnquiryFormMobile from "./EnquiryFormMobile.js";
import "../../styles/send-enquiry-mobile.css";

const SendEnquiryMobileButton = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="send-enquiry-mobile">
      <button className="send-enquiry-button-mobile" onClick={handleButtonClick}>
        Send Enquiry
      </button>
      {showForm && <EnquiryFormMobile onClose={handleCloseForm} />}
    </div>
  );
};

export default SendEnquiryMobileButton;
