import React, { useState } from "react";
import birthdaypackages from "../images/bdaypackages.png";
import "../styles/birthday-packages.css";

const BirthdayPackages = () => {
  const [activeTab, setActiveTab] = useState("BUDGET");

  return (
    <div className="package-container">
      <div className="package-header">
        <h1>Birthday Package Details</h1>
      </div>
      <div className="package-tabs">
        <button
          className={`tab-button ${activeTab === "BUDGET" ? "active" : ""}`}
          onClick={() => setActiveTab("BUDGET")}
        >
          BUDGET
        </button>
        <button
          className={`tab-button ${activeTab === "ELITE" ? "active" : ""}`}
          onClick={() => setActiveTab("ELITE")}
        >
          ELITE
        </button>
        <button
          className={`tab-button ${activeTab === "CELEBRITY" ? "active" : ""}`}
          onClick={() => setActiveTab("CELEBRITY")}
        >
          CELEBRITY
        </button>
      </div>
      <div className="package-content">
        {(activeTab === "BUDGET" || activeTab === "ELITE" || activeTab === "CELEBRITY") && (
          <>
            <PackageSection
              title="Basic Package"
              image={birthdaypackages}
              details={[
                "Back Drop Decoration",
                "Entrance Arch",
                "Welcome Board",
                "1 Feet Baby name light",
                "Balloon Bunches in the hall (if allowed at venue)",
                "Theme Based Cylinder Table",
              ]}
              inclusions={{
                decoration: true,
                photography: false,
                price: "₹19,999",
                originalPrice: "₹24,999",
                discount: "5000 OFF",
              }}
            />
            <PackageSection
              title="Pro Package"
              image={birthdaypackages}
              details={[
                "Advanced Back Drop Decoration",
                "Grand Entrance Arch",
                "Personalized Welcome Board",
                "2 Feet Baby name light",
                "Extra Balloon Bunches in the hall (if allowed at venue)",
                "Deluxe Theme Based Cylinder Table",
                "Custom Themed Props",
              ]}
              inclusions={{
                decoration: true,
                photography: true,
                price: "₹29,999",
                originalPrice: "₹34,999",
                discount: "5000 OFF",
              }}
            />
            <PackageSection
              title="Premium Package"
              image={birthdaypackages}
              details={[
                "Luxury Back Drop Decoration",
                "Royal Entrance Arch",
                "Exclusive Welcome Board",
                "3 Feet Baby name light",
                "Premium Balloon Bunches in the hall (if allowed at venue)",
                "Elite Theme Based Cylinder Table",
                "Exclusive Themed Props",
                "Professional Photography",
              ]}
              inclusions={{
                decoration: true,
                photography: true,
                price: "₹39,999",
                originalPrice: "₹44,999",
                discount: "5000 OFF",
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

const PackageSection = ({ title, image, details, inclusions }) => (
  <div className="package-section">
    <div className="package-image">
      <img src={image} alt={title} className="birthday-packages" />
    </div>
    <div className="package-details">
      <h2>{title}</h2>
      <ul>
        {details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
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
        <span className={inclusions.photography ? "included" : "not-included"}>
          {inclusions.photography ? "✓" : "x"}
        </span>{" "}
        Photography
      </p>
      <p className="price">
        starts from <span className="discounted-price">{inclusions.price}</span>{" "}
        <span className="original-price">{inclusions.originalPrice}</span>{" "}
        ({inclusions.discount})
      </p>
      <button className="enquiry-button">QUICK ENQUIRY</button>
    </div>
  </div>
);

export default BirthdayPackages;
