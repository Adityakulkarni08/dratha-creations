import React, { useState, useEffect } from "react";
import birthdaypackages from "../images/bdaypackages.png";
import houseWarmBasic from "../images/houseWarmBasic.png";
import houseWarmBudget from "../images/houseWarmBudget.png";
import houseWarmElite from "../images/houseWarmElite.png";
import houseWarmCeleb from "../images/houseWarmCeleb.png";
import EnquiryForm from "./SendEnquiry/EnquiryForm";
import EnquiryFormMobile from "./MobileComponents/EnquiryFormMobile";
import "../styles/birthday-packages.css";

const HousewarmingPackages = () => {
  const [activeTab, setActiveTab] = useState("BASIC");
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isEnquiryFormOpen, setEnquiryFormOpen] = useState(false); // Manage the modal state
  const [isMobileView, setIsMobileView] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Detect mobile view
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              decorationReadMore={[
                "Welcome Board",
                "Entrance Decoration",
                "Main Entrance Decoration",
                "Simple Full House Decoration",
              ]}
              garlandsReadMore={[
                "Vasakal Malai",
                "Kazhuthu Malai",
                "Extra Malai",
                "Extra Flowers",
              ]}
              PhotographyReadMore={[
                "Traditional & Candid Photography",
                "Album With 120 Images",
              ]}
              returnGiftsReadMore={["Thambulam Bags 50Nos"]}
              onReadMoreClick={handleReadMore}
              onQuickEnquiryClick={openEnquiryForm}
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
              decorationReadMore={[
                "Welcome Board",
                "Entrance Decoration",
                "Main Entrance Decoration",
                "Simple Full House Decoration",
                "Simple Tent",
                "Table 10 Nos",
                "Chairs 50 Nos",
              ]}
              garlandsReadMore={[
                "Vasakal Malai",
                "Kazhuthu Malai",
                "Extra Malai",
                "Extra Flowers",
              ]}
              foodReadMore={["Breakfast- 50 Nos", "Lunch- 25 Nos"]}
              PhotographyReadMore={[
                "Traditional & Candid Photography",
                "Album With 120 Images",
              ]}
              returnGiftsReadMore={["Thambulam Bags 50Nos"]}
              invitationReadMore={["Printed 75 Nos"]}
              onReadMoreClick={handleReadMore}
              onQuickEnquiryClick={openEnquiryForm}

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
              decorationReadMore={[
                "Welcome Board",
                "Entrance Decoration",
                "Main Entrance Decoration",
                "Simple Full House Decoration",
                "Simple Tent",
                "Table 20 Nos",
                "Chairs 100 Nos",
              ]}
              garlandsReadMore={[
                "Vasakal Malai",
                "Kazhuthu Malai",
                "Extra Malai",
                "Extra Flowers",
              ]}
              foodReadMore={["Breakfast- 75 Nos", "Lunch- 35 Nos"]}
              PhotographyReadMore={[
                "Traditional & Candid Photography",
                "Videography",
                "Family Frame",
                "Album With 120 Images + Full HD Video in Pendrive",
              ]}
              returnGiftsReadMore={["Thambulam Bags 75 Nos"]}
              invitationReadMore={["Printed 100 Nos"]}
              onReadMoreClick={handleReadMore}
              onQuickEnquiryClick={openEnquiryForm}

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
                priest: true,
                price: "₹2,49,999",
              }}
              decorationReadMore={[
                "Welcome Board",
                "Entrance Decoration",
                "Main Entrance Decoration",
                "Celebrity Full House Decoration",
                "Arabian Tent",
                "Table 20 Nos",
                "Chairs 150 Nos",
              ]}
              garlandsReadMore={[
                "Vasakal Malai",
                "Kazhuthu Malai",
                "Extra Malai",
                "Extra Flowers",
              ]}
              foodReadMore={["Breakfast- 100 Nos", "Lunch- 50 Nos"]}
              PhotographyReadMore={[
                "Traditional & Candid Photography",
                "Videography",
                "Family Frame",
                "Album With 120 Images + Full HD Video in Pendrive",
              ]}
              returnGiftsReadMore={["Thambulam Bags 100Nos"]}
              invitationReadMore={["Printed 150 Nos"]}
              onReadMoreClick={handleReadMore}
              onQuickEnquiryClick={openEnquiryForm}

            />
          </>
        )}
      </div>

      {isEnquiryFormOpen &&
        (isMobileView ? (
          <EnquiryFormMobile onClose={closeEnquiryForm} />
        ) : (
          <EnquiryForm onClose={closeEnquiryForm} />
        ))}

      {selectedPackage && (
        <Modal packageData={selectedPackage} onClose={closeModal} />
      )}
    </div>
  );
};

