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
                cakes: false,
                price: "₹34,999",
                originalPrice: "₹44,999",
                discount: "10,000 OFF",
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
                cakes: true,
                photography: true,
                videography: true,
                album: true,
                returngift: true,
                einvite: true,
                entertainment: true,
                price: "₹49,999",
                originalPrice: "₹64,999",
                discount: "15,000 OFF",
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
                photography: false,
                price: "₹34,999",
                originalPrice: "₹39,999",
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
                cakes: true,
                photography: true,
                album: true,
                returngift: true,
                einvite: true,
                entertainment: false,
                price: "₹74,999",
                originalPrice: "₹89,999",
                discount: "15,000 OFF",
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
                cakes: true,
                photography: true,
                album: true,
                returngift: true,
                einvite: true,
                entertainment: true,
                price: "₹1,09,999",
                originalPrice: "₹1,29,999",
                discount: "20,000 OFF",
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
                photography: false,
                price: "₹59,999",
                originalPrice: "₹69,999",
                discount: "10,000 OFF",
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
                cakes: true,
                photography: true,
                album: true,
                returngift: true,
                einvite: true,
                entertainment: true,
                price: "₹1,49,999",
                originalPrice: "₹1,64,999",
                discount: "15,000 OFF",
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
                cakes: true,
                photography: true,
                album: true,
                returngift: true,
                einvite: true,
                entertainment: true,
                price: "₹1,79,999",
                originalPrice: "₹1,99,999",
                discount: "20,000 OFF",
              }}
            />{" "}
          </>
        )}
      </div>
    </div>
  );
};

const PackageSection = ({ title, image, details, inclusions }) => {
  const {
    decoration,
    photography,
    cakes, 
    videography,
    album,
    returngift,
    einvite,
    entertainment,
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
        {cakes !== undefined && (
          <p>
            <span className={cakes ? "included" : "not-included"}>
              {cakes ? "✓" : "x"}
            </span>{" "}
            Cakes
          </p>
        )}
        {videography !== undefined && (
          <p>
            <span className={videography ? "included" : "not-included"}>
              {videography ? "✓" : "x"}
            </span>{" "}
            Videography
          </p>
        )}
        {album !== undefined && (
          <p>
            <span className={album ? "included" : "not-included"}>
              {album ? "✓" : "x"}
            </span>{" "}
            Album
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
        {einvite !== undefined && (
          <p>
            <span className={einvite ? "included" : "not-included"}>
              {einvite ? "✓" : "x"}
            </span>{" "}
            E-invite
          </p>
        )}
        {entertainment !== undefined && (
          <p>
            <span className={entertainment ? "included" : "not-included"}>
              {entertainment ? "✓" : "x"}
            </span>{" "}
            Entertainment
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

export default BirthdayPackages;
