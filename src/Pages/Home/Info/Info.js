import React from "react";
import clock from "../../../Assets/icons/clock.svg";
import marker from "../../../Assets/icons/marker.svg";
import phone from "../../../Assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Info = () => {
  const info = [
    {
      _id: 1,
      title: "Opening Hours",
      description: "Lorem Ipsum is simply dummy text of the pri",
      image: clock,
      bgColor: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      _id: 2,
      title: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      image: marker,
      bgColor: "bg-accent",
    },
    {
      _id: 3,
      title: "Contact us now",
      description: "+000 123 456789",
      image: phone,
      bgColor: "bg-gradient-to-r from-primary to-secondary",
    },
  ];
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-3 gap-5 my-20">
      {info.map((data) => (
        <InfoCard key={data._id} data={data}></InfoCard>
      ))}
    </div>
  );
};

export default Info;
