import React from "react";
import Service from "./Service";
import cavity from "../../../Assets/images/cavity.png";
import fluoride from "../../../Assets/images/fluoride.png";
import whitening from "../../../Assets/images/whitening.png";
import treatment from "../../../Assets/images/treatment.png";
import PrimaryButton from "../../../Components/Button/PrimaryButton";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting in dust Ipsum has been the",
      image: cavity,
    },
    {
      _id: 2,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting in dust Ipsum has been the",
      image: fluoride,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting in dust Ipsum has been the",
      image: whitening,
    },
  ];
  return (
    <section className="mx-auto my-32">
      <div className="text-center">
        <h3 className="text-xl font-bold text-secondary uppercase">
          Our Services
        </h3>
        <h1 className="text-4xl">Services We Provide</h1>
      </div>
      <div className="grid grid-col-1 lg:grid-cols-3 gap-5 mt-10">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
      <div class="hero min-h-fit mt-28">
        <div class="hero-content flex-col lg:flex-row lg:space-x-28">
          <img src={treatment} class="max-w-md rounded-lg shadow-2xl" alt="" />
          <div className="">
            <h1 class="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p class="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
