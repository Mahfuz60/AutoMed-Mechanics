import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const [service, setService] = useState({});
  const { serviceId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);
  return (
    <div className=" pt-5">
      <h1 className="text-primary">Service Details:<small>{service.name}</small></h1>
      <h2>
        Service Booking Id is:<small>{serviceId}</small>
      </h2>
      <h2>Booking Service Bill:{service.price}$</h2>
    </div>
  );
};

export default Booking;
