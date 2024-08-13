import React, { useState } from "react";
import birthdaypackages from "../images/bdaypackages.png";
import birthdayBasicPro from "../images/birthdayBasicPro.png"
import birthdayBasicPremium from "../images/birthdayBasicPremium.png"
import birthdayEliteBasic from "../images/birthdayEliteBasic.png"
import birthdayElitePro from "../images/birthdayElitePro.png"
import birthdayElitePremium from "../images/birthdayElitePremium.png"
import birthdayCelebBasic from "../images/birthdayCelebBasic.png"
import birthdayCelebPro from "../images/birthdayCelebPro.png"
import birthdayCelebPremium from "../images/birthdayCelebPremium.png"
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
        {activeTab === "BUDGET" && (
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
              image={birthdayBasicPro}
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
                photography: true,
                price: "₹29,999",
                originalPrice: "₹34,999",
                discount: "5000 OFF",
              }}
            />
            <PackageSection
              title="Premium Package"
              image={birthdayBasicPremium}
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
                photography: true,
                price: "₹39,999",
                originalPrice: "₹44,999",
                discount: "5000 OFF",
              }}
            />
          </>
        )}
        {activeTab === "ELITE" && (
          <>
            <PackageSection
              title="Basic Package"
              image={birthdayEliteBasic}
              details={[
                "Back Drop Decoration",
                "Entrance Arch",
                "Welcome Board",
                "2 Feet Baby name light",
                "Balloon Bunches in the hall (if allowed at venue)",
                "Theme Based Cylinder Table",
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
              title="Pro Package"
              image={birthdayElitePro}
              details={[
                "Back Drop Decoration",
                "Entrance Arch",
                "Welcome Board",
                "2 Feet Baby name light",
                "Balloon Bunches in the hall (if allowed at venue)",
                "Theme Based Cylinder Table",
              ]}
              inclusions={{
                decoration: true,
                photography: true,
                price: "₹49,999",
                originalPrice: "₹54,999",
                discount: "5000 OFF",
              }}
            />
            <PackageSection
              title="Premium Package"
              image={birthdayElitePremium}
              details={[
                "Back Drop Decoration",
                "Entrance Arch",
                "Welcome Board",
                "2 Feet Baby name light",
                "Balloon Bunches in the hall (if allowed at venue)",
                "Theme Based Cylinder Table",
              ]}
              inclusions={{
                decoration: true,
                photography: true,
                price: "₹69,999",
                originalPrice: "₹74,999",
                discount: "5000 OFF",
              }}
            />
          </>
        )}
        {activeTab === "CELEBRITY" && (
          <>
            <PackageSection
              title="Basic Package"
              image={birthdayCelebBasic}
              details={[
                "Back Drop Decoration",
                "Entrance Arch",
                "Welcome Board",
                "2 Feet Baby name light",
                "Balloon Bunches in the hall (if allowed at venue)",
                "Theme Based Cylinder Table",
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
              title="Pro Package"
              image={birthdayCelebPro}
              details={[
                "Back Drop Decoration",
                "Entrance Arch",
                "Welcome Board",
                "2 Feet Baby name light",
                "Balloon Bunches in the hall (if allowed at venue)",
                "Theme Based Cylinder Table",
              ]}
              inclusions={{
                decoration: true,
                photography: true,
                price: "₹49,999",
                originalPrice: "₹54,999",
                discount: "5000 OFF",
              }}
            />
            <PackageSection
              title="Premium Package"
              image={birthdayCelebPremium}
              details={[
                "Back Drop Decoration",
                "Entrance Arch",
                "Welcome Board",
                "2 Feet Baby name light",
                "Balloon Bunches in the hall (if allowed at venue)",
                "Theme Based Cylinder Table",
              ]}
              inclusions={{
                decoration: true,
                photography: true,
                price: "₹69,999",
                originalPrice: "₹74,999",
                discount: "5000 OFF",
              }}
            />{" "}
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
        <span className="original-price">{inclusions.originalPrice}</span> (
        {inclusions.discount})
      </p>
      <button className="enquiry-button">QUICK ENQUIRY</button>
    </div>
  </div>
);

export default BirthdayPackages;
