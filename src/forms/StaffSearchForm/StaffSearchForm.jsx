import React, { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";

const StaffSearchForm = ({ search }) => {
  const [role, setRole] = useState("all");
  const [orderBy, setOrderBy] = useState("name");

  const { handleSubmit, register } = useForm();

  const submit = ({ name }) => {
    const query = `${name ? "name=" + name + "&" : ""}sort=${orderBy}${
      role !== "all" ? "&role=" + role : ""
    }`;

    search(query);
  };

  const options = [
    { value: "all", label: "All" },
    { value: "nurse", label: "Nurse" },
    { value: "doctor", label: "Doctor" },
    { value: "resident", label: "Resident" },
    { value: "admin", label: "Admin" },
  ];

  const orderOptions = [
    { value: "name", label: "Name" },
    { value: "email", label: "Email" },
    { value: "role", label: "Role" },
  ];

  return (
    <div className="w-100 h-90 flex flex-column justify-evenly">
      <form className="w-100 h-100 flex flex-column justify-evenly">
        <div className="m-5">
          <p className="font-size-subtitles text-opacity">Select role:</p>
        </div>

        <Select
          defaultValue={role}
          onChange={(option) => setRole(option.value)}
          options={options}
        />

        <div className="m-5">
          <p className="font-size-subtitles text-opacity">Order By:</p>
        </div>

        <Select
          defaultValue={orderBy}
          onChange={(option) => setOrderBy(option.value)}
          options={orderOptions}
        />

        <div className="m-5">
          <p className="font-size-subtitles text-opacity">Name:</p>
        </div>

        <div className="flex">
          <input
            type="text"
            className="form h-90 w-70 font-weight-300 font-size-small"
            placeholder="Search by name"
            {...register("name")}
          />
          <input
            type="submit"
            className="btn h-90 w-30"
            onClick={handleSubmit(submit)}
          />
        </div>
      </form>
    </div>
  );
};

export default StaffSearchForm;
