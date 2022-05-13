import React from "react";
import bg from "../../../Assets/images/bg.png";
import chair from "../../../Assets/images/chair.png";
import PrimaryButton from "../../../Components/Button/PrimaryButton";
const Banner = () => {
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
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-md rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
