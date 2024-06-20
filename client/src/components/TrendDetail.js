import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { trendsData } from "./data/trendsData.js";
import Footer from "./Footer";
import "../styles/services.css";

const ServiceDetail = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const service = trendsData[title];

  if (!service) {
    return <div>Service not found</div>;
  }

  const handleSubServiceClick = (subTitle) => {
    navigate(`/trend/${title}/${subTitle}`);
  };

  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            {title} Details
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            More About {title}
          </h2>
          <div className="services-grid">
            {service.subServices.map((subService, index) => (
              <div key={index} className="service-card" onClick={() => handleSubServiceClick(subService.title)}>
                <img src={subService.image} alt={subService.title} className="service-image" />
                <h3 className="service-title">{subService.title}</h3>
                <p className="service-description">{subService.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
