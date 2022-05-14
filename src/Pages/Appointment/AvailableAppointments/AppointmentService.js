import React from "react";
import PrimaryButton from "../../../Components/Button/PrimaryButton";

const AppointmentService = ({ appointmentService, setTreatment }) => {
  const { name, slots } = appointmentService;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title font-semibold text-secondary">{name}</h2>
        <p className="text-xs">
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">
              No slot available. Please Try another day
            </span>
          )}
        </p>
        <p className="text-xs">
          {slots.length} {slots.length > 1 ? "slots" : "slot"} available
        </p>
        <div className="card-actions">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(appointmentService)}
            disabled={slots.length === 0}
            className="btn btn-secondary bg-gradient-to-r from-primary to-secondary  btn-sm text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentService;
