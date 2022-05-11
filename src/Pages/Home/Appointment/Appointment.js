import React from "react";
import PrimaryButton from "../../../Components/Button/PrimaryButton";
import doctor from "../../../Assets/images/doctor.png";
import appointment from "../../../Assets/images/appointment.png";
const Appointment = () => {
  return (
    <section
      class="min-h-fit flex justify-center items-center my-28"
      style={{ background: `url(${appointment})` }}
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} class="" alt="" />
      </div>
      <div className="flex-1 p-5 lg:pr-5 lg:p-0">
        <div className="text-white">
          <h1 className="text-secondary text-xl font-bold ">Appointment</h1>
          <h2 class="text-4xl font-semibold">Make an appointment Today</h2>
          <p class="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
