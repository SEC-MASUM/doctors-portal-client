import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1K18SECEnSWhNz9P00ol1AFf0sdb6WyvU5BUKbClbo7IlCmf1joCL6kUD4UgXGDeD8XaSqO9YUJHkfDr8UCdvR00FQIhoHeS"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  // useQuery by id
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="space-y-8">
      <div className="card w-50 max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="text-success font-bold">
            Hello, {appointment.patientName}
          </p>
          <h2 className="card-title">
            Please Pay for: {appointment.treatment}
          </h2>
          <p>
            Your Appointment:{" "}
            <span className="text-orange-700">{appointment.date}</span> at{" "}
            {appointment.slot}
          </p>
          <p>Please pay: ${appointment.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-lg shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
