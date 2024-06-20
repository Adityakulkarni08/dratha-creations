// SubServiceDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { eventData } from "../components/data/eventData.js"
import Footer from "./Footer";
import "../styles/services.css";

const SubServiceDetail = () => {
  const { title, subTitle } = useParams();
  const service = eventData[title];
  const subService = service.subServices.find(sub => sub.title === subTitle);

  if (!subService) {
    return <div>Sub-service not found</div>;
  }

  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            {subService.title} Details
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            More About {subService.title}
          </h2>
          <div className="services-grid">
            {subService.subServices && subService.subServices.map((nestedSubService, index) => (
              <div key={index} className="service-card">
                <img src={nestedSubService.image} alt={nestedSubService.title} className="service-image" />
                <h3 className="service-title">{nestedSubService.title}</h3>
                <p className="service-description">{nestedSubService.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SubServiceDetail;
