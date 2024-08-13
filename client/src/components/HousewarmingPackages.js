import React, { useState } from "react";
import birthdaypackages from "../images/bdaypackages.png";
import houseWarmBasic from "../images/houseWarmBasic.png"
import houseWarmBudget from "../images/houseWarmBudget.png"
import houseWarmElite from "../images/houseWarmElite.png"
import houseWarmCeleb from "../images/houseWarmCeleb.png"
import "../styles/birthday-packages.css";

const HousewarmingPackages = () => {
  const [activeTab, setActiveTab] = useState("BUDGET");

  return (
    <div className="package-container">
      <div className="package-header">
        <h1>HouseWarming Package Details</h1>
      </div>
      <div className="package-tabs">
        <button
          className={`tab-button ${activeTab === "BASIC" ? "active" : ""}`}
          onClick={() => setActiveTab("BASIC")}
        >
          BASIC
        </button>
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
        {activeTab === "BASIC" && (
          <>
            <PackageSection
              title="Basic Package"
              image={houseWarmBasic}
              details={[
                "Welcome Board",
                "Entrance Decoration",
                "Simple Full House Decoration",
                "Vasakal Malai",
                "Traditional & Candid Photography",
                "Thambulam Bags 50Nos",
              ]}
              inclusions={{
                decoration: true,
                photography: false,
                price: "₹19,999",
                originalPrice: "₹24,999",
                discount: "5000 OFF",
              }}
            />
          </>
        )}
        {activeTab === "BUDGET" && (
          <>
            <PackageSection
              title="Budget Package"
              image={houseWarmBudget}
              details={[
                "Welcome Board",
                "Entrance Decoration",
                "Simple Full House Decoration",
                "Vasakal Malai",
                "Traditional & Candid Photography",
                "Thambulam Bags 50Nos",
              ]}
              inclusions={{
                decoration: true,
                photography: false,
                price: "₹19,999",
                originalPrice: "₹24,999",
                discount: "5000 OFF",
              }}
            />
          </>
        )}
        {activeTab === "ELITE" && (
          <>
            <PackageSection
              title="Elite Package"
              image={houseWarmElite}
              details={[
                "Welcome Board",
                "Entrance Decoration",
                "Simple Full House Decoration",
                "Vasakal Malai",
                "Traditional & Candid Photography",
                "Thambulam Bags 50Nos",
              ]}
              inclusions={{
                decoration: true,
                photography: false,
                price: "₹19,999",
                originalPrice: "₹24,999",
                discount: "5000 OFF",
              }}
            />
          </>
        )}
        {activeTab === "CELEBRITY" && (
          <>
            <PackageSection
              title="Celebrity Package"
              image={houseWarmCeleb}
              details={[
                "Welcome Board",
                "Entrance Decoration",
                "Simple Full House Decoration",
                "Vasakal Malai",
                "Traditional & Candid Photography",
                "Thambulam Bags 50Nos",
              ]}
              inclusions={{
                decoration: true,
                photography: false,
                price: "₹19,999",
                originalPrice: "₹24,999",
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
        <span className="original-price">{inclusions.originalPrice}</span> (
        {inclusions.discount})
      </p>
      <button className="enquiry-button">QUICK ENQUIRY</button>
    </div>
  </div>
);

export default HousewarmingPackages;
