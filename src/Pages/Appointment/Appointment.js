import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";


const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="px-12">
      <AppointmentBanner date={date} setDate={setDate} />
      
    </div>
  );
};

export default Appointment;
