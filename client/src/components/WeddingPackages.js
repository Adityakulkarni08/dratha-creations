import React, { useState } from "react";
import birthdaypackages from "../images/bdaypackages.png";
import weddingBudget from "../images/weddingBudget.png";
import weddingElite from "../images/weddingElite.png"
import weddingCeleb from "../images/weddingCeleb.png"
import "../styles/birthday-packages.css";

const WeddingPackages = () => {
  const [activeTab, setActiveTab] = useState("BUDGET");

  return (
    <div className="package-container">
      <div className="package-header">
        <h1>Wedding Package Details</h1>
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
              title="Budget Package"
              image={weddingBudget}
              details={[
                "Budget wedding hall",
                "Name Board of BRIDE and Groom",
                "Breakfast-250 nos",
                "Traditional & Candid Photography",
                "MAC HD Makeup With Hairstyling (Bride & Groom)",
                "Muthurtha Malai-2 Nos",
              ]}
              inclusions={{
                decoration: true,
                venue: true,
                food:true,
                photovideo: true,
                lightmusic: false,
                luxurycar: false,
                vrexp: false,
                viphospitality: false,
                familymakeup: false,
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
              image={weddingElite}
              details={[
                "Elite wedding hall",
                "Customized Name Board & Entrance",
                "Breakfast-500 nos",
                "Traditional & Candid Photography",
                "MAC HD Makeup With Hairstyling (matching venni) for muhurtham",
                "Muthurtha Malai-2 Nos",
              ]}
              inclusions={{
                decoration: true,
                venue: true,
                food:true,
                photovideo: true,
                lightmusic: true,
                luxurycar: true,
                vrexp: false,
                viphospitality: false,
                familymakeup: false,
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
              image={weddingCeleb}
              details={[
                "Celebrity wedding hall",
                "Customized Name Board & Entrance",
                "Breakfast-500 nos",
                "Traditional & Candid Photography",
                "E Invite",
                "Traditional Makeup With Hairstyling (matching venni) for muhurtham",
              ]}
              inclusions={{
                decoration: true,
                venue: true,
                food:true,
                photovideo: true,
                lightmusic: true,
                luxurycar: true,
                vrexp: true,
                viphospitality: true,
                familymakeup: true,
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
    venue,
    food, 
    photovideo,
    lightmusic,
    luxurycar,
    vrexp,
    viphospitality,
    familymakeup,
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
          <span className={venue ? "included" : "not-included"}>
            {venue ? "✓" : "x"}
          </span>{" "}
          Venue
        </p>
        {/* Conditionally render cakes inclusion */}
        {photovideo !== undefined && (
          <p>
            <span className={photovideo ? "included" : "not-included"}>
              {photovideo ? "✓" : "x"}
            </span>{" "}
            Photography and Videography
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
        {lightmusic !== undefined && (
          <p>
            <span className={lightmusic ? "included" : "not-included"}>
              {lightmusic ? "✓" : "x"}
            </span>{" "}
            Light Music
          </p>
        )}
        {luxurycar !== undefined && (
          <p>
            <span className={luxurycar ? "included" : "not-included"}>
              {luxurycar ? "✓" : "x"}
            </span>{" "}
            Luxury Car
          </p>
        )}
        {vrexp !== undefined && (
          <p>
            <span className={vrexp ? "included" : "not-included"}>
              {vrexp ? "✓" : "x"}
            </span>{" "}
            Virtual Reality Experience
          </p>
        )}
        {viphospitality !== undefined && (
          <p>
            <span className={viphospitality ? "included" : "not-included"}>
              {viphospitality ? "✓" : "x"}
            </span>{" "}
            VIP Hospitality
          </p>
        )}
        {familymakeup !== undefined && (
          <p>
            <span className={familymakeup ? "included" : "not-included"}>
              {familymakeup ? "✓" : "x"}
            </span>{" "}
            Family Makeup
          </p>
        )}
        
       
        <button className="enquiry-button">QUICK ENQUIRY</button>
      </div>
    </div>
  );
};

export default WeddingPackages;
