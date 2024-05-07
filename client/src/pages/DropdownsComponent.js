import React, { useState } from 'react';
import '../styles/dropdown.css';
import newbornImage from "../images/birthday.jpg"

const DropdownComponent = () => {
  const [activeMenu, setActiveMenu] = useState('');

  const toggleDropdown = (menuName) => {
    setActiveMenu(activeMenu === menuName ? '' : menuName);
  };

  return (
    <div className="navbar">
      <div className="dropdown" onClick={() => toggleDropdown('event1')}>
        <button className="dropbtn">
          <img src={newbornImage} alt="New Born" />
          <span>NEW BORN</span>
        </button>
        {activeMenu === 'event1' && (
          <div className="dropdown-content">
            <a href="#">Event 1 Subitem 1</a>
            <a href="#">Event 1 Subitem 2</a>
          </div>
        )}
        <button className="dropbtn">
          <img src={newbornImage} alt="New Born" />
          <span>BIRTHDAY</span>
        </button>
        <button className="dropbtn">
          <img src={newbornImage} alt="New Born" />
          <span>PUBERTY</span>
        </button>
      </div>
      {/* Repeat for other events */}
    </div>
  );
};

export default DropdownComponent;
