import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    axios.post("https://cryptic-brushlands-51201.herokuapp.com//services", data)
    .then((res) => {
      // console.log(res);
      if (res.data.insertedId) {
        alert("Service added Successfully!");
        reset();
      }
    });
  };
  return (
    <div className="container mx-auto">
      <div className="from-container ">
        <h1 className="text- fw-bold ">Please Add a Service</h1>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className="w-50 mb-2" {...register("name", { required: true, maxLength: 20 })} placeholder="Service Name" /> <br />
            <textarea className="w-50 mb-2" {...register("description", { required: true })} placeholder="service description" /> <br />
            <input className="w-50 mb-2" type="img" {...register("img", { required: true })} placeholder="service imgUrl" /> <br />
            <input className="w-50 mb-2" type="number" {...register("price", { required: true })} placeholder="service price" /> <br />
            <input className="btn btn-primary " type="submit" value="Add Service" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
