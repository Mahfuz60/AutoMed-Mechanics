import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../images/notFound.png";
const NotFound = () => {
  return (
    <div>
      <img style={{ width: "100%" }} src={notFound} alt="" />
      <div>
        <Link to="/">
          <button className="btn btn-primary">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
