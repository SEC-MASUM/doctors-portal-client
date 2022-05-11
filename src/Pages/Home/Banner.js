import React from "react";
import bg from "../../Assets/images/bg.png";
import chair from "../../Assets/images/chair.png";
import PrimaryButton from "../../Components/Button/PrimaryButton";
const Banner = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-md rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-6">
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
