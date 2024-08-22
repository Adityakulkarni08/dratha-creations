import React, { useState, useEffect } from "react";
import birthdaypackages from "../images/bdaypackages.png";
import weddingBudget from "../images/weddingBudget.png";
import weddingElite from "../images/weddingElite.png";
import weddingCeleb from "../images/weddingCeleb.png";
import EnquiryForm from "./SendEnquiry/EnquiryForm";
import EnquiryFormMobile from "./MobileComponents/EnquiryFormMobile";
import "../styles/birthday-packages.css";

const WeddingPackages = () => {
  const [activeTab, setActiveTab] = useState("BUDGET");
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
                food: true,
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
              venueReadMore={["Budget Wedding hall"]}
              decorationReadMore={[
                "Name Board of Bride and Groom",
                "Entrance Decor",
                "Reception Flower Decoration for stage",
                "Muhurtham Flower Decoration for stage",
                "Sofa",
                "Simple Mahandi Decoration",
                "Cake Stand",
                "Welcome Desk With Welcome Girls",
                "Red Carpet Pavement",
              ]}
              foodReadMore={[
                "Breakfast-250 nos",
                "Lunch-100 nos",
                "Evening Snacks -50 nos",
                "Dinner- 400 nos",
              ]}
              PhotographyReadMore={[
                "Pre & Post Wedding Photoshoot",
                "Traditional & Candid Photography",
                "Traditional & Candid Videography",
                "12*36 Two Albums With 600 Images",
                "Full HD Video in Pen drive",
              ]}
              BrideReadMore={[
                "MAC HD Makeup With Hairstyling (Bride & Groom)",
                "Mehandi for Bride",
              ]}
              garlandsReadMore={[
                "Muhurtha Malai-2 Nos",
                "Mathu Malai- 2Nos",
                "Samandhi Malai-4 Nos",
                "Reception Malai-2 Nos",
                "Poochendu-2 Nos",
                "Welcome Roses",
              ]}
              returnGiftsReadMore={["return gifts"]}
              decorativeReadMore={["decorative"]}
              valetReadMore={[false]}
              entertainmentReadMore={[false]}
              invitationReadMore={[false]}
              onReadMoreClick={handleReadMore}
              onQuickEnquiryClick={openEnquiryForm}
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
                food: true,
                photovideo: true,
                lightmusic: true,
                luxurycar: true,
                vrexp: false,
                viphospitality: false,
                familymakeup: true,
                Light: true,
                cake: true, // Enable Cake for Elite package
                dj: true, // Enable DJ for Elite package
              }}
              venueReadMore={["Elite Wedding hall"]}
              decorationReadMore={[
                "Customized Board of Bride and Groom",
                "Elite Mehandi Decoration",
                "Elite Reception Flower Decoration for stage",
                "Elite Muhurtham Flower Decoration for stage",
                "Decoration In theme",
                "Arch with Family name",
                "Diwan Sofa",
                "Welcome Girls With Dress Code",
                "Red Carpet Pavement",
                "Romantic Room Decoration",
              ]}
              foodReadMore={[
                "Breakfast-500 nos",
                "Lunch-300 nos",
                "Evening Snacks -300 nos",
                "Dinner- 750 nos",
              ]}
              PhotographyReadMore={[
                "Pre & Post Wedding Photoshoot",
                "Traditional & Candid Photography",
                "Traditional & Candid Videography",
                "12*36 Two Albums With 600 Images",
                "Full HD Video in Pen drive",
                "Two photo frames",
                "LED Wall",
                "Cinematic video",
              ]}
              BrideReadMore={[
                "Traditional Makeup with hairstyle (matching venni) for muhurtham",
                "Reception makeup and styling by reasoned artists (Bride & Groom)",
                "Mehandi by Professional",
              ]}
              garlandsReadMore={[
                "Muhurtha Malai-2 Nos",
                "Mathu Malai-2 Nos",
                "Samandhi Malai-4 Nos",
                "Reception Malai-2 Nos",
                "Poochendu-2 Nos",
                "Welcome Roses",
              ]}
              returnGiftsReadMore={["Thambulam Bags 250 Nos"]}
              decorativeReadMore={["Traditional Plates (10 Numbers)"]}
              valetReadMore={["Valet Drivers"]}
              entertainmentReadMore={[
                "Mirror Selfie Booth",
                "Portrait Drawing",
                "Mehandi Stall",
                "Bangle Stall",
                "Emcee With Girls",
              ]}
              invitationReadMore={["Printed Invitations (500 Nos)"]}
              onReadMoreClick={handleReadMore}
              onQuickEnquiryClick={openEnquiryForm}
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
                food: true,
                photovideo: true,
                lightmusic: true,
                luxurycar: true,
                vrexp: true,
                viphospitality: true,
                familymakeup: true,
                cake: true, // Include Cake
                dj: true, // Include DJ
              }}
              venueReadMore={["Elite Wedding hall"]}
              decorationReadMore={[
                "Customized Name Board & Enterance",
                "Customized Enterance Arch with Family name",
                "Celebrity Mehandi Decoration",
                "Celebrity Reception Flower Decoration for stage",
                "Celebrity Muhurtham Flower Decoration for stage",
                "Decoration In theme",
                "Diwan Sofa",
                "Welcome Girls With Dress Code",
                "Red Carpet Pavement",
                "Romantic Room Decoration",
              ]}
              foodReadMore={[
                "Breakfast-500 nos",
                "Lunch-300 nos",
                "Evening Snacks -300 nos",
                "Dinner- 1000 nos",
              ]}
              PhotographyReadMore={[
                "Pre & Post Wedding Photoshoot",
                "Traditional & Candid Photography",
                "Traditional & Candid Videography",
                "Led Wall with live streaming",
                "Drone",
                "Crane in outdoor",
                "Cinematic video",
                "12*36 Two Albums With 600 Images",
                "Full HD Video in Pen drive",
                "Best Family Frames",
                "LED display tv",
              ]}
              BrideReadMore={[
                "Traditional Makeup with hairstyle (matching venni) for muhurtham",
                "Reception makeup and styling by reasoned artists (Bride & Groom)",
                "Mehandi By professional",
              ]}
              viphospitalityReadMore={[
                "Welcoming Guest",
                "Seating Assistance",
                "Dinning Assistance",
              ]}
              garlandsReadMore={[
                "Muhurtha Malai-2 Nos",
                "Mathu Malai-2 Nos",
                "Samandhi Malai-4 Nos",
                "Reception Malai-2 Nos",
                "Poochendu-2 Nos",
                "Welcome Roses",
              ]}
              familyMakeupReadMore={["30 members"]}
              invitationReadMore={["Printed Invitations (750 Nos)"]}
              entertainmentReadMore={[
                "Mirror Selfie Booth",
                "Portrait Drawing",
                "Mehandi Stall",
                "Bangle Stall",
                "Emcee With Girls",
              ]}
              valetReadMore={["Valet Drivers"]}
              decorativeReadMore={[
                "Traditional Plates (20 Numbers customized)",
              ]}
              virtualRealityReadMore={["Virtual Reality Experience"]}
              surpriseElementReadMore={["Surprise Element From Homevents"]}
              additionalHeadings={[
                { title: "Mangala Vathiyam" },
                { title: "Bride & Groom Entry" },
                { title: "Customized Return Gifts" },
                { title: "Wedding Cake" },
                { title: "DJ" },
              ]}
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
    BrideReadMore,
    garlandsReadMore,
    familyMakeupReadMore,
    invitationReadMore,
    entertainmentReadMore,
    valetReadMore,
    decorativeReadMore,
    virtualRealityReadMore,
    surpriseElementReadMore,
    inclusions, // This controls sections like Cake and DJ
    additionalHeadings, // Simple headings without content
  } = packageData;

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

          {BrideReadMore && (
            <>
              <h3>Bride & Groom Styling</h3>
              <ul className="custom-list">
                {BrideReadMore.map((item, index) => (
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

          {familyMakeupReadMore && (
            <>
              <h3>Family Makeup</h3>
              <ul className="custom-list">
                {familyMakeupReadMore.map((item, index) => (
                  <li key={index}>
                    <span className="bullet">•</span> {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {valetReadMore && (
            <>
              <h3>Valet Drivers</h3>
              <ul className="custom-list">
                {valetReadMore.map((item, index) => (
                  <li key={index}>
                    <span className="bullet">•</span> {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {virtualRealityReadMore && (
            <>
              <h3>Virtual Reality Experience</h3>
              <ul className="custom-list">
                {virtualRealityReadMore.map((item, index) => (
                  <li key={index}>
                    <span className="bullet">•</span> {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {entertainmentReadMore && (
            <>
              <h3>Entertainment</h3>
              <ul className="custom-list">
                {entertainmentReadMore.map((item, index) => (
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

          {surpriseElementReadMore && (
            <>
              <h3>Surprise Element</h3>
              <ul className="custom-list">
                {surpriseElementReadMore.map((item, index) => (
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
          {inclusions.mangalaVathiyam && <h3>Mangala Vathiyam</h3>}
          {inclusions.brideGroomEntry && <h3>Bride & Groom Entry</h3>}
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
  BrideReadMore,
  decorationReadMore,
  garlandsReadMore,
  returnGiftsReadMore,
  decorativeReadMore,
  valetReadMore,
  entertainmentReadMore,
  invitationReadMore,
  lightMusicReadMore,
  onReadMoreClick,
  onQuickEnquiryClick,
}) => {
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
              BrideReadMore,
              decorationReadMore,
              garlandsReadMore,
              returnGiftsReadMore,
              decorativeReadMore,
              valetReadMore,
              entertainmentReadMore,
              lightMusicReadMore,
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

export default WeddingPackages;
