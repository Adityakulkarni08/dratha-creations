import React from "react";
import { HashLink } from "react-router-hash-link";

const NavLinks = ({ handleCloseMenu }) => {
  return (
    <>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#about"
        onClick={handleCloseMenu}
      >
        About
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        to="/contact"
        onClick={handleCloseMenu}
      >
        Contact Us
      </HashLink>
    </>
  );
};

export default NavLinks;
