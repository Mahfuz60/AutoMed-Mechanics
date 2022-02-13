import React from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2 className="text-primary pt-5">Congratulations Your Service Booking Id is:{serviceId}</h2>
    </div>
  );
};

export default Booking;
