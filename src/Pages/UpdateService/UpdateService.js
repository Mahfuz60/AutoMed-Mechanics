import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdateService.css";

const UpdateService = () => {
  const [service, setService] = useState({});
  const { id } = useParams();

  //Find Service
  useEffect(() => {
    fetch(`http://localhost:8000/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        console.log(data);
      });
  }, []);

  const handleUpdateService = (e) => {
    const url = `https://pacific-headland-83254.herokuapp.com/services/${id}`;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Service updated successfully");
          setService({});
        }
        console.log(data);
      });

    e.preventDefault();
  };

  //OnChange form handler
  const handleNameChange = (e) => {
    const updateName = e.target.value;
    const updateService = { name: updateName, description: service.description, price: service.price, img: service.img };
    setService(updateService);
  };
  const handleDescriptionChange = (e) => {
    const updateDescription = e.target.value;
    const updateService = { name: service.name, description: updateDescription.description, price: service.price, img: service.img };
    setService(updateService);
  };
  const handleImgChange = (e) => {
    const updateImg = e.target.value;
    const updateService = { name: service.name, description: service.description, price: service.price, img: updateImg.img };
    setService(updateService);
  };
  const handlePriceChange = (e) => {
    const updatePrice = e.target.value;
    const updateService = { name: service.name, description: service.description, price: updatePrice.price, img: service.img };
    setService(updateService);
  };

  return (
    <div>
      <h1 className="pt-5 text-primary text-center">Update Service</h1>
      <div className="updateService">
        <form onSubmit={handleUpdateService}>
          <input type="text" value={service.name || ""} onChange={handleNameChange} />
          <br />
          <textarea type="text" value={service.description || ""} onChange={handleDescriptionChange} />
          <br />
          <input type="text" value={service.img || ""} onChange={handleImgChange} />
          <br />
          <input type="number" value={service.price || ""} onChange={handlePriceChange} />
          <br />
          <input type="submit" value="Update Service" className="btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
