import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/dropdown.css";
import newbornImage from "../images/birthday.jpg"; // Existing image
import engagement from "../images/engagement.png";
import babyShowerImg from "../images/birthday.jpg"; // Using the same image for demonstration
import houseWarmingImg from "../images/engagement.png"; // Using the same image for demonstration
import birthdayImg from "../images/birthday.jpg"; // Existing image
import engagementImg from "../images/engagement.png"; // Existing image
import {
  faBirthdayCake,
  faHome,
  faRing,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownComponent = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar">
      {!isMobile ? (
        <>
          <div
            className="dropdown"
            onMouseEnter={handleMouseLeave}
            onMouseLeave={handleMouseLeave}
          >
            <button className="dropbtn">New Born</button>
            <div className="dropdown-content centered-dropdown">
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
                      <a href="#">Traditional Photography</a>
                      <a href="#">Candid Photography</a>
                    </div>
                    <img
                      src={newbornImage}
                      alt="Photography"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Cakes")}
                onMouseLeave={handleMouseLeave}
              >
                Food
                {activeSection === "Cakes" && (
                  <div
                    className="dropdown-subcontent"
                    onMouseEnter={() => handleMouseEnter("Cakes")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="dropdown-section">
                      <h3>Food </h3>
                      <a href="#">NOT AVAILABLE</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className="dropdown"
            onMouseEnter={handleMouseLeave}
            onMouseLeave={handleMouseLeave}
          >
            <button className="dropbtn">Baby Shower</button>
            <div className="dropdown-content centered-dropdown">
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Photography")}
                onMouseLeave={handleMouseLeave}
              >
                DECORATIONS
                {activeSection === "Photography" && (
                  <div
                    className="dropdown-subcontent"
                    onMouseEnter={() => handleMouseEnter("Photography")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="dropdown-section">
                      <h3>Decorations</h3>
                      <a href="#">Banquet Hall Decoration</a>
                      <a href="#">Decorations at Home </a>
                      <a href="#">Photo + Album</a>
                      <a href="#">Photo + Album + Video</a>
                    </div>
                    <img
                      src={newbornImage}
                      alt="Photography"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Cakes")}
                onMouseLeave={handleMouseLeave}
              >
                PHOTOGRAPHY
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
                    <img
                      src={birthdayImg}
                      alt="Cakes"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Cakes")}
                onMouseLeave={handleMouseLeave}
              >
                MAKEUP
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
                    <img
                      src={birthdayImg}
                      alt="Cakes"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Entertainment")}
                onMouseLeave={handleMouseLeave}
              >
                MEHNDI
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
                    <img
                      src={birthdayImg}
                      alt="Entertainment"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Cakes")}
                onMouseLeave={handleMouseLeave}
              >
                ENTERTAINMENT
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
                    <img
                      src={birthdayImg}
                      alt="Cakes"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Return Gifts")}
                onMouseLeave={handleMouseLeave}
              >
                RETURN GIFTS
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
                    <img
                      src={birthdayImg}
                      alt="Return Gifts"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Food")}
                onMouseLeave={handleMouseLeave}
              >
                FOOD
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
                    <img
                      src={birthdayImg}
                      alt="Food"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className="dropdown"
            onMouseEnter={handleMouseLeave}
            onMouseLeave={handleMouseLeave}
          >
            <button className="dropbtn">Birthday</button>
            <div className="dropdown-content centered-dropdown">
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Photography")}
                onMouseLeave={handleMouseLeave}
              >
                DECORATIONS
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
                    <img
                      src={newbornImage}
                      alt="Photography"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Cakes")}
                onMouseLeave={handleMouseLeave}
              >
                PHOTOGRAPHY
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
                    <img
                      src={birthdayImg}
                      alt="Cakes"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Entertainment")}
                onMouseLeave={handleMouseLeave}
              >
                CAKES
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
                    <img
                      src={birthdayImg}
                      alt="Entertainment"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Return Gifts")}
                onMouseLeave={handleMouseLeave}
              >
                ENTERTAINMENT
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
                    <img
                      src={birthdayImg}
                      alt="Return Gifts"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Food")}
                onMouseLeave={handleMouseLeave}
              >
                RETURN GIFTS
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
                    <img
                      src={birthdayImg}
                      alt="Food"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Food")}
                onMouseLeave={handleMouseLeave}
              >
                FOOD
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
                    <img
                      src={birthdayImg}
                      alt="Food"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className="dropdown"
            onMouseEnter={handleMouseLeave}
            onMouseLeave={handleMouseLeave}
          >
            <button className="dropbtn">House Warming</button>
            <div className="dropdown-content centered-dropdown">
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Photography")}
                onMouseLeave={handleMouseLeave}
              >
                DECORATIONS
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
                    <img
                      src={newbornImage}
                      alt="Photography"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Cakes")}
                onMouseLeave={handleMouseLeave}
              >
                PHOTOGRAPHY
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
                    <img
                      src={birthdayImg}
                      alt="Cakes"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Entertainment")}
                onMouseLeave={handleMouseLeave}
              >
                ENTERTAINMENT
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
                    <img
                      src={birthdayImg}
                      alt="Entertainment"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Return Gifts")}
                onMouseLeave={handleMouseLeave}
              >
                RETURN GIFTS
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
                    <img
                      src={birthdayImg}
                      alt="Return Gifts"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Food")}
                onMouseLeave={handleMouseLeave}
              >
                FOOD
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
                    <img
                      src={birthdayImg}
                      alt="Food"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className="dropdown"
            onMouseEnter={handleMouseLeave}
            onMouseLeave={handleMouseLeave}
          >
            <button className="dropbtn">Engagement</button>
            <div className="dropdown-content centered-dropdown">
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Photography")}
                onMouseLeave={handleMouseLeave}
              >
                DECORATIONS
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
                    <img
                      src={newbornImage}
                      alt="Photography"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Cakes")}
                onMouseLeave={handleMouseLeave}
              >
                PHOTOGRAPHY
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
                    <img
                      src={birthdayImg}
                      alt="Cakes"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Entertainment")}
                onMouseLeave={handleMouseLeave}
              >
                MAKEUP
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
                    <img
                      src={birthdayImg}
                      alt="Entertainment"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Return Gifts")}
                onMouseLeave={handleMouseLeave}
              >
                ENTERTAINMENT
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
                    <img
                      src={birthdayImg}
                      alt="Return Gifts"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Food")}
                onMouseLeave={handleMouseLeave}
              >
                RETURN GIFTS
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
                    <img
                      src={birthdayImg}
                      alt="Food"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Food")}
                onMouseLeave={handleMouseLeave}
              >
                FOOD
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
                    <img
                      src={birthdayImg}
                      alt="Food"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className="dropdown"
            onMouseEnter={handleMouseLeave}
            onMouseLeave={handleMouseLeave}
          >
            <button className="dropbtn">Wedding</button>
            <div className="dropdown-content centered-dropdown">
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Photography")}
                onMouseLeave={handleMouseLeave}
              >
                DECORATIONS
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
                    <img
                      src={newbornImage}
                      alt="Photography"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Cakes")}
                onMouseLeave={handleMouseLeave}
              >
                PHOTOGRAPHY
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
                    <img
                      src={birthdayImg}
                      alt="Cakes"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Entertainment")}
                onMouseLeave={handleMouseLeave}
              >
                CAKES
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
                    <img
                      src={birthdayImg}
                      alt="Entertainment"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Return Gifts")}
                onMouseLeave={handleMouseLeave}
              >
                MAKEUP
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
                    <img
                      src={birthdayImg}
                      alt="Return Gifts"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Food")}
                onMouseLeave={handleMouseLeave}
              >
                MEHNDI
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
                    <img
                      src={birthdayImg}
                      alt="Food"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Food")}
                onMouseLeave={handleMouseLeave}
              >
                ENTERTAINMENT
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
                    <img
                      src={birthdayImg}
                      alt="Food"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Food")}
                onMouseLeave={handleMouseLeave}
              >
                RETURN GIFTS
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
                    <img
                      src={birthdayImg}
                      alt="Food"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Food")}
                onMouseLeave={handleMouseLeave}
              >
                FOOD
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
                    <img
                      src={birthdayImg}
                      alt="Food"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className="dropdown"
            onMouseEnter={handleMouseLeave}
            onMouseLeave={handleMouseLeave}
          >
            <button className="dropbtn">Puberty</button>
            <div className="dropdown-content centered-dropdown">
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Photography")}
                onMouseLeave={handleMouseLeave}
              >
                DECORATIONS
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
                    <img
                      src={newbornImage}
                      alt="Photography"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Cakes")}
                onMouseLeave={handleMouseLeave}
              >
                PHOTOGRAPHY
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
                    <img
                      src={birthdayImg}
                      alt="Cakes"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Entertainment")}
                onMouseLeave={handleMouseLeave}
              >
                MAKEUP
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
                    <img
                      src={birthdayImg}
                      alt="Entertainment"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Return Gifts")}
                onMouseLeave={handleMouseLeave}
              >
                MEHNDI
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
                    <img
                      src={birthdayImg}
                      alt="Return Gifts"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Food")}
                onMouseLeave={handleMouseLeave}
              >
                ENTERTAINMENT
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
                    <img
                      src={birthdayImg}
                      alt="Food"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Cakes")}
                onMouseLeave={handleMouseLeave}
              >
                RETURN GIFTS
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
                    <img
                      src={birthdayImg}
                      alt="Cakes"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Cakes")}
                onMouseLeave={handleMouseLeave}
              >
                FOOD
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
                    <img
                      src={birthdayImg}
                      alt="Cakes"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className="dropdown"
            onMouseEnter={handleMouseLeave}
            onMouseLeave={handleMouseLeave}
          >
            <button className="dropbtn">Surprise Party</button>
            <div className="dropdown-content centered-dropdown">
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Photography")}
                onMouseLeave={handleMouseLeave}
              >
                DECORATIONS
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
                    <img
                      src={newbornImage}
                      alt="Photography"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("Cakes")}
                onMouseLeave={handleMouseLeave}
              >
                FOOD
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
                    <img
                      src={birthdayImg}
                      alt="Cakes"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="packages-dropdown">
            <button className="dropbtn packages-btn">
              <span>Packages</span>
            </button>
            <div className="dropdown-content">
              <div className="first-section">
                <h2>Select Your Packages</h2>
                <p>
                  Curated event packages from the best event planners in the
                  city for every occasion and every budget. Select from fixed
                  packages in a range of budgets and volume of people for the
                  fastest way to bring your celebration to life.
                </p>
                <button className="enquiry-button">Quick Enquiry</button>
              </div>
              <div className="second-section">
                <div className="package-item">
                  <Link to="/birthday-package" className="icon-wrapper">
                    <FontAwesomeIcon icon={faBirthdayCake} />
                  </Link>
                  <h3>Birthday Packages</h3>
                </div>
                <div className="package-item">
                  <Link to="/housewarming-package" className="icon-wrapper">
                    <FontAwesomeIcon icon={faHome} />
                  </Link>
                  <h3>Housewarming Packages</h3>
                </div>
                <div className="package-item">
                  <Link to="/wedding-package" className="icon-wrapper">
                    <FontAwesomeIcon icon={faRing} />
                  </Link>
                  <h3>Wedding Packages</h3>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="mobile-menu">
          <Link to="/new-born" className="menu-item">
            <img src={newbornImage} alt="New Born" />
            <span>NEW BORN</span>
          </Link>
          <Link to="/baby-shower" className="menu-item">
            <img src={babyShowerImg} alt="Baby Shower" />
            <span>BABY SHOWER</span>
          </Link>
          <Link to="/birthday" className="menu-item">
            <img src={birthdayImg} alt="Birthday" />
            <span>BIRTHDAY</span>
          </Link>
          <Link to="/house-warming" className="menu-item">
            <img src={houseWarmingImg} alt="House Warming" />
            <span>HOUSE WARMING</span>
          </Link>
          <Link to="/engagement" className="menu-item">
            <img src={engagementImg} alt="Engagement" />
            <span>ENGAGEMENT</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;
