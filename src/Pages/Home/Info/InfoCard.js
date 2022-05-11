import React from "react";

const InfoCard = ({ data }) => {
  const { title, description, image, bgColor } = data;
  return (
    <div class={`card lg:card-side  shadow-xl ${bgColor}`}>
      <figure className="p-4">
        <img src={image} alt="Album" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
