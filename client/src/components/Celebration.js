import React, { useState } from "react";
import "../styles/celebration.css";
import EnquiryForm from "./EnquiryForm.js";

const Celebration = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="celebration-container">
            <div className="content">
                <h1 className="title">Start Your Celebration With</h1>
                <h2 className="subtitle">Dratha Creations</h2>
                <p className="description">
                    Take the first step towards the celebration of your life with expert event planners.
                    Lay out your event needs and our executives will get back to you with a plan.
                </p>
                <button className="enquire-btn" onClick={openModal}>Enquire Now</button>
            </div>
            <EnquiryForm isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default Celebration;
