import React from "react";
import birthdaypackages from "../images/bdaypackages.png";
import "../styles/birthday-packages.css";

const BirthdayPackages = () => {
  return (
    <div className="package-container">
      <div className="package-header">
        <h1>Birthday Package Details</h1>
      </div>
      <div className="package-tabs">
        <button className="tab-button active">BUDGET</button>
        <button className="tab-button">ELITE</button>
        <button className="tab-button">CELEBRITY</button>
      </div>
      <div className="package-content">
        <div className="package-image">
          <img
            src={birthdaypackages}
            alt="Birthday Package"
            className="birthday-packages"
          />
        </div>
        <div className="package-details">
          <h2>Basic Package</h2>
          <ul>
            <li>Back Drop Decoration</li>
            <li>Entrance Arch</li>
            <li>Welcome Board</li>
            <li>1 Feet Baby name light</li>
            <li>Balloon Bunches in the hall (if allowed at venue)</li>
            <li>Theme Based Cylinder Table</li>
          </ul>
          <a href="#" className="read-more">
            READ MORE +
          </a>
        </div>
        <div className="package-inclusions">
          <h3>Inclusions (Customizable)</h3>
          <p>
            <span className="included">✓</span> Decoration
          </p>
          <p>
            <span className="not-included">x</span> Photography
          </p>
          <p className="price">
            starts from <span className="discounted-price">₹19,999</span>{" "}
            <span className="original-price">₹24,999</span> (5000 OFF)
          </p>
          <button className="enquiry-button">QUICK ENQUIRY</button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayPackages;
