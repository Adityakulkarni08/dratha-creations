import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavLinks from "../Navbar/NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../../styles/navbar.css";

const NavBar = () => {
  const [top, setTop] = useState(true);
  const [isOpen, setisOpen] = React.useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setisOpen(false);
  };

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <>
      <div className="top-bar">
        <div className="contact-info">
          <span className="mr-4">Phone: (123) 456-7890</span>
          <span>Email: info@example.com</span>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
          </a>
        </div>
      </div>
      <nav
        className={`fixed w-full z-30 transition duration-300 ease-in-out mb-16 ${
          !top && "bg-white shadow-lg"
        }`}
      >
        <div className="flex flex-row justify-between items-center py-2 px-4 md:px-12">
          <div className="flex items-center">
            <Link to="/" onClick={handleCloseMenu}>
              <h1 className="font-extrabold text-4xl text-blue-900">Dratha</h1>
            </Link>
          </div>
          <div className="flex-1 mx-4">
            <form onSubmit={handleSearchSubmit} className="search-form">
              <input
                type="search"
                value={searchText}
                onChange={handleSearchChange}
                placeholder="What are you looking for?"
                className="search-input"
              />
              <button type="submit" className="search-button">
                {/* Insert search icon SVG or image here */}
              </button>
            </form>
          </div>
          <div className="flex items-center">
            <button
              className="p-2 rounded-lg lg:hidden text-blue-900"
              onClick={handleClick}
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
            <div className="hidden space-x-6 lg:inline-block p-5">
              <NavLinks handleCloseMenu={handleCloseMenu} />
            </div>
          </div>
        </div>
        <div
          className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto p-24 bg-white block lg:hidden shadow-xl top-14 ${
            isOpen ? "block" : "hidden"
          } `}
        >
          <div className="flex flex-col space-y-6">
            <NavLinks handleCloseMenu={handleCloseMenu} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
