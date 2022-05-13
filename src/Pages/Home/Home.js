import React from "react";

import Banner from "./Banner/Banner";
import Info from "./Info/Info";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";
import MakeAppointment from "./MakeAppointment/MakeAppointment";

const Home = () => {
  return (
    <div className="px-12 min-w-min">
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <Testimonials />
    </div>
  );
};

export default Home;
