import React, { useState } from "react";
import birthdaypackages from "../images/bdaypackages.png";
import birthdayBasicPro from "../images/birthdayBasicPro.png";
import birthdayBasicPremium from "../images/birthdayBasicPremium.png";
import birthdayEliteBasic from "../images/birthdayEliteBasic.png";
import birthdayElitePro from "../images/birthdayElitePro.png";
import birthdayElitePremium from "../images/birthdayElitePremium.png";
import birthdayCelebBasic from "../images/birthdayCelebBasic.png";
import birthdayCelebPro from "../images/birthdayCelebPro.png";
import birthdayCelebPremium from "../images/birthdayCelebPremium.png";
import EnquiryForm from "./SendEnquiry/EnquiryForm";
import "../styles/birthday-packages.css";

const BirthdayPackages = () => {
  const [activeTab, setActiveTab] = useState("BUDGET");
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isEnquiryFormOpen, setEnquiryFormOpen] = useState(false); // Manage the modal state

  const handleReadMore = (packageData) => {
    setSelectedPackage(packageData); // Set the package data to be shown in the modal
  };

  const closeModal = () => {
    setSelectedPackage(null); // Close the modal
  };

  const openEnquiryForm = () => {
    setEnquiryFormOpen(true); // Open the enquiry form
  };

  const closeEnquiryForm = () => {
    setEnquiryFormOpen(false); // Close the enquiry form
  };

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
              readMoreDetails={[
                "Back Drop Decoration",
                "Entrance Arch",
                "Welcome Board",
                "1 Feet Baby name light",
                "Balloon Bunches in the hall (if allowed at venue)",
                "Theme Based Cylinder Table",
                "Cake Table Decoration",
                "Cup Cake Stand",
                "Cake Stand",
              ]}
              onReadMoreClick={handleReadMore}
              onQuickEnquiryClick={openEnquiryForm}
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
              readMoreDetails={[
                "Back Drop Decoration",
                "Entrance Arch",
                "Welcome Board",
                "1 Feet Baby name light",
                "Balloon Bunches in the hall (if allowed at venue)",
                "Theme Based Cylinder Table",
                "Cup Cake Stand",
                "Cake Stand",
                "Photography (One photographer for Traditional & Candid)",
              ]}
              onReadMoreClick={handleReadMore}
              onQuickEnquiryClick={openEnquiryForm}

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
              readMoreDetails={[
                "Back Drop Decoration",
                "Entrance Arch",
                "Welcome Board",
                "1 Feet Baby name light",
                "Balloon Bunches in the hall (if allowed at venue)",
                "Theme Based Cylinder Table",
                "Cup Cake Stand",
                "Cake Stand",
                "Photography (One photographer for Traditional & Candid)",
                "Cake (3kgs)",
                "Baby Entry",
                "Mascot",
              ]}
              onReadMoreClick={handleReadMore}
              onQuickEnquiryClick={openEnquiryForm}

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
              readMoreDetails={[
                "Theme Decoration(Standard Theme only)",
                "Enterance Arch",
                "Welcome Board",
                "Baby Milestone Board",
                "Photo collage frame(Photos Should be given by Customer)",
                "2 Feet Baby Name LED Light - Max 8 letters",
                "Balloons Bunches in the Hall (If Allowed at Venue)",
                "Theme Based Cylinder Table",
                "Cup Cake Stand & Cake Stand",
                "E invite",
                "Stick Balloons (30 Nos)",
              ]}
              onReadMoreClick={handleReadMore}
              onQuickEnquiryClick={openEnquiryForm}

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
              readMoreDetails={[
                "Theme Decoration(Standard Theme only)",
                "Enterance Arch",
                "Welcome Board",
                "Baby Milestone Board",
                "Photo collage frame(Photos Should be given by Customer)",
                "2 Feet Baby Name LED Light - Max 8 letters",
                "Balloons Bunches in the Hall (If Allowed at Venue)",
                "Theme Based Cylinder Table",
                "Cup Cake Stand & Cake Stand",
                "E invite",
                "Stick Balloons (30 Nos)",
                "Photography (One photographer for Traditional & Candid + 5 minutes video with Event Photos)",
                "Cake(3kgs)",
                "Return Gifts (Default Gifts Maximum quantity of 25 Nos & extra at cost)",
              ]}
              onReadMoreClick={handleReadMore}
              onQuickEnquiryClick={openEnquiryForm}

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
              readMoreDetails={[
                "Theme Decoration(Standard Theme only)",
                "Enterance Arch",
                "Welcome Board",
                "Baby Milestone Board",
                "Photo collage frame(Photos Should be given by Customer)",
                "2 Feet Baby Name LED Light - Max 8 letters",
                "Balloons Bunches in the Hall (If Allowed at Venue)",
                "Theme Based Cylinder Table",
                "Cup Cake Stand",
                "Cake Stand",
                "E invite",
                "Stick Balloons - 30 Nos",
                "Photography (One photographer for Traditional & Candid + 5 minutes video with Event Photos)",
                "Cake (4.5kgs)",
                "Return Gifts (Default Gifts Maximum quantity of 35 Nos & extra at cost)",
                "Mascot",
                "DJ",
              ]}
              onReadMoreClick={handleReadMore}
              onQuickEnquiryClick={openEnquiryForm}

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
              readMoreDetails={[
                "Customize Back Drop Decor",
                "Theme Based Floor Mat",
                "Enterance Arch",
                "Welcome Board",
                "Photo Booth With Balloon Standee",
                "Photo collage frame(Photos Should be given by Customer)",
                "Balloons Standees - 2 Nos with foam Image",
                "2 Feet Baby Name LED Light - Max 8 letters",
                "Balloons Bunches in the Hall (If Allowed at Venue)",
                "Theme based cylinder table",
                "Cup Cake Stand",
                "Cake Stand",
                "Party accessories",
                "E-invite",
                "Baby Milestone Board",
              ]}
              onReadMoreClick={handleReadMore}
              onQuickEnquiryClick={openEnquiryForm}

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
              readMoreDetails={[
                "Customize Back Drop Decor",
                "Theme Based Floor Mat",
                "Enterance Arch",
                "Welcome Board",
                "Photo Booth With Balloon Standee",
                "Photo collage frame(Photos Should be given by Customer)",
                "Balloons Standees - 2 Nos with foam Image",
                "2 Feet Baby Name LED Light - Max 8 letters",
                "Balloons Bunches in the Hall (If Allowed at Venue)",
                "Theme based cylinder table",
                "Cup Cake Stand",
                "Cake Stand",
                "Baby Milestone Board",
                "E-invite",
                "1 Min Birthday Teaser with given Photos of baby",
                "Photography & Videography (One Traditional & one Candid Photographer+ One Candid Videographer + 5 minutes video)",
                "Cake (5kg)",
                "Return Gifts (Default Gifts will Come Maximum Quantity is 50 Nos and Extra at Cost)",
                "Mascot",
                "DJ(single Base and Single Top)",
                "Party accessories",
              ]}
              onReadMoreClick={handleReadMore}
              onQuickEnquiryClick={openEnquiryForm}

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
              readMoreDetails={[
                "Back Drop Decoration",
                "Enterance Arch",
                "Welcome Board",
                "1 Feet Baby name light",
                "Balloon Bunches in the hall (if allowed at venue)",
                "Theme Based Cylinder Table",
                "Cup Cake Stand",
                "Cake Stand",
                "Photography (One photographer for Traditional & Candid)",
                "Cake (3kgs)",
                "Baby Entry",
                "Mascot",
              ]}
              onReadMoreClick={handleReadMore}
              onQuickEnquiryClick={openEnquiryForm}

            />{" "}
          </>
        )}
      </div>
      {isEnquiryFormOpen && <EnquiryForm onClose={closeEnquiryForm} />}

      {selectedPackage && (
        <Modal packageData={selectedPackage} onClose={closeModal} />
      )}
    </div>
  );
};

const Modal = ({ packageData, onClose }) => {
  const { title, image, details, inclusions, readMoreDetails } = packageData;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="modal-image">
          <img src={image} alt={title} />
          <button className="quick-enquiry-button">QUICK ENQUIRY</button>
        </div>
        <div className="modal-details">
          <h2>{title}</h2>
          <div className="read-more-details">
            <h3>More Information</h3>
            <ul className="custom-list">
              {readMoreDetails.map((item, index) => (
                <li key={index}>
                  <span className="bullet">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const PackageSection = ({
  title,
  image,
  details,
  inclusions,
  readMoreDetails,
  onReadMoreClick,
  onQuickEnquiryClick,
}) => {
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

  // When the "Read More" button is clicked, call onReadMoreClick with package data
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
        <a
          href="#"
          className="read-more"
          onClick={(e) => {
            e.preventDefault(); // Prevent the default anchor link behavior
            onReadMoreClick({
              title,
              image,
              details,
              inclusions,
              readMoreDetails,
            });
          }}
        >
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
        <button
          className="enquiry-button"
          onClick={onQuickEnquiryClick} // Trigger the enquiry form
        >
          QUICK ENQUIRY
        </button>{" "}
      </div>
    </div>
  );
};

export default BirthdayPackages;
