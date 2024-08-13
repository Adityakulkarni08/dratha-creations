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
                photography: true,
                garlands: true,
                food: false,
                PriestNos: false,
                returngift: true,
                invitations: false,
                price: "₹49,999",
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
                garlands: true,
                food: true,
                PriestNos: false,
                photography: true,
                returngift: true,
                invitations: true,
                price: "₹99,999",
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
                garlands: true,
                food: true,
                PriestNos: true,
                photography: true,
                returngift: true,
                invitations: true,
                price: "₹1,49,999",
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
                garlands: true,
                food: true,
                PriestNos: false,
                photography: true,
                returngift: true,
                invitations: true,
                price: "₹2,49,999",
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

const PackageSection = ({ title, image, details, inclusions }) => {
  const {
    decoration,
    garlands,
    food, 
    PriestNos,
    photography,
    returngift,
    invitations,
    price,
    originalPrice,
    discount,
  } = inclusions;

  return (
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
          <span className={photography ? "included" : "not-included"}>
            {photography ? "✓" : "x"}
          </span>{" "}
          Photography
        </p>
        {/* Conditionally render cakes inclusion */}
        {garlands !== undefined && (
          <p>
            <span className={garlands ? "included" : "not-included"}>
              {garlands ? "✓" : "x"}
            </span>{" "}
            Garlands
          </p>
        )}
        {food !== undefined && (
          <p>
            <span className={food ? "included" : "not-included"}>
              {food ? "✓" : "x"}
            </span>{" "}
            Food
          </p>
        )}
        {PriestNos !== undefined && (
          <p>
            <span className={PriestNos ? "included" : "not-included"}>
              {PriestNos ? "✓" : "x"}
            </span>{" "}
            Priest- 1 Nos
          </p>
        )}
        {returngift !== undefined && (
          <p>
            <span className={returngift ? "included" : "not-included"}>
              {returngift ? "✓" : "x"}
            </span>{" "}
            Return Gift
          </p>
        )}
        {invitations !== undefined && (
          <p>
            <span className={invitations ? "included" : "not-included"}>
              {invitations ? "✓" : "x"}
            </span>{" "}
            Invitations
          </p>
        )}
        
        <p className="price">
          starts from <span className="discounted-price">{price}</span>{" "}
          <span className="original-price">{originalPrice}</span> ({discount})
        </p>
        <button className="enquiry-button">QUICK ENQUIRY</button>
      </div>
    </div>
  );
};

export default HousewarmingPackages;
