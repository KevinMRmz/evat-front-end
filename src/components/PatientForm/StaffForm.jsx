import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

const StaffForm = ({ action, children, staffDefaultInfo, roleUser }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: staffDefaultInfo?.name || "",
      email: staffDefaultInfo?.email || "",
      phone: staffDefaultInfo?.phone || "",
      specialty: staffDefaultInfo?.specialty || "",
    },
  });
  const [role, setRole] = useState(roleUser?.toLowerCase() || "nurse");

  const onSubmit = (data) => action({ ...data, role });

  const options = [
    { value: "nurse", label: "Nurse" },
    { value: "doctor", label: "Doctor" },
    { value: "resident", label: "Resident" },
    { value: "admin", label: "Admin" },
  ];

  return (
    <div className="form-patient-container mt-5 flex">
      <form onSubmit={handleSubmit(onSubmit)} className="flex">
        <div className="staff-menu">
          <Select
            defaultValue={role}
            onChange={(option) => setRole(option.value)}
            options={options}
          />
        </div>
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className="form m-5"
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="form m-5"
        />
        <input
          type="tel"
          placeholder="Phone"
          {...register("phone")}
          className="form m-5"
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="form m-5"
        />
        {role === "doctor" || role === "resident" ? (
          <>
            <input
              type="specialty"
              placeholder="Specialty"
              {...register("specialty")}
              className="form"
            />
          </>
        ) : (
          <></>
        )}

        {children}
        <input type="submit" className="btn" />
      </form>
    </div>
  );
};

export default StaffForm;
