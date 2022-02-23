import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./ManageService.css";
import { Link } from "react-router-dom";
import { id } from "react-router-dom";

const ManageService = () => {
  const [services, setServices] = useState([]);


  useEffect(() => {
    fetch("https://cryptic-brushlands-51201.herokuapp.com//services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);



  //Delete services
  const handleDeleteService = (id) => {
    const proceed = window.confirm("Are you sure you want to delete this Service!");
    if (proceed) {
      const url = `https://cryptic-brushlands-51201.herokuapp.com//services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("service deleted successfully");
            const remainingService = services.filter((service) => service._id !== id);
            setServices(remainingService);
          }
        });
    }
  };
  return (
    <div className="container ">
      <h1 className="pt-5 text-primary">Manage Services</h1>
      {services.map((service) => (
        <div className="mx-auto  d-flex col-8 justify-content-center justify-items-center">
          <h4>{service.name}</h4>
          <div className="manage-icon1">
            <Link to={`/services/updateService/${service._id}`}>

              <button>
              <FontAwesomeIcon className="icon1" icon={faPenToSquare} />
              </button>
            </Link>
          </div>
          <div className="manage-icon2">
            <button onClick={() => handleDeleteService(service._id)}>
              <FontAwesomeIcon className="icon2" icon={faTrash} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
