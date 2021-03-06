import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-brushlands-51201.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services">
      <h2 className="text-primary mt-5 py-3">Our Services</h2>
      <div className="service-container">
        {services.map((service, id) => (
          <Service key={id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
