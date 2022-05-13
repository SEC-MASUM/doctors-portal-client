import React from "react";

const Service = ({ service }) => {
  const { name, description, image } = service;
  return (
    <div className="card  lg:max-w-lg bg-base-100 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img src={image} alt="serviceImage" className="rounded-xl w-28 h-28" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
