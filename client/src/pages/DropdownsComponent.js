import React, { useState } from "react";
import "../styles/dropdown.css";
import newbornImage from "../images/birthday.jpg"; // Import the image

const DropdownComponent = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleMouseEnter = (section) => {
    setActiveSection(section);
  };

  const handleMouseLeave = () => {
    setActiveSection(null);
  };

  return (
    <div className="navbar" onMouseLeave={handleMouseLeave}>
      <div className="dropdown">
        <button className="dropbtn">Decorations</button>
        <div className="dropdown-content">
          <div
            className="dropdown-item"
            onMouseEnter={() => handleMouseEnter("Photography")}
            onMouseLeave={handleMouseLeave}
          >
            Photography
            {activeSection === "Photography" && (
              <div className="dropdown-subcontent">
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
              <div className="dropdown-subcontent">
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
              <div className="dropdown-subcontent">
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
              <div className="dropdown-subcontent">
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
              <div className="dropdown-subcontent">
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
    </div>
  );
};

export default DropdownComponent;
