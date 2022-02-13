import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h2 className="text-danger fw-bold">Car Engine Repair Service</h2>
            <h5 className="text-white">
              Engine repair services for cars & trucks. Trust the experts at Firestone Complete Auto Care to service your car's engine & maintain
              vehicle performance.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h2 className="text-danger fw-bold">Car AC Repair Service</h2>
            <h5 className="text-white">
              Car Air Conditioning Repairs and Services · Visual Inspection of all components · Replacement of AC Filter · Function and Performance
              test · Leak test ·
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h2 className="text-danger fw-bold">Vehicle Tracker</h2>
            <h5 className="text-white">
              The GPS vehicle tracking system allows you to track an unlimited number of objects in real time, get specific notifications, generate
              reports and much more.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h2 className="text-danger fw-bold">Car Checkup & Maintenance</h2>
            <h5 className="text-white">
              Short Term Check-ups · Oil and Coolant Levels · Air Filter · Tyre Pressure and Tread Depth · Headlights, Turn Signals, Brake, and
              Parking Lights · Oil & Filter.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
