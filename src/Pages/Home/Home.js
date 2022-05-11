import React from "react";
import Appointment from "./Appointment/Appointment";
import Banner from "./Banner/Banner";
import Info from "./Info/Info";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="px-12 min-w-min">
      <Banner />
      <Info />
      <Services />
      <Appointment />
    </div>
  );
};

export default Home;
