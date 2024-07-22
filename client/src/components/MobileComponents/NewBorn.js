import React from "react";
import "../../styles/newborn.css"; 
import newbornTopImage from "../../images/newbornmobile.png"; // Adjust the path as needed
import photography1 from "../../images/traditionalmobile.png"; // Adjust the path as needed
import photography2 from "../../images/candidmobile.png"; // Adjust the path as needed

const NewBorn = () => {
  return (
    <div className="newborn-container">
      <div className="newborn-top">
        <img src={newbornTopImage} alt="New Born" className="top-image" />
        <div className="overlay-text">
          
        </div>
      </div>
      <h2 className="section-title">New Born <span>Photography</span></h2>
      <div className="photography-section">
        <div className="photography-card">
          <img src={photography1} alt="Traditional Photography" />
          <div className="card-text">
            <h3>TRADITIONAL PHOTOGRAPHY</h3>
          </div>
        </div>
        <div className="photography-card">
          <img src={photography2} alt="Candid Photography" />
          <div className="card-text">
            <h3>CANDID PHOTOGRAPHY</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBorn;
