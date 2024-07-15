import React, { useState, useRef } from "react";
import "../styles/dropdown.css";
import newbornImage from "../images/birthday.jpg"; // Import the image
import engagement from "../images/engagement.png";

const DropdownComponent = () => {
  const [activeSection, setActiveSection] = useState(null);
  const hideTimeout = useRef(null);

  const handleMouseEnter = (section) => {
    clearTimeout(hideTimeout.current);
    setActiveSection(section);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setActiveSection(null);
    }, 300); // 300ms delay before hiding
  };

  return (
    <div className="navbar">
      <div
        className="dropdown"
        onMouseEnter={handleMouseLeave}
        onMouseLeave={handleMouseLeave}
      >
        <button className="dropbtn">Decorations</button>
        <div className="dropdown-content">
          <div
            className="dropdown-item"
            onMouseEnter={() => handleMouseEnter("Photography")}
            onMouseLeave={handleMouseLeave}
          >
            Photography
            {activeSection === "Photography" && (
              <div
                className="dropdown-subcontent"
                onMouseEnter={() => handleMouseEnter("Photography")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="dropdown-section">
                  <h3>Photography</h3>
                  <a href="#">New Born Photo Shoot</a>
                  <a href="#">Digital Photography</a>
                  <a href="#">Photo + Album</a>
                  <a href="#">Photo + Album + Video</a>
                </div>
                <img src={newbornImage} alt="Photography" className="dropdown-image" />
              </div>
            )}
          </div>
          <div
            className="dropdown-item"
            onMouseEnter={() => handleMouseEnter("Cakes")}
            onMouseLeave={handleMouseLeave}
          >
            Cakes
            {activeSection === "Cakes" && (
              <div
                className="dropdown-subcontent"
                onMouseEnter={() => handleMouseEnter("Cakes")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="dropdown-section">
                  <h3>Cakes</h3>
                  <a href="#">Birthday Cakes</a>
                  <a href="#">Wedding Cakes</a>
                  <a href="#">Custom Cakes</a>
                </div>
                <img src={newbornImage} alt="Cakes" className="dropdown-image" />
              </div>
            )}
          </div>
          <div
            className="dropdown-item"
            onMouseEnter={() => handleMouseEnter("Entertainment")}
            onMouseLeave={handleMouseLeave}
          >
            Entertainment
            {activeSection === "Entertainment" && (
              <div
                className="dropdown-subcontent"
                onMouseEnter={() => handleMouseEnter("Entertainment")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="dropdown-section">
                  <h3>Entertainment</h3>
                  <a href="#">Magicians</a>
                  <a href="#">Clowns</a>
                  <a href="#">Live Bands</a>
                </div>
                <img src={newbornImage} alt="Entertainment" className="dropdown-image" />
              </div>
            )}
          </div>
          <div
            className="dropdown-item"
            onMouseEnter={() => handleMouseEnter("Return Gifts")}
            onMouseLeave={handleMouseLeave}
          >
            Return Gifts
            {activeSection === "Return Gifts" && (
              <div
                className="dropdown-subcontent"
                onMouseEnter={() => handleMouseEnter("Return Gifts")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="dropdown-section">
                  <h3>Return Gifts</h3>
                  <a href="#">Toys</a>
                  <a href="#">Books</a>
                  <a href="#">Gift Cards</a>
                </div>
                <img src={newbornImage} alt="Return Gifts" className="dropdown-image" />
              </div>
            )}
          </div>
          <div
            className="dropdown-item"
            onMouseEnter={() => handleMouseEnter("Food")}
            onMouseLeave={handleMouseLeave}
          >
            Food
            {activeSection === "Food" && (
              <div
                className="dropdown-subcontent"
                onMouseEnter={() => handleMouseEnter("Food")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="dropdown-section">
                  <h3>Food</h3>
                  <a href="#">Catering Options</a>
                  <a href="#">Custom Menu Designs</a>
                  <a href="#">Buffet Setups</a>
                  <a href="#">Full-Service Dining</a>
                </div>
                <img src={newbornImage} alt="Food" className="dropdown-image" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="dropdown right-end">
        <button className="dropbtn">
          <span>Packages</span>
        </button>
        <div className="dropdown-content">
          <div className="dropdown-item">
            <img src={engagement} alt="Birthday Packages" />
            <h3>Birthday Packages</h3>
            <p>Curated event packages from the best event planners.</p>
          </div>
          <div className="dropdown-item">
            <img src={engagement} alt="Housewarming Packages" />
            <h3>Housewarming Packages</h3>
            <p>Curated event packages from the best event planners.</p>
          </div>
          <div className="dropdown-item">
            <img src={engagement} alt="Wedding Packages" />
            <h3>Wedding Packages</h3>
            <p>Curated event packages from the best event planners.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownComponent;
