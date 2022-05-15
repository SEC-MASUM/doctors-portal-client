import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentService from "./AppointmentService";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const AvailableAppointments = ({ date }) => {
  // const [appointmentServices, setAppointmentServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");

  const {
    data: appointmentServices,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  // useEffect(() => {
  //   const url = `http://localhost:5000/available?date=${formattedDate}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAppointmentServices(data);
  //       // console.log(data);
  //     });
  // }, [formattedDate]);

  return (
    <div className="my-28">
      <h4 className="text-center text-2xl text-secondary">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid col-span-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {appointmentServices?.map((appointmentService) => (
          <AppointmentService
            key={appointmentService._id}
            appointmentService={appointmentService}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
