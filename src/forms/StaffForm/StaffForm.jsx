import React, { useState } from "react";
import GeneralComponents from "../../components/GeneralComponents";
import { useSetStaffInfo } from "../../hooks/DefaultInfo";
import { useForm } from "react-hook-form";
import Select from "react-select";

const StaffForm = ({ action, staffDefaultInfo, isUpdating }) => {
  const defaultInfo = useSetStaffInfo(staffDefaultInfo);
  const [role, setRole] = useState(defaultInfo.role);

  const { register, handleSubmit } = useForm({
    defaultValues: defaultInfo,
  });

  const options = [
    { value: "nurse", label: "Nurse" },
    { value: "doctor", label: "Doctor" },
    { value: "resident", label: "Resident" },
    { value: "admin", label: "Admin" },
  ];

  return (
    <div className="w-100 h-90 mt-5 flex justify-center">
      <form
        onSubmit={handleSubmit((data) => action({ ...data, role }))}
        className="flex w-100 h-100 flex-column justify-evenly align-items-center"
      >
        <Select
          defaultValue={role}
          onChange={(option) => setRole(option.value)}
          options={options}
        />

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

        {isUpdating ? (
          <></>
        ) : (
          <>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="form m-5"
            />
          </>
        )}

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

        <GeneralComponents.ErrorMessage />
        <input type="submit" className="btn" />
      </form>
    </div>
  );
};

export default StaffForm;
