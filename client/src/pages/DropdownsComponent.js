import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/dropdown.css";
import newbornImage from "../images/birthday.jpg";
import engagement from "../images/engagement.png";
import babyShowerImg from "../images/birthday.jpg";
import houseWarmingImg from "../images/engagement.png";
import birthdayImg from "../images/birthday.jpg";
import engagementImg from "../images/engagement.png";
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
    }, 300);
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
                onMouseEnter={() => handleMouseEnter("NewBornPhotography")}
                onMouseLeave={handleMouseLeave}
              >
                Photography
                {activeSection === "NewBornPhotography" && (
                  <div className="dropdown-subcontent">
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
                onMouseEnter={() => handleMouseEnter("NewBornFood")}
                onMouseLeave={handleMouseLeave}
              >
                Food
                {activeSection === "NewBornFood" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Food</h3>
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
                onMouseEnter={() => handleMouseEnter("BabyShowerDecorations")}
                onMouseLeave={handleMouseLeave}
              >
                Decorations
                {activeSection === "BabyShowerDecorations" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Decorations</h3>
                      <a href="#">Banquet Hall Decoration</a>
                      <a href="#">Decorations at Home</a>
                      <h4>Garlands</h4>
                    </div>
                    <img
                      src={babyShowerImg}
                      alt="Decorations"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("BabyShowerPhotography")}
                onMouseLeave={handleMouseLeave}
              >
                Photography
                {activeSection === "BabyShowerPhotography" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Photography</h3>
                      <a href="#">Traditional Photography</a>
                      <a href="#">Candid Photography</a>
                    </div>
                    <img
                      src={birthdayImg}
                      alt="Photography"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("BabyShowerMakeup")}
                onMouseLeave={handleMouseLeave}
              >
                Makeup
                {activeSection === "BabyShowerMakeup" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Makeup</h3>
                      <a href="#">Traditional Makeup</a>
                      <a href="#">HD Makeup</a>
                    </div>
                    <img
                      src={birthdayImg}
                      alt="Makeup"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("BabyShowerMehndi")}
                onMouseLeave={handleMouseLeave}
              >
                Mehndi
                {activeSection === "BabyShowerMehndi" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Mehndi</h3>
                      <a href="#">Traditional Designs</a>
                      <a href="#">Rajasthani Designs</a>
                      <a href="#">Other Designs</a>
                    </div>
                    <img
                      src={birthdayImg}
                      alt="Mehndi"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("BabyShowerEntertainment")}
                onMouseLeave={handleMouseLeave}
              >
                Entertainment
                {activeSection === "BabyShowerEntertainment" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Entertainment</h3>
                      <a href="#">NOT AVAILABLE</a>
                      
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
                onMouseEnter={() => handleMouseEnter("BabyShowerReturnGifts")}
                onMouseLeave={handleMouseLeave}
              >
                Return Gifts
                {activeSection === "BabyShowerReturnGifts" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Return Gifts</h3>
                      <a href="#">Traditional Gifts</a>
                      <a href="#">Fancy Gifts</a>
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
                onMouseEnter={() => handleMouseEnter("BabyShowerFood")}
                onMouseLeave={handleMouseLeave}
              >
                Food
                {activeSection === "BabyShowerFood" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Food</h3>
                      <a href="#">NOT AVAILABLE</a>
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
                onMouseEnter={() => handleMouseEnter("BirthdayDecorations")}
                onMouseLeave={handleMouseLeave}
              >
                Decorations
                {activeSection === "BirthdayDecorations" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Baloon Decorations</h3>
                      <a href="#">Simple Baloon Decorations</a>
                      <a href="#">Terrace Baloon Decorations</a>
                      <h4>Theme Decorations</h4>
                      <a href="#">Cocomelon Theme</a>
                      <a href="#">Butterfly Theme</a>
                      <a href="#">Boss Baby Theme</a>
                      <a href="#">King Crown Theme</a>
                      <a href="#">More</a>
                    </div>
                    <img
                      src={newbornImage}
                      alt="Decorations"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("BirthdayPhotography")}
                onMouseLeave={handleMouseLeave}
              >
                Photography
                {activeSection === "BirthdayPhotography" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Photography</h3>
                      <a href="#">Traditional Photography</a>
                      <a href="#">Candid Photography</a>
                    </div>
                    <img
                      src={birthdayImg}
                      alt="Photography"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("BirthdayCakes")}
                onMouseLeave={handleMouseLeave}
              >
                Cakes
                {activeSection === "BirthdayCakes" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Theme Birthday Cakes</h3>
                      <a href="#">Barbie Theme</a>
                      <a href="#">Boss Baby Theme</a>
                      <a href="#">Cocomelon Theme</a>
                      <a href="#">Fairy Theme</a>
                      <a href="#">More</a>
                      <h3>Assorted Birthday Cakes</h3>
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
                onMouseEnter={() => handleMouseEnter("BirthdayEntertainment")}
                onMouseLeave={handleMouseLeave}
              >
                Entertainment
                {activeSection === "BirthdayEntertainment" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Entertainment</h3>
                      <a href="#">Indoor</a>
                      <a href="#">Outdoor</a>
                      <a href="#">Baby Entry</a>
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
                onMouseEnter={() => handleMouseEnter("BirthdayReturnGifts")}
                onMouseLeave={handleMouseLeave}
              >
                Return Gifts
                {activeSection === "BirthdayReturnGifts" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Return Gifts</h3>
                      <a href="#">Traditional Gifts</a>
                      <a href="#">Fancy Gifts</a>
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
                onMouseEnter={() => handleMouseEnter("BirthdayFood")}
                onMouseLeave={handleMouseLeave}
              >
                Food
                {activeSection === "BirthdayFood" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Vegetarian</h3>
                      <a href="#">Breakfast</a>
                      <a href="#">Lunch</a>
                      <a href="#">Dinner</a>
                      <h4>Non-Vegetarian</h4>
                      <a href="#">Lunch</a>
                      <a href="#">Dinner</a>
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
                onMouseEnter={() => handleMouseEnter("HouseWarmingDecorations")}
                onMouseLeave={handleMouseLeave}
              >
                Decorations
                {activeSection === "HouseWarmingDecorations" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h4>Decorations</h4>
                      <h4>Garlands</h4>
                    </div>
                    <img
                      src={houseWarmingImg}
                      alt="Decorations"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("HouseWarmingPhotography")}
                onMouseLeave={handleMouseLeave}
              >
                Photography
                {activeSection === "HouseWarmingPhotography" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Photography</h3>
                      <a href="#">Traditional Photography</a>
                      <a href="#">Candid Photography</a>
                    </div>
                    <img
                      src={birthdayImg}
                      alt="Photography"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("HouseWarmingCakes")}
                onMouseLeave={handleMouseLeave}
              >
                Entertainment
                {activeSection === "HouseWarmingCakes" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Entertainment</h3>
                      <a href="#">NOT AVAILABLE</a>
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
                onMouseEnter={() => handleMouseEnter("HouseWarmingReturnGifts")}
                onMouseLeave={handleMouseLeave}
              >
                Return Gifts
                {activeSection === "HouseWarmingReturnGifts" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Return Gifts</h3>
                      <a href="#">Traditional Gifts</a>
                      <a href="#">Fancy Gifts</a>
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
                onMouseEnter={() => handleMouseEnter("HouseWarmingFood")}
                onMouseLeave={handleMouseLeave}
              >
                Food
                {activeSection === "HouseWarmingFood" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Vegetarian</h3>
                      <a href="#">Breakfast</a>
                      <a href="#">Lunch</a>
                      <a href="#">Dinner</a>
                      <h4>Non-Vegetarian</h4>
                      <a href="#">Lunch</a>
                      <a href="#">Dinner</a>
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
                onMouseEnter={() => handleMouseEnter("EngagementDecorations")}
                onMouseLeave={handleMouseLeave}
              >
                Decorations
                {activeSection === "EngagementDecorations" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Decorations</h3>
                      <a href="#">Banquet Hall Decorations</a>
                      <h4>Garlands</h4>
                    </div>
                    <img
                      src={engagementImg}
                      alt="Decorations"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("EngagementPhotography")}
                onMouseLeave={handleMouseLeave}
              >
                Photography
                {activeSection === "EngagementPhotography" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Photography</h3>
                      <a href="#">Traditional Photography</a>
                      <a href="#">Candid Photography</a>
                    </div>
                    <img
                      src={birthdayImg}
                      alt="Photography"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("EngagementCakes")}
                onMouseLeave={handleMouseLeave}
              >
                Makeup
                {activeSection === "EngagementCakes" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Makeup</h3>
                      <a href="#">Traditional Makeup</a>
                      <a href="#">HD Makeup</a>
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
                onMouseEnter={() => handleMouseEnter("EngagementEntertainment")}
                onMouseLeave={handleMouseLeave}
              >
                Entertainment
                {activeSection === "EngagementEntertainment" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Entertainment</h3>
                      <a href="#">Indoor</a>
                      <a href="#">Outdoor</a>
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
                onMouseEnter={() => handleMouseEnter("EngagementReturnGifts")}
                onMouseLeave={handleMouseLeave}
              >
                Return Gifts
                {activeSection === "EngagementReturnGifts" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Return Gifts</h3>
                      <a href="#">Traditional Gifts</a>
                      <a href="#">Fancy Gifts</a>
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
                onMouseEnter={() => handleMouseEnter("EngagementFood")}
                onMouseLeave={handleMouseLeave}
              >
                Food
                {activeSection === "EngagementFood" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Food</h3>
                      <a href="#">NOT AVAILABLE</a>
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
                onMouseEnter={() => handleMouseEnter("WeddingDecorations")}
                onMouseLeave={handleMouseLeave}
              >
                Decorations
                {activeSection === "WeddingDecorations" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Decorations</h3>
                      <a href="#">Haldi Decoration</a>
                      <a href="#">Mehndi Ceremony Decoration</a>
                      <a href="#">Sangeet Decoration</a>
                      <a href="#">Reception Decoration</a>
                      <h4>Garlands</h4>
                    </div>
                    <img
                      src={birthdayImg}
                      alt="Decorations"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("WeddingPhotography")}
                onMouseLeave={handleMouseLeave}
              >
                Photography
                {activeSection === "WeddingPhotography" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Photography</h3>
                      <a href="#">Traditional Photography</a>
                      <a href="#">Candid Photography</a>
                    </div>
                    <img
                      src={birthdayImg}
                      alt="Photography"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("WeddingMakeup")}
                onMouseLeave={handleMouseLeave}
              >
                Makeup
                {activeSection === "WeddingMakeup" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Makeup</h3>
                      <a href="#">Traditional Makeup</a>
                      <a href="#">HD Makeup</a>
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
                onMouseEnter={() => handleMouseEnter("WeddingMehndi")}
                onMouseLeave={handleMouseLeave}
              >
                Mehndi
                {activeSection === "WeddingMehndi" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Mehndi</h3>
                      <a href="#">Bridal Mehndi</a>
                      <a href="#">Traditional Mehndi</a>
                      <a href="#">Rajasthani Mehndi</a>
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
                onMouseEnter={() => handleMouseEnter("WeddingCakes")}
                onMouseLeave={handleMouseLeave}
              >
                Cakes
                {activeSection === "WeddingCakes" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Cakes</h3>
                      <a href="#">Wedding Cakes</a>
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
                onMouseEnter={() => handleMouseEnter("WeddingEntertainment")}
                onMouseLeave={handleMouseLeave}
              >
                Entertainment
                {activeSection === "WeddingEntertainment" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Entertainment</h3>
                      <a href="#">Indoor</a>
                      <a href="#">Outdoor</a>
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
                onMouseEnter={() => handleMouseEnter("WeddingReturnGifts")}
                onMouseLeave={handleMouseLeave}
              >
                Return Gifts
                {activeSection === "WeddingReturnGifts" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Return Gifts</h3>
                      <a href="#">Traditional Gifts</a>
                      <a href="#">Fancy Gifts</a>
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
                onMouseEnter={() => handleMouseEnter("WeddingFood")}
                onMouseLeave={handleMouseLeave}
              >
                Food
                {activeSection === "WeddingFood" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Food</h3>
                      <a href="#">NOT AVAILABLE</a>
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
                onMouseEnter={() => handleMouseEnter("PubertyDecorations")}
                onMouseLeave={handleMouseLeave}
              >
                Decorations
                {activeSection === "PubertyDecorations" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Decorations</h3>
                      <a href="#">Banquet Hall Decorations</a>
                      <a href="#">Decorations at Home</a>
                      <h4>Garlands</h4>
                    </div>
                    <img
                      src={newbornImage}
                      alt="Decorations"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("PubertyPhotography")}
                onMouseLeave={handleMouseLeave}
              >
                Photography
                {activeSection === "PubertyPhotography" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Photography</h3>
                      <a href="#">Traditional Photography</a>
                      <a href="#">Candid Photography</a>
                    </div>
                    <img
                      src={birthdayImg}
                      alt="Photography"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("PubertyMakeup")}
                onMouseLeave={handleMouseLeave}
              >
                Makeup
                {activeSection === "PubertyMakeup" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Traditional Makeup</h3>
                      <h3>HD Makeup</h3>
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
                onMouseEnter={() => handleMouseEnter("PubertyMehndi")}
                onMouseLeave={handleMouseLeave}
              >
                Mehndi
                {activeSection === "PubertyMehndi" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Mehndi</h3>
                      <a href="#">Traditional Designs</a>
                      <a href="#">Rajasthani Designs</a>
                      <a href="#">Other Designs</a>
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
                onMouseEnter={() => handleMouseEnter("PubertyEntertainment")}
                onMouseLeave={handleMouseLeave}
              >
                Entertainment
                {activeSection === "PubertyEntertainment" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Entertainment</h3>
                      <a href="#">Indoor</a>
                      <a href="#">Outdoor</a>
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
                onMouseEnter={() => handleMouseEnter("PubertyReturnGifts")}
                onMouseLeave={handleMouseLeave}
              >
                Return Gifts
                {activeSection === "PubertyReturnGifts" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Traditional Gifts</h3>
                      <h3>Fancy Gifts</h3>
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
                onMouseEnter={() => handleMouseEnter("PubertyFood")}
                onMouseLeave={handleMouseLeave}
              >
                Food
                {activeSection === "PubertyFood" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Food</h3>
                      <a href="#">NOT AVAILABLE</a>
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
            <button className="dropbtn">Surprise Party</button>
            <div className="dropdown-content centered-dropdown">
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("SurprisePartyDecorations")}
                onMouseLeave={handleMouseLeave}
              >
                Decorations
                {activeSection === "SurprisePartyDecorations" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Baloon Decorations</h3>
                      <a href="#">Simple Baloon Decoration</a>
                      <a href="#">Surprise Decorations at Home</a>
                    </div>
                    <img
                      src={newbornImage}
                      alt="Decorations"
                      className="dropdown-image"
                    />
                  </div>
                )}
              </div>
              <div
                className="dropdown-item"
                onMouseEnter={() => handleMouseEnter("SurprisePartyFood")}
                onMouseLeave={handleMouseLeave}
              >
                Food
                {activeSection === "SurprisePartyFood" && (
                  <div className="dropdown-subcontent">
                    <div className="dropdown-section">
                      <h3>Food</h3>
                      <a href="#">NOT AVAILABLE</a>
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
