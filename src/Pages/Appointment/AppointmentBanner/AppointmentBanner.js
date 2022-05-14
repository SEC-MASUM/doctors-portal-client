import React from "react";
import chair from "../../../Assets/images/chair.png";
import bg from "../../../Assets/images/bg.png";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      className="hero min-h-fit py-36"
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
        <div>
          <img src={chair} className="max-w-md rounded-lg shadow-2xl" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
