import React from "react";
import Footer from "../../Footer/Footer";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
      <Footer></Footer>
    </div>
  );
};

export default Home;
