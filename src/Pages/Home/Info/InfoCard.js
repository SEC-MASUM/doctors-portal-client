import React from "react";

const InfoCard = ({ data }) => {
  const { title, description, image, bgColor } = data;
  return (
    <div className={`card lg:card-side  shadow-xl ${bgColor}`}>
      <figure className="p-4">
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
