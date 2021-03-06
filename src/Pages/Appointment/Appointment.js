import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments/AvailableAppointments";


const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="px-12">
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppointments date={date} />
    </div>
  );
};

export default Appointment;
