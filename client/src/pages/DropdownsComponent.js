import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
// import LoginModal from "./LoginModal.js";

const Dropdown = ({ title, items }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <button className="dropdown-button">
        {title}{" "}
        <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
      </button>
      {isHovering && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <Link key={index} to={item.path} className="dropdown-item">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const LoginModal = ({ showModal, handleClose, handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={`login-modal ${showModal ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>Login</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={() => handleLogin(username, password)}>Login</button>
      </div>
    </div>
  );
};

const DropdownsComponent = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([]);

  const handleLogin = (username, password) => {
    // Perform login logic here
    if (username === "admin" && password === "admin234") {
      navigate("/admin-panel");
      // Close the modal
      setShowModal(false);
    } else {
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    // Fetch categories and subcategories from the server
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://dratha-creations-t4ls.onrender.com/api/v1/category/get-categories"
        );
        const categories = response.data.categories;
  
        // Fetch subcategories dynamically for each category
        const subcategoriesPromises = categories.map(async (category) => {
          const subcategoriesResponse = await axios.get(
            `https://dratha-creations-t4ls.onrender.com/api/v1/category/get-subcategories/${category._id}`
          );
  
          const subcategories = subcategoriesResponse.data.subcategories;
  
          return {
            title: category.name,
            items: subcategories.map((subcategory) => ({
              label: subcategory.name,
              path: `/${category.name.toLowerCase()}/${subcategory.name.toLowerCase()}`,
            })),
          };
        });
  
        // Wait for all subcategory fetches to complete
        const generatedItems = await Promise.all(subcategoriesPromises);
  
        setDropdownItems(generatedItems);
      } catch (error) {
        console.error("Error fetching categories and subcategories", error);
      }
    };
  
    fetchCategories();
  }, []);
  
  return (
    <div className="dropdowns-container">
      {dropdownItems.map((dropdown, index) => (
        <Dropdown key={index} title={dropdown.title} items={dropdown.items} />
      ))}
      <div className="login-container">
        <button className="login-button" onClick={() => setShowModal(true)}>
          Login <FontAwesomeIcon icon={faSignInAlt} className="login-icon" />
        </button>
        <LoginModal
          showModal={showModal}
          handleClose={() => setShowModal(false)}
          handleLogin={handleLogin}
        />
      </div>
    </div>
  );
};

export default DropdownsComponent;