const Modal = ({ packageData, onClose }) => {
  const {
    title,
    image,
    venueReadMore,
    decorationReadMore,
    foodReadMore,
    PhotographyReadMore,
    garlandsReadMore,
    returnGiftsReadMore,
    invitationReadMore,
    inclusions,
  } = packageData;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2 className="modal-title">{title}</h2>
        <div className="modal-body">
          <div className="modal-image">
            <img src={image} alt={title} />
            <button className="quick-enquiry-button">QUICK ENQUIRY</button>
          </div>
          <div className="modal-details">
            {venueReadMore && (
              <>
                <h3>Venue</h3>
                <ul className="custom-list">
                  {venueReadMore.map((item, index) => (
                    <li key={index}>
                      <span className="bullet">•</span> {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {decorationReadMore && (
              <>
                <h3>Decoration</h3>
                <ul className="custom-list">
                  {decorationReadMore.map((item, index) => (
                    <li key={index}>
                      <span className="bullet">•</span> {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {foodReadMore && (
              <>
                <h3>Food</h3>
                <ul className="custom-list">
                  {foodReadMore.map((item, index) => (
                    <li key={index}>
                      <span className="bullet">•</span> {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {PhotographyReadMore && (
              <>
                <h3>Photography</h3>
                <ul className="custom-list">
                  {PhotographyReadMore.map((item, index) => (
                    <li key={index}>
                      <span className="bullet">•</span> {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {garlandsReadMore && (
              <>
                <h3>Garlands</h3>
                <ul className="custom-list">
                  {garlandsReadMore.map((item, index) => (
                    <li key={index}>
                      <span className="bullet">•</span> {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {returnGiftsReadMore && (
              <>
                <h3>Return Gifts</h3>
                <ul className="custom-list">
                  {returnGiftsReadMore.map((item, index) => (
                    <li key={index}>
                      <span className="bullet">•</span> {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {invitationReadMore && (
              <>
                <h3>Invitations</h3>
                <ul className="custom-list">
                  {invitationReadMore.map((item, index) => (
                    <li key={index}>
                      <span className="bullet">•</span> {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Render conditional sections based on inclusions */}
            {inclusions.cake && <h3>Wedding Cake</h3>}
            {inclusions.dj && <h3>DJ</h3>}
            {inclusions.priest && <h3>Priest</h3>}
            {inclusions.mangalaVathiyam && <h3>Mangala Vathiyam</h3>}
            {inclusions.brideGroomEntry && <h3>Bride & Groom Entry</h3>}
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
  venueReadMore,
  foodReadMore,
  PhotographyReadMore,
  decorationReadMore,
  garlandsReadMore,
  returnGiftsReadMore,
  invitationReadMore,
  onReadMoreClick,
  onQuickEnquiryClick,
}) => {
  const {
    decoration,
    venue,
    food,
    photography,
    garlands,
    PriestNos,
    returngift,
    invitations,
    price,
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
              venueReadMore,
              foodReadMore,
              PhotographyReadMore,
              decorationReadMore,
              garlandsReadMore,
              returnGiftsReadMore,
              invitationReadMore,
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
        <p>
          <span className={garlands ? "included" : "not-included"}>
            {garlands ? "✓" : "x"}
          </span>{" "}
          Garlands
        </p>
        <p>
          <span className={food ? "included" : "not-included"}>
            {food ? "✓" : "x"}
          </span>{" "}
          Food
        </p>
        <p>
          <span className={PriestNos ? "included" : "not-included"}>
            {PriestNos ? "✓" : "x"}
          </span>{" "}
          Priest- 1 Nos
        </p>
        <p>
          <span className={returngift ? "included" : "not-included"}>
            {returngift ? "✓" : "x"}
          </span>{" "}
          Return Gift
        </p>
        <p>
          <span className={invitations ? "included" : "not-included"}>
            {invitations ? "✓" : "x"}
          </span>{" "}
          Invitations
        </p>
        <p className="price">
          starts from <span className="discounted-price">{price}</span>
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

export default HousewarmingPackages;
