import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch }) => {
  const { name, img, specialty, email } = doctor;
  const handleDelete = (email) => {
    fetch(`https://doctors-portal-02.herokuapp.com/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Doctor: ${name} is deleted.`);
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-8 rounded-xl">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <button
          onClick={() => handleDelete(email)}
          className="btn btn-sm btn-error"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
