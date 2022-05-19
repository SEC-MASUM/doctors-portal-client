import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import DoctorRow from "./DoctorRow/DoctorRow";
const ManageDoctors = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("https://doctors-portal-02.herokuapp.com/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-2xl">Manage Doctors : {doctors.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                key={doctor._id}
                index={index}
                doctor={doctor}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
