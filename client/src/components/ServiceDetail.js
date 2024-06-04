// ServiceDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const ServiceDetail = () => {
  const { title } = useParams();

  return (
    <div>
      <h1>{title} Details</h1>
      <p>Here you can add more content specific to {title}.</p>
      <Footer />
    </div>
    
  );
};

export default ServiceDetail;